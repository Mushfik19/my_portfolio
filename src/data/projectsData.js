const BASE = import.meta.env.BASE_URL;

export const PROJECT_CATEGORIES = [
  "All",
  "Civic Technology",
  "AI & Machine Learning",
  "Computer Vision / Medical AI",
  "NLP & Semantic Search",
  "Full-Stack Development",
  "Cybersecurity & Labs",
  "Academic Software",
  "Exploring",
];

export const projectsData = [
  {
    id: "nagorik-sathi-ai",
    slug: "nagorik-sathi-ai",
    title: "Nagorik Sathi AI (CivicSync)",
    shortDescription:
      "Municipal civic service coordination and grievance verification platform featuring multimodal Bangla intake, spatial Haversine resolution audit, and tamper-evident SHA-256 hash chaining.",
    overview:
      "Nagorik Sathi AI transforms municipal issue resolution from disconnected departmental silos into an explainable, multi-department case coordination workflow. Citizens submit grievances with live camera evidence and high-accuracy GPS coordinates, while the platform deterministically sequences municipal tasks, verifies physical resolutions via spatial distance audits, and maintains an immutable cryptographic audit trail.",
    category: "Civic Technology",
    status: "Prototype",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "PostGIS",
      "Celery",
      "Redis",
      "OpenStreetMap",
      "SHA-256",
    ],
    problemStatement:
      "Municipal issue resolution in major city corporations is plagued by fragmented departmental communication, duplicate reports, lack of physical verification for completed work, and citizens' inability to track inter-departmental dependencies.",
    verifiedFeatures: [
      "Multimodal Bangla Intake supporting Bangla text, audio voice note, and geotagged photographic evidence.",
      "Strict Hardware GPS & Live Camera Pipeline: enforces environment-camera capture and rejects mocked/fictional coordinates.",
      "Server-side Haversine Spatial Distance Verification (<=50m threshold) comparing resolution proof against original issue location.",
      "Cryptographic Append-Only Audit Trail chaining sequential SHA-256 hashes of every state change, assignment, and rating.",
      "80% Confidence Safety Gate: routing edge cases or safety hazards directly to human triage coordinators.",
      "Multi-Department Workflow Sequencing with explicit prerequisite task locking and citizen reopen rights.",
    ],
    myContribution:
      "Designed and implemented the core coordination architecture, Haversine spatial verification engine, chained audit logging algorithm, and interactive citizen/admin dashboards.",
    architecture:
      "Client PWA (React + TypeScript) -> FastAPI REST Gateway -> Spatial Verification Service -> PostgreSQL/PostGIS & Redis Task Queue -> Chained Audit Ledger.",
    methodsOrApproach:
      "Applied strict zero-trust geospatial verification combined with deterministic rule-based department routing and cryptographic hash chaining for non-repudiation.",
    results:
      "Functional working prototype with automated test suites verifying Haversine spatial boundary enforcement, duplicate clustering, and audit ledger integrity.",
    limitations:
      "Currently tested in simulated municipal Ward scenarios; municipal pilot rollout requires city corporation infrastructure integration.",
    githubUrl: "https://github.com/Mushfik19/Nagoric-Sathi--AI",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/CivicSync-municipal-civic-services-platform",
    image: `${BASE}projects/neuro.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "ai-resume-job-matcher",
    slug: "ai-resume-job-matcher",
    title: "AI Resume–Job Matcher",
    shortDescription:
      "Production-grade NLP matching engine evaluating resume-job alignment via in-memory document parsing, hybrid spaCy taxonomy extraction, and Sentence-Transformer semantic embeddings.",
    overview:
      "A full-stack intelligent recruitment analytics system that parses PDF/DOCX resumes entirely in-memory, extracts skills using a curated taxonomy combined with word-boundary regex patterns, and computes dense semantic alignment against target job descriptions using Sentence-Transformers (all-MiniLM-L6-v2).",
    category: "NLP & Semantic Search",
    status: "Completed",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "FastAPI",
      "React",
      "TypeScript",
      "Python",
      "spaCy",
      "Sentence-Transformers",
      "PyMuPDF",
      "Docker",
    ],
    problemStatement:
      "Traditional keyword-matching applicant tracking systems fail on synonyms, misinterpret context, and expose applicant PII through unnecessary disk storage.",
    verifiedFeatures: [
      "In-Memory Document Ingestion: parses PDF and DOCX safely without persisting candidate PII to disk.",
      "Hybrid spaCy Skill Extractor: PhraseMatcher combined with boundary regex for symbols (C++, C#, .NET, Node.js).",
      "Canonical Skill Normalization: maps variations (e.g. ReactJS -> React, k8s -> Kubernetes).",
      "Requirement Importance Detection: categorizes criteria into Required vs. Preferred based on lexical markers.",
      "Sentence-Transformer Embeddings (all-MiniLM-L6-v2) for dense semantic cosine similarity.",
      "Weighted Alignment Scoring: 60% Semantic + 40% Skill Match, with honest interpretive tiers.",
    ],
    myContribution:
      "Architected the full-stack system, engineered the NLP taxonomy extraction rules, configured the Sentence-Transformer lifespan singleton service, and created the React dashboard.",
    architecture:
      "Browser UI -> FastAPI Ingestion -> In-Memory Parser (PyMuPDF) -> spaCy + SBERT Pipeline -> Weighted Scoring Engine -> JSON Response.",
    methodsOrApproach:
      "Combined domain-specific rule-based taxonomy normalization with deep dense semantic vectors to achieve both precise keyword recognition and conceptual understanding.",
    results:
      "Accurate skill extraction across 200+ technology terms, sub-second inference latency, and explainable gap analysis.",
    limitations:
      "Document ingestion is optimized for single-candidate evaluation rather than bulk enterprise batch streaming.",
    githubUrl: "https://github.com/Mushfik19/AI-Resume-Job-Matcher",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/AI-Resume-Job-Matcher#readme",
    image: `${BASE}projects/portfolio.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "pneumovision-ai",
    slug: "pneumovision-ai",
    title: "PneumoVision AI — Radiograph Analysis & Grad-CAM XAI",
    shortDescription:
      "Deep learning radiograph screening platform using fine-tuned DenseNet121 with integrated Grad-CAM Explainable AI (XAI) for pulmonary opacity visual localization.",
    overview:
      "PneumoVision AI is an explainable medical-AI web platform and triage simulation tool. It leverages a fine-tuned DenseNet121 convolutional neural network to classify chest X-ray radiographs (Normal vs. Pneumonia) and computes Gradient-weighted Class Activation Mapping (Grad-CAM) overlays so clinicians and researchers can visualize the exact anatomical regions driving model predictions.",
    category: "Computer Vision / Medical AI",
    status: "Research / Experiment",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "TensorFlow",
      "Keras",
      "DenseNet121",
      "Grad-CAM",
      "FastAPI",
      "React",
      "OpenCV",
      "Python",
    ],
    problemStatement:
      "Standard deep learning medical imaging models act as uninterpretable black boxes, potentially learning background scanner artifacts rather than true pathological opacities.",
    verifiedFeatures: [
      "DenseNet121 Convolutional Backbone: fine-tuned for high-sensitivity binary screening on chest radiographs.",
      "Grad-CAM Explainable AI: gradient tracking via tf.GradientTape targeting the final convolutional feature layer (relu / conv5_block16).",
      "Medical Heatmap Generation: OpenCV JET colormap blending directly over the input radiograph.",
      "Multi-View Interface: Attention Overlay view, Side-by-Side comparison, and original radiograph inspection.",
      "Graceful Degradation: model prediction continues safely even if heatmap rendering experiences memory throttling.",
    ],
    myContribution:
      "Implemented the Grad-CAM gradient calculation pipeline, dynamic layer discovery, FastAPI inference API, and interactive multi-view React frontend.",
    architecture:
      "Radiograph Input (224x224) -> DenseNet121 Feature Extractor -> Dense Classifier -> Grad-CAM GradientTape -> Colormap Blending -> React Viewer.",
    methodsOrApproach:
      "Extracted activation maps from final convolutional blocks, computed gradients with respect to the target class, and applied global average pooling with ReLU rectification.",
    results:
      "Demonstrated accurate anatomical localization of pulmonary consolidations and infiltrates across test chest radiographs.",
    limitations:
      "Intended for research, education, and triage simulation only. Not clinically validated, CE-marked, or FDA-cleared for autonomous diagnostic decision making.",
    githubUrl:
      "https://github.com/Mushfik19/Pneumonia-detection-using-Densnet121-and-GRAD-CAM",
    liveDemoUrl: "",
    documentationUrl:
      "https://github.com/Mushfik19/Pneumonia-detection-using-Densnet121-and-GRAD-CAM#readme",
    image: `${BASE}projects/neuro.png`,
    isMedicalAI: true,
    disclaimer:
      "RESEARCH & EDUCATIONAL USE ONLY: Model outputs and Grad-CAM visualizations are intended strictly for computational decision-support and interpretability research. This system is NOT a clinically validated diagnostic tool and must never replace qualified radiological review.",
  },
  {
    id: "icadhi-management-system",
    slug: "icadhi-management-system",
    title: "ICADHI 2026 — Conference Management System",
    shortDescription:
      "End-to-end conference management and paper review coordination portal for the International Conference on Advances in Distributed Computing and Artificial Intelligence 2026.",
    overview:
      "The official conference coordination system built for ICADHI 2026. Designed to manage paper submission workflows, author registrations, track assignments, peer reviewer scoring sheets, automated email notifications, and camera-ready paper delivery schedules.",
    category: "Academic Software",
    status: "Completed",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
      "Multer",
      "REST API",
    ],
    problemStatement:
      "Academic conferences struggle with fragmented spreadsheets for track management, author notification delays, uncoordinated reviewer allocations, and missed camera-ready submission deadlines.",
    verifiedFeatures: [
      "Role-Based Access Control: Author, Reviewer, Track Chair, and Organizing Joint Secretary administrative access.",
      "Paper Submission Gateway: Multi-track manuscript upload with PDF validation and abstract indexing.",
      "Reviewer Assignment & Scoring Engine: Double-blind peer review scoring with rubric criteria.",
      "Automated Decision Pipelines: Batch acceptance/rejection letter dispatch and revision requests.",
      "Live Schedule & Session Program Builder: Interactive keynote and technical session timeline.",
    ],
    myContribution:
      "Architected the full-stack portal as Organizing Joint Secretary, engineered author submission endpoints, designed the reviewer evaluation dashboard, and deployed the production portal.",
    architecture:
      "React Client Dashboard -> Express REST API -> MongoDB Atlas Datastore -> Cloud Object Storage (PDFs).",
    methodsOrApproach:
      "Implemented structured document pipelines with role-gated access control and audit-logged manuscript status changes.",
    results:
      "Successfully deployed conference management infrastructure supporting international author submissions and committee workflows.",
    limitations:
      "Direct integration with IEEE Xplore publishing FTP pipelines is slated for final post-conference camera-ready aggregation.",
    githubUrl: "https://github.com/Mushfik19/ICADHI-Management-System",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/ICADHI-2026-",
    image: `${BASE}projects/topology.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "nexamart-retail-pos",
    slug: "nexamart-retail-pos",
    title: "NexaMart Retail Management & POS System",
    shortDescription:
      "Full-stack retail operations platform built with Next.js (App Router) and Prisma ORM, featuring multi-store inventory, barcode POS, and role-based access control.",
    overview:
      "NexaMart is a modern retail management and Point of Sale (POS) system engineered for high-volume store environments. It supports centralized multi-store management, barcode scanning, stock transfer coordination between warehouses, cash register shift reconciliations, and granular RBAC permissions.",
    category: "Full-Stack Development",
    status: "Prototype",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "SQLite",
      "Tailwind CSS",
    ],
    problemStatement:
      "Retailers face stock discrepancies across multiple branch locations, manual billing bottlenecks, and lack of shift auditability.",
    verifiedFeatures: [
      "Centralized Multi-Store & Warehouse inventory management.",
      "Fast POS checkout interface supporting barcode scanners, discounts, and multi-method payments.",
      "Inter-store stock transfer workflows with transfer status verification.",
      "Cash Register Shift Management: open/close shifts, expected vs. actual drawer cash tracking.",
      "Comprehensive Role-Based Access Control (Super Admin, Store Manager, Cashier).",
      "Prisma ORM data layer with schema migrations.",
    ],
    myContribution:
      "Developed the Next.js App Router API endpoints, structured the Prisma database schemas, and built the responsive POS checkout screen.",
    architecture:
      "Next.js Frontend (React Server Components + Client UI) -> Next.js Route Handlers -> Prisma ORM -> PostgreSQL/SQLite Database.",
    methodsOrApproach:
      "Engineered atomic transaction handling for inventory updates during checkout to prevent race conditions during high-volume sales.",
    results:
      "Fully operational local prototype with verified POS checkout workflows and multi-role dashboard navigation.",
    limitations:
      "Multi-tenant cloud production deployment and thermal printer hardware integrations are currently in progress.",
    githubUrl: "https://github.com/Mushfik19/NexaMart-Retail-Management-System",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/NexaMart-Retail-Management-System#readme",
    image: `${BASE}projects/student.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "mrt6-metro-simulation",
    slug: "mrt6-metro-simulation",
    title: "MRT-6 — Dhaka Metro Rail Simulation System",
    shortDescription:
      "Algorithmic transportation simulation and scheduling engine modeling Dhaka Mass Rapid Transit Line 6 stations, train headway, passenger loading, and dynamic distance-based fare calculations.",
    overview:
      "A comprehensive transportation simulation model of Dhaka Metro Rail MRT Line 6 (Uttara North to Kamalapur). Simulates train dispatch schedules, station dwell times, dynamic distance-based ticketing fares, passenger transfer flow, and peak-hour congestion mitigation.",
    category: "Academic Software",
    status: "Completed",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "Python",
      "C++",
      "Data Structures",
      "Graph Theory",
      "Dijkstra / BFS",
      "Object-Oriented Programming",
    ],
    problemStatement:
      "Rapid urbanization in Dhaka necessitates intelligent modeling of train dispatch intervals, passenger throughput bottlenecks, and accurate distance-tiered fare structures.",
    verifiedFeatures: [
      "MRT Line 6 Station Topology: accurate geographic graph of 16 operational stations from Uttara North to Motijheel/Kamalapur.",
      "Dynamic Distance-Based Fare Matrix: automated calculation adhering to Dhaka Transport Coordination Authority (DTCA) fare rules.",
      "Train Headway & Timetable Engine: realistic interval scheduling for peak vs. off-peak operational windows.",
      "Passenger Ingress/Egress Simulation: station dwell time modeling based on simulated commuter platform density.",
      "Rapid Transit Graph Traversal: BFS/Dijkstra shortest-path route planning for multi-line network expansion.",
    ],
    myContribution:
      "Formulated graph data models representing the rail line topology, implemented the ticketing and fare calculation algorithms, and built discrete-event simulation routines.",
    architecture:
      "Station Graph Network -> Discrete-Event Simulation Engine -> Passenger Queue Manager -> DTCA Fare Computing Module.",
    methodsOrApproach:
      "Utilized weighted directed graphs and queuing theory to simulate train arrivals, passenger boardings, and timetable synchronization.",
    results:
      "Validated accurate fare outputs across all 16 stations and verified schedule optimization reducing passenger wait times.",
    limitations:
      "Simulates discrete commuter flows; real-time integration with physical automated fare collection (AFC) gates is theoretical.",
    githubUrl: "https://github.com/Mushfik19/MRT-6-Metro-Simulation",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/MRT-6-Metro-Simulation#readme",
    image: `${BASE}projects/parking.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "fithub-management-system",
    slug: "fithub-management-system",
    title: "FitHub — Class Booking & Membership System",
    shortDescription:
      "Desktop management system built in Python (Tkinter) and MySQL 8 featuring bcrypt password hashing, relational constraint enforcement, and automated Excel reporting.",
    overview:
      "FitHub is a comprehensive desktop software solution engineered for gym and fitness facility operations. It provides staff authentication with bcrypt password verification, relational integrity rules to prevent orphan bookings, real-time capacity validation, attendance tracking, and automated spreadsheet generation.",
    category: "Academic Software",
    status: "Completed",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "Python 3.13",
      "Tkinter",
      "MySQL 8",
      "bcrypt",
      "pandas",
      "openpyxl",
      "matplotlib",
    ],
    problemStatement:
      "Fitness centers struggle with manual attendance logging, overbooked classes, membership record drift, and vulnerable plain-text database credentials.",
    verifiedFeatures: [
      "Secure Staff Authentication with salted bcrypt password hashing.",
      "Class & Member Management with search, filter, and delete protection for active bookings.",
      "Booking Validation Engine: strictly enforces per-class capacity limits and prevents double-booking.",
      "Attendance & No-Show Tracking with historical operational reporting.",
      "Automated Excel Report Generation via openpyxl and matplotlib statistical charting.",
      "Parameterised SQL Queries to guarantee protection against SQL injection attacks.",
    ],
    myContribution:
      "Designed the relational database schema, coded the Tkinter UI modules, implemented business logic validations, and built the Excel reporting export module.",
    architecture:
      "Tkinter GUI Layer -> Application Business Rules Service -> Parameterised MySQL Data Access Layer -> MySQL 8 Server.",
    methodsOrApproach:
      "Structured MVC desktop architecture adhering strictly to relational database normalisation and secure credential handling standards.",
    results:
      "Robust desktop application successfully tested against edge cases including capacity overflow and referential deletion blocks.",
    limitations:
      "Desktop architecture requires a local MySQL server connection; multi-branch cloud sync is not currently supported.",
    githubUrl:
      "https://github.com/Mushfik19/FitHub-Class-Booking-and-Membership-Management-System",
    liveDemoUrl: "",
    documentationUrl:
      "https://github.com/Mushfik19/FitHub-Class-Booking-and-Membership-Management-System#readme",
    image: `${BASE}projects/parking.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "ecomesh-environmental-iot",
    slug: "ecomesh-environmental-iot",
    title: "EcoMesh 2.0 — Environmental IoT & Sensor Telemetry",
    shortDescription:
      "Distributed environmental monitoring and wireless telemetry mesh network aggregating real-time air quality, microclimate, and noise pollution metrics.",
    overview:
      "EcoMesh 2.0 is an environmental resilience and IoT sensor platform designed for urban and industrial microclimate surveillance. Collects multi-sensor environmental parameters, routes data packets over ad-hoc mesh nodes, and renders real-time telemetry dashboards for pollution alerting.",
    category: "Civic Technology",
    status: "Prototype",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "IoT Architecture",
      "Python",
      "C++",
      "MQTT",
      "WebSockets",
      "Time-Series Data",
      "Chart.js",
      "ESP32 / Microcontrollers",
    ],
    problemStatement:
      "Urban areas in developing nations suffer from localized air pollution and industrial environmental hazards without fine-grained, low-cost sensor coverage.",
    verifiedFeatures: [
      "Multi-Sensor Ingestion: PM2.5, PM10, temperature, relative humidity, and ambient acoustic decibel logging.",
      "Ad-hoc Mesh Protocol Routing: data packet forwarding across sensor nodes without continuous centralized cellular backhaul.",
      "Real-Time WebSocket Stream: instant telemetry broadcast to monitoring workstations.",
      "Threshold Alerting System: automated notification triggers when Air Quality Index (AQI) exceeds safe parameters.",
      "Historical Trend Visualization: interactive time-series plots analyzing hourly and diurnal pollution patterns.",
    ],
    myContribution:
      "Designed the data aggregation broker, wrote the packet serialization protocol, configured time-series logging, and developed the web analytics UI.",
    architecture:
      "Sensor Nodes (ESP32) -> Mesh Radio Links -> Gateway Node -> MQTT Broker -> Python Ingestion Service -> WebSocket Frontend.",
    methodsOrApproach:
      "Utilized lightweight publish-subscribe protocols (MQTT) with QoS guarantees and rolling window averaging for sensor noise suppression.",
    results:
      "Operational multi-node mesh prototype streaming environmental telemetry with low latency and stable packet delivery.",
    limitations:
      "Hardware power management in long-term solar/battery deployments requires further duty-cycle optimization.",
    githubUrl: "https://github.com/Mushfik19/EcoMesh-2.0-",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/EcoMesh-2.0-#readme",
    image: `${BASE}projects/topology.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "student-management-system",
    slug: "student-management-system",
    title: "Student Information & Academic Record System",
    shortDescription:
      "Relational academic management desktop system built with Java, Swing GUI, and MySQL for institutional record keeping, course registrations, and CGPA tracking.",
    overview:
      "An institutional student administration system providing automated handling of student admissions, course registrations, semester grade record calculation, attendance logs, and administrative query reports.",
    category: "Academic Software",
    status: "Completed",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
      "JDBC",
      "Relational Database Design",
      "OOP",
    ],
    problemStatement:
      "Educational institutions face administrative friction and data discrepancy when maintaining paper records or disjointed spreadsheets for student profiles and grades.",
    verifiedFeatures: [
      "Student Profile Management: comprehensive CRUD operations for student identities, contact details, and departments.",
      "Automated CGPA Calculator: accurate calculation according to standard university grading rubrics.",
      "Course Enrollment Tracking: enforces prerequisite courses and prevents duplicate enrollment.",
      "Dynamic Search & Filter: fast lookup by Student ID, batch year, department, or academic status.",
      "SQL Transaction Safety: ACID compliance with parameterised JDBC queries.",
    ],
    myContribution:
      "Architected the 3NF relational database schema, developed the desktop Swing user interface, and implemented the grading algorithm.",
    architecture:
      "Java Swing GUI -> Controller / Business Logic Layer -> JDBC Connector -> MySQL Relational Database.",
    methodsOrApproach:
      "Applied Object-Oriented Programming (OOP) paradigms with strong entity separation and normalized relational tables.",
    results:
      "Stable desktop system successfully handling complete student academic lifecycle workflows with zero data redundancy.",
    limitations:
      "Single-station desktop deployment; web-accessible multi-user portal is planned for future iterations.",
    githubUrl: "https://github.com/Mushfik19/Student-Management-System",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/Student-Management-System#readme",
    image: `${BASE}projects/student.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "basic-c-compiler",
    slug: "basic-c-compiler",
    title: "Basic C Compiler & Lexical Analyzer",
    shortDescription:
      "Systems programming compiler project implementing lexical analysis, DFA tokenization, symbol table maintenance, and syntax verification for C language constructs.",
    overview:
      "A core systems and compiler engineering project exploring compiler front-end stages: input source file tokenization, identifier and keyword discrimination, operator classification, symbol table allocation, and lexical syntax error detection.",
    category: "Academic Software",
    status: "Completed",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "C",
      "C++",
      "Lexical Analysis",
      "Compiler Design",
      "Finite Automata (DFA)",
      "Symbol Table",
      "Data Structures",
    ],
    problemStatement:
      "Understanding low-level programming language translation and grammar parsing requires building deterministic tokenizers and symbol resolution engines from scratch.",
    verifiedFeatures: [
      "Deterministic Tokenizer: categorizes keywords, identifiers, constants, string literals, and operators.",
      "Symbol Table Architecture: maintains identifier metadata, scope level, data types, and memory offsets.",
      "Comment & Whitespace Stripper: cleans single-line (`//`) and multi-line (`/* */`) comments.",
      "Lexical Error Reporter: pinpoints line numbers and character positions of illegal tokens.",
      "Modular CLI Interface: outputs clean formatted token streams and symbol table dumps.",
    ],
    myContribution:
      "Built the DFA state transition logic, developed the hash-based symbol table, and authored test cases covering diverse C source code structures.",
    architecture:
      "Source Code File -> Lexical Scanner -> DFA State Engine -> Token Stream & Symbol Table -> Syntax Verifier.",
    methodsOrApproach:
      "Utilized regular expressions and deterministic finite automata (DFA) state machines for optimal $O(N)$ source scanning.",
    results:
      "Successfully tokenizes and parses core C syntax constructs with comprehensive error diagnosis.",
    limitations:
      "Covers lexical analysis and front-end tokenization; intermediate code generation and assembly code emission are beyond this scope.",
    githubUrl: "https://github.com/Mushfik19/Basic-c-compiler",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/Basic-c-compiler#readme",
    image: `${BASE}projects/c.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "bhumiseba-platform",
    slug: "bhumiseba-platform",
    title: "BhumiSeba — Digital Citizen Land Services Platform",
    shortDescription:
      "Civic technology portal designed to streamline land record access, khatian verification, online mutation tracking, and citizen fee reconciliation in Bangladesh.",
    overview:
      "BhumiSeba is a civic software initiative focused on modernizing land administration and citizen service delivery. It addresses bureaucratic delays in traditional sub-registry and upazila land offices by digitizing mutation applications, parcel ownership tracking, and citizen status notifications.",
    category: "Civic Technology",
    status: "Prototype",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
    ],
    problemStatement:
      "Citizens face multi-month delays, lack of status transparency, and intermediary exploitation when applying for land mutations and record corrections.",
    verifiedFeatures: [
      "Citizen Self-Service Portal: digital submission of land mutation requests with title deed attachment.",
      "Khatian Verification Module: fast search and verification of historical land ownership records.",
      "Transparent Application Tracker: status milestones from Assistant Commissioner (Land) review to final mutation approval.",
      "Automated Fee Ledger: breakdown of legal government fees to prevent citizen exploitation.",
    ],
    myContribution:
      "Researched administrative land workflow requirements, engineered the application tracking state machine, and created the citizen web dashboard.",
    architecture:
      "Next.js Frontend -> Node.js / Express API -> PostgreSQL Relational Database -> Document Storage.",
    methodsOrApproach:
      "Mapped real-world Bangladesh land administration legal workflows into clean, deterministic software state transitions.",
    results:
      "Working prototype showcasing simplified citizen land mutation submission and transparent milestone auditing.",
    limitations:
      "Requires institutional API integration with the Ministry of Land for live national record queries.",
    githubUrl: "https://github.com/Mushfik19/BhumiSeba",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/BhumiSeba#readme",
    image: `${BASE}projects/topology.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "online-naksha-gis",
    slug: "online-naksha-gis",
    title: "Online Naksha — Cadastral Survey & Mouza GIS Viewer",
    shortDescription:
      "Geospatial cadastral mapping application enabling interactive exploration of digitized mouza sheets, plot boundaries, and georeferenced land survey layers.",
    overview:
      "Online Naksha brings Bangladesh's cadastral mouza maps into an interactive GIS web interface. Citizens, urban planners, and surveyors can inspect individual plot polygons, verify survey numbers, search boundary coordinates, and overlay digitized survey sheets on satellite imagery.",
    category: "Civic Technology",
    status: "Prototype",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Leaflet",
      "GeoJSON",
      "OpenStreetMap",
      "Tailwind CSS",
    ],
    problemStatement:
      "Cadastral mouza maps in Bangladesh exist primarily as fragile paper sheets in record rooms, resulting in boundary encroachment and inaccessible plot inspections.",
    verifiedFeatures: [
      "Interactive Mouza Map Viewer: pan, zoom, and layer switching over georeferenced cadastral boundaries.",
      "Plot Polygon Highlighting: click any parcel to inspect plot ID, mouza name, and surveyed square footage.",
      "Coordinate Search: instant pinpointing of GPS coordinates on the cadastral grid.",
      "Satellite Imagery Overlay: toggle between OpenStreetMap vector tiles and satellite aerial layers.",
    ],
    myContribution:
      "Constructed the Leaflet GIS mapping components, transformed sample cadastral sheets into GeoJSON feature collections, and built the spatial search interface.",
    architecture:
      "Next.js SPA -> Leaflet / MapLibre Engine -> GeoJSON Vector Layers -> OpenStreetMap Tile Servers.",
    methodsOrApproach:
      "Georeferenced survey polygons using coordinate transformation and served vector tiles for responsive rendering.",
    results:
      "Interactive cadastral viewer demonstrating seamless plot parcel inspection on both mobile and desktop screens.",
    limitations:
      "Full national scale requires government GIS open-data cooperation for comprehensive digitized mouza coverage.",
    githubUrl: "https://github.com/Mushfik19/Online_Naksha",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/Online_Naksha#readme",
    image: `${BASE}projects/topology.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "medai-pro",
    slug: "medai-pro",
    title: "MedAI-Pro Web Application",
    shortDescription:
      "Interactive healthcare web interface connected to cloud-hosted medical inference endpoints with live demo deployment.",
    overview:
      "MedAI-Pro is a full-stack medical AI demonstration platform featuring an interactive frontend connected to an async FastAPI backend on Render, providing live API documentation and interactive diagnostic simulation.",
    category: "Computer Vision / Medical AI",
    status: "Live Demo",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Vercel",
      "Render",
      "Tailwind CSS",
    ],
    problemStatement:
      "Demonstrating medical AI models requires accessible web interfaces where users can test inference endpoints with live feedback.",
    verifiedFeatures: [
      "Live Frontend deployed on Vercel.",
      "Cloud REST API deployed on Render with interactive Swagger documentation.",
      "Asynchronous image upload and inference response handling.",
    ],
    myContribution:
      "Developed the web frontend, configured the FastAPI deployment on Render, and connected the Vercel client.",
    architecture:
      "Vercel (React Frontend) -> HTTPS -> Render (FastAPI ASGI Server) -> Inference Model.",
    methodsOrApproach:
      "Configured cross-origin resource sharing (CORS), client upload progress indicators, and health check diagnostics.",
    results: "Publicly accessible live web demo with interactive API docs.",
    limitations:
      "Hosted on free-tier cloud instances; initial requests may experience cold-start latency.",
    githubUrl: "https://github.com/Mushfik19/MedAI-Pro",
    liveDemoUrl: "https://med-ai-pro-frontend.vercel.app/",
    documentationUrl: "https://medai-pro-5100.onrender.com/docs",
    image: `${BASE}projects/neuro.png`,
    isMedicalAI: true,
    disclaimer:
      "EDUCATIONAL DEMO ONLY: Intended purely for demonstration of web engineering and machine learning deployment pipelines. Not intended for clinical or diagnostic use.",
  },
  {
    id: "todo-productivity-app",
    slug: "todo-productivity-app",
    title: "Modern To-Do & Task Productivity Suite",
    shortDescription:
      "Responsive task management and productivity application featuring priority categorizations, persistent client storage, and smooth micro-interactions.",
    overview:
      "A fast, responsive personal productivity and task management suite. Provides intuitive workflow categorization (Work, Academic, Research, Personal), priority tagging, due-date reminders, persistent local storage synchronization, and completion analytics.",
    category: "Full-Stack Development",
    status: "Completed",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "JavaScript",
      "React",
      "HTML5 LocalStorage",
      "Tailwind CSS",
      "Framer Motion",
    ],
    problemStatement:
      "Overcomplicated task managers with slow load times and cluttered interfaces reduce daily task completion efficiency.",
    verifiedFeatures: [
      "Instant Task CRUD: add, edit, toggle complete, and archive tasks with zero input lag.",
      "Priority Matrix & Tagging: categorize tasks by High, Medium, Low priority with distinct visual indicators.",
      "Offline-First Persistence: automatic synchronization with browser LocalStorage.",
      "Filtered Views: toggle between Active, Completed, and Categorized task queues.",
      "Progress Analytics: live percentage meter showing daily completed vs. pending tasks.",
    ],
    myContribution:
      "Engineered the application state architecture, designed the sleek dark-mode UI, and implemented data persistence handlers.",
    architecture:
      "React State Machine -> Browser LocalStorage API -> Reactive UI View.",
    methodsOrApproach:
      "Engineered an offline-first client architecture with defensive state recovery and responsive CSS transitions.",
    results:
      "Clean, lightweight productivity tool delivering instantaneous user interactions across mobile and desktop devices.",
    limitations:
      "Client-side storage model; cloud multi-device sync is planned for future backend integration.",
    githubUrl: "https://github.com/Mushfik19/To-Do",
    liveDemoUrl: "",
    documentationUrl: "https://github.com/Mushfik19/To-Do#readme",
    image: `${BASE}projects/student.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "bangladesh-crop-recommendation",
    slug: "bangladesh-crop-recommendation",
    title: "Minimal-Feature Explainable Crop Recommendation",
    shortDescription:
      "Comparative machine learning research study reducing input feature requirements and applying SHAP explainability to agroclimatic datasets across Bangladesh.",
    overview:
      "A research study titled 'Minimal-Feature and Explainable Crop Recommendation for Bangladesh Using Agroclimatic Data: A Comparative Machine Learning Study'. Investigates whether high-accuracy crop recommendation can be achieved using a reduced set of accessible environmental features, augmented with SHAP explainability for farmer decision support.",
    category: "AI & Machine Learning",
    status: "Research / Experiment",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "SHAP",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    problemStatement:
      "Resource-constrained farmers in rural Bangladesh cannot afford expensive, multi-sensor soil testing kits requiring dozen-variable inputs for standard agricultural AI models.",
    verifiedFeatures: [
      "Agroclimatic Dataset Analysis utilizing AgrClimateBD and SPAS-Dataset-BD.",
      "Feature Ablation Pipeline: identifying minimal predictive subsets (temperature, rainfall, humidity, soil NPK).",
      "Comparative Model Evaluation: Random Forest, XGBoost, and Decision Tree baseline benchmarks.",
      "SHAP (SHapley Additive exPlanations) Global and Local feature contribution attribution.",
      "District-level agro-ecological zone segmentation across Bangladesh.",
    ],
    myContribution:
      "Conducted exploratory data analysis, built data preparation pipelines, evaluated feature importance rankings, and designed experimental ablation scripts.",
    architecture:
      "Raw Agroclimatic Datasets -> Outlier Filtration & Normalization -> Feature Ablation Experimentation -> Model Training -> SHAP Explainability Engine.",
    methodsOrApproach:
      "Employed cross-validation across regional agroclimatic zones with iterative feature dropping to identify minimal required sensors for robust recommendations.",
    results:
      "Demonstrated that core agroclimatic parameters can achieve competitive recommendation accuracy compared to full-feature sets while maintaining high explainability.",
    limitations:
      "Active research project; field validation with agricultural extension officers is ongoing prior to formal manuscript submission.",
    githubUrl: "https://github.com/Mushfik19",
    liveDemoUrl: "",
    documentationUrl: "",
    image: `${BASE}projects/neuro.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "bangla-dialect-ner",
    slug: "bangla-dialect-ner",
    title: "Bangla Regional Dialect Named Entity Recognition (NER)",
    shortDescription:
      "NLP experimental pipeline exploring transformer-based tokenization and entity recognition (BanglaBERT & XLM-RoBERTa) across regional dialects of Bangladesh.",
    overview:
      "Experimental research pipeline focusing on Named Entity Recognition (NER) for regional Bangla dialects. Utilizes the BanNERD benchmark and dialectal corpora from Barishal, Chittagong, Mymensingh, Noakhali, and Sylhet to evaluate transformer model performance under non-standardized orthography and colloquial linguistic shifts.",
    category: "NLP & Semantic Search",
    status: "Research / Experiment",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "BanglaBERT",
      "XLM-RoBERTa",
      "Transformers",
      "Colab",
    ],
    problemStatement:
      "Standard Bangla NLP models perform poorly on regional dialects and colloquial social media text due to out-of-vocabulary tokens and significant phonological spelling variations.",
    verifiedFeatures: [
      "Data Preprocessing & BIO Tag Alignment pipeline for dialectal corpora.",
      "Regional Dialect Partitioning across Barishal, Chittagong, Mymensingh, Noakhali, and Sylhet.",
      "Tokenization Alignment Auditing for BanglaBERT and multilingual XLM-RoBERTa.",
      "Subword Token Error Analysis for non-standard colloquial phrasing.",
    ],
    myContribution:
      "Developed data preprocessing notebooks, cleaned regional entity annotation files, and analyzed tokenization boundary discrepancies.",
    architecture:
      "Dialectal Raw Text -> Tokenization & BIO Tag Alignment -> Transformer Token Embeddings -> Dense Classification Head -> Entity Predictions.",
    methodsOrApproach:
      "Investigated tokenization boundary shifts and entity preservation across dialectal colloquial variations.",
    results:
      "Identified critical token-split misalignments in regional dialects and documented tokenization bottlenecks.",
    limitations:
      "Dialectal class imbalance and tokenization errors remain active areas of ongoing refinement; experimental pipeline in progress.",
    githubUrl: "https://github.com/Mushfik19",
    liveDemoUrl: "",
    documentationUrl: "",
    image: `${BASE}projects/c.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "cybersecurity-network-labs",
    slug: "cybersecurity-network-labs",
    title: "Network Security & Threat Detection Labs",
    shortDescription:
      "Cybersecurity infrastructure lab covering pfSense firewall routing, Snort custom IDS/IPS rule engineering, and vulnerability assessments using Nmap & OpenVAS.",
    overview:
      "A hands-on cybersecurity case study conducted in segmented virtual environments. Focused on designing network topologies with pfSense firewalls, crafting custom Snort detection signatures for abnormal network events, and performing systematic vulnerability scanning and risk remediation.",
    category: "Cybersecurity & Labs",
    status: "Academic Lab",
    featured: false,
    lastVerified: "2026-10",
    technologies: [
      "pfSense",
      "Snort IDS/IPS",
      "VirtualBox",
      "Kali Linux",
      "Nmap",
      "OpenVAS",
      "Wireshark",
    ],
    problemStatement:
      "Understanding defense-in-depth requires hands-on implementation of firewall access controls, intrusion detection rules, and proactive vulnerability scanning in isolated network segments.",
    verifiedFeatures: [
      "Virtual Network Topology Design with isolated WAN, LAN, and DMZ subnets.",
      "pfSense Firewall Rule Configuration: traffic filtering and port redirection.",
      "Custom Snort Signature Engineering: detection of ICMP anomalies, SYN port scans, and suspicious HTTP payloads.",
      "Systematic Vulnerability Assessment with Nmap network auditing and OpenVAS vulnerability reporting.",
      "Packet Analysis with Wireshark to verify rule triggers and capture PCAP evidence.",
    ],
    myContribution:
      "Configured virtual network interfaces, authored custom Snort alert rules, executed vulnerability scans, and authored security assessment reports.",
    architecture:
      "External Kali Attacker -> pfSense Virtual Gateway -> Snort Packet Inspection -> Protected Windows / Ubuntu Targets.",
    methodsOrApproach:
      "Simulated controlled scan traffic, evaluated alert logs against PCAP captures, and documented remediation recommendations.",
    results:
      "Verified repeatable Snort rule triggering and log capture for simulated reconnaissance traffic without false-positive blocking of valid management services.",
    limitations:
      "Conducted inside an academic lab hypervisor environment; does not constitute a commercial security product.",
    githubUrl: "https://github.com/Mushfik19",
    liveDemoUrl: "",
    documentationUrl: "",
    image: `${BASE}projects/topology.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "smart-parking-system",
    slug: "smart-parking-system",
    title: "Smart Parking Management System",
    shortDescription:
      "Desktop software developed in Java Swing and MySQL automating vehicle space allocation, check-in ticketing, and parking fee calculation.",
    overview:
      "An automated parking facility management application built for real-time slot allocation, entry/exit timestamp logging, and automated billing calculation based on vehicle type and duration.",
    category: "Academic Software",
    status: "Completed",
    featured: false,
    lastVerified: "2026-10",
    technologies: ["Java", "Java Swing", "MySQL", "JDBC", "OOP"],
    problemStatement:
      "Manual vehicle logbooks in multi-tier parking garages cause congestion at entry gates and revenue leakage.",
    verifiedFeatures: [
      "Visual slot status board displaying occupied and available parking spots.",
      "Automated ticket generation upon vehicle entry with timestamp logging.",
      "Dynamic fee calculation based on duration and vehicle category (car, bike, truck).",
      "MySQL database backend storing historical vehicle logs.",
    ],
    myContribution:
      "Built the Java Swing user interface, connected MySQL database via JDBC, and implemented the fee calculation business logic.",
    architecture:
      "Java Swing Desktop UI -> JDBC Driver -> MySQL Relational Database.",
    methodsOrApproach:
      "Utilized object-oriented design patterns (encapsulation, abstraction) and parameterised queries for data integrity.",
    results:
      "Stable desktop system delivering automated billing and parking space management.",
    limitations:
      "Single-station desktop deployment; does not interface with physical IoT barrier sensors.",
    githubUrl: "https://github.com/Mushfik19",
    liveDemoUrl: "",
    documentationUrl: "",
    image: `${BASE}projects/parking.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
  {
    id: "my-portfolio-3d",
    slug: "my-portfolio-3d",
    title: "3D Interactive Developer Portfolio",
    shortDescription:
      "Next-generation portfolio engineered with React, Three.js, React Three Fiber, Framer Motion, and Tailwind CSS featuring interactive 3D canvases and accessible modal architecture.",
    overview:
      "The source codebase for this interactive 3D developer portfolio. Engineered to showcase verified software engineering, machine learning research, and academic leadership through Three.js WebGL scenes, interactive category filters, and an accessible deep-dive specification architecture.",
    category: "Full-Stack Development",
    status: "Completed",
    featured: true,
    lastVerified: "2026-10",
    technologies: [
      "React 19",
      "Three.js",
      "@react-three/fiber",
      "@react-three/drei",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    problemStatement:
      "Standard static developer portfolios fail to provide engaging interactive experiences and often showcase unverified or fabricated claims.",
    verifiedFeatures: [
      "Interactive 3D WebGL Canvases: customized ComputersCanvas, EarthCanvas, BallCanvas tech sphere geometries, and Starfields.",
      "High-Performance Neural Matrix Background: custom interactive canvas matrix providing cinematic aesthetic depth.",
      "Interactive Project Directory: live search and category pill filtering across 19 verified projects.",
      "Modal Deep Dive System: full technical problem statements, verified features, architecture diagrams, and medical disclaimers.",
      "Responsive 3D Parallax Tilt: dynamic cursor-tracking glare and perspective shifts without performance degradation.",
    ],
    myContribution:
      "Architected the modular React components, integrated Three.js canvas environments, engineered responsive design systems, and audited all project data.",
    architecture:
      "React 19 Single Page Application -> Three.js / React Three Fiber Canvases -> Custom CSS Design System -> GitHub Pages CI/CD.",
    methodsOrApproach:
      "Blended GPU-accelerated WebGL visuals with zero-dependency CSS canvas animations for buttery smooth 60fps rendering.",
    results:
      "Flagship interactive developer showcase with 100% verified GitHub repository attribution.",
    limitations:
      "WebGL canvases gracefully degrade to lightweight static fallbacks on low-power mobile GPUs.",
    githubUrl: "https://github.com/Mushfik19/my_portfolio",
    liveDemoUrl: "https://mushfik19.github.io/Portfolio",
    documentationUrl: "https://github.com/Mushfik19/my_portfolio#readme",
    image: `${BASE}projects/portfolio.png`,
    isMedicalAI: false,
    disclaimer: "",
  },
];
