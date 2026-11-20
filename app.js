let currentSectionKey = null;
let currentQuestionsList = [];
let userAnswers = {};
let sectionStats = {};
let isExamMode = false;
let showWrongOnly = false;
let currentLang = localStorage.getItem("mc_sim_lang") || "ENG"; // "ENG" | "ESP" | "MIRROR"

let questionsBySection = {};
let espMapById = {};

function cleanOptionText(opt) {
  if (typeof opt === "object" && opt !== null) {
    return (opt.text || "").replace(/^[A-F][\)\.\:\-]\s*/i, "").trim();
  }
  return String(opt || "").replace(/^[A-F][\)\.\:\-]\s*/i, "").trim();
}

function extractOptionsArray(rawOptions) {
  if (!Array.isArray(rawOptions)) return [];
  return rawOptions.map(opt => cleanOptionText(opt));
}

function parseAnswersToIndices(rawAnswer, rawOptions) {
  const letters = ["A", "B", "C", "D", "E", "F"];
  let correctIndices = [];

  const answersArray = Array.isArray(rawAnswer) ? rawAnswer : [rawAnswer];

  answersArray.forEach(ans => {
    if (typeof ans === "number") {
      correctIndices.push(ans);
    } else if (typeof ans === "string") {
      const trimmed = ans.trim().toUpperCase();
      const letterIdx = letters.indexOf(trimmed);
      if (letterIdx !== -1 && letterIdx < rawOptions.length) {
        correctIndices.push(letterIdx);
      } else {
        rawOptions.forEach((opt, idx) => {
          if (cleanOptionText(opt).toLowerCase() === cleanOptionText(ans).toLowerCase()) {
            correctIndices.push(idx);
          }
        });
      }
    }
  });

  return [...new Set(correctIndices)].sort((a, b) => a - b);
}

function buildSpanishDictionary() {
  espMapById = {};
  const sourceESP = typeof QUESTIONS_DB_ESP !== "undefined" ? QUESTIONS_DB_ESP : [];
  if (Array.isArray(sourceESP)) {
    sourceESP.forEach(q => {
      if (q.id !== undefined) {
        espMapById[q.id] = {
          domain: q.domain || q.category || "General",
          question: q.text || q.question || "",
          options: extractOptionsArray(q.options || q.choices || []),
          explanation: q.explanation || "Sin explicación disponible."
        };
      }
    });
  }
}

function groupQuestionsByCategory() {
  questionsBySection = {};
  buildSpanishDictionary();

  // Lee QUESTIONS_DB (de questionsENG.js)
  const sourceQuestions = typeof QUESTIONS_DB !== "undefined" ? QUESTIONS_DB : [];

  if (Array.isArray(sourceQuestions)) {
    sourceQuestions.forEach((q, index) => {
      // Soporta tanto q.domain como q.category
      const rawCat = q.domain || q.category;
      const cat = (rawCat && rawCat.trim()) ? rawCat.trim() : "General";

      if (!questionsBySection[cat]) {
        questionsBySection[cat] = [];
      }

      const questionText = q.text || q.question || "";
      const rawOptions = q.options || q.choices || [];
      const cleanOptions = extractOptionsArray(rawOptions);

      let correctIndices = [];
      if (q.answer !== undefined) {
        correctIndices = parseAnswersToIndices(q.answer, rawOptions);
      } else if (q.correct !== undefined) {
        correctIndices = parseAnswersToIndices(q.correct, rawOptions);
      }

      const qId = q.id !== undefined ? q.id : (index + 1);
      const isMulti = q.multi !== undefined ? q.multi : (correctIndices.length > 1);
      const espData = espMapById[qId] || null;

      questionsBySection[cat].push({
        id: qId,
        category: cat,
        categoryESP: espData ? espData.domain : cat,
        question: questionText,
        questionESP: espData ? espData.question : questionText,
        options: cleanOptions,
        optionsESP: (espData && espData.options.length === cleanOptions.length) ? espData.options : cleanOptions,
        answer: correctIndices,
        multiple: isMulti,
        explanation: q.explanation || "No explanation available.",
        explanationESP: espData ? espData.explanation : (q.explanation || "Sin explicación disponible.")
      });
    });
  }
}

