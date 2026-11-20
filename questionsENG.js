const QUESTIONS_DB = [
  // Domain 1: Business Units, Roles and Permissions
  {
    id: 1,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "A Marketing Cloud Administrator needs to configure a custom role for a team member who should only have access to view subscriber data and create email campaigns within a specific Child Business Unit. Which permission combination is best suited for this requirement?",
    options: [
      "Use the standard 'Content Creator' role and override permissions at the Parent Business Unit level.",
      "Assign custom permissions allowing View access on Subscribers and Create access on Content within the target Business Unit.",
      "Grant Administrator access on the Child Business Unit and restrict Send permissions via Automation Studio.",
      "Assign the 'Analyst' standard role and enable Shared Data Extension access."
    ],
    answer: 1,
    explanation: "Custom roles allow granular permissions per feature and per Business Unit without granting unnecessary Send or global Admin privileges."
  },
  {
    id: 2,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "An administrator is setting up user roles and notices that a standard role cannot be edited. What is the correct procedure to grant custom permissions based on a standard role?",
    options: [
      "Modify the XML manifest of the standard role via REST API.",
      "Create a new custom role, assign the desired permissions, and assign that custom role to the users.",
      "Contact Salesforce Support to unlock standard role editing capabilities.",
      "Duplicate the standard role template from Setup > Users > Roles."
    ],
    answer: 1,
    explanation: "Standard roles provided by Marketing Cloud are read-only; to customize access, administrators must build a custom role from scratch."
  },
  {
    id: 3,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "A Marketing Cloud Administrator needs to grant a user permission to view tracking data and analytics reports without allowing them to modify or send email campaigns. Which standard role fulfills this requirement?",
    options: [
      "Content Creator",
      "Marketing Cloud Administrator",
      "Analyst",
      "Data Technologist"
    ],
    answer: 2,
    explanation: "The Analyst role provides read-only access to reports, tracking data, and analytics dashboards."
  },
  {
    id: 4,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "When an administrator creates a new custom role, what happens if no specific permissions are checked within a given feature area (e.g., Email Studio)?",
    options: [
      "The role inherits default read-only permissions for that feature.",
      "The role will have no access to that feature area by default.",
      "The role automatically gains full administrator rights in that studio.",
      "The system throws a validation error during creation."
    ],
    answer: 1,
    explanation: "Marketing Cloud follows the principle of least privilege; unchecked feature areas remain completely inaccessible to users assigned that role."
  },
  {
    id: 5,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "When configuring an Enterprise 2.0 account structure, what is the relationship between the Parent Business Unit and Child Business Units regarding subscriber management?",
    options: [
      "Subscribers are stored at the account level (or shared), but business units can maintain independent subscriber lists or shared data extensions depending on configuration.",
      "Child business units cannot store subscribers and must route all sends through the parent account.",
      "Subscribers created in a child business unit are automatically invisible to the parent unit.",
      "Enterprise 2.0 accounts isolate subscribers entirely per business unit with no shared visibility."
    ],
    answer: 0,
    explanation: "Enterprise 2.0 architecture centralizes subscriber management at the account level while allowing business units to utilize shared or independent data extensions."
  },
  {
    id: 6,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "An administrator wants to ensure that subscribers who click an unsubscribe link in an email are automatically unsubscribed across all Business Units in an Enterprise 2.0 account. Where is this enterprise-level unsubscription behavior managed?",
    options: [
      "Individual Child Business Unit Send Definitions",
      "Enterprise-level subscription management settings in Account Settings",
      "Contact Builder Contact Configuration",
      "Automation Studio Unsubscribe Activity"
    ],
    answer: 1,
    explanation: "Enterprise-level unsubscription settings in Account Settings dictate whether opt-outs apply globally across all child business units or remain local."
  },
  {
    id: 7,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "An enterprise client requires that all subscriber email addresses be scrubbed against a global suppression list of known complainers and bad actors before any send occurs. Where are account-level suppression lists managed?",
    options: [
      "Content Builder > Shared Items",
      "Email Studio > Admin > Send Management > Suppression Lists",
      "Contact Builder > Suppression Attributes",
      "Setup > Security > Global Blocklists"
    ],
    answer: 1,
    explanation: "Account-level suppression lists are configured under Send Management in Email Studio and automatically protect all sends across the account."
  },
  {
    id: 8,
    domain: "Domain 1: Business Units, Roles and Permissions",
    question: "An administrator is setting up a new sender profile for transactional notifications. Which component of the Sender Profile links the specific SAP sending domain, name, and address to the email send definition?",
    options: [
      "From Address, From Name, and Delivery Options",
      "Data Extension Filter criteria",
      "Journey Builder Entry Source mapping",
      "AMPscript Global Variables"
    ],
    answer: 0,
    explanation: "Sender Profiles bundle the From Name, From Address, and Reply-to configurations used across send definitions."
  },

  // Domain 2: SAP & Deliverability
  {
    id: 9,
    domain: "Domain 2: SAP & Deliverability",
    question: "An organization is setting up a private domain for sending emails and hosting CloudPages. Which DNS record is strictly required to verify ownership and ensure proper authentication for email sends using Sender Authentication Package (SAP)?",
    options: [
      "A CAA record restricting certificate authorities from issuing SSL certificates.",
      "CNAME records pointing authentication subdomains to Marketing Cloud servers.",
      "An SRV record mapping SMTP ports directly to the Parent Business Unit.",
      "A PTR record configured on the local corporate firewall."
    ],
    answer: 1,
    explanation: "CNAME records delegate authentication (SPF/DKIM) and link/image wrapping subdomains to Marketing Cloud when self-hosting DNS."
  },
  {
    id: 10,
    domain: "Domain 2: SAP & Deliverability",
    question: "A company is planning an IP warm-up strategy after provisioning a new dedicated IP address in Marketing Cloud. What is the recommended best practice regarding sending volume during the first week?",
    options: [
      "Send the maximum daily volume immediately to establish a high baseline score with ISPs.",
      "Start with a small, highly engaged segment of subscribers and gradually increase daily volume over several weeks.",
      "Send exclusively to inactive subscribers first to clean out hard bounces before emailing active users.",
      "Split volume evenly across all unengaged lists during the first 48 hours."
    ],
    answer: 1,
    explanation: "ISPs evaluate new IPs based on positive engagement signals. Starting with highly engaged subscribers builds sender reputation safely."
  },
  {
    id: 11,
    domain: "Domain 2: SAP & Deliverability",
    question: "A Marketing Cloud Administrator needs to verify whether a subscriber's email address is valid before sending a campaign. Which feature automatically tracks and manages hard and soft bounces?",
    options: [
      "Automatic Bounce Management (ABM)",
      "Contact Builder Validation Rules",
      "AMPscript IsEmail() function",
      "MobileConnect SMS Gateway filter"
    ],
    answer: 0,
    explanation: "Automatic Bounce Management (ABM) classifies and suppresses hard bounces and repeated soft bounces automatically."
  },
  {
    id: 12,
    domain: "Domain 2: SAP & Deliverability",
    question: "An administrator is setting up a new Sender Authentication Package (SAP) and needs to understand what IP addresses are provisioned. What is included in an SAP provisioning package?",
    options: [
      "A dedicated IP address, authenticated sending domain, customized link/image wrapping, and reply mail management (RMM).",
      "Shared SMTP relays and dynamic IP rotation pools.",
      "SMS short code provisioning and push notification certificates.",
      "Active Directory LDAP connectors and SSO metadata."
    ],
    answer: 0,
    explanation: "An SAP provisioning bundle includes a dedicated IP, branded sending domain, wrapped links/images, and RMM."
  },
  {
    id: 13,
    domain: "Domain 2: SAP & Deliverability",
    question: "An administrator is configuring a Sender Authentication Package (SAP) and needs to ensure that automated replies (such as out-of-office messages) are handled correctly. Which component of SAP manages this?",
    options: [
      "Reply Mail Management (RMM)",
      "Automatic Bounce Management",
      "CloudPages Forwarding Engine",
      "Einstein Engagement Scoring"
    ],
    answer: 0,
    explanation: "Reply Mail Management (RMM) automatically processes out-of-office replies, unsubscribes, and manual replies to campaigns."
  },

  // Domain 3: Marketing Cloud Connect
  {
    id: 14,
    domain: "Domain 3: Marketing Cloud Connect",
    question: "When configuring Marketing Cloud Connect in a Multi-Org environment where a single Marketing Cloud tenant connects to multiple Salesforce CRM instances, what is a mandatory prerequisite?",
    options: [
      "Disabling Tracking Extract automation in Automation Studio to avoid API conflicts.",
      "Enabling scoped integration user settings and mapping distinct API user credentials for each connected CRM organization.",
      "Using a single shared CRM system user across all Child Business Units.",
      "Connecting all CRM orgs exclusively to the Parent Business Unit."
    ],
    answer: 1,
    explanation: "In Multi-Org, each Business Unit connects to a specific CRM org and requires its own scoped API user credentials to maintain data isolation."
  },
  {
    id: 15,
    domain: "Domain 3: Marketing Cloud Connect",
    question: "A Marketing Cloud Administrator is troubleshooting an issue where Marketing Cloud Connect tracking data is not syncing back to Salesforce CRM. Which integration component should be verified first for authentication validity?",
    options: [
      "The Marketing Cloud API Integration user and connected app credentials linked in CRM settings.",
      "The local Windows firewall rules on the marketing server.",
      "The Enterprise 2.0 password expiration policy.",
      "The MobilePush APNs certificate expiration date."
    ],
    answer: 0,
    explanation: "Tracking sync relies on valid authenticated connected app credentials between Marketing Cloud and Salesforce CRM."
  },
  {
    id: 16,
    domain: "Domain 3: Marketing Cloud Connect",
    question: "When configuring Marketing Cloud Connect, an administrator needs to map Salesforce CRM Contact/Lead fields to Marketing Cloud subscriber attributes. Where is this mapping performed?",
    options: [
      "Under the Data Extension synchronization settings within Marketing Cloud Connect configuration.",
      "In Content Builder email properties.",
      "Inside Contact Builder Attribute Groups directly.",
      "Via REST API payload headers during send time."
    ],
    answer: 0,
    explanation: "Synchronized Data Extensions map CRM object fields directly into Marketing Cloud data extensions during setup."
  },
  {
    id: 17,
    domain: "Domain 3: Marketing Cloud Connect",
    question: "How frequently can data synchronization be scheduled to poll Salesforce CRM for updates when configuring Synchronized Data Extensions for Marketing Cloud Connect?",
    options: [
      "At intervals such as every 5, 15, 30, 60 minutes, or daily.",
      "Exclusively once every 24 hours.",
      "Real-time streaming via webhooks only.",
      "Every 5 seconds without exception."
    ],
    answer: 0,
    explanation: "Synchronized Data Extensions support flexible polling frequencies ranging from every 5 minutes to daily."
  },
  {
    id: 18,
    domain: "Domain 3: Marketing Cloud Connect",
    question: "When configuring Marketing Cloud Connect, an administrator needs to ensure that tracking data extracted from Marketing Cloud populates correctly in Salesforce CRM reports. Which automated process handles tracking data synchronization?",
    options: [
      "System-managed tracking extract and data retention jobs executed by Marketing Cloud Connect background processes.",
      "Manual CSV uploads performed daily by administrators.",
      "Automation Studio SQL queries run every hour.",
      "CloudPages form submissions triggered by users."
    ],
    answer: 0,
    explanation: "System-managed background jobs handle tracking extracts and push aggregated metrics into CRM objects."
  },
  {
    id: 19,
    domain: "Domain 3: Marketing Cloud Connect",
    question: "An administrator needs to verify that the Marketing Cloud Connect managed package is installed correctly in Salesforce CRM. Where should the administrator check in Salesforce CRM Setup?",
    options: [
      "Installed Packages under Salesforce CRM Setup.",
      "Marketing Cloud Setup > Connected Apps.",
      "Email Studio > Admin > Integrations.",
      "Contact Builder > Data Sources."
    ],
    answer: 0,
    explanation: "Managed packages installed in Salesforce CRM are viewed under Setup > Installed Packages."
  },
  {
    id: 20,
    domain: "Domain 3: Marketing Cloud Connect",
    question: "An administrator is setting up Marketing Cloud Connect and needs to verify that Sales and Service Cloud users can initiate Marketing Cloud journeys directly from CRM. What must be configured?",
    options: [
      "Marketing Cloud connector user permissions and permission sets assigned within Salesforce CRM.",
      "FTP folder permissions in Enhanced FTP.",
      "Subscriber Key mapping in Contact Builder.",
      "SMS short code keywords in MobileConnect."
    ],
    answer: 0,
    explanation: "Salesforce CRM users need specific Marketing Cloud permission sets assigned in CRM to initiate journeys and sends from CRM."
  },

  // Domain 4: Security & Setup
  {
    id: 21,
    domain: "Domain 4: Security & Setup",
    question: "A Marketing Cloud Administrator needs to ensure that users' inactive sessions are terminated automatically after 15 minutes and that passwords expire every 90 days. Where should these security policies be configured?",
    options: [
      "Email Studio > Admin > Send Management",
      "Setup > Security > Security Settings",
      "Contact Builder > Data Sources > Security",
      "Setup > Users > Roles"
    ],
    answer: 1,
    explanation: "Setup > Security > Security Settings centralizes session timeout, password complexity, expiration policies, and lockout thresholds."
  },
  {
    id: 22,
    domain: "Domain 4: Security & Setup",
    question: "A company newly provisioned with Marketing Cloud Engagement wants a guided interactive checklist to set up initial configurations, users, and core messaging channels. Which native feature should the administrator use?",
    options: [
      "Setup Assistant",
      "Journey Builder Wizard",
      "Contact Builder Configuration Tool",
      "Migration Tool"
    ],
    answer: 0,
    explanation: "Setup Assistant provides interactive checklists and guidance for initial account configuration."
  },
  {
    id: 23,
    domain: "Domain 4: Security & Setup",
    question: "A Marketing Cloud Administrator needs to restrict backend login access so that administrative staff can only log in from the corporate office IP range (192.168.10.0/24). Where must this rule be configured?",
    options: [
      "Setup > Security > Login IP Ranges",
      "Email Studio > Send Definitions > IP Filtering",
      "Data Extension Security Settings",
      "FTP User Management"
    ],
    answer: 0,
    explanation: "Login IP Ranges under Setup > Security enforce strict IP whitelisting for backend user authentication."
  },
  {
    id: 24,
    domain: "Domain 4: Security & Setup",
    question: "A Marketing Cloud Administrator needs to review the history of administrative actions, user logins, and configuration changes made within the account over the past 30 days. Which tool should be accessed?",
    options: [
      "Audit Trail under Setup",
      "Automation Studio Error Logs",
      "Contact Builder Delete Summary",
      "Tracking Data Extract Reports"
    ],
    answer: 0,
    explanation: "Audit Trail tracks administrative actions, configuration changes, and login history in Marketing Cloud."
  },
  {
    id: 25,
    domain: "Domain 4: Security & Setup",
    question: "An administrator needs to encrypt files transferred to the Marketing Cloud Enhanced FTP using PGP. Where must the public PGP key be managed in Marketing Cloud?",
    options: [
      "Key Management under Setup",
      "Content Builder Security Settings",
      "Data Extension Encryption Properties",
      "MobileConnect Gateway Settings"
    ],
    answer: 0,
    explanation: "Key Management under Setup stores public PGP keys used for file encryption and decryption in Automation Studio."
  },
  {
    id: 26,
    domain: "Domain 4: Security & Setup",
    question: "An administrator needs to ensure that users logging into Marketing Cloud are authenticated using their corporate single sign-on (SSO) provider (e.g., Okta or Azure AD). Where should SSO be configured?",
    options: [
      "Setup > Security > Single Sign-On Settings",
      "Email Studio > Account Settings > Authentication",
      "Setup > Users > Security Policy",
      "Installed Packages > SSO Component"
    ],
    answer: 0,
    explanation: "Single Sign-On settings under Setup > Security manage SAML metadata and identity provider integrations."
  },
  {
    id: 27,
    domain: "Domain 4: Security & Setup",
    question: "An administrator notices that a user account has been locked out due to multiple consecutive failed login attempts. Where can the administrator unlock this user in Marketing Cloud Setup?",
    options: [
      "Setup > Users > Users, select the locked user, and click Unlock.",
      "Email Studio > Subscribers > Unblock User.",
      "Security Settings > Active Sessions > Reset.",
      "Contact Builder > Contacts > Unlock."
    ],
    answer: 0,
    explanation: "Administrators can unlock locked user accounts directly from Setup > Users > Users."
  },
  {
    id: 28,
    domain: "Domain 4: Security & Setup",
    question: "An administrator needs to ensure that data extension fields containing Personally Identifiable Information (PII) are encrypted at rest. Which Marketing Cloud feature provides enterprise-grade data encryption?",
    options: [
      "Transparent Data Encryption (TDE) / Enterprise Encryption",
      "Email Studio Base64 Encoding",
      "AMPscript Hash Function",
      "SHA-256 Checksums"
    ],
    answer: 0,
    explanation: "Transparent Data Encryption (TDE) provides database-level encryption at rest for enterprise accounts."
  },
  {
    id: 29,
    domain: "Domain 4: Security & Setup",
    question: "An administrator is setting up a new Marketing Cloud account and needs to configure system notifications for security alerts, billing notices, and technical contacts. Where should these notification email addresses be maintained?",
    options: [
      "Administration > Account Settings > Notification Email Address",
      "Setup > Users > System Contacts",
      "Email Studio > Send Management > Alerts",
      "Contact Builder > Admin > Notifications"
    ],
    answer: 0,
    explanation: "Notification email addresses for system alerts and billing are maintained in Account Settings."
  },

  // Domain 5: Installed Packages & API
  {
    id: 30,
    domain: "Domain 5: Installed Packages & API",
    question: "An external application needs to send transactional emails via the Marketing Cloud REST API following the principle of least privilege. How should the Installed Package be configured?",
    options: [
      "Create a Legacy Package with full Administrator scope across all Business Units.",
      "Create an API Integration component of type Server-to-Server with specific scopes for email and restrict access to required Business Units.",
      "Configure a Web App component with public read/write scopes on All Subscribers.",
      "Share the Marketing Cloud Connect API user password with the external app."
    ],
    answer: 1,
    explanation: "Server-to-Server API Integrations allow granular OAuth 2.0 scopes and Business Unit access controls following least-privilege security."
  },
  {
    id: 31,
    domain: "Domain 5: Installed Packages & API",
    question: "An administrator wants to ensure that all API calls made to Marketing Cloud adhere to secure token-based authentication. Which authentication standard does Marketing Cloud use for REST API requests?",
    options: [
      "OAuth 2.0 access tokens generated via Installed Package authentication endpoints.",
      "Basic HTTP Authentication using username and password.",
      "NTLM challenge-response tokens.",
      "Static API keys passed in URL parameters."
    ],
    answer: 0,
    explanation: "Marketing Cloud REST and SOAP APIs utilize OAuth 2.0 access tokens generated via Installed Packages."
  },

  // Domain 6: Mobile Channels (MobileConnect & MobilePush)
  {
    id: 32,
    domain: "Domain 6: Mobile Channels",
    question: "When attempting to create a custom keyword in MobileConnect on a shared short code, an administrator receives an error stating the keyword is unavailable. What is the most likely cause?",
    options: [
      "Keywords on shared short codes must be at least 12 characters long.",
      "The keyword is already registered by another tenant on the same shared short code or is a reserved system keyword.",
      "MobileConnect requires a dedicated SAP before creating any SMS keyword.",
      "Keywords can only be created from the Parent Business Unit."
    ],
    answer: 1,
    explanation: "Shared short codes share a single keyword namespace across all tenants using that number; reserved words like STOP or HELP also cannot be claimed."
  },
  {
    id: 33,
    domain: "Domain 6: Mobile Channels",
    question: "When configuring MobilePush for a mobile application integration, what security artifact is required from Apple Push Notification service (APNs) and Firebase Cloud Messaging (FCM) respectively to connect Marketing Cloud to mobile gateways?",
    options: [
      "An Apple APNs Certificate (or Auth Key) and a Firebase Server Key (or JSON configuration file).",
      "OAuth 2.0 client secrets and SSL certificates.",
      "SMTP server IP addresses and MX records.",
      "PGP public keys and SFTP login credentials."
    ],
    answer: 0,
    explanation: "MobilePush configuration requires Apple APNs credentials and Firebase (FCM) server configuration to send push notifications."
  },
  {
    id: 34,
    domain: "Domain 6: Mobile Channels",
    question: "An administrator is configuring MobileConnect to send automated SMS alerts when a subscriber texts a keyword. Which message type in MobileConnect is best suited for a single-response automated text confirmation?",
    options: [
      "Text Response message type",
      "Outbound Broadcast message",
      "Multi-Select Opt-in Campaign",
      "SMS Survey Campaign"
    ],
    answer: 0,
    explanation: "Text Response templates in MobileConnect handle automated keyword triggers and replies."
  },

  // Domain 7: Automation Studio
  {
    id: 35,
    domain: "Domain 7: Automation Studio",
    question: "An administrator needs to automate a daily file import from an external SFTP server, decrypt the file using a PGP key, import the records into a Data Extension, and trigger a campaign journey. Which tool in Marketing Cloud should coordinate this entire workflow?",
    options: [
      "Contact Builder",
      "Automation Studio",
      "Content Builder",
      "Audience Builder"
    ],
    answer: 1,
    explanation: "Automation Studio orchestrates multi-step ETL workflows including File Transfers, Import File activities, SQL queries, and Journey Entry events."
  },
  {
    id: 36,
    domain: "Domain 7: Automation Studio",
    question: "An administrator notices that a running automation in Automation Studio has failed due to a missing source file on the Marketing Cloud Enhanced FTP. What is the best way to handle future occurrences of this specific file delay?",
    options: [
      "Configure a File Transfer Activity with a wait or check condition, or use an Automation Error Notification email alert.",
      "Delete the data extension and recreate it manually every morning.",
      "Increase the database storage limit in account settings.",
      "Switch the automation schedule from hourly to real-time streaming."
    ],
    answer: 0,
    explanation: "File Transfer wait conditions and Error Notifications help gracefully handle delayed file arrivals on Enhanced FTP."
  },
  {
    id: 37,
    domain: "Domain 7: Automation Studio",
    question: "An administrator needs to run a complex SQL query in Automation Studio that joins multiple data extensions and populates a target data extension. The query frequently times out. What is the most effective administrative optimization?",
    options: [
      "Ensure proper indexing on join and filter fields in the target Data Extension and limit data scope.",
      "Convert the SQL query into an AMPscript block inside an email template.",
      "Increase the query timeout threshold in Setup > Automation Settings.",
      "Run the query during peak business hours to utilize server CPU spikes."
    ],
    answer: 0,
    explanation: "Properly indexing data extension fields and optimizing SQL query logic prevents execution timeouts in Automation Studio."
  },
  {
    id: 38,
    domain: "Domain 7: Automation Studio",
    question: "An administrator is setting up an automation that runs every 6 hours. However, due to heavy data loads, a run takes longer than 6 hours and overlaps with the next scheduled run. What behavior does Automation Studio exhibit?",
    options: [
      "Automation Studio queues the overlapping run and executes it once the current run finishes.",
      "Automation Studio terminates the running job immediately and starts the new schedule.",
      "Automation Studio throws a critical error and disables the automation permanently.",
      "Automation Studio splits the workload across two parallel threads."
    ],
    answer: 0,
    explanation: "Automation Studio queues overlapping automation runs so that jobs execute sequentially without collision."
  },
  {
    id: 39,
    domain: "Domain 7: Automation Studio",
    question: "An administrator needs to create an automation that runs only when a specific file arrives on the Enhanced FTP. Which automation source trigger should be used?",
    options: [
      "File Drop automation trigger",
      "Scheduled time-based trigger",
      "API REST trigger endpoint",
      "Manual execution button"
    ],
    answer: 0,
    explanation: "File Drop triggers initiate automations automatically the moment a designated file lands on the Enhanced FTP."
  },
  {
    id: 40,
    domain: "Domain 7: Automation Studio",
    question: "An administrator notices that a data extension import activity in Automation Studio is failing because incoming CSV files use a semicolon (;) as a delimiter instead of a comma. Where is the file delimiter configured?",
    options: [
      "In the Import File Activity configuration wizard.",
      "In Contact Builder Data Source properties.",
      "In FTP Server configuration settings.",
      "Via REST API header parameters only."
    ],
    answer: 0,
    explanation: "Import File activities allow defining custom file delimiters such as commas, tabs, or semicolons."
  },
  {
    id: 41,
    domain: "Domain 7: Automation Studio",
    question: "An administrator needs to ensure that contacts who have been inactive in journeys for more than 180 days are automatically removed from active data extensions. Which SQL query construct should be used in Automation Studio?",
    options: [
      "A DELETE or SELECT INTO query filtering by contact last activity date older than 180 days.",
      "An automated Contact Delete API payload.",
      "A manual filter in Email Studio tracking reports.",
      "An Enterprise-level unsubscription toggle."
    ],
    answer: 0,
    explanation: "SQL Query activities using SELECT statements into data extensions or data cleansing tools manage data lifecycle maintenance."
  },
  {
    id: 42,
    domain: "Domain 7: Automation Studio",
    question: "An administrator needs to export tracking data from Marketing Cloud to an external data warehouse daily. Which Automation Studio activity should be used to generate the extract file?",
    options: [
      "Data Extract activity",
      "File Transfer activity",
      "Import File activity",
      "SQL Query activity"
    ],
    answer: 0,
    explanation: "Data Extract activities generate text/CSV files from tracking data views for external reporting."
  },
  {
    id: 43,
    domain: "Domain 7: Automation Studio",
    question: "An administrator needs to monitor the real-time processing status and error logs of active automations in Automation Studio. Which view or dashboard should be checked?",
    options: [
      "The Overview tab in Automation Studio.",
      "Setup > Security > Audit Trail.",
      "Contact Builder > Summary Dashboard.",
      "Email Studio > Tracking > Overview."
    ],
    answer: 0,
    explanation: "The Overview tab in Automation Studio provides real-time monitoring of running, queued, and failed automations."
  },
  {
    id: 44,
    domain: "Domain 7: Automation Studio",
    question: "An administrator needs to schedule a recurring data import from an external SFTP server into Marketing Cloud. Which combination of Automation Studio activities is required?",
    options: [
      "A File Transfer activity (to move/decrypt the file) followed by an Import File activity.",
      "A SQL Query activity followed by a Data Extract activity.",
      "An Email Send definition linked to a MobileConnect keyword.",
      "A CloudPages Code Snippet and REST API trigger."
    ],
    answer: 0,
    explanation: "File Transfer moves/decrypts files from safehouse to FTP drop, and Import File brings data into a Data Extension."
  },

  // Domain 8: Journey Builder
  {
    id: 45,
    domain: "Domain 8: Journey Builder",
    question: "An administrator is setting up Journey Builder and needs to ensure that contacts enter a welcome journey only once, even if they qualify multiple times. Which setting should be configured on the entry source?",
    options: [
      "Set the Re-entry Qualification rule to No Re-entry.",
      "Set Re-entry Qualification to Re-entry Anytime.",
      "Configure a Wait By Duration activity of 365 days.",
      "Enable Exit Criteria based on email open status."
    ],
    answer: 0,
    explanation: "Setting Re-entry Qualification to 'No Re-entry' ensures a contact can only enter the journey once."
  },
  {
    id: 46,
    domain: "Domain 8: Journey Builder",
    question: "When configuring a Journey Builder Email Activity, an administrator can choose between different delivery options such as Multi-Read or optimized send pacing. What is the main benefit of send pacing in Journey Builder?",
    options: [
      "It spreads out message delivery over a specific timeframe to prevent overwhelming subscriber inbox servers or internal systems.",
      "It accelerates email sends to deliver all messages within 1 second.",
      "It converts HTML emails into plain text automatically for mobile users.",
      "It routes emails through external SMTP servers."
    ],
    answer: 0,
    explanation: "Send pacing distributes message volume gradually to maintain optimal server load and deliverability."
  },
  {
    id: 47,
    domain: "Domain 8: Journey Builder",
    question: "An administrator is setting up Journey Builder and wants to use a Salesforce CRM Campaign as the entry source. What is required before the CRM Campaign can be selected in Journey Builder?",
    options: [
      "Marketing Cloud Connect must be fully configured, and the CRM Campaign object must be enabled in Synchronized Data Extensions.",
      "An Enhanced FTP account with PGP encryption keys.",
      "A dedicated short code configured in MobileConnect.",
      "An active SAP with Reply Mail Management."
    ],
    answer: 0,
    explanation: "CRM Campaign entry sources require Marketing Cloud Connect and synchronized CRM objects."
  },
  {
    id: 48,
    domain: "Domain 8: Journey Builder",
    question: "An administrator is configuring a Journey Builder Wait By Duration activity. A contact enters the wait step on a Friday afternoon with a duration of 3 days. When will the contact exit the wait step?",
    options: [
      "On Monday afternoon, exactly 72 hours later.",
      "On Saturday morning at midnight.",
      "On Sunday evening during system maintenance.",
      "On Tuesday morning after business hours."
    ],
    answer: 0,
    explanation: "Wait By Duration calculates exact elapsed time (hours/days) from the moment of entry."
  },
  {
    id: 49,
    domain: "Domain 8: Journey Builder",
    question: "An administrator is setting up a Journey Builder Decision Split. Contacts should branch based on whether their lifetime spend attribute is greater than $500. Where is this evaluation criteria configured?",
    options: [
      "In the Decision Split configuration pane using contact attribute data from the data model.",
      "In Automation Studio SQL queries.",
      "In Email Studio Sender Profile settings.",
      "Via Contact Delete API payloads."
    ],
    answer: 0,
    explanation: "Decision Splits evaluate contact attributes and data extensions linked in the data model to branch journeys."
  },
  {
    id: 50,
    domain: "Domain 8: Journey Builder",
    question: "An administrator is reviewing journey performance and notices that contacts are exiting a journey prematurely. Which Journey Builder feature should be checked to identify why contacts exited?",
    options: [
      "Exit Criteria configuration settings.",
      "Automation Studio error logs.",
      "Email Studio tracking hard bounce rates.",
      "Setup Assistant progress checklists."
    ],
    answer: 0,
    explanation: "Journey Exit Criteria determines when active contacts are automatically forced out of a journey."
  },

  // Domain 9: Data Extensions & Contact Builder
  {
    id: 51,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "An administrator is configuring a Data Extension that will store sensitive customer profile data and needs to ensure that old records are automatically purged after 180 days based on the record creation date. Which Data Extension property should be configured?",
    options: [
      "Nullable Field Constraint",
      "Data Retention Setting configured with a rolling 180-day deletion rule",
      "Sendable Relationship Mapping",
      "Primary Key Auto-Increment"
    ],
    answer: 1,
    explanation: "Data Retention policies automatically purge individual records or entire Data Extensions after a defined retention period."
  },
  {
    id: 52,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "When configuring Contact Builder to establish a unified view of a customer across multiple communication channels, what is the primary function of an Attribute Group?",
    options: [
      "To logically group related Data Extensions and define cardinal relationships linked via the Subscriber Key or Contact Key.",
      "To store backup copies of HTML email templates.",
      "To restrict user access privileges across business units.",
      "To encrypt Enhanced FTP files using PGP."
    ],
    answer: 0,
    explanation: "Attribute Groups in Contact Builder organize related data extensions and establish relational links for segmentation and journeys."
  },
  {
    id: 53,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "An enterprise account utilizes multiple Child Business Units. A new master Data Extension created in the Parent Business Unit needs to be shared and populated with data accessible to all Child Business Units. Which feature should be used?",
    options: [
      "Configure the Data Extension as Shared and set appropriate sharing permissions in Data Extension Sharing.",
      "Export the data to CSV and upload it manually into every child account daily.",
      "Send an email copy of the table to all child administrators.",
      "Use Contact Builder to duplicate records across all business units."
    ],
    answer: 0,
    explanation: "Data Extension sharing allows parent-level data extensions to be shared securely with child business units."
  },
  {
    id: 54,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "What is the primary purpose of executing a Contact Delete request via Contact Builder rather than simply deleting a subscriber from an email list?",
    options: [
      "It only pauses email sends for 30 days while keeping tracking history intact.",
      "It removes contact records and associated attribute data across all channels (Email, Mobile, Journey Builder) to comply with privacy regulations like GDPR/CCPA.",
      "It exports the subscriber record to Salesforce CRM before archiving.",
      "It resets the subscriber status from Held to Active."
    ],
    answer: 1,
    explanation: "Contact Delete removes personal data across all channels and sendable Data Extensions in Marketing Cloud to satisfy privacy compliance."
  },
  {
    id: 55,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "To ensure that tracking data, unsubscribes, and personalization links correctly tie back to the unique subscriber profile, why is it critical to correctly map the Data Extension Field to the Subscriber Key?",
    options: [
      "To ensure that tracking data, unsubscribes, and personalization links correctly tie back to the unique subscriber profile.",
      "To speed up Enhanced FTP file transfers.",
      "To satisfy mobile short code keyword availability rules.",
      "To encrypt database records at rest."
    ],
    answer: 0,
    explanation: "The Subscriber Key is the unique identifier linking sendable data extensions to tracking history and contact records."
  },
  {
    id: 56,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "An administrator is reviewing account storage limits and notices that data extensions are consuming excessive space. What is the most efficient way to clean up temporary staging data automatically?",
    options: [
      "Configure native Data Retention policies on the staging Data Extensions to automatically delete records after a short interval (e.g., 3 days).",
      "Delete the entire Marketing Cloud account and re-provision.",
      "Manually clear rows using Excel CSV uploads every hour.",
      "Disable Automation Studio execution logs."
    ],
    answer: 0,
    explanation: "Data Retention settings on staging data extensions automatically purge old staging records to conserve storage."
  },
  {
    id: 57,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "When configuring an email send in Email Studio, an administrator selects a Sendable Data Extension as the audience. What determines which field in the Data Extension is used as the email address destination?",
    options: [
      "The data extension field designated as the Email Address data type during data extension creation.",
      "The field named 'SubscriberKey' by default.",
      "The primary key column in the data extension.",
      "The first column in the table schema."
    ],
    answer: 0,
    explanation: "Sendable data extensions require mapping a designated Email Address field to route messages."
  },
  {
    id: 58,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "An administrator needs to create a relational data model in Contact Builder where one customer can have multiple active vehicle records (One-to-Many relationship). How should this relationship be configured in an Attribute Group?",
    options: [
      "Link the Customer Data Extension to the Vehicle Data Extension using a 1-to-Many cardinality based on the Contact Key.",
      "Combine both tables into a single flat CSV file.",
      "Use a Many-to-Many bridging table with no primary keys.",
      "Configure a Send Definition suppression list."
    ],
    answer: 0,
    explanation: "Contact Builder cardinality settings allow defining 1-to-1 or 1-to-Many relationships between attribute groups."
  },
  {
    id: 59,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "An administrator is configuring a Data Extension and wants to ensure that a specific field (such as SubscriberKey) cannot accept null or empty values. Which property should be set on the field?",
    options: [
      "Uncheck the Nullable checkbox (making the field required).",
      "Set the data type to Boolean.",
      "Enable PGD Encryption on the column.",
      "Mark the field as Non-Sendable."
    ],
    answer: 0,
    explanation: "Unchecking the 'Nullable' property ensures that records cannot be added with empty values in that field."
  },
  {
    id: 60,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "An administrator is configuring a Data Extension that will be used across multiple Child Business Units in an Enterprise 2.0 account. Where should the Data Extension be created to ensure seamless sharing?",
    options: [
      "In the Shared Items folder of the Parent Business Unit.",
      "In the local FTP drop directory.",
      "Inside the MobileConnect keyword repository.",
      "Within Salesforce CRM Reports folder."
    ],
    answer: 0,
    explanation: "Shared data extensions created in the Parent Business Unit's Shared Items folder can be accessed across child business units."
  },
  {
    id: 61,
    domain: "Domain 9: Data Extensions & Contact Builder",
    question: "When configuring Contact Builder, what is the primary role of the Contact Key?",
    options: [
      "To uniquely identify an individual across all communication channels and data extensions within Marketing Cloud.",
      "To encrypt FTP credentials securely.",
      "To authenticate API REST calls with OAuth 2.0.",
      "To track email open rates in real time."
    ],
    answer: 0,
    explanation: "The Contact Key is the foundational unique identifier linking all channel interactions to a single profile in Contact Builder."
  },

  // Domain 10: Content & CloudPages
  {
    id: 62,
    domain: "Domain 10: Content & CloudPages",
    question: "An administrator is setting up a new CloudPage and needs to ensure that visitor form submissions are securely passed into a Data Extension. Which tool or activity on the CloudPage handles this data capture?",
    options: [
      "CloudPages Code Snippets utilizing AMPscript (InsertData or UpsertData) or Server-Side JavaScript (SSJS).",
      "Automation Studio FTP File Transfer activity.",
      "Email Studio Automatic Bounce Management.",
      "MobileConnect SMS text response filter."
    ],
    answer: 0,
    explanation: "CloudPages code snippets use AMPscript functions like InsertData or UpsertData to process and store form submissions in Data Extensions."
  },
  {
    id: 63,
    domain: "Domain 10: Content & CloudPages",
    question: "An administrator wants to ensure that all emails sent from the Marketing Cloud account include a specific corporate footer containing legal compliance information. Which feature should be used?",
    options: [
      "Header and Footer management in Email Studio (or content blocks via Content Builder).",
      "Automation Studio SQL query filter.",
      "Contact Builder attribute mapping.",
      "MobilePush APNs certificate configuration."
    ],
    answer: 0,
    explanation: "Account-level Headers and Footers or reusable Content Builder blocks ensure consistent legal compliance footers across email sends."
  },
  {
    id: 64,
    domain: "Domain 10: Content & CloudPages",
    question: "An administrator needs to test an AMPscript block inside an email template before deploying it to production. Which tool in Content Builder or Email Studio allows previewing personalization and AMPscript rendering?",
    options: [
      "The Preview and Test tab.",
      "The Automation Studio Overview monitor.",
      "The Contact Builder Cardinality inspector.",
      "The Setup Assistant checklist."
    ],
    answer: 0,
    explanation: "The Preview and Test tab in Content Builder allows administrators to test personalization strings and AMPscript logic against sample subscriber data."
  },
  {
    id: 65,
    domain: "Domain 10: Content & CloudPages",
    question: "When configuring a Send Definition in Email Studio, what is the purpose of a Suppression List?",
    options: [
      "To automatically exclude specific subscribers (such as complainers or opt-outs) from receiving that specific send without removing them from the data extension.",
      "To accelerate message delivery speeds across ISPs.",
      "To encrypt subscriber email addresses using PGP keys.",
      "To synchronize CRM contacts with Marketing Cloud."
    ],
    answer: 0,
    explanation: "Suppression lists dynamically exclude specific groups of subscribers from a send without altering the master audience data extension."
  }
];