# Project Inventory & Audit Record

**Date of Audit:** October 2026  
**Portfolio Owner:** Md. Mahfujur Rahman  
**Affiliation:** Daffodil International University (DIU), IEEE DIU Student Branch Computer Society  
**Verified GitHub Account:** [https://github.com/Mushfik19](https://github.com/Mushfik19)  
**Primary Portfolio Repository:** [https://github.com/Mushfik19/my_portfolio](https://github.com/Mushfik19/my_portfolio)  
**Live Site:** [https://mushfik19.github.io/Portfolio](https://mushfik19.github.io/Portfolio)

---

## 1. Profile Discovery & Identity Verification Audit

### 1.1 Candidate Profile Investigation: `mahfujr403` vs. `Mushfik19`

During initial discovery, a public GitHub profile was researched: `https://github.com/mahfujr403`. A rigorous verification against local repository metadata, git remotes, and external profiles was conducted:

| Verification Metric | Candidate: `mahfujr403` | Portfolio Owner: `Mushfik19` | Match Result |
| :--- | :--- | :--- | :--- |
| **Full Name** | Md. Mahfujur Rahman | Md. Mahfujur Rahman | Same Name |
| **Institutional Affiliation** | Varendra University (Rajshahi, Bangladesh) | Daffodil International University (DIU) | **MISMATCH** |
| **Git Remote Origin** | `github.com/mahfujr403/...` | `https://github.com/Mushfik19/my_portfolio.git` | **MISMATCH** |
| **Package.json Homepage** | N/A | `https://mushfik19.github.io/Portfolio` | **MISMATCH** |
| **LinkedIn Profile** | `linkedin.com/in/mahfujr403` | `linkedin.com/in/md-mahfujur-rahman-cse19/` | **MISMATCH** |
| **Facebook Profile** | `facebook.com/mahfujur.rahman.4261` | `facebook.com/mushfik.arman.19` | **MISMATCH** |
| **Contact Email** | Not disclosed | `mushfik.cse@gmail.com` | **MISMATCH** |
| **Academic Record** | 10 IEEE/Springer publications, Google Scholar profile | Undergraduate student, ICAI 2025 Best Ambassador, IEEE DIU CS Publication Coordinator | **MISMATCH** |

**Conclusion:**  
`https://github.com/mahfujr403` belongs to a different academic/engineer (at Varendra University in Rajshahi). It is **NOT** the portfolio owner's account.

### 1.2 Exclusion Policy
To preserve strict academic and professional integrity:
- **OncoVision AI** (`mahfujr403/OncoVision`) is **EXCLUDED** from the published projects.
- **Aquatic Epidemiology** (`mahfujr403/Aquatic-Epidemiology---Fish-Disease-Classification`) is **EXCLUDED** from the published projects.
- Only repositories and research verified under `Mushfik19` or confirmed via local artifacts are included.

---

## 2. Comprehensive Inventory of Discovered Projects

### Project 1: Nagorik Sathi AI (CivicSync) — Municipal Civic Service Coordination Platform
- **Repository:** `https://github.com/Mushfik19/Nagoric-Sathi--AI` & `https://github.com/Mushfik19/CivicSync-municipal-civic-services-platform`
- **Classification:** Civic Technology / Full-Stack Platform
- **Status:** `Prototype / Civic Tech R&D`
- **Verified Tech Stack:** React, TypeScript, Vite, FastAPI, PostgreSQL, PostGIS, Celery, Redis, OpenStreetMap Nominatim, HTML5 Canvas.
- **Key Verified Features:**
  - Multimodal Bangla intake for citizen grievance reporting.
  - Mathematical Haversine spatial verification ($\le 50\text{m}$ resolution threshold).
  - Tamper-evident chained SHA-256 audit logging.
  - Multi-department workflow sequencing with prerequisite locking.
  - 80% safety confidence threshold gate before human triage escalation.
- **Limitation:** Tested in prototype and simulation environments; awaiting municipal corporation pilot deployment.

### Project 2: AI Resume–Job Matcher
- **Repository:** `https://github.com/Mushfik19/AI-Resume-Job-Matcher`
- **Classification:** NLP & Semantic Search / Full-Stack Development
- **Status:** `Completed Application`
- **Verified Tech Stack:** FastAPI, React 18, Vite, spaCy, Sentence-Transformers (`all-MiniLM-L6-v2`), PyMuPDF, python-docx, Docker.
- **Key Verified Features:**
  - Safe in-memory document ingestion (no arbitrary persistence of candidate PII).
  - Hybrid skill extractor using curated taxonomy patterns (`skills.json`) with `PhraseMatcher` and word-boundary regex.
  - Canonical skill normalization (e.g. `ReactJS` $\to$ `React`, `k8s` $\to$ `Kubernetes`).
  - Sentence-Transformer semantic cosine similarity loaded as singleton lifespan service.
  - Weighted alignment scoring ($0.60 \times \text{Semantic} + 0.40 \times \text{Skill Match}$).
- **Limitation:** In-memory parsing limits batch upload throughput to single documents per request.

### Project 3: PneumoVision AI & Radiograph Analysis
- **Repository:** `https://github.com/Mushfik19/Pneumonia-detection-using-Densnet121-and-GRAD-CAM`
- **Classification:** Computer Vision / Medical AI
- **Status:** `Research / Medical AI Prototype`
- **Verified Tech Stack:** DenseNet121, Grad-CAM (Gradient-weighted Class Activation Mapping), TensorFlow/Keras, OpenCV, FastAPI, React 19, Vite, Recharts.
- **Key Verified Features:**
  - Binary classification (Normal vs. Pneumonia) on chest X-ray radiographs.
  - Dynamic layer discovery targeting final convolutional activation layers (`relu` / `conv5_block16`).
  - Visual Grad-CAM attention heatmap overlay for radiological interpretability.
  - Side-by-side radiograph vs. attention overlay viewer with session history.
- **Medical AI Disclaimer:** For research, education, and triage simulation only. Not clinically validated or approved for standalone medical diagnosis.

### Project 4: FitHub — Class Booking and Membership Management System
- **Repository:** `https://github.com/Mushfik19/FitHub-Class-Booking-and-Membership-Management-System`
- **Classification:** Academic Software Project / Desktop Application
- **Status:** `Completed`
- **Verified Tech Stack:** Python 3.13, Tkinter, MySQL Server 8, bcrypt, openpyxl, pandas, matplotlib.
- **Key Verified Features:**
  - Staff authentication with bcrypt salted password hashing.
  - Relational schema with foreign key constraints, cascaded deletion protection, and parameterised queries.
  - Member registration, class scheduling, and booking capacity validation.
  - Automated Excel report generation and attendance analytics charts.
- **Limitation:** Desktop GUI architecture designed for single-facility local area deployment.

### Project 5: NexaMart Retail Management System (Super Shop POS)
- **Repository:** `https://github.com/Mushfik19/NexaMart-Retail-Management-System`
- **Classification:** Full-Stack Development / Enterprise Systems
- **Status:** `Prototype / In Progress`
- **Verified Tech Stack:** Next.js (App Router), Prisma ORM, PostgreSQL / SQLite, TypeScript, Tailwind CSS.
- **Key Verified Features:**
  - Multi-store and warehouse inventory management.
  - Point of Sale (POS) interface with barcode scanning and cash drawer reconciliation.
  - Role-Based Access Control (Super Admin, Store Manager, Cashier).
  - Stock transfer workflow between retail locations and batch tracking.
- **Limitation:** Migration from local SQLite development to managed PostgreSQL multi-tenant deployment is ongoing.

### Project 6: Minimal-Feature Crop Recommendation for Bangladesh
- **Classification:** Machine Learning & Agroclimatic Research
- **Status:** `Research / Experiment (In Progress)`
- **Verified Research Title:** *"Minimal-Feature and Explainable Crop Recommendation for Bangladesh Using Agroclimatic Data: A Comparative Machine Learning Study"*
- **Verified Context & Artifacts:**
  - Datasets: AgrClimateBD and SPAS-Dataset-BD.
  - Parameters: District-level temperature, humidity, rainfall, solar radiation, soil NPK, and seasonal production.
  - Methodological Focus: Feature ablation studies to reduce unnecessary sensor inputs, comparative modeling (Random Forest, XGBoost, LightGBM), and SHAP (SHapley Additive exPlanations) for transparent agronomic decision support.
- **Limitation:** Data validation and regional generalization across southern coastal vs. northern flood zones is currently in progress.

### Project 7: Bangla Regional Dialect Named Entity Recognition (NER)
- **Classification:** NLP & Research Pipeline
- **Status:** `Research / Experiment`
- **Verified Context & Artifacts:**
  - Dataset: BanNERD and regional dialect datasets covering Barishal, Chittagong, Mymensingh, Noakhali, and Sylhet.
  - Models Investigated: BanglaBERT, XLM-RoBERTa.
  - Methodological Focus: Dialectal tokenization alignment, subword boundary handling, and domain-adapted fine-tuning.
- **Limitation:** Dialectal token mismatch and class imbalance across regional datasets are active research hurdles.

### Project 8: Network Security & Cybersecurity Labs
- **Classification:** Cybersecurity & Infrastructure
- **Status:** `Academic Lab / Security Case Study`
- **Verified Tech Stack:** VirtualBox, pfSense firewall, Snort IDS/IPS, Kali Linux, Windows VM, Nmap, OpenVAS.
- **Key Verified Features:**
  - Segmented network topology configuration with WAN/LAN/DMZ routing.
  - Custom Snort detection rules for port scans, ICMP floods, and malformed HTTP traffic.
  - Vulnerability assessment reporting identifying CVE exposures and remediation steps.
- **Limitation:** Conducted inside isolated lab hypervisors; not a standalone enterprise security product.

### Project 9: Smart Parking Management System
- **Classification:** Academic Software Project
- **Status:** `Completed`
- **Verified Tech Stack:** Java, Java Swing, MySQL, JDBC.
- **Key Verified Features:**
  - Slot allocation algorithms, vehicle check-in/check-out tracking, automated fee calculation.
  - Historical vehicle log storage with relational database queries.

### Project 10: Python Core Utility Suite
- **Classification:** Coursework / Scripting Utilities
- **Status:** `Completed`
- **Verified Source Files:** `q1_marks_analyser.py`, `q2_string_toolkit.py`, `q3_inventory.py`.
- **Key Verified Features:** Statistical grade and percentile computation, text sanitization and frequency analysis, CLI-based in-memory inventory management.

### Project 11: MedAI-Pro
- **Repository:** `https://github.com/Mushfik19/MedAI-Pro`
- **Classification:** Medical AI / Full-Stack Demo
- **Status:** `Live Demo / Prototype`
- **Verified Demo URL:** `https://med-ai-pro-frontend.vercel.app/`
- **API Documentation:** `https://medai-pro-5100.onrender.com/docs`
- **Key Verified Features:** Interactive web screening interface connecting to backend FastAPI medical inference endpoints.

### Project 12: BhumiSeba — Digital Citizen Land Services Platform
- **Repository:** `https://github.com/Mushfik19/BhumiSeba`
- **Classification:** Civic Technology
- **Status:** `Prototype / Civic Tech R&D`
- **Verified Tech Stack:** Next.js, React, Node.js, PostgreSQL, Tailwind CSS, REST API.
- **Key Verified Features:** Citizen mutation request workflow, khatian ownership lookup, and transparent fee schedule.

### Project 13: Online Naksha — Cadastral Survey & Mouza GIS Viewer
- **Repository:** `https://github.com/Mushfik19/Online_Naksha`
- **Classification:** Civic Technology
- **Status:** `Prototype / GIS Viewer`
- **Verified Tech Stack:** Next.js, React, TypeScript, Leaflet, GeoJSON, OpenStreetMap.
- **Key Verified Features:** Interactive mouza sheet explorer, polygon plot identification, and coordinate pinpointing.

### Project 14: ICADHI 2026 — Conference Management System
- **Repository:** `https://github.com/Mushfik19/ICADHI-Management-System` & `https://github.com/Mushfik19/ICADHI-2026-`
- **Classification:** Academic Software / Full-Stack Platform
- **Status:** `Completed Application`
- **Verified Tech Stack:** React, Node.js, Express, MongoDB, Tailwind CSS, JWT Auth, REST API.
- **Key Verified Features:** Multi-track paper submission gateway, double-blind peer review scoring, and author decision pipeline.

### Project 15: MRT-6 — Dhaka Metro Rail Simulation System
- **Repository:** `https://github.com/Mushfik19/MRT-6-Metro-Simulation`
- **Classification:** Academic Software
- **Status:** `Completed Application`
- **Verified Tech Stack:** Python, C++, Data Structures, Graph Theory, Dijkstra / BFS.
- **Key Verified Features:** 16-station MRT Line 6 network graph, dynamic DTCA distance-based fare matrix, train dispatch headway, and station dwell-time modeling.

### Project 16: EcoMesh 2.0 — Environmental IoT & Sensor Telemetry
- **Repository:** `https://github.com/Mushfik19/EcoMesh-2.0-`
- **Classification:** Civic Technology / IoT
- **Status:** `Prototype`
- **Verified Tech Stack:** IoT Sensor Architecture, Python, C++, MQTT, WebSockets, Chart.js.
- **Key Verified Features:** Real-time AQI and noise telemetry streams, ad-hoc sensor packet routing, and threshold pollution alert triggers.

### Project 17: Student Information & Academic Record System
- **Repository:** `https://github.com/Mushfik19/Student-Management-System`
- **Classification:** Academic Software
- **Status:** `Completed Application`
- **Verified Tech Stack:** Java, Java Swing, MySQL, JDBC, Relational Schema Normalization.
- **Key Verified Features:** Comprehensive student CRUD profiles, automated university CGPA calculation, course prerequisite validation, and ACID-compliant relational SQL queries.

### Project 18: Basic C Compiler & Lexical Analyzer
- **Repository:** `https://github.com/Mushfik19/Basic-c-compiler`
- **Classification:** Academic Software
- **Status:** `Completed Systems Software`
- **Verified Tech Stack:** C, C++, Lexical Analysis, Compiler Design, DFA State Machines, Symbol Table.
- **Key Verified Features:** Deterministic C tokenization, symbol table hash allocation, comment stripping, and syntax error diagnosis.

### Project 19: Modern To-Do & Task Productivity Suite
- **Repository:** `https://github.com/Mushfik19/To-Do`
- **Classification:** Full-Stack Development
- **Status:** `Completed Application`
- **Verified Tech Stack:** JavaScript, React, HTML5 LocalStorage, Tailwind CSS.
- **Key Verified Features:** Priority matrix tagging, instant CRUD operations, offline-first local persistence, and daily progress completion analytics.

### Project 20: 3D Interactive Developer Portfolio
- **Repository:** `https://github.com/Mushfik19/my_portfolio`
- **Classification:** Full-Stack Development
- **Status:** `Completed Application`
- **Verified Tech Stack:** React 19, Three.js, React Three Fiber, Vite, Tailwind CSS, Framer Motion.
- **Key Verified Features:** Interactive 3D WebGL scenes, neural cyber background matrix, zero-image card architecture, and accessible deep-dive specification dialogs.

---

## 3. Summary of Excluded Repositories & Items

| Item | Source Account | Reason for Exclusion |
| :--- | :--- | :--- |
| **OncoVision AI** | `mahfujr403` | Verified as belonging to a different researcher at Varendra University. |
| **Aquatic Epidemiology** | `mahfujr403` | Verified as belonging to a different researcher at Varendra University. |
| **kingsLab, Fashtech, Versity_Project** | `mahfujr403` | Third-party account repositories. |
| **Pharmacy Management System** | Conceptual | Early-stage concept without implementation files. Recorded in "Exploring" category only. |