function syncLanguageSelectors() {
  const menuSel = document.getElementById("lang-selector-menu");
  const quizSel = document.getElementById("lang-selector-quiz");
  if (menuSel) menuSel.value = currentLang;
  if (quizSel) quizSel.value = currentLang;
}

function changeLanguage(newLang) {
  currentLang = newLang;
  localStorage.setItem("mc_sim_lang", currentLang);
  syncLanguageSelectors();

  // Si estamos en el menú, re-renderiza las tarjetas
  if (document.getElementById("menu-screen").style.display !== "none") {
    renderBlockCards();
  }
  // Si estamos en vista de estudio/examen, re-renderiza las preguntas conservando el estado
  if (document.getElementById("quiz-screen").style.display !== "none") {
    renderQuestionsList();
  }
  // Si estamos en resultados, re-renderiza resultados
  if (document.getElementById("results-screen").style.display !== "none") {
    showExamResults();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  syncLanguageSelectors();
  groupQuestionsByCategory();
  loadStatsFromStorage();
  renderBlockCards();
});

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleQuestionOptions(question) {
  const mappedOptions = question.options.map((optText, index) => ({
    text: optText,
    textESP: (question.optionsESP && question.optionsESP[index]) ? question.optionsESP[index] : optText,
    isCorrect: question.answer.includes(index)
  }));

  const shuffledMapped = shuffleArray(mappedOptions);
  const newOptions = shuffledMapped.map(item => item.text);
  const newOptionsESP = shuffledMapped.map(item => item.textESP);
  const newAnswers = [];

  shuffledMapped.forEach((item, newIndex) => {
    if (item.isCorrect) {
      newAnswers.push(newIndex);
    }
  });

  return {
    ...question,
    options: newOptions,
    optionsESP: newOptionsESP,
    answer: newAnswers,
    isEvaluatedState: false
  };
}

