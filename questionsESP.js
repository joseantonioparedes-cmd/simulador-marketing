const QUESTIONS_DB_ESP = [
  // Dominio 1: Unidades de Negocio, Roles y Permisos
  {
    id: 1,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Un administrador de Marketing Cloud necesita configurar un rol personalizado para un miembro del equipo que solo debe tener acceso para ver datos de suscriptores y crear campañas de correo electrónico dentro de una Unidad de Negocio Secundaria (Child Business Unit) específica. ¿Qué combinación de permisos se adapta mejor a este requisito?",
    options: [
      "Usar el rol estándar 'Content Creator' y anular los permisos a nivel de la Unidad de Negocio Principal.",
      "Asignar permisos personalizados que permitan el acceso de Vista (View) en Suscriptores y acceso de Creación (Create) en Contenido dentro de la Unidad de Negocio de destino.",
      "Otorgar acceso de Administrador en la Unidad de Negocio Secundaria y restringir los permisos de Envío a través de Automation Studio.",
      "Asignar el rol estándar 'Analyst' y habilitar el acceso a Data Extensions compartidas."
    ],
    answer: 1,
    explanation: "Los roles personalizados permiten permisos granulares por función y por Unidad de Negocio sin otorgar privilegios innecesarios de Envío o de Administrador global."
  },
  {
    id: 2,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Un administrador está configurando roles de usuario y nota que un rol estándar no se puede editar. ¿Cuál es el procedimiento correcto para otorgar permisos personalizados basados en un rol estándar?",
    options: [
      "Modificar el manifiesto XML del rol estándar a través de la API REST.",
      "Crear un nuevo rol personalizado, asignar los permisos deseados y asignar ese rol personalizado a los usuarios.",
      "Contactar al Soporte de Salesforce para desbloquear la capacidad de edición de roles estándar.",
      "Duplicar la plantilla del rol estándar desde Setup > Users > Roles."
    ],
    answer: 1,
    explanation: "Los roles estándar proporcionados por Marketing Cloud son de solo lectura; para personalizar el acceso, los administradores deben crear un rol personalizado desde cero."
  },
  {
    id: 3,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Un administrador de Marketing Cloud necesita otorgar permiso a un usuario para ver datos de seguimiento (tracking) e informes analíticos sin permitirle modificar ni enviar campañas de correo electrónico. ¿Qué rol estándar cumple con este requisito?",
    options: [
      "Content Creator",
      "Marketing Cloud Administrator",
      "Analyst",
      "Data Technologist"
    ],
    answer: 2,
    explanation: "El rol Analyst proporciona acceso de solo lectura a informes, datos de seguimiento y paneles de análisis."
  },
  {
    id: 4,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Cuando un administrador crea un nuevo rol personalizado, ¿qué sucede si no se marcan permisos específicos dentro de un área de funciones determinada (por ejemplo, Email Studio)?",
    options: [
      "El rol hereda permisos predeterminados de solo lectura para esa función.",
      "El rol no tendrá acceso a esa área de funciones de forma predeterminada.",
      "El rol obtiene automáticamente derechos completos de administrador en ese estudio.",
      "El sistema arroja un error de validación durante la creación."
    ],
    answer: 1,
    explanation: "Marketing Cloud sigue el principio de privilegio mínimo; las áreas de funciones sin marcar permanecen completamente inaccesibles para los usuarios asignados a ese rol."
  },
  {
    id: 5,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Al configurar una estructura de cuenta Enterprise 2.0, ¿cuál es la relación entre la Unidad de Negocio Principal (Parent) y las Unidades de Negocio Secundarias (Child) con respecto a la gestión de suscriptores?",
    options: [
      "Los suscriptores se almacenan a nivel de cuenta (o se comparten), pero las unidades de negocio pueden mantener listas de suscriptores independientes o Data Extensions compartidas según la configuración.",
      "Las unidades de negocio secundarias no pueden almacenar suscriptores y deben enrutar todos los envíos a través de la cuenta principal.",
      "Los suscriptores creados en una unidad de negocio secundaria son automáticamente invisibles para la unidad principal.",
      "Las cuentas Enterprise 2.0 aíslan a los suscriptores por completo por unidad de negocio sin visibilidad compartida."
    ],
    answer: 0,
    explanation: "La arquitectura Enterprise 2.0 centraliza la gestión de suscriptores a nivel de cuenta, al tiempo que permite que las unidades de negocio utilicen Data Extensions compartidas o independientes."
  },
  {
    id: 6,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Un administrador desea asegurarse de que los suscriptores que hagan clic en un enlace de cancelación de suscripción en un correo electrónico se den de baja automáticamente en todas las Unidades de Negocio de una cuenta Enterprise 2.0. ¿Dónde se gestiona este comportamiento de cancelación de suscripción a nivel empresarial?",
    options: [
      "En las definiciones de envío individuales de cada Unidad de Negocio Secundaria",
      "En la configuración de gestión de suscripciones a nivel empresarial en Account Settings",
      "En la configuración de contactos de Contact Builder",
      "En la actividad de cancelación de suscripción (Unsubscribe Activity) de Automation Studio"
    ],
    answer: 1,
    explanation: "La configuración de cancelación de suscripción a nivel empresarial en Account Settings determina si las bajas se aplican globalmente en todas las unidades de negocio secundarias o permanecen locales."
  },
  {
    id: 7,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Un cliente empresarial requiere que todas las direcciones de correo electrónico de los suscriptores se depuren contra una lista de supresión global de personas que suelen reportar spam y actores maliciosos antes de que ocurra cualquier envío. ¿Dónde se gestionan las listas de supresión a nivel de cuenta?",
    options: [
      "Content Builder > Shared Items",
      "Email Studio > Admin > Send Management > Suppression Lists",
      "Contact Builder > Suppression Attributes",
      "Setup > Security > Global Blocklists"
    ],
    answer: 1,
    explanation: "Las listas de supresión a nivel de cuenta se configuran en Send Management dentro de Email Studio y protegen automáticamente todos los envíos de la cuenta."
  },
  {
    id: 8,
    domain: "Dominio 1: Unidades de Negocio, Roles y Permisos",
    question: "Un administrador está configurando un nuevo perfil de remitente (Sender Profile) para notificaciones transaccionales. ¿Qué componente del Sender Profile vincula el dominio de envío SAP específico, el nombre y la dirección con la definición de envío de correo electrónico?",
    options: [
      "From Address, From Name y Delivery Options",
      "Criterios de filtro de Data Extension",
      "Mapeo de fuente de entrada de Journey Builder",
      "Variables globales de AMPscript"
    ],
    answer: 0,
    explanation: "Los Sender Profiles agrupan las configuraciones de nombre del remitente (From Name), dirección del remitente (From Address) y respuesta (Reply-to) utilizadas en las definiciones de envío."
  },

  // Dominio 2: SAP y Entregabilidad
  {
    id: 9,
    domain: "Dominio 2: SAP y Entregabilidad",
    question: "Una organización está configurando un dominio privado para enviar correos electrónicos y alojar CloudPages. ¿Qué registro DNS es estrictamente necesario para verificar la propiedad y garantizar la autenticación adecuada para los envíos de correo electrónico mediante el Sender Authentication Package (SAP)?",
    options: [
      "Un registro CAA que restrinja a las autoridades de certificación la emisión de certificados SSL.",
      "Registros CNAME que apunten los subdominios de autenticación a los servidores de Marketing Cloud.",
      "Un registro SRV que mapee los puertos SMTP directamente a la Unidad de Negocio Principal.",
      "Un registro PTR configurado en el firewall corporativo local."
    ],
    answer: 1,
    explanation: "Los registros CNAME delegan la autenticación (SPF/DKIM) y los subdominios de encapsulamiento de enlaces e imágenes a Marketing Cloud cuando se autohospeda el DNS."
  },
  {
    id: 10,
    domain: "Dominio 2: SAP y Entregabilidad",
    question: "Una empresa está planificando una estrategia de calentamiento de IP (IP warm-up) después de aprovisionar una nueva dirección IP dedicada en Marketing Cloud. ¿Cuál es la mejor práctica recomendada con respecto al volumen de envío durante la primera semana?",
    options: [
      "Enviar el volumen diario máximo de inmediato para establecer una puntuación base alta con los ISP.",
      "Comenzar con un segmento pequeño y altamente comprometido de suscriptores y aumentar gradualmente el volumen diario durante varias semanas.",
      "Enviar exclusivamente a suscriptores inactivos primero para limpiar los rebotes duros antes de enviar correos a los usuarios activos.",
      "Dividir el volumen de manera uniforme entre todas las listas sin interacción durante las primeras 48 horas."
    ],
    answer: 1,
    explanation: "Los ISP evalúan las nuevas IP basándose en señales positivas de interacción. Comenzar con suscriptores altamente comprometidos construye la reputación del remitente de forma segura."
  },
  {
    id: 11,
    domain: "Dominio 2: SAP y Entregabilidad",
    question: "Un administrador de Marketing Cloud necesita verificar si la dirección de correo electrónico de un suscriptor es válida antes de enviar una campaña. ¿Qué función rastrea y gestiona automáticamente los rebotes duros (hard bounces) y blandos (soft bounces)?",
    options: [
      "Automatic Bounce Management (ABM)",
      "Reglas de validación de Contact Builder",
      "Función IsEmail() de AMPscript",
      "Filtro de puerta de enlace SMS de MobileConnect"
    ],
    answer: 0,
    explanation: "Automatic Bounce Management (ABM) clasifica y suprime automáticamente los rebotes duros y los rebotes blandos repetidos."
  },
  {
    id: 12,
    domain: "Dominio 2: SAP y Entregabilidad",
    question: "Un administrador está configurando un nuevo Sender Authentication Package (SAP) y necesita comprender qué direcciones IP se aprovisionan. ¿Qué se incluye en un paquete de aprovisionamiento SAP?",
    options: [
      "Una dirección IP dedicada, dominio de envío autenticado, encapsulamiento personalizado de enlaces/imágenes y gestión de correo de respuesta (Reply Mail Management - RMM).",
      "Relés SMTP compartidos y grupos de rotación dinámica de IP.",
      "Aprovisionamiento de códigos cortos SMS y certificados de notificaciones push.",
      "Conectores LDAP de Active Directory y metadatos SSO."
    ],
    answer: 0,
    explanation: "Un paquete de aprovisionamiento SAP incluye una IP dedicada, un dominio de envío con marca propia, encapsulamiento de enlaces/imágenes y RMM."
  },
  {
    id: 13,
    domain: "Dominio 2: SAP y Entregabilidad",
    question: "Un administrador está configurando un Sender Authentication Package (SAP) y necesita asegurarse de que las respuestas automáticas (como los mensajes de fuera de la oficina) se gestionen correctamente. ¿Qué componente de SAP gestiona esto?",
    options: [
      "Reply Mail Management (RMM)",
      "Automatic Bounce Management",
      "Motor de reenvío de CloudPages",
      "Einstein Engagement Scoring"
    ],
    answer: 0,
    explanation: "Reply Mail Management (RMM) procesa automáticamente las respuestas de fuera de la oficina, las cancelaciones de suscripción y las respuestas manuales a las campañas."
  },

  // Dominio 3: Marketing Cloud Connect
  {
    id: 14,
    domain: "Dominio 3: Marketing Cloud Connect",
    question: "Al configurar Marketing Cloud Connect en un entorno Multi-Org donde un único inquilino (tenant) de Marketing Cloud se conecta a múltiples instancias de Salesforce CRM, ¿cuál es un requisito previo obligatorio?",
    options: [
      "Deshabilitar la automatización de Tracking Extract en Automation Studio para evitar conflictos de API.",
      "Habilitar la configuración de usuario de integración con ámbito (scoped) y mapear credenciales de usuario de API distintas para cada organización de CRM conectada.",
      "Usar un único usuario del sistema CRM compartido en todas las Unidades de Negocio Secundarias.",
      "Conectar todas las organizaciones de CRM exclusivamente a la Unidad de Negocio Principal."
    ],
    answer: 1,
    explanation: "En Multi-Org, cada Unidad de Negocio se conecta a una organización de CRM específica y requiere sus propias credenciales de usuario de API con ámbito definido para mantener el aislamiento de los datos."
  },
  {
    id: 15,
    domain: "Dominio 3: Marketing Cloud Connect",
    question: "Un administrador de Marketing Cloud está solucionando un problema en el que los datos de seguimiento (tracking) de Marketing Cloud Connect no se sincronizan de vuelta con Salesforce CRM. ¿Qué componente de integración debe verificarse primero para comprobar la validez de la autenticación?",
    options: [
      "El usuario de integración de API de Marketing Cloud y las credenciales de la aplicación conectada vinculadas en la configuración de CRM.",
      "Las reglas locales del firewall de Windows en el servidor de marketing.",
      "La política de caducidad de contraseñas de Enterprise 2.0.",
      "La fecha de caducidad del certificado APNs de MobilePush."
    ],
    answer: 0,
    explanation: "La sincronización del seguimiento depende de credenciales válidas y autenticadas de la aplicación conectada entre Marketing Cloud y Salesforce CRM."
  },
  {
    id: 16,
    domain: "Dominio 3: Marketing Cloud Connect",
    question: "Al configurar Marketing Cloud Connect, un administrador necesita mapear los campos de Contacto/Prospecto (Contact/Lead) de Salesforce CRM con los atributos de suscriptor de Marketing Cloud. ¿Dónde se realiza este mapeo?",
    options: [
      "En la configuración de sincronización de Data Extensions dentro de la configuración de Marketing Cloud Connect.",
      "En las propiedades del correo electrónico de Content Builder.",
      "Directamente dentro de los Attribute Groups de Contact Builder.",
      "A través de encabezados de carga útil de la API REST durante el envío."
    ],
    answer: 0,
    explanation: "Las Synchronized Data Extensions mapean los campos de objetos de CRM directamente en Data Extensions de Marketing Cloud durante la configuración."
  },
  {
    id: 17,
    domain: "Dominio 3: Marketing Cloud Connect",
    question: "¿Con qué frecuencia se puede programar la sincronización de datos para consultar actualizaciones en Salesforce CRM al configurar Synchronized Data Extensions para Marketing Cloud Connect?",
    options: [
      "A intervalos como cada 5, 15, 30, 60 minutos o diariamente.",
      "Exclusivamente una vez cada 24 horas.",
      "Transmisión en tiempo real solo a través de webhooks.",
      "Cada 5 segundos sin excepción."
    ],
    answer: 0,
    explanation: "Las Synchronized Data Extensions admiten frecuencias de sondeo flexibles que van desde cada 5 minutos hasta diariamente."
  },
  {
    id: 18,
    domain: "Dominio 3: Marketing Cloud Connect",
    question: "Al configurar Marketing Cloud Connect, un administrador necesita asegurarse de que los datos de seguimiento extraídos de Marketing Cloud se completen correctamente en los informes de Salesforce CRM. ¿Qué proceso automatizado gestiona la sincronización de datos de seguimiento?",
    options: [
      "Trabajos de extracción de seguimiento y retención de datos gestionados por el sistema y ejecutados por procesos en segundo plano de Marketing Cloud Connect.",
      "Cargas manuales de CSV realizadas diariamente por los administradores.",
      "Consultas SQL de Automation Studio ejecutadas cada hora.",
      "Envíos de formularios de CloudPages activados por los usuarios."
    ],
    answer: 0,
    explanation: "Los trabajos en segundo plano gestionados por el sistema manejan las extracciones de seguimiento y envían métricas agregadas a los objetos de CRM."
  },
  {
    id: 19,
    domain: "Dominio 3: Marketing Cloud Connect",
    question: "Un administrador necesita verificar que el paquete gestionado (managed package) de Marketing Cloud Connect esté instalado correctamente en Salesforce CRM. ¿Dónde debe verificar el administrador en la configuración de Salesforce CRM?",
    options: [
      "Installed Packages (Paquetes instalados) en la configuración (Setup) de Salesforce CRM.",
      "Marketing Cloud Setup > Connected Apps.",
      "Email Studio > Admin > Integrations.",
      "Contact Builder > Data Sources."
    ],
    answer: 0,
    explanation: "Los paquetes gestionados instalados en Salesforce CRM se visualizan en Setup > Installed Packages."
  },
  {
    id: 20,
    domain: "Dominio 3: Marketing Cloud Connect",
    question: "Un administrador está configurando Marketing Cloud Connect y necesita verificar que los usuarios de Sales y Service Cloud puedan iniciar journeys de Marketing Cloud directamente desde CRM. ¿Qué se debe configurar?",
    options: [
      "Permisos de usuario del conector de Marketing Cloud y conjuntos de permisos (permission sets) asignados dentro de Salesforce CRM.",
      "Permisos de carpeta FTP en Enhanced FTP.",
      "Mapeo de Subscriber Key en Contact Builder.",
      "Palabras clave de código corto SMS en MobileConnect."
    ],
    answer: 0,
    explanation: "Los usuarios de Salesforce CRM necesitan conjuntos de permisos específicos de Marketing Cloud asignados en CRM para iniciar journeys y envíos desde CRM."
  },

  // Dominio 4: Seguridad y Configuración
  {
    id: 21,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador de Marketing Cloud necesita asegurarse de que las sesiones inactivas de los usuarios finalicen automáticamente después de 15 minutos y que las contraseñas caduquen cada 90 días. ¿Dónde deben configurarse estas políticas de seguridad?",
    options: [
      "Email Studio > Admin > Send Management",
      "Setup > Security > Security Settings",
      "Contact Builder > Data Sources > Security",
      "Setup > Users > Roles"
    ],
    answer: 1,
    explanation: "Setup > Security > Security Settings centraliza el tiempo de espera de sesión, la complejidad de contraseñas, las políticas de caducidad y los umbrales de bloqueo."
  },
  {
    id: 22,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Una empresa recién aprovisionada con Marketing Cloud Engagement desea una lista de verificación interactiva guiada para establecer las configuraciones iniciales, los usuarios y los canales principales de mensajería. ¿Qué función nativa debe usar el administrador?",
    options: [
      "Setup Assistant",
      "Asistente de Journey Builder",
      "Herramienta de configuración de Contact Builder",
      "Herramienta de migración"
    ],
    answer: 0,
    explanation: "Setup Assistant proporciona listas de verificación interactivas y orientación para la configuración inicial de la cuenta."
  },
  {
    id: 23,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador de Marketing Cloud necesita restringir el acceso de inicio de sesión al backend para que el personal administrativo solo pueda iniciar sesión desde el rango de IP de la oficina corporativa (192.168.10.0/24). ¿Dónde debe configurarse esta regla?",
    options: [
      "Setup > Security > Login IP Ranges",
      "Email Studio > Send Definitions > IP Filtering",
      "Configuración de seguridad de Data Extension",
      "Gestión de usuarios FTP"
    ],
    answer: 0,
    explanation: "Login IP Ranges en Setup > Security aplica una lista blanca estricta de IP para la autenticación de usuarios en el backend."
  },
  {
    id: 24,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador de Marketing Cloud necesita revisar el historial de acciones administrativas, inicios de sesión de usuarios y cambios de configuración realizados en la cuenta durante los últimos 30 días. ¿A qué herramienta se debe acceder?",
    options: [
      "Audit Trail en Setup",
      "Registros de errores de Automation Studio",
      "Resumen de eliminación de Contact Builder",
      "Informes de extracción de datos de seguimiento"
    ],
    answer: 0,
    explanation: "Audit Trail rastrea las acciones administrativas, los cambios de configuración y el historial de inicio de sesión en Marketing Cloud."
  },
  {
    id: 25,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador necesita cifrar los archivos transferidos al Enhanced FTP de Marketing Cloud utilizando PGP. ¿Dónde debe gestionarse la clave pública PGP en Marketing Cloud?",
    options: [
      "Key Management en Setup",
      "Configuración de seguridad de Content Builder",
      "Propiedades de cifrado de Data Extension",
      "Configuración de puerta de enlace de MobileConnect"
    ],
    answer: 0,
    explanation: "Key Management en Setup almacena las claves públicas PGP utilizadas para el cifrado y descifrado de archivos en Automation Studio."
  },
  {
    id: 26,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador necesita asegurarse de que los usuarios que inicien sesión en Marketing Cloud sean autenticados utilizando su proveedor corporativo de inicio de sesión único (SSO) (por ejemplo, Okta o Azure AD). ¿Dónde debe configurarse el SSO?",
    options: [
      "Setup > Security > Single Sign-On Settings",
      "Email Studio > Account Settings > Authentication",
      "Setup > Users > Security Policy",
      "Installed Packages > SSO Component"
    ],
    answer: 0,
    explanation: "La configuración de Single Sign-On en Setup > Security gestiona los metadatos SAML y las integraciones de proveedores de identidad."
  },
  {
    id: 27,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador nota que una cuenta de usuario ha sido bloqueada debido a múltiples intentos fallidos consecutivos de inicio de sesión. ¿Dónde puede el administrador desbloquear a este usuario en Marketing Cloud Setup?",
    options: [
      "Setup > Users > Users, seleccionar el usuario bloqueado y hacer clic en Unlock.",
      "Email Studio > Subscribers > Unblock User.",
      "Security Settings > Active Sessions > Reset.",
      "Contact Builder > Contacts > Unlock."
    ],
    answer: 0,
    explanation: "Los administradores pueden desbloquear cuentas de usuario bloqueadas directamente desde Setup > Users > Users."
  },
  {
    id: 28,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador necesita asegurarse de que los campos de Data Extension que contienen Información de Identificación Personal (PII) estén cifrados en reposo. ¿Qué función de Marketing Cloud proporciona cifrado de datos de nivel empresarial?",
    options: [
      "Transparent Data Encryption (TDE) / Enterprise Encryption",
      "Codificación Base64 de Email Studio",
      "Función Hash de AMPscript",
      "Sumas de verificación SHA-256"
    ],
    answer: 0,
    explanation: "Transparent Data Encryption (TDE) proporciona cifrado a nivel de base de datos en reposo para cuentas empresariales."
  },
  {
    id: 29,
    domain: "Dominio 4: Seguridad y Configuración",
    question: "Un administrador está configurando una nueva cuenta de Marketing Cloud y necesita configurar notificaciones del sistema para alertas de seguridad, avisos de facturación y contactos técnicos. ¿Dónde deben mantenerse estas direcciones de correo electrónico de notificación?",
    options: [
      "Administration > Account Settings > Notification Email Address",
      "Setup > Users > System Contacts",
      "Email Studio > Send Management > Alerts",
      "Contact Builder > Admin > Notifications"
    ],
    answer: 0,
    explanation: "Las direcciones de correo electrónico de notificación para alertas del sistema y facturación se mantienen en Account Settings."
  },

  // Dominio 5: Paquetes Instalados y API
  {
    id: 30,
    domain: "Dominio 5: Paquetes Instalados y API",
    question: "Una aplicación externa necesita enviar correos electrónicos transaccionales a través de la API REST de Marketing Cloud siguiendo el principio de privilegio mínimo. ¿Cómo debe configurarse el Installed Package?",
    options: [
      "Crear un paquete heredado (Legacy Package) con ámbito completo de Administrador en todas las Unidades de Negocio.",
      "Crear un componente de integración de API de tipo Server-to-Server con ámbitos (scopes) específicos para correo electrónico y restringir el acceso a las Unidades de Negocio requeridas.",
      "Configurar un componente Web App con ámbitos públicos de lectura/escritura en All Subscribers.",
      "Compartir la contraseña del usuario de API de Marketing Cloud Connect con la aplicación externa."
    ],
    answer: 1,
    explanation: "Las integraciones de API Server-to-Server permiten ámbitos OAuth 2.0 granulares y controles de acceso por Unidad de Negocio siguiendo la seguridad de privilegio mínimo."
  },
  {
    id: 31,
    domain: "Dominio 5: Paquetes Instalados y API",
    question: "Un administrador desea asegurarse de que todas las llamadas de API realizadas a Marketing Cloud cumplan con una autenticación segura basada en tokens. ¿Qué estándar de autenticación utiliza Marketing Cloud para las solicitudes de API REST?",
    options: [
      "Tokens de acceso OAuth 2.0 generados a través de los endpoints de autenticación de Installed Package.",
      "Autenticación HTTP básica usando nombre de usuario y contraseña.",
      "Tokens de desafío-respuesta NTLM.",
      "Claves de API estáticas pasadas en parámetros de URL."
    ],
    answer: 0,
    explanation: "Las API REST y SOAP de Marketing Cloud utilizan tokens de acceso OAuth 2.0 generados a través de Installed Packages."
  },

  // Dominio 6: Canales Móviles (MobileConnect y MobilePush)
  {
    id: 32,
    domain: "Dominio 6: Canales Móviles",
    question: "Al intentar crear una palabra clave (keyword) personalizada en MobileConnect en un código corto compartido (shared short code), un administrador recibe un error que indica que la palabra clave no está disponible. ¿Cuál es la causa más probable?",
    options: [
      "Las palabras clave en códigos cortos compartidos deben tener al menos 12 caracteres.",
      "La palabra clave ya está registrada por otro inquilino (tenant) en el mismo código corto compartido o es una palabra clave reservada del sistema.",
      "MobileConnect requiere un SAP dedicado antes de crear cualquier palabra clave SMS.",
      "Las palabras clave solo se pueden crear desde la Unidad de Negocio Principal."
    ],
    answer: 1,
    explanation: "Los códigos cortos compartidos comparten un único espacio de nombres de palabras clave entre todos los inquilinos que usan ese número; las palabras reservadas como STOP o HELP tampoco se pueden reclamar."
  },
  {
    id: 33,
    domain: "Dominio 6: Canales Móviles",
    question: "Al configurar MobilePush para la integración de una aplicación móvil, ¿qué artefacto de seguridad se requiere de Apple Push Notification service (APNs) y Firebase Cloud Messaging (FCM) respectivamente para conectar Marketing Cloud a las puertas de enlace móviles?",
    options: [
      "Un certificado APNs de Apple (o Auth Key) y una clave de servidor de Firebase (o archivo de configuración JSON).",
      "Secretos de cliente OAuth 2.0 y certificados SSL.",
      "Direcciones IP de servidor SMTP y registros MX.",
      "Claves públicas PGP y credenciales de inicio de sesión SFTP."
    ],
    answer: 0,
    explanation: "La configuración de MobilePush requiere credenciales de Apple APNs y la configuración del servidor de Firebase (FCM) para enviar notificaciones push."
  },
  {
    id: 34,
    domain: "Dominio 6: Canales Móviles",
    question: "Un administrador está configurando MobileConnect para enviar alertas SMS automatizadas cuando un suscriptor envía una palabra clave por mensaje de texto. ¿Qué tipo de mensaje en MobileConnect es más adecuado para una confirmación de texto automatizada de una sola respuesta?",
    options: [
      "Tipo de mensaje Text Response",
      "Mensaje Outbound Broadcast",
      "Campaña de suscripción Multi-Select",
      "Campaña de encuesta SMS"
    ],
    answer: 0,
    explanation: "Las plantillas Text Response en MobileConnect gestionan los activadores de palabras clave automatizados y sus respuestas."
  },

  // Dominio 7: Automation Studio
  {
    id: 35,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador necesita automatizar una importación diaria de archivos desde un servidor SFTP externo, descifrar el archivo usando una clave PGP, importar los registros en una Data Extension y activar un journey de campaña. ¿Qué herramienta en Marketing Cloud debe coordinar todo este flujo de trabajo?",
    options: [
      "Contact Builder",
      "Automation Studio",
      "Content Builder",
      "Audience Builder"
    ],
    answer: 1,
    explanation: "Automation Studio orquesta flujos de trabajo ETL de varios pasos, incluidas transferencias de archivos, actividades de importación, consultas SQL y eventos de entrada de Journey."
  },
  {
    id: 36,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador nota que una automatización en ejecución en Automation Studio ha fallado debido a que falta un archivo de origen en el Enhanced FTP de Marketing Cloud. ¿Cuál es la mejor manera de manejar futuras ocurrencias de este retraso específico de archivo?",
    options: [
      "Configurar una actividad File Transfer con una condición de espera o verificación, o usar una alerta de correo electrónico de notificación de error de automatización.",
      "Eliminar la Data Extension y volver a crearla manualmente cada mañana.",
      "Aumentar el límite de almacenamiento de la base de datos en la configuración de la cuenta.",
      "Cambiar la programación de la automatización de cada hora a transmisión en tiempo real."
    ],
    answer: 0,
    explanation: "Las condiciones de espera de File Transfer y las notificaciones de error ayudan a manejar con elegancia las llegadas retrasadas de archivos en Enhanced FTP."
  },
  {
    id: 37,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador necesita ejecutar una consulta SQL compleja en Automation Studio que une múltiples Data Extensions y llena una Data Extension de destino. La consulta agota el tiempo de espera con frecuencia. ¿Cuál es la optimización administrativa más efectiva?",
    options: [
      "Asegurar una indexación adecuada en los campos de unión (join) y filtro en la Data Extension de destino y limitar el alcance de los datos.",
      "Convertir la consulta SQL en un bloque AMPscript dentro de una plantilla de correo electrónico.",
      "Aumentar el umbral de tiempo de espera de consulta en Setup > Automation Settings.",
      "Ejecutar la consulta durante las horas pico de negocio para utilizar los picos de CPU del servidor."
    ],
    answer: 0,
    explanation: "Indexar adecuadamente los campos de la Data Extension y optimizar la lógica de la consulta SQL evita que se agote el tiempo de ejecución en Automation Studio."
  },
  {
    id: 38,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador está configurando una automatización que se ejecuta cada 6 horas. Sin embargo, debido a grandes cargas de datos, una ejecución tarda más de 6 horas y se superpone con la siguiente ejecución programada. ¿Qué comportamiento exhibe Automation Studio?",
    options: [
      "Automation Studio pone en cola la ejecución superpuesta y la ejecuta una vez que finaliza la ejecución actual.",
      "Automation Studio finaliza el trabajo en ejecución inmediatamente e inicia la nueva programación.",
      "Automation Studio arroja un error crítico y deshabilita la automatización de forma permanente.",
      "Automation Studio divide la carga de trabajo en dos hilos paralelos."
    ],
    answer: 0,
    explanation: "Automation Studio pone en cola las ejecuciones de automatización superpuestas para que los trabajos se ejecuten secuencialmente sin colisiones."
  },
  {
    id: 39,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador necesita crear una automatización que se ejecute solo cuando llega un archivo específico al Enhanced FTP. ¿Qué activador de origen de automatización se debe utilizar?",
    options: [
      "Activador de automatización File Drop",
      "Activador programado basado en tiempo",
      "Endpoint activador de API REST",
      "Botón de ejecución manual"
    ],
    answer: 0,
    explanation: "Los activadores File Drop inician automatizaciones automáticamente en el momento en que un archivo designado llega al Enhanced FTP."
  },
  {
    id: 40,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador nota que una actividad de importación de Data Extension en Automation Studio está fallando porque los archivos CSV entrantes usan un punto y coma (;) como delimitador en lugar de una coma. ¿Dónde se configura el delimitador de archivo?",
    options: [
      "En el asistente de configuración de la actividad Import File.",
      "En las propiedades de origen de datos de Contact Builder.",
      "En la configuración del servidor FTP.",
      "Solo a través de parámetros de encabezado de API REST."
    ],
    answer: 0,
    explanation: "Las actividades Import File permiten definir delimitadores de archivo personalizados como comas, tabulaciones o puntos y comas."
  },
  {
    id: 41,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador necesita asegurarse de que los contactos que han estado inactivos en los journeys durante más de 180 días se eliminen automáticamente de las Data Extensions activas. ¿Qué construcción de consulta SQL se debe utilizar en Automation Studio?",
    options: [
      "Una consulta DELETE o SELECT INTO que filtre por la fecha de última actividad del contacto anterior a 180 días.",
      "Una carga útil automatizada de la API Contact Delete.",
      "Un filtro manual en los informes de seguimiento de Email Studio.",
      "Un interruptor de cancelación de suscripción a nivel empresarial."
    ],
    answer: 0,
    explanation: "Las actividades de consulta SQL que utilizan declaraciones SELECT en Data Extensions o herramientas de limpieza de datos gestionan el mantenimiento del ciclo de vida de los datos."
  },
  {
    id: 42,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador necesita exportar datos de seguimiento desde Marketing Cloud a un almacén de datos (data warehouse) externo diariamente. ¿Qué actividad de Automation Studio debe utilizarse para generar el archivo de extracción?",
    options: [
      "Actividad Data Extract",
      "Actividad File Transfer",
      "Actividad Import File",
      "Actividad SQL Query"
    ],
    answer: 0,
    explanation: "Las actividades Data Extract generan archivos de texto/CSV a partir de vistas de datos de seguimiento para informes externos."
  },
  {
    id: 43,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador necesita supervisar el estado de procesamiento en tiempo real y los registros de errores de las automatizaciones activas en Automation Studio. ¿Qué vista o panel debe revisarse?",
    options: [
      "La pestaña Overview en Automation Studio.",
      "Setup > Security > Audit Trail.",
      "Panel de resumen de Contact Builder.",
      "Email Studio > Tracking > Overview."
    ],
    answer: 0,
    explanation: "La pestaña Overview en Automation Studio proporciona monitoreo en tiempo real de las automatizaciones en ejecución, en cola y fallidas."
  },
  {
    id: 44,
    domain: "Dominio 7: Automation Studio",
    question: "Un administrador necesita programar una importación de datos recurrente desde un servidor SFTP externo hacia Marketing Cloud. ¿Qué combinación de actividades de Automation Studio se requiere?",
    options: [
      "Una actividad File Transfer (para mover/descifrar el archivo) seguida de una actividad Import File.",
      "Una actividad SQL Query seguida de una actividad Data Extract.",
      "Una definición de envío de correo electrónico vinculada a una palabra clave de MobileConnect.",
      "Un fragmento de código de CloudPages y un activador de API REST."
    ],
    answer: 0,
    explanation: "File Transfer mueve/descifra los archivos desde el safehouse hasta la carpeta FTP, e Import File lleva los datos a una Data Extension."
  },

  // Dominio 8: Journey Builder
  {
    id: 45,
    domain: "Dominio 8: Journey Builder",
    question: "Un administrador está configurando Journey Builder y necesita asegurarse de que los contactos entren en un journey de bienvenida solo una vez, incluso si califican varias veces. ¿Qué configuración se debe establecer en la fuente de entrada?",
    options: [
      "Establecer la regla de calificación de reingreso (Re-entry Qualification) en No Re-entry.",
      "Establecer Re-entry Qualification en Re-entry Anytime.",
      "Configurar una actividad Wait By Duration de 365 días.",
      "Habilitar criterios de salida (Exit Criteria) basados en el estado de apertura del correo electrónico."
    ],
    answer: 0,
    explanation: "Establecer la calificación de reingreso en 'No Re-entry' garantiza que un contacto solo pueda ingresar al journey una vez."
  },
  {
    id: 46,
    domain: "Dominio 8: Journey Builder",
    question: "Al configurar una actividad de correo electrónico de Journey Builder, un administrador puede elegir entre diferentes opciones de entrega, como Multi-Read o ritmo de envío optimizado (send pacing). ¿Cuál es el principal beneficio del send pacing en Journey Builder?",
    options: [
      "Distribuye la entrega de mensajes durante un período específico para evitar sobrecargar los servidores de bandeja de entrada de los suscriptores o los sistemas internos.",
      "Acelera los envíos de correo electrónico para entregar todos los mensajes en 1 segundo.",
      "Convierte automáticamente los correos electrónicos HTML en texto sin formato para usuarios móviles.",
      "Enruta los correos electrónicos a través de servidores SMTP externos."
    ],
    answer: 0,
    explanation: "El send pacing distribuye el volumen de mensajes gradualmente para mantener una carga óptima del servidor y la entregabilidad."
  },
  {
    id: 47,
    domain: "Dominio 8: Journey Builder",
    question: "Un administrador está configurando Journey Builder y desea utilizar una campaña de Salesforce CRM como fuente de entrada. ¿Qué se requiere antes de poder seleccionar la campaña de CRM en Journey Builder?",
    options: [
      "Marketing Cloud Connect debe estar completamente configurado y el objeto Campaign de CRM debe estar habilitado en Synchronized Data Extensions.",
      "Una cuenta de Enhanced FTP con claves de cifrado PGP.",
      "Un código corto dedicado configurado en MobileConnect.",
      "Un SAP activo con Reply Mail Management."
    ],
    answer: 0,
    explanation: "Las fuentes de entrada de campañas de CRM requieren Marketing Cloud Connect y objetos de CRM sincronizados."
  },
  {
    id: 48,
    domain: "Dominio 8: Journey Builder",
    question: "Un administrador está configurando una actividad Wait By Duration de Journey Builder. Un contacto entra en el paso de espera un viernes por la tarde con una duración de 3 días. ¿Cuándo saldrá el contacto del paso de espera?",
    options: [
      "El lunes por la tarde, exactamente 72 horas después.",
      "El sábado por la mañana a medianoche.",
      "El domingo por la noche durante el mantenimiento del sistema.",
      "El martes por la mañana después del horario comercial."
    ],
    answer: 0,
    explanation: "Wait By Duration calcula el tiempo exacto transcurrido (horas/días) desde el momento de la entrada."
  },
  {
    id: 49,
    domain: "Dominio 8: Journey Builder",
    question: "Un administrador está configurando una división de decisión (Decision Split) de Journey Builder. Los contactos deben ramificarse según si su atributo de gasto de por vida es superior a $500. ¿Dónde se configura este criterio de evaluación?",
    options: [
      "En el panel de configuración de Decision Split utilizando los datos de atributos de contacto del modelo de datos.",
      "En las consultas SQL de Automation Studio.",
      "En la configuración de Sender Profile de Email Studio.",
      "A través de cargas útiles de la API Contact Delete."
    ],
    answer: 0,
    explanation: "Los Decision Splits evalúan los atributos de contacto y las Data Extensions vinculadas en el modelo de datos para ramificar los journeys."
  },
  {
    id: 50,
    domain: "Dominio 8: Journey Builder",
    question: "Un administrador está revisando el rendimiento de un journey y nota que los contactos están saliendo del journey prematuramente. ¿Qué función de Journey Builder debe verificarse para identificar por qué salieron los contactos?",
    options: [
      "Configuración de criterios de salida (Exit Criteria).",
      "Registros de errores de Automation Studio.",
      "Tasas de rebote duro de seguimiento de Email Studio.",
      "Listas de verificación de progreso de Setup Assistant."
    ],
    answer: 0,
    explanation: "Los Exit Criteria del journey determinan cuándo los contactos activos son expulsados automáticamente de un journey."
  },

  // Dominio 9: Data Extensions y Contact Builder
  {
    id: 51,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Un administrador está configurando una Data Extension que almacenará datos confidenciales de perfiles de clientes y necesita asegurarse de que los registros antiguos se purguen automáticamente después de 180 días según la fecha de creación del registro. ¿Qué propiedad de Data Extension se debe configurar?",
    options: [
      "Restricción de campo que admite valores nulos (Nullable)",
      "Configuración de retención de datos (Data Retention Setting) configurada con una regla de eliminación continua de 180 días",
      "Mapeo de relación de envío (Sendable Relationship)",
      "Autoincremento de clave principal (Primary Key)"
    ],
    answer: 1,
    explanation: "Las políticas de retención de datos purgan automáticamente registros individuales o Data Extensions completas después de un período de retención definido."
  },
  {
    id: 52,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Al configurar Contact Builder para establecer una vista unificada de un cliente en múltiples canales de comunicación, ¿cuál es la función principal de un Attribute Group?",
    options: [
      "Agrupar lógicamente Data Extensions relacionadas y definir relaciones cardinales vinculadas a través de Subscriber Key o Contact Key.",
      "Almacenar copias de seguridad de plantillas de correo electrónico HTML.",
      "Restringir los privilegios de acceso de los usuarios en las unidades de negocio.",
      "Cifrar archivos de Enhanced FTP utilizando PGP."
    ],
    answer: 0,
    explanation: "Los Attribute Groups en Contact Builder organizan Data Extensions relacionadas y establecen enlaces relacionales para segmentación y journeys."
  },
  {
    id: 53,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Una cuenta empresarial utiliza múltiples Unidades de Negocio Secundarias. Una nueva Data Extension maestra creada en la Unidad de Negocio Principal debe compartirse y completarse con datos accesibles para todas las Unidades de Negocio Secundarias. ¿Qué función se debe utilizar?",
    options: [
      "Configurar la Data Extension como compartida (Shared) y establecer los permisos de uso compartido adecuados en Data Extension Sharing.",
      "Exportar los datos a CSV y cargarlos manualmente en cada cuenta secundaria todos los días.",
      "Enviar una copia por correo electrónico de la tabla a todos los administradores secundarios.",
      "Usar Contact Builder para duplicar registros en todas las unidades de negocio."
    ],
    answer: 0,
    explanation: "El uso compartido de Data Extensions permite que las Data Extensions de nivel principal se compartan de forma segura con las unidades de negocio secundarias."
  },
  {
    id: 54,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "¿Cuál es el propósito principal de ejecutar una solicitud de Contact Delete a través de Contact Builder en lugar de simplemente eliminar a un suscriptor de una lista de correo electrónico?",
    options: [
      "Solo pausa los envíos de correo electrónico durante 30 días manteniendo intacto el historial de seguimiento.",
      "Elimina los registros de contacto y los datos de atributos asociados en todos los canales (Email, Mobile, Journey Builder) para cumplir con regulaciones de privacidad como GDPR/CCPA.",
      "Exporta el registro del suscriptor a Salesforce CRM antes de archivarlo.",
      "Restablece el estado del suscriptor de Held a Active."
    ],
    answer: 1,
    explanation: "Contact Delete elimina los datos personales en todos los canales y Data Extensions enviables en Marketing Cloud para satisfacer el cumplimiento de privacidad."
  },
  {
    id: 55,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Para garantizar que los datos de seguimiento, las cancelaciones de suscripción y los enlaces de personalización se vinculen correctamente con el perfil único del suscriptor, ¿por qué es fundamental mapear correctamente el campo de la Data Extension con el Subscriber Key?",
    options: [
      "Para garantizar que los datos de seguimiento, las cancelaciones de suscripción y los enlaces de personalización se vinculen correctamente con el perfil único del suscriptor.",
      "Para acelerar las transferencias de archivos de Enhanced FTP.",
      "Para cumplir con las reglas de disponibilidad de palabras clave de códigos cortos móviles.",
      "Para cifrar registros de bases de datos en reposo."
    ],
    answer: 0,
    explanation: "El Subscriber Key es el identificador único que vincula las Data Extensions enviables con el historial de seguimiento y los registros de contactos."
  },
  {
    id: 56,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Un administrador está revisando los límites de almacenamiento de la cuenta y nota que las Data Extensions consumen demasiado espacio. ¿Cuál es la forma más eficiente de limpiar automáticamente los datos temporales de preparación (staging)?",
    options: [
      "Configurar políticas nativas de retención de datos (Data Retention) en las Data Extensions de preparación para eliminar registros automáticamente después de un intervalo corto (por ejemplo, 3 días).",
      "Eliminar toda la cuenta de Marketing Cloud y volver a aprovisionarla.",
      "Borrar filas manualmente usando cargas de CSV de Excel cada hora.",
      "Deshabilitar los registros de ejecución de Automation Studio."
    ],
    answer: 0,
    explanation: "La configuración de retención de datos en las Data Extensions de preparación purga automáticamente los registros antiguos para conservar el almacenamiento."
  },
  {
    id: 57,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Al configurar un envío de correo electrónico en Email Studio, un administrador selecciona una Sendable Data Extension como audiencia. ¿Qué determina qué campo de la Data Extension se utiliza como destino de la dirección de correo electrónico?",
    options: [
      "El campo de la Data Extension designado con el tipo de datos Email Address durante la creación de la Data Extension.",
      "El campo llamado 'SubscriberKey' de forma predeterminada.",
      "La columna de clave principal (primary key) en la Data Extension.",
      "La primera columna en el esquema de la tabla."
    ],
    answer: 0,
    explanation: "Las Sendable Data Extensions requieren mapear un campo designado de tipo Email Address para enrutar los mensajes."
  },
  {
    id: 58,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Un administrador necesita crear un modelo de datos relacional en Contact Builder donde un cliente pueda tener múltiples registros de vehículos activos (relación de uno a muchos). ¿Cómo debe configurarse esta relación en un Attribute Group?",
    options: [
      "Vincular la Data Extension de Clientes con la Data Extension de Vehículos utilizando una cardinalidad de 1 a Muchos (1-to-Many) basada en el Contact Key.",
      "Combinar ambas tablas en un único archivo CSV plano.",
      "Usar una tabla puente de Muchos a Muchos sin claves principales.",
      "Configurar una lista de supresión de definición de envío."
    ],
    answer: 0,
    explanation: "La configuración de cardinalidad de Contact Builder permite definir relaciones 1 a 1 o 1 a Muchos entre grupos de atributos."
  },
  {
    id: 59,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Un administrador está configurando una Data Extension y desea asegurarse de que un campo específico (como SubscriberKey) no pueda aceptar valores nulos o vacíos. ¿Qué propiedad debe establecerse en el campo?",
    options: [
      "Desmarcar la casilla Nullable (haciendo que el campo sea obligatorio).",
      "Establecer el tipo de datos en Boolean.",
      "Habilitar el cifrado PGD en la columna.",
      "Marcar el campo como Non-Sendable."
    ],
    answer: 0,
    explanation: "Desmarcar la propiedad 'Nullable' garantiza que no se puedan agregar registros con valores vacíos en ese campo."
  },
  {
    id: 60,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Un administrador está configurando una Data Extension que se utilizará en múltiples Unidades de Negocio Secundarias en una cuenta Enterprise 2.0. ¿Dónde debe crearse la Data Extension para garantizar un uso compartido fluido?",
    options: [
      "En la carpeta Shared Items de la Unidad de Negocio Principal.",
      "En el directorio local de entrega FTP.",
      "Dentro del repositorio de palabras clave de MobileConnect.",
      "Dentro de la carpeta de informes de Salesforce CRM."
    ],
    answer: 0,
    explanation: "Se puede acceder a las Data Extensions compartidas creadas en la carpeta Shared Items de la Unidad de Negocio Principal desde todas las unidades de negocio secundarias."
  },
  {
    id: 61,
    domain: "Dominio 9: Data Extensions y Contact Builder",
    question: "Al configurar Contact Builder, ¿cuál es la función principal del Contact Key?",
    options: [
      "Identificar de forma única a un individuo en todos los canales de comunicación y Data Extensions dentro de Marketing Cloud.",
      "Cifrar las credenciales FTP de forma segura.",
      "Autenticar llamadas REST API con OAuth 2.0.",
      "Rastrear las tasas de apertura de correo electrónico en tiempo real."
    ],
    answer: 0,
    explanation: "El Contact Key es el identificador único fundamental que vincula todas las interacciones de los canales con un único perfil en Contact Builder."
  },

  // Dominio 10: Contenido y CloudPages
  {
    id: 62,
    domain: "Dominio 10: Contenido y CloudPages",
    question: "Un administrador está configurando una nueva CloudPage y necesita asegurarse de que los envíos de formularios de los visitantes se pasen de forma segura a una Data Extension. ¿Qué herramienta o actividad en CloudPage gestiona esta captura de datos?",
    options: [
      "Fragmentos de código de CloudPages (Code Snippets) que utilizan AMPscript (InsertData o UpsertData) o Server-Side JavaScript (SSJS).",
      "Actividad FTP File Transfer de Automation Studio.",
      "Automatic Bounce Management de Email Studio.",
      "Filtro de respuesta de texto SMS de MobileConnect."
    ],
    answer: 0,
    explanation: "Los fragmentos de código de CloudPages utilizan funciones AMPscript como InsertData o UpsertData para procesar y almacenar envíos de formularios en Data Extensions."
  },
  {
    id: 63,
    domain: "Dominio 10: Contenido y CloudPages",
    question: "Un administrador desea asegurarse de que todos los correos electrónicos enviados desde la cuenta de Marketing Cloud incluyan un pie de página corporativo específico que contenga información de cumplimiento legal. ¿Qué función se debe utilizar?",
    options: [
      "Gestión de encabezados y pies de página (Header and Footer) en Email Studio (o bloques de contenido a través de Content Builder).",
      "Filtro de consulta SQL de Automation Studio.",
      "Mapeo de atributos de Contact Builder.",
      "Configuración de certificado APNs de MobilePush."
    ],
    answer: 0,
    explanation: "Los encabezados y pies de página a nivel de cuenta o los bloques reutilizables de Content Builder garantizan pies de página de cumplimiento legal coherentes en todos los envíos de correo electrónico."
  },
  {
    id: 64,
    domain: "Dominio 10: Contenido y CloudPages",
    question: "Un administrador necesita probar un bloque AMPscript dentro de una plantilla de correo electrónico antes de implementarlo en producción. ¿Qué herramienta en Content Builder o Email Studio permite obtener una vista previa de la personalización y la representación de AMPscript?",
    options: [
      "La pestaña Preview and Test.",
      "El monitor Overview de Automation Studio.",
      "El inspector de cardinalidad de Contact Builder.",
      "La lista de verificación de Setup Assistant."
    ],
    answer: 0,
    explanation: "La pestaña Preview and Test en Content Builder permite a los administradores probar cadenas de personalización y lógica AMPscript con datos de suscriptores de muestra."
  },
  {
    id: 65,
    domain: "Dominio 10: Contenido y CloudPages",
    question: "Al configurar una definición de envío en Email Studio, ¿cuál es el propósito de una lista de supresión (Suppression List)?",
    options: [
      "Excluir automáticamente a suscriptores específicos (como personas que reportan spam o que se han dado de baja) de recibir ese envío específico sin eliminarlos de la Data Extension.",
      "Acelerar las velocidades de entrega de mensajes en los ISP.",
      "Cifrar las direcciones de correo electrónico de los suscriptores utilizando claves PGP.",
      "Sincronizar contactos de CRM con Marketing Cloud."
    ],
    answer: 0,
    explanation: "Las listas de supresión excluyen dinámicamente a grupos específicos de suscriptores de un envío sin alterar la Data Extension de audiencia maestra."
  }
];