function showModal(msg) {
  document.getElementById("modal-msg").innerText = msg;
  document.getElementById("custom-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("custom-modal").style.display = "none";
}

function loadStatsFromStorage() {
  const saved = localStorage.getItem("sf_mc_admin_stats");
  if (saved) {
    sectionStats = JSON.parse(saved);
  }
}

function saveStatsToStorage() {
  localStorage.setItem("sf_mc_admin_stats", JSON.stringify(sectionStats));
}

function saveSectionSession(sectionKey) {
  const sessionData = {
    questionsList: currentQuestionsList,
    userAnswers: userAnswers,
    evaluatedQuestions: {}
  };

  currentQuestionsList.forEach((_, qIndex) => {
    const feedback = document.getElementById(`feedback-${qIndex}`);
    if (feedback && feedback.style.display === "block") {
      sessionData.evaluatedQuestions[qIndex] = {
        isCorrect: feedback.classList.contains("correct"),
        msg: feedback.innerText
      };
    }
  });

  localStorage.setItem(`sf_mc_session_${sectionKey}`, JSON.stringify(sessionData));
}

function renderBlockCards() {
  const container = document.getElementById("block-cards-container");
  container.innerHTML = "";

  const sections = Object.keys(questionsBySection);

  sections.forEach((sectionKey) => {
    const sectionQuestions = questionsBySection[sectionKey];
    const totalQ = sectionQuestions.length;
    const stats = sectionStats[sectionKey] || { correct: 0, incorrect: 0 };

    const displayTitle = (currentLang === "ESP" && sectionQuestions[0]?.categoryESP)
      ? sectionQuestions[0].categoryESP
      : sectionKey;

    const card = document.createElement("div");
    card.className = "block-card";
    card.innerHTML = `
      <div class="block-card-title">${displayTitle} (${totalQ} ${currentLang === "ESP" ? "preguntas" : "questions"})</div>
      <div class="block-stats">
        <div class="block-stats-item">✅ ${currentLang === "ESP" ? "Correctas" : "Correct"}: <strong>${stats.correct}</strong></div>
        <div style="color: #cbd5e1;">|</div>
        <div class="block-stats-item">❌ ${currentLang === "ESP" ? "Incorrectas" : "Incorrect"}: <strong>${stats.incorrect}</strong></div>
      </div>
      <div class="block-actions">
        <button class="btn" style="flex: 1;" onclick="openSection('${sectionKey.replace(/'/g, "\\'")}')">
          ${currentLang === "ESP" ? "Estudiar" : "Study"}
        </button>
        <button class="btn btn-reset" onclick="resetSectionStats('${sectionKey.replace(/'/g, "\\'")}')">Reset</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function resetSectionStats(sectionKey) {
  sectionStats[sectionKey] = { correct: 0, incorrect: 0 };
  localStorage.removeItem(`sf_mc_session_${sectionKey}`);
  saveStatsToStorage();
  renderBlockCards();
}

function openSection(sectionKey) {
  isExamMode = false;
  showWrongOnly = false;
  updateToggleBtnUI();

  currentSectionKey = sectionKey;
  const savedSession = localStorage.getItem(`sf_mc_session_${sectionKey}`);

  if (savedSession) {
    const sessionData = JSON.parse(savedSession);
    currentQuestionsList = sessionData.questionsList;
    userAnswers = sessionData.userAnswers || {};
  } else {
    currentQuestionsList = JSON.parse(JSON.stringify(questionsBySection[sectionKey]));
    userAnswers = {};
  }

  if (!sectionStats[currentSectionKey]) {
    sectionStats[currentSectionKey] = { correct: 0, incorrect: 0 };
  }

  document.getElementById("block-title").innerText = `${sectionKey} (${currentQuestionsList.length})`;
  showQuizScreen();
  renderQuestionsList();

  if (savedSession) {
    const sessionData = JSON.parse(savedSession);
    if (sessionData.evaluatedQuestions) {
      Object.keys(sessionData.evaluatedQuestions).forEach(qIdxStr => {
        const qIndex = parseInt(qIdxStr);
        restoreEvaluatedQuestion(qIndex, sessionData.evaluatedQuestions[qIndex]);
      });
    }
  }
}

function toggleShowWrongOnly() {
  if (isExamMode) return;

  const checkbox = document.getElementById("toggle-wrong-checkbox");

  let hasWrongQuestions = false;
  currentQuestionsList.forEach((_, qIndex) => {
    const feedback = document.getElementById(`feedback-${qIndex}`);
    if (feedback && feedback.classList.contains("incorrect") && feedback.style.display === "block") {
      hasWrongQuestions = true;
    }
  });

  if (checkbox && checkbox.checked && !hasWrongQuestions) {
    showModal(currentLang === "ESP"
      ? "Aún no hay preguntas evaluadas como incorrectas en esta categoría."
      : "No questions evaluated as incorrect yet in this category.");
    checkbox.checked = false;
    showWrongOnly = false;
    return;
  }

  showWrongOnly = checkbox ? checkbox.checked : false;
  applyWrongOnlyFilter();
}

function updateToggleBtnUI() {
  const checkbox = document.getElementById("toggle-wrong-checkbox");
  if (checkbox) {
    checkbox.checked = showWrongOnly;
  }
}

function applyWrongOnlyFilter() {
  currentQuestionsList.forEach((_, qIndex) => {
    const qCard = document.getElementById(`q-card-${qIndex}`);
    const feedback = document.getElementById(`feedback-${qIndex}`);

    if (!qCard) return;

    if (showWrongOnly) {
      if (feedback && feedback.classList.contains("incorrect") && feedback.style.display === "block") {
        qCard.style.display = "block";
      } else {
        qCard.style.display = "none";
      }
    } else {
      qCard.style.display = "block";
    }
  });
}

function shuffleCurrentBlock() {
  let shuffledQuestions = shuffleArray(currentQuestionsList);
  currentQuestionsList = shuffledQuestions.map(q => shuffleQuestionOptions(q));

  userAnswers = {};
  showWrongOnly = false;
  updateToggleBtnUI();

  renderQuestionsList();
  saveSectionSession(currentSectionKey);
}

function revealAllAnswers() {
  currentQuestionsList.forEach((q, qIndex) => {
    q.isEvaluatedState = true;
    q.isCorrectState = true;
    q.isRevealedAllState = true;

    const correctArr = [...q.answer];
    const qCard = document.getElementById(`q-card-${qIndex}`);
    if (!qCard) return;

    const optionBtns = qCard.querySelectorAll(".option");
    optionBtns.forEach((btn) => {
      btn.style.pointerEvents = "none";
      const idx = parseInt(btn.getAttribute("data-opt-index"));
      if (correctArr.includes(idx)) {
        btn.classList.add("correct-target");
      }
    });

    const btnCheck = document.getElementById(`btn-check-${qIndex}`);
    if (btnCheck) btnCheck.style.display = "none";

    const feedback = document.getElementById(`feedback-${qIndex}`);
    if (feedback) {
      feedback.style.display = "block";
      feedback.className = "feedback-box correct";
      feedback.innerText = currentLang === "ESP"
        ? "Modo Estudio: Respuesta(s) correcta(s) resaltada(s)."
        : "Study Mode: Correct answer(s) highlighted.";
    }

    const expBox = document.getElementById(`explanation-${qIndex}`);
    if (expBox) expBox.style.display = "block";
  });
}

function showQuizScreen() {
  document.getElementById("menu-screen").style.display = "none";
  document.getElementById("results-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
}

function returnToMenu() {
  renderBlockCards();
  document.getElementById("menu-screen").style.display = "block";
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("results-screen").style.display = "none";
}

function getQuestionTextsByLang(q) {
  if (currentLang === "ESP") {
    return {
      title: q.questionESP || q.question,
      options: q.optionsESP || q.options,
      explanation: q.explanationESP || q.explanation
    };
  }
  return {
    title: q.question,
    options: q.options,
    explanation: q.explanation
  };
}

function renderQuestionsList() {
  const container = document.getElementById("questions-list-container");
  container.innerHTML = "";

  const letterBadges = ["A", "B", "C", "D", "E", "F"];

  currentQuestionsList.forEach((q, qIndex) => {
    const qCard = document.createElement("div");
    const cardClass = q.multiple ? "question-item multiple-choice" : "question-item single-choice";
    const badgeText = q.multiple
      ? (currentLang === "ESP" ? "Opción Múltiple" : "Multiple Choice")
      : (currentLang === "ESP" ? "Opción Única" : "Single Choice");

    qCard.className = cardClass;
    qCard.id = `q-card-${qIndex}`;

    const selectedOptions = userAnswers[qIndex] || [];
    const localized = getQuestionTextsByLang(q);

    let bodyHTML = "";

    if (currentLang === "MIRROR") {
      // Vista Espejo lado a lado (ENG / ESP) aprovechando tus clases de styles.css
      let optionsEngHTML = "";
      let optionsEspHTML = "";

      q.options.forEach((optText, optIndex) => {
        const dynamicLetter = letterBadges[optIndex] || "";
        const isSelected = selectedOptions.includes(optIndex) ? "selected" : "";
        const optEspText = (q.optionsESP && q.optionsESP[optIndex]) ? q.optionsESP[optIndex] : optText;

        optionsEngHTML += `
          <button class="option ${isSelected}" data-opt-index="${optIndex}" onclick="selectOption(${qIndex}, ${optIndex}, ${q.multiple}, ${q.answer.length})">
            <span><strong>${dynamicLetter})</strong> ${optText}</span>
          </button>
        `;
        optionsEspHTML += `
          <button class="option ${isSelected}" data-opt-index="${optIndex}" onclick="selectOption(${qIndex}, ${optIndex}, ${q.multiple}, ${q.answer.length})">
            <span><strong>${dynamicLetter})</strong> ${optEspText}</span>
          </button>
        `;
      });

      bodyHTML = `
        <div class="mirror-split-container">
          <div class="mirror-col">
            <div class="mirror-col-header">🇺🇸 English</div>
            <div class="question-title">${qIndex + 1}. ${q.question}</div>
            <div class="options-grid">${optionsEngHTML}</div>
          </div>
          <div class="mirror-col">
            <div class="mirror-col-header">🇲🇽 Español</div>
            <div class="question-title">${qIndex + 1}. ${q.questionESP || q.question}</div>
            <div class="options-grid">${optionsEspHTML}</div>
          </div>
        </div>
      `;
    } else {
      // Vista normal (ENG o ESP)
      let optionsHTML = "";
      localized.options.forEach((optText, optIndex) => {
        const dynamicLetter = letterBadges[optIndex] || "";
        const isSelected = selectedOptions.includes(optIndex) ? "selected" : "";

        optionsHTML += `
          <button class="option ${isSelected}" data-opt-index="${optIndex}" onclick="selectOption(${qIndex}, ${optIndex}, ${q.multiple}, ${q.answer.length})">
            <span><strong>${dynamicLetter})</strong> ${optText}</span>
          </button>
        `;
      });

      bodyHTML = `
        <div class="question-title">${qIndex + 1}. ${localized.title}</div>
        <div class="options-grid">${optionsHTML}</div>
      `;
    }

    const explanationHTML = currentLang === "MIRROR"
      ? `<div><strong>🇺🇸:</strong> ${q.explanation}</div><div style="margin-top:6px;"><strong>🇲🇽:</strong> ${q.explanationESP || q.explanation}</div>`
      : `<div>${localized.explanation}</div>`;

    qCard.innerHTML = `
      <div class="question-type-badge">${badgeText}</div>
      ${bodyHTML}
      ${!isExamMode ? `<button class="btn btn-check" id="btn-check-${qIndex}" onclick="checkSingleAnswer(${qIndex})">${currentLang === "ESP" ? "Comprobar Respuesta" : "Check Answer"}</button>` : ""}
      <div class="feedback-box" id="feedback-${qIndex}"></div>
      <div class="explanation-box" id="explanation-${qIndex}">
        <div class="explanation-title">💡 ${currentLang === "ESP" ? "Explicación:" : "Explanation:"}</div>
        ${explanationHTML}
      </div>
    `;

    container.appendChild(qCard);

    if (q.isEvaluatedState) {
      if (q.isRevealedAllState) {
        const correctArr = [...q.answer];
        const optionBtns = qCard.querySelectorAll(".option");
        optionBtns.forEach((btn) => {
          btn.style.pointerEvents = "none";
          const idx = parseInt(btn.getAttribute("data-opt-index"));
          if (correctArr.includes(idx)) {
            btn.classList.add("correct-target");
          }
        });
        const btnCheck = document.getElementById(`btn-check-${qIndex}`);
        if (btnCheck) btnCheck.style.display = "none";

        const feedback = document.getElementById(`feedback-${qIndex}`);
        if (feedback) {
          feedback.style.display = "block";
          feedback.className = "feedback-box correct";
          feedback.innerText = currentLang === "ESP"
            ? "Modo Estudio: Respuesta(s) correcta(s) resaltada(s)."
            : "Study Mode: Correct answer(s) highlighted.";
        }
        const expBox = document.getElementById(`explanation-${qIndex}`);
        if (expBox) expBox.style.display = "block";
      } else {
        restoreEvaluatedQuestion(qIndex, {
          isCorrect: q.isCorrectState,
          msg: q.isCorrectState
            ? (currentLang === "ESP" ? "¡Correcto!" : "Correct!")
            : (currentLang === "ESP" ? "Incorrecto. Revisa la respuesta marcada en verde." : "Incorrect. Check the response marked in green.")
        });
      }
    }
  });

  if (isExamMode) {
    const submitExamBtn = document.createElement("button");
    submitExamBtn.className = "btn btn-exam";
    submitExamBtn.style.marginTop = "20px";
    submitExamBtn.innerText = currentLang === "ESP" ? "Finalizar Examen" : "Submit Exam";
    submitExamBtn.onclick = showExamResults;
    container.appendChild(submitExamBtn);
  }

  if (showWrongOnly) {
    applyWrongOnlyFilter();
  }
}

function selectOption(qIndex, optIndex, isMultiple, maxAllowed) {
  const feedback = document.getElementById(`feedback-${qIndex}`);
  if (!isExamMode && feedback && feedback.style.display === "block") return;

  let currentSel = userAnswers[qIndex] || [];

  if (isMultiple) {
    if (currentSel.includes(optIndex)) {
      currentSel = currentSel.filter(i => i !== optIndex);
    } else {
      if (currentSel.length >= maxAllowed) {
        showModal(currentLang === "ESP"
          ? `Esta pregunta solo requiere ${maxAllowed} respuesta(s).`
          : `This question only requires ${maxAllowed} answer(s).`);
        return;
      }
      currentSel.push(optIndex);
    }
  } else {
    currentSel = [optIndex];
  }

  userAnswers[qIndex] = currentSel;

  const qCard = document.getElementById(`q-card-${qIndex}`);
  const optionBtns = qCard.querySelectorAll(".option");
  optionBtns.forEach((btn) => {
    const idx = parseInt(btn.getAttribute("data-opt-index"));
    if (currentSel.includes(idx)) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  if (!isExamMode) {
    saveSectionSession(currentSectionKey);
  }
}

function checkSingleAnswer(qIndex) {
  const q = currentQuestionsList[qIndex];
  const selected = userAnswers[qIndex] || [];

  if (selected.length === 0) {
    showModal(currentLang === "ESP" ? "Por favor selecciona al menos una respuesta." : "Please select at least one answer.");
    return;
  }

  const correctArr = [...q.answer].sort();
  const userArr = [...selected].sort();
  const isCorrect = JSON.stringify(correctArr) === JSON.stringify(userArr);

  q.isEvaluatedState = true;
  q.isCorrectState = isCorrect;
  q.isRevealedAllState = false;

  const qCard = document.getElementById(`q-card-${qIndex}`);
  const optionBtns = qCard.querySelectorAll(".option");

  optionBtns.forEach((btn) => {
    btn.style.pointerEvents = "none";
    const idx = parseInt(btn.getAttribute("data-opt-index"));

    if (correctArr.includes(idx)) {
      btn.classList.add("correct-target");
    }
    if (userArr.includes(idx) && !correctArr.includes(idx)) {
      btn.classList.add("wrong-target");
    }
  });

  const feedback = document.getElementById(`feedback-${qIndex}`);
  feedback.style.display = "block";

  const expBox = document.getElementById(`explanation-${qIndex}`);

  if (isCorrect) {
    feedback.className = "feedback-box correct";
    feedback.innerText = currentLang === "ESP" ? "¡Correcto!" : "Correct!";
    sectionStats[currentSectionKey].correct++;
    if (expBox) expBox.style.display = "none";
  } else {
    feedback.className = "feedback-box incorrect";
    feedback.innerText = currentLang === "ESP"
      ? "Incorrecto. Revisa la respuesta marcada en verde."
      : "Incorrect. Check the response marked in green.";
    sectionStats[currentSectionKey].incorrect++;
    if (expBox) expBox.style.display = "block";
  }

  saveStatsToStorage();
  document.getElementById(`btn-check-${qIndex}`).style.display = "none";
  saveSectionSession(currentSectionKey);

  if (showWrongOnly) {
    applyWrongOnlyFilter();
  }
}

function restoreEvaluatedQuestion(qIndex, evalData) {
  const q = currentQuestionsList[qIndex];
  const selected = userAnswers[qIndex] || [];
  const correctArr = [...q.answer].sort();

  const qCard = document.getElementById(`q-card-${qIndex}`);
  if (!qCard) return;

  const optionBtns = qCard.querySelectorAll(".option");
  optionBtns.forEach((btn) => {
    btn.style.pointerEvents = "none";
    const idx = parseInt(btn.getAttribute("data-opt-index"));

    if (correctArr.includes(idx)) {
      btn.classList.add("correct-target");
    }
    if (selected.includes(idx) && !correctArr.includes(idx)) {
      btn.classList.add("wrong-target");
    }
  });

  const feedback = document.getElementById(`feedback-${qIndex}`);
  if (feedback) {
    feedback.style.display = "block";
    feedback.className = `feedback-box ${evalData.isCorrect ? "correct" : "incorrect"}`;
    feedback.innerText = evalData.msg;
  }

  const expBox = document.getElementById(`explanation-${qIndex}`);
  if (expBox) {
    expBox.style.display = evalData.isCorrect ? "none" : "block";
  }

  const btnCheck = document.getElementById(`btn-check-${qIndex}`);
  if (btnCheck) btnCheck.style.display = "none";
}

function startFullStudyMode() {
  isExamMode = false;
  showWrongOnly = false;
  updateToggleBtnUI();

  currentSectionKey = "Full Study";
  if (!sectionStats[currentSectionKey]) {
    sectionStats[currentSectionKey] = { correct: 0, incorrect: 0 };
  }

  let allQuestions = [];
  Object.keys(questionsBySection).forEach(key => {
    allQuestions = allQuestions.concat(questionsBySection[key]);
  });

  currentQuestionsList = JSON.parse(JSON.stringify(allQuestions));
  userAnswers = {};

  document.getElementById("block-title").innerText = `Full Study Mode (${currentQuestionsList.length})`;
  showQuizScreen();
  renderQuestionsList();
}

function startExamMode() {
  isExamMode = true;
  showWrongOnly = false;

  let allQuestions = [];
  Object.keys(questionsBySection).forEach(key => {
    allQuestions = allQuestions.concat(questionsBySection[key]);
  });

  const rawQuestions = JSON.parse(JSON.stringify(allQuestions));
  const shuffledQuestions = shuffleArray(rawQuestions);

  currentQuestionsList = shuffledQuestions.map(q => shuffleQuestionOptions(q));
  userAnswers = {};

  document.getElementById("block-title").innerText = `Full Exam Simulator (${currentQuestionsList.length})`;
  showQuizScreen();
  renderQuestionsList();
}

function showExamResults() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("results-screen").style.display = "block";

  let score = 0;
  const reviewContainer = document.getElementById("review-container");
  reviewContainer.innerHTML = "";

  const letterBadges = ["A", "B", "C", "D", "E", "F"];

  currentQuestionsList.forEach((q, idx) => {
    const userSel = userAnswers[idx] || [];
    const correctArr = [...q.answer].sort();
    const userArr = [...userSel].sort();
    const isCorrect = JSON.stringify(correctArr) === JSON.stringify(userArr);

    if (isCorrect) score++;

    const localized = getQuestionTextsByLang(q);
    const item = document.createElement("div");
    item.className = `result-item ${isCorrect ? "is-correct" : "is-incorrect"}`;

    const userAnsText = userSel.length > 0
      ? userSel.map(i => `${letterBadges[i]}) ${localized.options[i]}`).join(" | ")
      : (currentLang === "ESP" ? "Sin respuesta" : "No answer");

    const correctAnsText = q.answer.map(i => `${letterBadges[i]}) ${localized.options[i]}`).join(" | ");

    item.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 8px;">${idx + 1}. ${localized.title}</div>
      <div style="font-size: 0.9rem;"><strong>${currentLang === "ESP" ? "Tu respuesta:" : "Your answer:"}</strong> ${userAnsText}</div>
      ${!isCorrect ? `<div style="font-size: 0.9rem; margin-top: 4px; color: var(--success);"><strong>${currentLang === "ESP" ? "Respuesta correcta:" : "Correct Answer:"}</strong> ${correctAnsText}</div>` : ""}
      <div class="explanation-box" style="display: block; margin-top: 10px;">
        <div class="explanation-title">💡 ${currentLang === "ESP" ? "Explicación:" : "Explanation:"}</div>
        <div>${localized.explanation}</div>
      </div>
    `;
    reviewContainer.appendChild(item);
  });

  document.getElementById("final-score").innerText = score;
  document.getElementById("total-q").innerText = currentQuestionsList.length;
}