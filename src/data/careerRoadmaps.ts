import {
  BarChart3, Code, Database, Brain, Shield, Cloud, Smartphone, Palette,
  TrendingUp, Server, Cpu, Gamepad2, Link2, TestTube, LineChart,
  HardDrive, Network, Bot, PenTool, CircuitBoard, Headphones,
  Layers, Workflow, Globe, Search, Megaphone, ShoppingCart, Users, Blocks, Briefcase
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface RoadmapStep {
  title: string;
  description: string;
  skills: string[];
  resources: string[];
  duration: string;
  tips: string;
}

export interface CareerPath {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
  avgSalary: string;
  avgSalaryINR: string;
  demandLevel: "High" | "Very High" | "Moderate" | "Growing";
  steps: RoadmapStep[];
}

export const careerPaths: CareerPath[] = [
  // ─── 1. DATA ANALYST ───
  {
    id: "data-analyst",
    title: "Data Analyst",
    icon: BarChart3,
    description: "Analyze data to help businesses make informed, data-driven decisions",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    avgSalary: "$55K–$95K",
    avgSalaryINR: "₹4L–₹12L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Foundation — Mathematics & Statistics",
        description: "Build a strong base in statistics, probability, and linear algebra that underpins all data analysis work.",
        skills: ["Descriptive Statistics (Mean, Median, Mode, Std Dev)", "Probability Distributions", "Hypothesis Testing (t-test, chi-square, ANOVA)", "Confidence Intervals & P-values", "Linear Algebra Basics", "Correlation & Regression"],
        resources: ["Khan Academy — Statistics & Probability", "StatQuest YouTube Channel", "Think Stats by Allen Downey (Free Book)", "Coursera — Statistics with Python Specialization"],
        duration: "4–6 weeks",
        tips: "Focus on intuition over formulas. Use real datasets to practice. StatQuest makes complex topics simple."
      },
      {
        title: "2. Excel & Spreadsheets Mastery",
        description: "Master the industry-standard tool for quick data analysis, reporting, and dashboard creation.",
        skills: ["VLOOKUP / XLOOKUP / INDEX-MATCH", "Pivot Tables & Pivot Charts", "Conditional Formatting & Data Validation", "Power Query for Data Cleaning", "Named Ranges & Dynamic Arrays", "Dashboard Creation with Charts", "Macros & Basic VBA"],
        resources: ["Excel Easy — Complete Tutorials", "Chandoo.org — Excel Tips", "ExcelJet — Functions Reference", "Google Sheets Training Center"],
        duration: "2–4 weeks",
        tips: "Build a real dashboard project. Employers love candidates who can quickly prototype insights in Excel."
      },
      {
        title: "3. SQL for Data Analysis",
        description: "Master querying relational databases — the #1 skill every data analyst needs.",
        skills: ["SELECT, WHERE, ORDER BY, LIMIT", "JOINs (INNER, LEFT, RIGHT, FULL, CROSS)", "GROUP BY, HAVING, Aggregations", "Subqueries & Common Table Expressions (CTEs)", "Window Functions (ROW_NUMBER, RANK, LAG, LEAD)", "CASE Statements & Conditional Logic", "Database Design & Normalization Basics", "Query Optimization & EXPLAIN Plans"],
        resources: ["SQLBolt — Interactive SQL Lessons", "Mode Analytics SQL Tutorial", "LeetCode — SQL Problem Set (50+ problems)", "W3Schools SQL Reference", "DataLemur — SQL Interview Questions"],
        duration: "4–6 weeks",
        tips: "Practice at least 3 SQL problems daily. Window functions are heavily tested in interviews."
      },
      {
        title: "4. Python for Data Analysis",
        description: "Learn Python as your primary programming language for data manipulation, cleaning, and analysis.",
        skills: ["Python Basics (Variables, Loops, Functions, OOP)", "Pandas (DataFrames, Merging, GroupBy, Pivot)", "NumPy (Arrays, Broadcasting, Linear Algebra)", "Data Cleaning (Missing Values, Duplicates, Outliers)", "Regular Expressions for Text Data", "Matplotlib & Seaborn for Visualization", "Exploratory Data Analysis (EDA) Workflows"],
        resources: ["Kaggle — Free Python Course", "Automate the Boring Stuff with Python (Free)", "Python for Data Analysis by Wes McKinney", "DataCamp — Data Analyst with Python Track", "Real Python — Tutorials & Guides"],
        duration: "6–8 weeks",
        tips: "Build EDA projects on Kaggle datasets. Document your analysis process in Jupyter Notebooks."
      },
      {
        title: "5. Data Visualization & BI Tools",
        description: "Create compelling dashboards and visual narratives that drive business decisions.",
        skills: ["Tableau (Calculated Fields, LOD Expressions, Parameters)", "Power BI (DAX, Power Query, Data Modeling)", "Dashboard Design Principles", "Storytelling with Data", "KPI Definition & Tracking", "Interactive Filters & Drill-downs", "Color Theory for Data Viz"],
        resources: ["Tableau Public — Gallery & Practice", "Power BI Guided Learning (Microsoft)", "Storytelling with Data by Cole Nussbaumer (Book)", "Information is Beautiful — Inspiration", "Makeover Monday — Weekly Viz Challenge"],
        duration: "4–6 weeks",
        tips: "Publish 5+ dashboards on Tableau Public. Recreate real-world dashboards for practice."
      },
      {
        title: "6. Domain Knowledge & Soft Skills",
        description: "Understand business contexts and develop communication skills to present findings effectively.",
        skills: ["Business Metrics (CAC, LTV, Churn, ARPU)", "A/B Testing & Experiment Design", "Stakeholder Communication", "Presentation Skills", "Data Ethics & Privacy (GDPR, CCPA)", "Cross-functional Collaboration"],
        resources: ["Lean Analytics (Book)", "Google Analytics Academy", "Coursera — Data Analysis & Presentation Skills", "Harvard Business Review — Data Articles"],
        duration: "3–4 weeks",
        tips: "Learn the language of the industry you want to work in. Business context separates good analysts from great ones."
      },
      {
        title: "7. Portfolio & Job Preparation",
        description: "Build an impressive portfolio, optimize your resume, and prepare for interviews.",
        skills: ["3–5 End-to-End Portfolio Projects", "GitHub Profile & README Optimization", "Portfolio Website / Blog", "Resume Tailoring for Data Roles", "Behavioral Interview Preparation (STAR Method)", "Technical Interview Practice (SQL + Python + Case Studies)"],
        resources: ["Kaggle — Datasets & Competitions", "GitHub Pages — Free Portfolio Hosting", "Glassdoor — Interview Questions", "DataLemur — Interview Prep", "Stratascratch — Real Interview Questions"],
        duration: "4–6 weeks",
        tips: "Each portfolio project should tell a story: problem → approach → insights → impact. Include business recommendations."
      },
    ],
  },

  // ─── 2. PRODUCT ANALYST ───
  {
    id: "product-analyst",
    title: "Product Analyst",
    icon: LineChart,
    description: "Drive product decisions with data — measure user behavior, run experiments, and optimize features",
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    avgSalary: "$70K–$120K",
    avgSalaryINR: "₹6L–₹18L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Analytics Foundations",
        description: "Build core skills in statistics, SQL, and Python that form the backbone of product analytics.",
        skills: ["Descriptive & Inferential Statistics", "SQL (Advanced JOINs, Window Functions, CTEs)", "Python (Pandas, NumPy)", "Probability & Bayesian Thinking", "Data Cleaning & Transformation"],
        resources: ["Mode Analytics SQL Tutorial", "Khan Academy Statistics", "DataCamp — Data Analyst Track", "Kaggle — Python Course"],
        duration: "6–8 weeks",
        tips: "Product analysts spend 60% of their time in SQL. Master window functions and complex aggregations."
      },
      {
        title: "2. Product Metrics & Frameworks",
        description: "Learn how to define, measure, and track the metrics that matter for product success.",
        skills: ["North Star Metric & KPIs", "AARRR Pirate Metrics (Acquisition, Activation, Retention, Revenue, Referral)", "Cohort Analysis & Retention Curves", "Funnel Analysis & Conversion Rates", "User Segmentation", "DAU/MAU Ratio & Engagement Metrics", "Revenue Metrics (ARPU, LTV, MRR, Churn Rate)"],
        resources: ["Lean Analytics by Alistair Croll (Book)", "Amplitude — Product Analytics Playbook", "Reforge — Product Analytics Course", "Lenny's Newsletter — Product Metrics"],
        duration: "3–4 weeks",
        tips: "Always tie metrics to business outcomes. A good product analyst asks 'so what?' after every insight."
      },
      {
        title: "3. Experimentation & A/B Testing",
        description: "Design and analyze experiments to validate product hypotheses with statistical rigor.",
        skills: ["A/B Test Design & Hypothesis Formation", "Sample Size Calculation & Power Analysis", "Statistical Significance & P-values", "Multi-armed Bandits", "Bayesian vs Frequentist Approaches", "Common Pitfalls (Peeking, Simpson's Paradox, Novelty Effects)", "Experiment Documentation & Decision Frameworks"],
        resources: ["Trustworthy Online Controlled Experiments (Book)", "Evan Miller — A/B Testing Tools", "Statsig — Experimentation Platform Docs", "Optimizely — Knowledge Base"],
        duration: "3–4 weeks",
        tips: "Document every experiment: hypothesis, design, results, decision. This becomes your portfolio gold."
      },
      {
        title: "4. Analytics Tools & Platforms",
        description: "Get hands-on with the tools product teams actually use daily.",
        skills: ["Amplitude / Mixpanel / Heap (Event Analytics)", "Google Analytics 4 (GA4)", "Looker / Metabase / Tableau (BI Dashboards)", "Segment / Rudderstack (Event Collection)", "dbt (Data Transformation)", "BigQuery / Snowflake / Redshift"],
        resources: ["Amplitude Academy (Free)", "Google Analytics Academy", "dbt Learn (Free)", "Mixpanel — Getting Started Guide"],
        duration: "4–5 weeks",
        tips: "Learn event tracking design — it's the foundation of all product analytics. Garbage in, garbage out."
      },
      {
        title: "5. Product Sense & Business Acumen",
        description: "Develop the product intuition that separates analysts from strategic partners.",
        skills: ["Product Lifecycle & Strategy", "User Research & Qualitative Analysis", "Competitive Analysis", "Market Sizing & TAM/SAM/SOM", "Prioritization Frameworks (RICE, ICE)", "Writing Product Specs & PRDs", "Cross-functional Communication (PM, Eng, Design)"],
        resources: ["Inspired by Marty Cagan (Book)", "Product School — Free Resources", "Lenny's Podcast", "Stratechery by Ben Thompson"],
        duration: "3–4 weeks",
        tips: "Shadow a PM if possible. Understanding the product decision-making process makes your analyses 10x more impactful."
      },
      {
        title: "6. Advanced Analytics & ML Basics",
        description: "Level up with predictive modeling, forecasting, and machine learning fundamentals.",
        skills: ["Time Series Forecasting (ARIMA, Prophet)", "Predictive Modeling (Logistic Regression, Random Forest)", "Customer Segmentation (K-Means, RFM)", "Churn Prediction Models", "Causal Inference (Difference-in-Differences, Propensity Matching)", "Feature Engineering"],
        resources: ["Scikit-learn Documentation", "Facebook Prophet Documentation", "Causal Inference for The Brave and True (Free Book)", "Coursera — Machine Learning by Andrew Ng"],
        duration: "4–6 weeks",
        tips: "You don't need to be an ML engineer, but knowing when and how to apply basic ML gives you a huge edge."
      },
      {
        title: "7. Portfolio & Interview Prep",
        description: "Build a compelling portfolio showcasing product thinking alongside technical skills.",
        skills: ["3–5 Case Study Projects (with product recommendations)", "Metrics Definition Exercise Portfolio", "SQL + Python Technical Interview Practice", "Product Sense Interview Practice", "A/B Test Analysis Write-ups", "Blog or Medium Articles"],
        resources: ["Exponent — Product Analyst Interview Prep", "DataLemur — SQL Challenges", "Lewis Lin — Product Metrics Decode", "Glassdoor — Product Analyst Interviews"],
        duration: "4–6 weeks",
        tips: "In interviews, always structure your answer: clarify → define metrics → analyze → recommend. Show product thinking, not just SQL skills."
      },
    ],
  },

  // ─── 3. FRONTEND DEVELOPER ───
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    icon: Code,
    description: "Build beautiful, interactive, and performant web applications and user interfaces",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    avgSalary: "$60K–$130K",
    avgSalaryINR: "₹4L–₹18L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. HTML, CSS & JavaScript Fundamentals",
        description: "Master the three pillars of web development — structure, styling, and interactivity.",
        skills: ["Semantic HTML5 (header, nav, main, article, section)", "CSS Flexbox & CSS Grid Layouts", "Responsive Design & Media Queries", "CSS Variables & Custom Properties", "JavaScript ES6+ (let/const, arrow functions, destructuring, spread)", "DOM Manipulation & Event Handling", "Fetch API & Async/Await", "Browser DevTools Proficiency"],
        resources: ["MDN Web Docs — Complete Reference", "freeCodeCamp — Responsive Web Design", "JavaScript.info — The Modern JavaScript Tutorial", "CSS-Tricks — Complete Guide to Flexbox/Grid", "Wes Bos — JavaScript30 (Free)"],
        duration: "8–10 weeks",
        tips: "Build 10+ small projects (landing pages, calculators, to-do apps). Don't rush to frameworks before mastering vanilla JS."
      },
      {
        title: "2. CSS Frameworks & Modern Styling",
        description: "Speed up development with utility-first CSS and modern styling approaches.",
        skills: ["Tailwind CSS (Utility Classes, Responsive, Dark Mode)", "CSS Animations & Transitions", "CSS Architecture (BEM Methodology)", "Sass/SCSS Preprocessor", "CSS-in-JS (Styled Components, Emotion)", "Design Tokens & Theme Systems"],
        resources: ["Tailwind CSS Documentation", "Kevin Powell YouTube Channel", "CSS for JS Developers by Josh Comeau", "Animista — CSS Animation Library"],
        duration: "3–4 weeks",
        tips: "Pick Tailwind CSS — it's the industry trend. Learn it deeply rather than knowing 5 frameworks superficially."
      },
      {
        title: "3. React.js & Component Architecture",
        description: "Learn the most in-demand frontend framework for building complex UIs.",
        skills: ["JSX & Component Composition", "Props, State & Lifting State Up", "Hooks (useState, useEffect, useRef, useMemo, useCallback)", "Custom Hooks", "React Router v6 (Nested Routes, Loaders)", "Context API for Global State", "Error Boundaries & Suspense", "React DevTools"],
        resources: ["React Official Documentation (react.dev)", "Scrimba — Learn React for Free", "Full Stack Open (University of Helsinki)", "Epic React by Kent C. Dodds", "React Patterns — Advanced Patterns"],
        duration: "8–10 weeks",
        tips: "Build a full app (e.g., e-commerce, social media clone). Understand the component lifecycle deeply."
      },
      {
        title: "4. TypeScript & Code Quality",
        description: "Write type-safe, maintainable, production-quality code.",
        skills: ["TypeScript Basics (Types, Interfaces, Enums)", "Generics & Utility Types (Partial, Pick, Omit)", "Type Guards & Discriminated Unions", "TypeScript with React (Props, Events, Refs)", "ESLint & Prettier Configuration", "Husky & Pre-commit Hooks", "Code Review Best Practices"],
        resources: ["TypeScript Handbook (Official)", "Total TypeScript by Matt Pocock", "Type Challenges (GitHub)", "React TypeScript Cheatsheet"],
        duration: "4–5 weeks",
        tips: "Start using TypeScript in all new projects. It catches bugs at compile time and makes refactoring painless."
      },
      {
        title: "5. State Management & Data Fetching",
        description: "Handle complex application state and communicate efficiently with backends.",
        skills: ["TanStack Query (React Query) for Server State", "Zustand / Redux Toolkit for Client State", "REST API Integration", "GraphQL Basics (Apollo Client)", "Optimistic Updates & Caching", "WebSockets & Real-time Data", "Authentication Flows (JWT, OAuth)"],
        resources: ["TanStack Query Documentation", "Redux Toolkit Documentation", "Zustand GitHub", "Apollo GraphQL Tutorial"],
        duration: "4–5 weeks",
        tips: "TanStack Query eliminates 90% of your state management needs. Master it before reaching for Redux."
      },
      {
        title: "6. Testing & Performance",
        description: "Ensure your applications are reliable, fast, and accessible.",
        skills: ["Unit Testing (Vitest / Jest)", "Component Testing (React Testing Library)", "E2E Testing (Playwright / Cypress)", "Web Vitals (LCP, FID, CLS)", "Code Splitting & Lazy Loading", "Image Optimization", "Lighthouse Audits", "Accessibility (WCAG 2.1, Screen Readers)"],
        resources: ["Testing JavaScript by Kent C. Dodds", "web.dev — Performance & Accessibility", "Playwright Documentation", "Deque University — Accessibility"],
        duration: "4–5 weeks",
        tips: "Write tests for critical user flows, not for 100% coverage. Performance optimization is a key differentiator."
      },
      {
        title: "7. Build Tools, Deployment & Portfolio",
        description: "Master the development ecosystem and ship your portfolio to production.",
        skills: ["Git & GitHub (Branching, PRs, Merge Conflicts)", "Vite Build Tool", "CI/CD (GitHub Actions)", "Deployment (Vercel, Netlify, Cloudflare Pages)", "Monorepos & Package Management", "SEO Fundamentals", "Portfolio Website & Blog"],
        resources: ["GitHub Skills — Interactive Courses", "Vite Documentation", "Vercel Documentation", "Josh Comeau's Blog"],
        duration: "4–6 weeks",
        tips: "Your GitHub profile IS your resume. Contribute to open source, write clean commit messages, and maintain a polished portfolio."
      },
    ],
  },

  // ─── 4. BACKEND DEVELOPER ───
  {
    id: "backend-developer",
    title: "Backend Developer",
    icon: Server,
    description: "Build robust servers, APIs, and database-driven applications that power the web",
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    avgSalary: "$65K–$140K",
    avgSalaryINR: "₹5L–₹20L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Programming Language Mastery",
        description: "Get deeply proficient in a backend language — Node.js, Python, Java, or Go.",
        skills: ["Core Syntax & Data Types", "Object-Oriented Programming (Classes, Inheritance, Polymorphism)", "Functional Programming Concepts", "Data Structures (Arrays, HashMaps, Trees, Graphs)", "Algorithms (Sorting, Searching, Recursion, Dynamic Programming)", "Error Handling & Debugging", "Async Programming (Promises, Async/Await, Threads)"],
        resources: ["CS50 by Harvard (Free)", "The Odin Project — Node.js Path", "Codecademy — Python/Java/Go Tracks", "Exercism — Language Practice"],
        duration: "8–10 weeks",
        tips: "Pick one language and go deep. Node.js is great for JS developers, Python for data-heavy apps, Java/Go for enterprise."
      },
      {
        title: "2. Databases — Relational & NoSQL",
        description: "Master data storage, retrieval, and database design patterns.",
        skills: ["PostgreSQL / MySQL (Advanced SQL)", "Database Design & Normalization (1NF–3NF)", "Indexing & Query Optimization", "Transactions & ACID Properties", "MongoDB (Document Database)", "Redis (In-Memory Cache)", "ORMs (Prisma, SQLAlchemy, Hibernate)", "Database Migrations & Versioning"],
        resources: ["PostgreSQL Official Tutorial", "MongoDB University (Free Courses)", "Redis University", "Use The Index, Luke — SQL Performance"],
        duration: "5–6 weeks",
        tips: "Design your schemas before writing code. Learn to read EXPLAIN plans — slow queries kill production apps."
      },
      {
        title: "3. Web Frameworks & REST APIs",
        description: "Build production-grade APIs using industry-standard frameworks.",
        skills: ["Express.js / Fastify (Node.js) or Django / Flask (Python) or Spring Boot (Java)", "RESTful API Design (Resources, HTTP Methods, Status Codes)", "Request Validation & Sanitization", "Middleware & Pipeline Architecture", "Authentication (JWT, OAuth 2.0, Session-based)", "Authorization (RBAC, ABAC)", "API Versioning & Documentation (OpenAPI/Swagger)", "File Upload & Streaming"],
        resources: ["Express.js Official Guide", "Django REST Framework Tutorial", "REST API Design Rulebook (Book)", "Swagger/OpenAPI Documentation"],
        duration: "6–8 weeks",
        tips: "Follow REST conventions strictly. Write API documentation as you build — your future self and teammates will thank you."
      },
      {
        title: "4. Testing & Code Quality",
        description: "Write reliable, maintainable code with comprehensive testing strategies.",
        skills: ["Unit Testing (Jest, Pytest, JUnit)", "Integration Testing", "API Testing (Supertest, Postman)", "Test-Driven Development (TDD)", "Mocking & Stubbing", "Code Coverage Tools", "Linting & Code Formatting", "Design Patterns (Repository, Service, Factory)"],
        resources: ["Jest Documentation", "Testing Python by Harry Percival (Free Book)", "Postman Learning Center", "Refactoring Guru — Design Patterns"],
        duration: "3–4 weeks",
        tips: "Aim for testing the critical paths, not 100% coverage. Integration tests give the most confidence per effort."
      },
      {
        title: "5. DevOps & Deployment",
        description: "Learn to deploy, monitor, and manage applications in production.",
        skills: ["Linux Server Administration", "Docker (Containers, Compose, Volumes)", "CI/CD Pipelines (GitHub Actions, GitLab CI)", "Cloud Platforms (AWS / GCP / Azure — Compute, Storage, Networking)", "Nginx / Load Balancers", "Environment Management (.env, Secrets)", "Logging & Monitoring (Prometheus, Grafana, ELK)", "Infrastructure as Code Basics (Terraform)"],
        resources: ["Docker Official Tutorial", "Linux Journey (Free)", "AWS Free Tier — Hands-on Labs", "GitHub Actions Documentation"],
        duration: "5–6 weeks",
        tips: "Dockerize everything from day one. Learn AWS fundamentals — it dominates the cloud market."
      },
      {
        title: "6. Security & Performance",
        description: "Secure applications against attacks and optimize for scale.",
        skills: ["OWASP Top 10 Vulnerabilities", "SQL Injection & XSS Prevention", "Rate Limiting & Throttling", "CORS & CSRF Protection", "Caching Strategies (CDN, Redis, HTTP Cache)", "Database Connection Pooling", "N+1 Query Prevention", "Compression & Response Optimization"],
        resources: ["OWASP Cheat Sheet Series", "Web Security Academy by PortSwigger", "High Performance Browser Networking (Free Book)", "Redis Best Practices"],
        duration: "3–4 weeks",
        tips: "Security is not optional. Learn the OWASP Top 10 by heart. One vulnerability can compromise your entire system."
      },
      {
        title: "7. System Design & Architecture",
        description: "Design scalable, distributed systems and build impressive portfolio projects.",
        skills: ["Monolith vs Microservices Trade-offs", "Message Queues (RabbitMQ, Kafka, SQS)", "API Gateway & Service Mesh", "Event-Driven Architecture", "Database Sharding & Replication", "CAP Theorem & Consistency Models", "WebSockets & Real-time Systems", "System Design Interview Preparation"],
        resources: ["System Design Interview by Alex Xu (Book)", "Designing Data-Intensive Applications (Book)", "System Design Primer (GitHub)", "ByteByteGo YouTube Channel"],
        duration: "5–7 weeks",
        tips: "Start with a monolith, evolve to microservices only when needed. Over-engineering is as bad as under-engineering."
      },
    ],
  },

  // ─── 5. FULL STACK DEVELOPER ───
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    icon: Layers,
    description: "Build complete web applications from frontend to backend, database to deployment",
    color: "bg-teal-500/10 text-teal-600 border-teal-500/20",
    avgSalary: "$70K–$150K",
    avgSalaryINR: "₹5L–₹22L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Frontend Fundamentals (HTML, CSS, JS)",
        description: "Master the browser technologies that render every web page.",
        skills: ["Semantic HTML5", "CSS Flexbox, Grid & Responsive Design", "JavaScript ES6+ & DOM Manipulation", "Browser DevTools", "Accessibility Basics"],
        resources: ["MDN Web Docs", "freeCodeCamp", "JavaScript.info", "CSS-Tricks"],
        duration: "6–8 weeks",
        tips: "Don't skip the fundamentals. Many full stack devs have weak CSS — this is your chance to stand out."
      },
      {
        title: "2. Frontend Framework (React)",
        description: "Build dynamic, component-based user interfaces.",
        skills: ["React Components, Props & State", "Hooks & Custom Hooks", "React Router", "Tailwind CSS", "TypeScript with React", "Form Handling (React Hook Form)"],
        resources: ["React.dev Official Docs", "Full Stack Open", "Tailwind CSS Docs", "Total TypeScript"],
        duration: "6–8 weeks",
        tips: "Build 2-3 complete frontend apps before adding a backend. Strong frontend skills make you a better full stack dev."
      },
      {
        title: "3. Backend & APIs (Node.js)",
        description: "Build servers and APIs that power your frontend applications.",
        skills: ["Node.js & Express.js", "RESTful API Design", "Authentication (JWT, OAuth)", "Input Validation & Error Handling", "File Uploads", "API Documentation (Swagger)"],
        resources: ["The Odin Project — Node.js", "Express.js Guide", "Node.js Best Practices (GitHub)", "Postman Learning"],
        duration: "5–6 weeks",
        tips: "Build your backend API first, test it with Postman, then connect your React frontend."
      },
      {
        title: "4. Databases & ORM",
        description: "Store, query, and manage application data effectively.",
        skills: ["PostgreSQL (Advanced SQL)", "MongoDB (NoSQL)", "Prisma / Drizzle ORM", "Database Design & Relationships", "Migrations & Seeding", "Redis for Caching"],
        resources: ["PostgreSQL Tutorial", "Prisma Documentation", "MongoDB University", "Redis Docs"],
        duration: "4–5 weeks",
        tips: "Learn PostgreSQL well — it covers 90% of use cases. Add MongoDB knowledge for flexibility."
      },
      {
        title: "5. DevOps, Docker & Deployment",
        description: "Ship your applications to production with confidence.",
        skills: ["Git & GitHub Workflows", "Docker & Docker Compose", "CI/CD (GitHub Actions)", "Cloud Deployment (Vercel, Railway, AWS)", "Environment Variables & Secrets", "Domain & SSL Setup"],
        resources: ["Docker Docs", "GitHub Actions Docs", "Vercel / Railway Docs", "AWS Free Tier"],
        duration: "3–4 weeks",
        tips: "Deploy early and often. Don't wait until your app is 'perfect' — shipping is a skill."
      },
      {
        title: "6. Advanced Topics & Real-World Skills",
        description: "Level up with production-grade patterns and architectural thinking.",
        skills: ["WebSockets & Real-time Features", "Background Jobs & Queues", "Payment Integration (Stripe)", "Email Services", "Rate Limiting & Security", "Performance Optimization", "Monitoring & Error Tracking"],
        resources: ["Stripe Docs", "Socket.io Docs", "Sentry — Error Tracking", "web.dev — Performance"],
        duration: "4–5 weeks",
        tips: "Build one complete SaaS app — auth, payments, dashboard, email. This is the ultimate portfolio project."
      },
      {
        title: "7. Portfolio & Career",
        description: "Build a portfolio that demonstrates end-to-end capabilities.",
        skills: ["3–5 Full Stack Projects on GitHub", "Live Deployed Applications", "Technical Blog / YouTube", "Open Source Contributions", "System Design Basics", "Interview Preparation"],
        resources: ["GitHub — Portfolio Best Practices", "Dev.to — Blogging Platform", "System Design Primer", "Pramp — Mock Interviews"],
        duration: "4–6 weeks",
        tips: "Quality over quantity. One polished full stack app with auth, payments, and real users beats 10 to-do apps."
      },
    ],
  },

  // ─── 6. DATA SCIENTIST ───
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: Brain,
    description: "Use machine learning, AI, and statistical modeling to solve complex business problems",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    avgSalary: "$80K–$160K",
    avgSalaryINR: "₹6L–₹25L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Mathematics for ML",
        description: "Deep dive into the mathematical foundations that power machine learning algorithms.",
        skills: ["Linear Algebra (Vectors, Matrices, Eigenvalues)", "Multivariate Calculus (Gradients, Chain Rule)", "Probability & Statistics (Distributions, Bayes' Theorem)", "Optimization (Gradient Descent, Convex Optimization)", "Information Theory Basics"],
        resources: ["3Blue1Brown — Essence of Linear Algebra", "MIT 18.06 — Linear Algebra", "Mathematics for Machine Learning (Book, Free)", "StatQuest YouTube"],
        duration: "6–8 weeks",
        tips: "Watch 3Blue1Brown for intuition, then practice problems. You need to understand WHY algorithms work."
      },
      {
        title: "2. Python for Data Science",
        description: "Master the Python data science ecosystem thoroughly.",
        skills: ["NumPy (Array Operations, Broadcasting)", "Pandas (Advanced Data Manipulation)", "Matplotlib, Seaborn & Plotly", "Jupyter Notebooks & Lab", "SciPy (Statistical Tests)", "Scikit-learn Basics"],
        resources: ["Python Data Science Handbook (Free)", "Kaggle Learn — Python & Pandas", "DataCamp — Python Track", "Real Python Tutorials"],
        duration: "5–6 weeks",
        tips: "Write clean, reproducible Jupyter notebooks. Good notebooks tell a story from data to insights."
      },
      {
        title: "3. Machine Learning Fundamentals",
        description: "Learn core ML algorithms, evaluation techniques, and model selection.",
        skills: ["Supervised Learning (Linear/Logistic Regression, Decision Trees, Random Forest, SVM, KNN)", "Unsupervised Learning (K-Means, DBSCAN, PCA, t-SNE)", "Model Evaluation (Cross-Validation, ROC-AUC, F1, RMSE)", "Feature Engineering & Selection", "Hyperparameter Tuning (GridSearch, RandomSearch, Optuna)", "Handling Imbalanced Data", "Ensemble Methods (Bagging, Boosting, XGBoost, LightGBM)"],
        resources: ["Andrew Ng's Machine Learning Course (Stanford/Coursera)", "Hands-On Machine Learning by Aurélien Géron (Book)", "Scikit-learn Documentation", "StatQuest — ML Playlist"],
        duration: "8–10 weeks",
        tips: "Implement algorithms from scratch before using libraries. This builds deep understanding."
      },
      {
        title: "4. Deep Learning & Neural Networks",
        description: "Master neural networks for complex pattern recognition tasks.",
        skills: ["Neural Network Architecture (Layers, Activations, Loss Functions)", "TensorFlow / PyTorch", "CNNs for Computer Vision", "RNNs, LSTMs for Sequential Data", "Transfer Learning & Fine-tuning", "Regularization (Dropout, Batch Norm)", "GPU Training & Mixed Precision"],
        resources: ["Fast.ai — Practical Deep Learning", "Deep Learning Specialization by Andrew Ng", "PyTorch Official Tutorials", "d2l.ai — Dive into Deep Learning (Free Book)"],
        duration: "8–10 weeks",
        tips: "Start with Fast.ai for practical skills, then go deeper with theory. Use Google Colab for free GPU access."
      },
      {
        title: "5. NLP & Generative AI",
        description: "Work with text data, language models, and the latest AI breakthroughs.",
        skills: ["Text Preprocessing (Tokenization, Stemming, TF-IDF)", "Word Embeddings (Word2Vec, GloVe)", "Transformers Architecture", "Hugging Face (BERT, GPT, T5)", "Prompt Engineering & LLM APIs", "RAG (Retrieval Augmented Generation)", "Fine-tuning LLMs"],
        resources: ["Hugging Face Course (Free)", "Stanford CS224N — NLP with Deep Learning", "LangChain Documentation", "OpenAI Cookbook"],
        duration: "6–8 weeks",
        tips: "NLP/LLM skills are the hottest in the market right now. Build a RAG application for your portfolio."
      },
      {
        title: "6. MLOps & Production ML",
        description: "Deploy and maintain ML models in production environments.",
        skills: ["Model Serialization & Serving (FastAPI, Flask)", "MLflow for Experiment Tracking", "Docker for ML", "Feature Stores", "Model Monitoring & Drift Detection", "A/B Testing ML Models", "CI/CD for ML Pipelines"],
        resources: ["MLOps Zoomcamp (Free)", "Full Stack Deep Learning", "Weights & Biases Courses", "Made With ML"],
        duration: "4–6 weeks",
        tips: "A model that doesn't ship is worthless. Learn to deploy models — it's the most in-demand MLOps skill."
      },
      {
        title: "7. Competitions, Research & Portfolio",
        description: "Build credibility through competitions, publications, and real-world impact.",
        skills: ["Kaggle Competitions (Medals)", "Research Paper Reading & Implementation", "Technical Blog Writing", "End-to-End ML Projects", "Open Source ML Contributions", "Conference Participation"],
        resources: ["Kaggle", "Papers With Code", "Towards Data Science (Medium)", "arXiv — Latest Research Papers"],
        duration: "Ongoing",
        tips: "One Kaggle medal is worth more than 10 courses. Compete, learn from top solutions, and iterate."
      },
    ],
  },

  // ─── 7. CYBERSECURITY ANALYST ───
  {
    id: "cybersecurity",
    title: "Cybersecurity Analyst",
    icon: Shield,
    description: "Protect systems, networks, and data from cyber threats and security breaches",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    avgSalary: "$65K–$130K",
    avgSalaryINR: "₹5L–₹18L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. IT & Networking Fundamentals",
        description: "Understand how computers, networks, and operating systems work at a deep level.",
        skills: ["TCP/IP Model & OSI Layers", "Subnetting & IP Addressing", "DNS, DHCP, HTTP/HTTPS Protocols", "Linux Administration & Bash Scripting", "Windows Server & Active Directory", "Virtualization (VMs, Hypervisors)", "Network Devices (Routers, Switches, Firewalls)"],
        resources: ["CompTIA A+ & Network+ Study Materials", "Professor Messer YouTube", "Linux Journey (Free)", "Cisco Networking Academy"],
        duration: "6–8 weeks",
        tips: "Set up a home lab with VirtualBox. Hands-on practice is essential — theory alone won't cut it in cybersecurity."
      },
      {
        title: "2. Security Fundamentals & Frameworks",
        description: "Learn core security concepts, principles, and compliance frameworks.",
        skills: ["CIA Triad (Confidentiality, Integrity, Availability)", "Encryption & Hashing (AES, RSA, SHA, bcrypt)", "PKI & Digital Certificates", "Firewalls, IDS/IPS Configuration", "Security Policies & Governance", "Compliance Frameworks (NIST, ISO 27001, SOC 2)", "Risk Assessment & Management"],
        resources: ["CompTIA Security+ Certification Guide", "Cybrary — Free Security Courses", "NIST Cybersecurity Framework", "Professor Messer — Security+ Playlist"],
        duration: "5–6 weeks",
        tips: "CompTIA Security+ is the #1 entry-level certification. It's recognized globally and opens many doors."
      },
      {
        title: "3. Ethical Hacking & Penetration Testing",
        description: "Learn offensive security — think like an attacker to defend like a pro.",
        skills: ["Kali Linux & Security Tools", "Reconnaissance (Nmap, Shodan, theHarvester)", "Web Application Hacking (Burp Suite, OWASP ZAP)", "OWASP Top 10 Vulnerabilities", "Network Penetration Testing", "Password Cracking (Hashcat, John the Ripper)", "Social Engineering Awareness", "Exploit Frameworks (Metasploit)"],
        resources: ["TryHackMe — Beginner to Advanced Paths", "HackTheBox — Labs & Challenges", "PortSwigger Web Security Academy (Free)", "The Web Application Hacker's Handbook"],
        duration: "8–10 weeks",
        tips: "TryHackMe is the best starting point. Graduate to HackTheBox for harder challenges. Document every box you solve."
      },
      {
        title: "4. Security Operations & Incident Response",
        description: "Monitor, detect, and respond to security incidents in real-time.",
        skills: ["SIEM Tools (Splunk, ELK, QRadar)", "Log Analysis & Correlation", "Threat Intelligence Feeds", "Incident Response Lifecycle (PICERL)", "Digital Forensics Basics", "Malware Analysis Fundamentals", "Threat Hunting Techniques", "MITRE ATT&CK Framework"],
        resources: ["Splunk Free Training", "Blue Team Labs Online", "SANS Reading Room — Free Research Papers", "CyberDefenders — Blue Team Challenges"],
        duration: "5–6 weeks",
        tips: "Blue team skills are in higher demand than red team. Most companies need defenders, not pentesters."
      },
      {
        title: "5. Cloud & Application Security",
        description: "Secure modern cloud environments and application architectures.",
        skills: ["AWS / Azure / GCP Security Services", "Cloud Security Posture Management", "Container Security (Docker, Kubernetes)", "Secure SDLC & DevSecOps", "API Security", "Infrastructure as Code Security (Terraform, CloudFormation)", "Zero Trust Architecture"],
        resources: ["AWS Security Specialty Study Guide", "OWASP Cloud Security", "Docker Security Best Practices", "Cloud Security Alliance (CSA)"],
        duration: "5–6 weeks",
        tips: "Cloud security is the fastest-growing area. AWS Security Specialty certification makes you highly employable."
      },
      {
        title: "6. Certifications & Specialization",
        description: "Get industry-recognized certifications and choose a specialization.",
        skills: ["CompTIA Security+ (Entry Level)", "CEH — Certified Ethical Hacker", "OSCP — Offensive Security Certified Professional", "CySA+ — Cybersecurity Analyst", "CISSP — For Senior Roles", "Specialized: Cloud Security (CCSP), Forensics (GCFE)"],
        resources: ["Offensive Security — OSCP", "ISC2 — CISSP", "CompTIA Certification Path", "SANS GIAC Certifications"],
        duration: "8–12 weeks per certification",
        tips: "Security+ → CySA+ / CEH → OSCP is the ideal progression. OSCP is the gold standard for technical roles."
      },
      {
        title: "7. CTFs, Bug Bounties & Community",
        description: "Sharpen skills through competitions, earn bounties, and build your reputation.",
        skills: ["CTF Competitions (Jeopardy & Attack-Defense)", "Bug Bounty Hunting (HackerOne, Bugcrowd)", "Security Blog / Write-ups", "Open Source Security Tools", "Conference Talks (BSides, DEF CON)", "Mentoring & Community Involvement"],
        resources: ["PicoCTF — Beginner CTF", "HackerOne — Bug Bounty Platform", "Bugcrowd — Bug Bounty Platform", "DEF CON & BSides Conferences"],
        duration: "Ongoing",
        tips: "Bug bounties can earn real money while building your resume. Start with disclosed reports to learn methodology."
      },
    ],
  },

  // ─── 8. CLOUD ENGINEER ───
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    icon: Cloud,
    description: "Design, deploy, and manage scalable cloud infrastructure and services",
    color: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    avgSalary: "$80K–$155K",
    avgSalaryINR: "₹6L–₹22L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Linux & Networking",
        description: "Get comfortable with command line, scripting, and networking fundamentals.",
        skills: ["Linux CLI & File System", "Bash Scripting & Automation", "SSH, SCP, rsync", "DNS, HTTP/HTTPS, TCP/UDP", "Firewalls (iptables, ufw)", "Networking (Subnets, CIDR, VPC concepts)"],
        resources: ["Linux Journey (Free)", "Bash Guide for Beginners", "Networking Fundamentals by Cisco", "OverTheWire — Bandit (Linux Practice)"],
        duration: "4–5 weeks",
        tips: "Linux is the foundation of cloud computing. Get comfortable living in the terminal."
      },
      {
        title: "2. Cloud Platform Deep Dive (AWS/Azure/GCP)",
        description: "Master a major cloud provider's core services.",
        skills: ["Compute (EC2/VMs, Lambda/Functions)", "Storage (S3, EBS, Blob)", "Networking (VPC, Subnets, Security Groups, Load Balancers)", "IAM (Users, Roles, Policies)", "Databases (RDS, DynamoDB)", "Serverless Architecture", "Cost Optimization & Billing"],
        resources: ["AWS Cloud Practitioner → Solutions Architect", "Azure Fundamentals (AZ-900)", "GCP Cloud Digital Leader", "A Cloud Guru / Cloud Academy"],
        duration: "8–10 weeks",
        tips: "Pick ONE cloud provider and go deep. AWS has the largest market share. Get certified to prove competency."
      },
      {
        title: "3. Infrastructure as Code (IaC)",
        description: "Automate infrastructure provisioning — never click in a console again.",
        skills: ["Terraform (HCL, Modules, State Management)", "AWS CloudFormation / Azure ARM / GCP Deployment Manager", "Ansible (Configuration Management)", "Pulumi (IaC with Programming Languages)", "GitOps Workflows", "Secrets Management (Vault, AWS Secrets Manager)"],
        resources: ["Terraform Documentation & Tutorials", "HashiCorp Learn (Free)", "Ansible Documentation", "Spacelift — Terraform Best Practices"],
        duration: "5–6 weeks",
        tips: "Terraform is the industry standard for multi-cloud IaC. Learn modules and remote state management well."
      },
      {
        title: "4. Containers & Kubernetes",
        description: "Master containerization and orchestration for modern application deployment.",
        skills: ["Docker (Images, Containers, Compose, Multi-stage Builds)", "Kubernetes (Pods, Deployments, Services, Ingress)", "Helm Charts", "Container Registries (ECR, Docker Hub)", "Container Security & Scanning", "Service Mesh (Istio)", "EKS / AKS / GKE (Managed K8s)"],
        resources: ["Docker Official Tutorial", "Kubernetes.io — Interactive Tutorials", "KodeKloud — CKA/CKAD Courses", "Kubernetes Up & Running (Book)"],
        duration: "6–8 weeks",
        tips: "Docker is a must-have skill. Kubernetes is complex but incredibly valuable — CKA certification is highly respected."
      },
      {
        title: "5. CI/CD & Automation",
        description: "Build automated pipelines for testing, building, and deploying applications.",
        skills: ["GitHub Actions / GitLab CI / Jenkins", "Pipeline Design (Build → Test → Deploy)", "Artifact Management", "Blue/Green & Canary Deployments", "Feature Flags", "ChatOps & Automation Bots"],
        resources: ["GitHub Actions Documentation", "Jenkins Documentation", "GitLab CI/CD Tutorial", "Continuous Delivery (Book by Jez Humble)"],
        duration: "3–4 weeks",
        tips: "Start simple with GitHub Actions. A good CI/CD pipeline prevents 90% of deployment disasters."
      },
      {
        title: "6. Monitoring, Logging & Observability",
        description: "Ensure your infrastructure and applications are healthy and performant.",
        skills: ["Prometheus & Grafana (Metrics)", "ELK Stack / Loki (Logs)", "Distributed Tracing (Jaeger, X-Ray)", "Alerting & On-call (PagerDuty, Opsgenie)", "SLIs, SLOs & Error Budgets", "Chaos Engineering Basics"],
        resources: ["Prometheus Documentation", "Grafana University (Free)", "Google SRE Book (Free)", "Gremlin — Chaos Engineering"],
        duration: "4–5 weeks",
        tips: "You can't fix what you can't see. Good observability is the difference between reactive and proactive operations."
      },
      {
        title: "7. Certifications & Advanced Projects",
        description: "Get certified and build production-grade infrastructure projects.",
        skills: ["AWS Solutions Architect (Associate → Professional)", "CKA / CKAD (Kubernetes)", "Terraform Associate", "Multi-Cloud Architecture", "Disaster Recovery & High Availability", "Cost Optimization at Scale"],
        resources: ["A Cloud Guru", "Cloud Resume Challenge", "AWS Well-Architected Framework", "Exam Pro (Free Practice Tests)"],
        duration: "6–8 weeks per cert",
        tips: "The Cloud Resume Challenge is the best portfolio project for cloud engineers. Do it!"
      },
    ],
  },

  // ─── 9. DEVOPS ENGINEER ───
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    icon: Workflow,
    description: "Bridge development and operations — automate everything, ship faster, fail safer",
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    avgSalary: "$80K–$160K",
    avgSalaryINR: "₹6L–₹25L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Linux, Scripting & Version Control",
        description: "Master the operating system and tools that DevOps runs on.",
        skills: ["Linux Administration (Users, Permissions, Services)", "Bash Scripting & Automation", "Python for Automation", "Git (Branching Strategies, Rebasing, Hooks)", "Package Management (apt, yum, brew)"],
        resources: ["Linux Academy", "The Linux Command Line (Book)", "Pro Git Book (Free)", "Automate the Boring Stuff with Python"],
        duration: "5–6 weeks",
        tips: "Write scripts for everything repetitive. If you do it twice, automate it the third time."
      },
      {
        title: "2. Networking & Security",
        description: "Understand network infrastructure and security principles.",
        skills: ["TCP/IP, DNS, HTTP/HTTPS", "Load Balancing & Reverse Proxies", "SSL/TLS & Certificate Management", "VPNs & Network Security", "Firewall Configuration", "Security Hardening"],
        resources: ["CompTIA Network+", "Nginx Documentation", "Cloudflare Learning Center", "OWASP DevOps Guidelines"],
        duration: "3–4 weeks",
        tips: "Every DevOps engineer debugs network issues. Understanding DNS alone will save you hours."
      },
      {
        title: "3. Containers & Orchestration",
        description: "Containerize applications and orchestrate them at scale.",
        skills: ["Docker (Build, Run, Compose, Networks, Volumes)", "Kubernetes (Architecture, Deployments, Services, ConfigMaps, Secrets)", "Helm (Package Management for K8s)", "Container Security & Scanning", "Pod Autoscaling & Resource Management"],
        resources: ["Docker Documentation", "Kubernetes.io", "KodeKloud", "Kubernetes The Hard Way (Kelsey Hightower)"],
        duration: "6–8 weeks",
        tips: "Do 'Kubernetes The Hard Way' at least once to understand what managed services abstract away."
      },
      {
        title: "4. CI/CD Pipelines",
        description: "Build robust, automated deployment pipelines.",
        skills: ["GitHub Actions / GitLab CI / Jenkins / ArgoCD", "Pipeline as Code", "Automated Testing in Pipelines", "Artifact Management & Container Registries", "Deployment Strategies (Blue/Green, Canary, Rolling)", "GitOps with ArgoCD/Flux"],
        resources: ["GitHub Actions Docs", "ArgoCD Documentation", "Jenkins Pipeline Syntax", "Continuous Delivery (Book)"],
        duration: "4–5 weeks",
        tips: "GitOps is the future. Learn ArgoCD — declarative, Git-driven deployments are powerful and auditable."
      },
      {
        title: "5. Infrastructure as Code & Configuration Management",
        description: "Define and manage infrastructure programmatically.",
        skills: ["Terraform (HCL, Modules, Workspaces, State)", "Ansible (Playbooks, Roles, Inventory)", "CloudFormation / Pulumi", "Packer (Machine Images)", "Secrets Management (HashiCorp Vault)"],
        resources: ["HashiCorp Learn", "Ansible Documentation", "Terraform: Up & Running (Book)", "Vault Documentation"],
        duration: "5–6 weeks",
        tips: "Terraform + Ansible is the most powerful combo. Terraform for provisioning, Ansible for configuration."
      },
      {
        title: "6. Monitoring, Logging & SRE Practices",
        description: "Build observable systems and adopt Site Reliability Engineering practices.",
        skills: ["Prometheus & Grafana", "ELK Stack / Loki / Fluentd", "Distributed Tracing", "SLIs, SLOs & Error Budgets", "Incident Management & Postmortems", "Chaos Engineering", "On-call Rotations & Runbooks"],
        resources: ["Google SRE Book (Free)", "Prometheus Documentation", "Grafana University", "Gremlin Chaos Engineering"],
        duration: "4–5 weeks",
        tips: "Read the Google SRE book — it defines the industry. Good postmortems are blameless and action-oriented."
      },
      {
        title: "7. Cloud Mastery & Certifications",
        description: "Deep expertise in cloud platforms and professional certifications.",
        skills: ["AWS / Azure / GCP — Advanced Services", "Multi-Cloud Strategies", "Cost Optimization & FinOps", "Disaster Recovery Planning", "AWS DevOps Professional / Azure DevOps Engineer", "CKA / Terraform Associate"],
        resources: ["A Cloud Guru", "AWS Well-Architected Framework", "FinOps Foundation", "KodeKloud — Cert Prep"],
        duration: "6–8 weeks per cert",
        tips: "DevOps certs + hands-on experience = highest earning potential in tech. Build a public lab on GitHub."
      },
    ],
  },

  // ─── 10. MOBILE APP DEVELOPER ───
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    icon: Smartphone,
    description: "Build native and cross-platform mobile applications for iOS and Android",
    color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    avgSalary: "$65K–$140K",
    avgSalaryINR: "₹5L–₹20L",
    demandLevel: "High",
    steps: [
      {
        title: "1. Programming Foundations",
        description: "Learn the language that powers your chosen mobile platform.",
        skills: ["JavaScript / TypeScript (React Native)", "Dart (Flutter) or Kotlin (Android) or Swift (iOS)", "OOP & Design Patterns", "Async Programming", "Git Version Control"],
        resources: ["JavaScript.info", "Dart.dev Tour", "Kotlin Koans", "Swift Playgrounds"],
        duration: "5–6 weeks",
        tips: "React Native (JS) offers the fastest path for web developers. Flutter (Dart) has the best developer experience."
      },
      {
        title: "2. Mobile Framework",
        description: "Master your chosen cross-platform or native framework.",
        skills: ["React Native / Expo OR Flutter", "Component/Widget Architecture", "Navigation (Stack, Tab, Drawer)", "Platform-Specific APIs", "Hot Reload & Development Workflow", "Native Modules / Platform Channels"],
        resources: ["React Native Docs / Expo Docs", "Flutter.dev — Codelabs", "Academind — Mobile Courses", "William Candillon YouTube (RN Animations)"],
        duration: "6–8 weeks",
        tips: "Start with Expo for React Native — it removes 80% of setup complexity. For Flutter, follow the official codelabs."
      },
      {
        title: "3. UI/UX & Animations",
        description: "Design beautiful, intuitive mobile interfaces with smooth animations.",
        skills: ["Material Design 3 / Apple HIG", "Responsive Layouts (Different Screen Sizes)", "Gesture Handling", "Complex Animations (Reanimated / Rive)", "Dark Mode / Theming", "Accessibility (VoiceOver, TalkBack)"],
        resources: ["Material.io", "Apple Human Interface Guidelines", "Rive — Animation Tool", "Dribbble — Mobile Inspiration"],
        duration: "3–4 weeks",
        tips: "60fps animations separate good apps from great ones. Invest time in learning Reanimated (RN) or implicit animations (Flutter)."
      },
      {
        title: "4. State Management & Backend Integration",
        description: "Handle complex app state and connect to backend services.",
        skills: ["Redux / Zustand / Riverpod / Provider", "REST & GraphQL API Integration", "Offline-First Architecture", "Local Storage (AsyncStorage, SQLite, Hive)", "Push Notifications (FCM, APNs)", "Real-time Data (WebSockets, Firebase)"],
        resources: ["Firebase Documentation", "Riverpod Docs (Flutter)", "Zustand GitHub", "OneSignal — Push Notifications"],
        duration: "4–5 weeks",
        tips: "Offline-first is crucial for mobile. Users expect apps to work without internet. Plan for it from the start."
      },
      {
        title: "5. Testing, Debugging & Performance",
        description: "Build reliable, high-performance mobile applications.",
        skills: ["Unit & Widget Testing", "Integration Testing (Detox / Patrol)", "Performance Profiling (Flipper, DevTools)", "Memory Leak Detection", "Crash Reporting (Firebase Crashlytics)", "App Size Optimization"],
        resources: ["Flutter Testing Docs", "Detox — E2E Testing for RN", "Firebase Crashlytics", "Flipper — Mobile Debugging"],
        duration: "3–4 weeks",
        tips: "Test on real devices, not just emulators. Battery drain, memory leaks, and slow animations only appear on real hardware."
      },
      {
        title: "6. App Store Publishing & CI/CD",
        description: "Ship your app to millions of users on app stores.",
        skills: ["App Store Connect & Google Play Console", "App Signing & Provisioning Profiles", "CI/CD (Fastlane, EAS Build, Codemagic)", "App Store Optimization (ASO)", "In-App Purchases & Subscriptions", "App Review Guidelines Compliance"],
        resources: ["Fastlane Documentation", "Expo EAS Build", "App Store Review Guidelines", "Google Play Developer Policies"],
        duration: "3–4 weeks",
        tips: "Automate builds with Fastlane or EAS. Manual signing and building is a time sink and error-prone."
      },
      {
        title: "7. Portfolio & Career Growth",
        description: "Build and publish real apps, contribute to the community.",
        skills: ["2–3 Published Apps on Stores", "Open Source Contributions", "Technical Blog / Tutorial Videos", "Freelancing on Upwork / Toptal", "Conference Talks & Meetups"],
        resources: ["Expo Snacks — Share Code", "Dev.to — Mobile Dev Blog", "Upwork — Freelance Mobile", "React Native Community GitHub"],
        duration: "Ongoing",
        tips: "Published apps with real users are the ultimate portfolio. Even a simple utility app with 1K+ downloads speaks volumes."
      },
    ],
  },

  // ─── 11. UI/UX DESIGNER ───
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    icon: Palette,
    description: "Design user-centered digital experiences that are beautiful, intuitive, and accessible",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    avgSalary: "$60K–$130K",
    avgSalaryINR: "₹4L–₹18L",
    demandLevel: "High",
    steps: [
      {
        title: "1. Design Fundamentals & Theory",
        description: "Learn the visual design principles that make interfaces effective.",
        skills: ["Color Theory & Psychology", "Typography (Pairing, Hierarchy, Scale)", "Layout & Composition (Grid Systems)", "Gestalt Principles of Perception", "Visual Hierarchy & White Space", "Brand Identity Basics"],
        resources: ["Refactoring UI (Book)", "Design Principles by Lidwell (Book)", "Canva Design School (Free)", "Typewolf — Font Pairing"],
        duration: "3–4 weeks",
        tips: "Study great design daily. Follow Dribbble, Behance, and Awwwards. Train your eye before your hand."
      },
      {
        title: "2. UX Research & User Psychology",
        description: "Understand user behavior, needs, and motivations through research methods.",
        skills: ["User Interviews & Surveys", "Personas & User Journey Maps", "Competitive & Heuristic Analysis", "Information Architecture & Card Sorting", "Jobs-to-be-Done Framework", "Cognitive Biases in Design", "Accessibility Standards (WCAG)"],
        resources: ["Don't Make Me Think by Steve Krug (Book)", "Nielsen Norman Group — Research Articles", "Google UX Design Certificate (Coursera)", "Laws of UX (lawsofux.com)"],
        duration: "4–5 weeks",
        tips: "Talk to 5 users before designing anything. Assumptions are the enemy of good UX."
      },
      {
        title: "3. Wireframing & Prototyping in Figma",
        description: "Create low to high-fidelity designs and interactive prototypes.",
        skills: ["Figma (Auto Layout, Components, Variants, Variables)", "Low-Fidelity Wireframing", "High-Fidelity Mockups", "Interactive Prototyping & Transitions", "Design Systems & Component Libraries", "Responsive Design (Desktop, Tablet, Mobile)", "Developer Handoff (Inspect Mode)"],
        resources: ["Figma Official Tutorials", "Figma Academy by UI Collective", "Material Design System", "Apple Design Resources"],
        duration: "5–6 weeks",
        tips: "Master Figma's Auto Layout — it's the single most important feature for efficient design."
      },
      {
        title: "4. Visual & Interaction Design",
        description: "Create polished, delightful interfaces with thoughtful interactions.",
        skills: ["Iconography & Illustration", "Micro-interactions & Motion Design", "Loading States & Empty States", "Error Handling UX", "Dark Mode Design", "Responsive & Adaptive Design", "Design Tokens & Theming"],
        resources: ["Lottie Animations", "Dribbble & Behance — Inspiration", "Awwwards — Site of the Day", "UX in Motion Manifesto"],
        duration: "4–5 weeks",
        tips: "The details make the design. Error states, loading states, and empty states are where most designers fail."
      },
      {
        title: "5. Usability Testing & Iteration",
        description: "Validate your designs with real users and iterate based on evidence.",
        skills: ["Moderated & Unmoderated Usability Testing", "A/B Testing & Multivariate Testing", "Heuristic Evaluation (Nielsen's 10 Heuristics)", "Analytics-Driven Design (Hotjar, FullStory)", "Design Sprints (Google Ventures Method)", "Quantitative vs Qualitative Feedback"],
        resources: ["Maze — Remote Testing Platform", "Hotjar — Heatmaps & Recordings", "UsabilityHub — Quick Tests", "Sprint by Jake Knapp (Book)"],
        duration: "3–4 weeks",
        tips: "Test early, test often. A 5-user test catches 85% of usability issues."
      },
      {
        title: "6. Design Systems & Collaboration",
        description: "Build scalable design systems and work effectively with development teams.",
        skills: ["Design System Architecture", "Token-Based Design (Colors, Spacing, Typography)", "Component Documentation", "Figma ↔ Code Handoff", "Design Reviews & Critiques", "Cross-functional Collaboration (PM, Eng, QA)"],
        resources: ["Design Systems by Alla Kholmatova (Book)", "Storybook Documentation", "designsystems.com", "Figma Community — Design System Kits"],
        duration: "3–4 weeks",
        tips: "A good design system saves hundreds of hours. Start small — typography, colors, buttons — and grow organically."
      },
      {
        title: "7. Portfolio & Career",
        description: "Build a portfolio that tells compelling stories about your design process.",
        skills: ["3–5 Detailed Case Studies", "Portfolio Website (Process, Not Just Pixels)", "Presentation & Storytelling Skills", "Design Challenges & Whiteboard Exercises", "Personal Branding (LinkedIn, Dribbble, Twitter)", "Mentorship (ADPList)"],
        resources: ["Behance — Portfolio Inspiration", "Bestfolios — Top UX Portfolios", "ADPList — Free Design Mentorship", "Sharpen.design — Random Design Prompts"],
        duration: "4–6 weeks",
        tips: "Your portfolio IS the interview. Show your process: research → ideation → iteration → results. Not just pretty screens."
      },
    ],
  },

  // ─── 12. DATA ENGINEER ───
  {
    id: "data-engineer",
    title: "Data Engineer",
    icon: Database,
    description: "Build and maintain the data infrastructure that powers analytics and ML systems",
    color: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    avgSalary: "$85K–$165K",
    avgSalaryINR: "₹7L–₹25L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Python & SQL Mastery",
        description: "Develop strong programming and database skills as the foundation.",
        skills: ["Python (Advanced — Generators, Decorators, Typing)", "SQL (Complex Queries, Window Functions, CTEs)", "Data Structures & Algorithms", "Bash Scripting", "Git Version Control"],
        resources: ["Fluent Python (Book)", "SQLBolt & DataLemur", "Exercism — Python Track", "The Missing Semester of CS"],
        duration: "6–8 weeks",
        tips: "Data engineers write more Python and SQL than anyone. Master both — they're your daily tools."
      },
      {
        title: "2. Database Systems & Data Modeling",
        description: "Understand relational, NoSQL, and analytical database systems.",
        skills: ["PostgreSQL (Advanced — Partitioning, Indexing)", "Data Modeling (Star Schema, Snowflake Schema)", "Dimensional Modeling (Kimball Methodology)", "NoSQL (MongoDB, DynamoDB, Cassandra)", "OLTP vs OLAP Systems", "Data Warehousing Concepts"],
        resources: ["PostgreSQL Documentation", "The Data Warehouse Toolkit by Kimball (Book)", "MongoDB University", "Designing Data-Intensive Applications (Book)"],
        duration: "5–6 weeks",
        tips: "Read 'Designing Data-Intensive Applications' — it's the bible of data engineering."
      },
      {
        title: "3. ETL/ELT & Data Pipelines",
        description: "Extract, transform, and load data reliably at scale.",
        skills: ["Apache Airflow (DAGs, Operators, Sensors)", "dbt (Data Build Tool — Transformations)", "Apache Spark (PySpark)", "Batch vs Stream Processing", "Data Quality & Validation (Great Expectations)", "Pipeline Monitoring & Alerting"],
        resources: ["Apache Airflow Documentation", "dbt Learn (Free Course)", "PySpark Documentation", "Data Engineering Zoomcamp (Free)"],
        duration: "6–8 weeks",
        tips: "Airflow + dbt is the modern data stack standard. Learn them well — they're used everywhere."
      },
      {
        title: "4. Cloud Data Platforms",
        description: "Build data infrastructure on cloud platforms.",
        skills: ["Snowflake / BigQuery / Redshift (Cloud Data Warehouses)", "AWS S3 / GCS / ADLS (Data Lakes)", "Data Lake Architecture (Medallion — Bronze/Silver/Gold)", "Delta Lake / Apache Iceberg", "Serverless Data Processing (AWS Lambda, Cloud Functions)", "Infrastructure as Code for Data (Terraform)"],
        resources: ["Snowflake University", "BigQuery Documentation", "AWS Data Analytics Specialty", "Delta Lake Documentation"],
        duration: "5–6 weeks",
        tips: "Snowflake and BigQuery are the top cloud warehouses. Learn one deeply — concepts transfer to the other."
      },
      {
        title: "5. Streaming & Real-Time Data",
        description: "Process and analyze data in real-time.",
        skills: ["Apache Kafka (Producers, Consumers, Topics)", "Apache Flink / Spark Streaming", "Event-Driven Architecture", "Change Data Capture (Debezium)", "Real-time Dashboards", "Exactly-Once vs At-Least-Once Semantics"],
        resources: ["Kafka: The Definitive Guide (Book)", "Confluent Developer Courses (Free)", "Flink Documentation", "Streaming Systems (Book)"],
        duration: "4–6 weeks",
        tips: "Kafka is everywhere. Start with Confluent Cloud's free tier for hands-on practice."
      },
      {
        title: "6. Data Governance & Operations",
        description: "Ensure data quality, security, and compliance.",
        skills: ["Data Catalogs (DataHub, Amundsen)", "Data Lineage Tracking", "Data Privacy (GDPR, CCPA, PII Handling)", "Access Control & Data Security", "DataOps Practices", "Cost Optimization"],
        resources: ["DataHub Documentation", "GDPR Compliance Guide", "The DataOps Cookbook", "Monte Carlo — Data Observability"],
        duration: "3–4 weeks",
        tips: "Data governance is increasingly required. Companies are hiring for this — it's a differentiator on your resume."
      },
      {
        title: "7. Portfolio & Certifications",
        description: "Build impressive data pipelines and get certified.",
        skills: ["End-to-End Pipeline Projects", "AWS Data Analytics / GCP Data Engineer Certification", "dbt Certification", "Open Source Contributions", "Technical Blog"],
        resources: ["Data Engineering Zoomcamp", "AWS Certification", "GCP Data Engineer Cert", "DataTalks.Club"],
        duration: "6–8 weeks",
        tips: "Build a pipeline that ingests real API data, transforms it, and serves a dashboard. It's the perfect portfolio project."
      },
    ],
  },

  // ─── 13. ML ENGINEER ───
  {
    id: "ml-engineer",
    title: "ML Engineer",
    icon: Bot,
    description: "Build, deploy, and scale machine learning models in production environments",
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    avgSalary: "$90K–$180K",
    avgSalaryINR: "₹8L–₹28L",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Software Engineering Foundations",
        description: "Strong SWE skills are what separate ML Engineers from Data Scientists.",
        skills: ["Python (Advanced OOP, Design Patterns)", "Data Structures & Algorithms", "Software Architecture & Clean Code", "Testing (Unit, Integration, E2E)", "Docker & Containerization", "Git & CI/CD"],
        resources: ["Clean Code by Robert Martin (Book)", "LeetCode — 150 Problems", "Docker Documentation", "Design Patterns — Refactoring Guru"],
        duration: "6–8 weeks",
        tips: "ML Engineers are software engineers first. If you can't write production-quality code, your models won't ship."
      },
      {
        title: "2. Machine Learning & Deep Learning",
        description: "Deep understanding of ML/DL algorithms and frameworks.",
        skills: ["Classical ML (Scikit-learn)", "Deep Learning (PyTorch preferred)", "NLP / Computer Vision / Time Series", "Transfer Learning & Fine-tuning", "Experiment Tracking (MLflow, W&B)", "Hyperparameter Optimization"],
        resources: ["Fast.ai", "PyTorch Official Tutorials", "Hands-On ML (Book)", "MLflow Documentation"],
        duration: "8–10 weeks",
        tips: "PyTorch is the industry standard for research & production. Learn it deeply."
      },
      {
        title: "3. Model Serving & APIs",
        description: "Deploy models as scalable, production-ready services.",
        skills: ["FastAPI / Flask for Model APIs", "Model Serialization (ONNX, TorchScript)", "Batch vs Real-time Inference", "GPU Serving (TensorRT, Triton)", "Model Optimization (Quantization, Pruning, Distillation)", "Load Testing & Benchmarking"],
        resources: ["FastAPI Documentation", "NVIDIA Triton Documentation", "ONNX Runtime Documentation", "BentoML — ML Serving Framework"],
        duration: "4–5 weeks",
        tips: "A model that's 5% less accurate but 10x faster is often the better choice in production."
      },
      {
        title: "4. MLOps & Pipeline Orchestration",
        description: "Build automated ML pipelines from data ingestion to model deployment.",
        skills: ["Kubeflow / Vertex AI / SageMaker Pipelines", "Feature Stores (Feast, Tecton)", "Model Registry & Versioning", "Data Versioning (DVC)", "Automated Retraining Pipelines", "A/B Testing & Shadow Deployments"],
        resources: ["Made With ML — MLOps Course", "Kubeflow Documentation", "Feast Documentation", "DVC Documentation"],
        duration: "5–6 weeks",
        tips: "MLOps is the #1 skill gap in ML teams. Companies desperately need engineers who can productionize models."
      },
      {
        title: "5. Infrastructure & Scaling",
        description: "Run ML workloads efficiently at scale on cloud infrastructure.",
        skills: ["Kubernetes for ML Workloads", "GPU Clusters & Multi-GPU Training", "Distributed Training (PyTorch DDP, Horovod)", "Cloud ML Services (SageMaker, Vertex AI, Azure ML)", "Cost Optimization for ML", "Spot/Preemptible Instances"],
        resources: ["AWS SageMaker Documentation", "Vertex AI Documentation", "Ray — Distributed Computing", "Hugging Face Accelerate"],
        duration: "4–5 weeks",
        tips: "GPU time is expensive. Learn to optimize training and use spot instances — it can save 70% on costs."
      },
      {
        title: "6. Monitoring & Reliability",
        description: "Ensure ML systems are reliable, fair, and performing well in production.",
        skills: ["Model Monitoring (Data Drift, Concept Drift)", "Prediction Quality Monitoring", "ML Observability Platforms (Arize, Evidently)", "Model Fairness & Bias Detection", "Incident Response for ML", "SLOs for ML Systems"],
        resources: ["Evidently AI (Open Source)", "Arize AI Documentation", "Google — ML Fairness", "Reliable ML by Cathy O'Neil (Book)"],
        duration: "3–4 weeks",
        tips: "Models degrade silently. Monitoring is not optional — it's the difference between a demo and a product."
      },
      {
        title: "7. LLMs & Generative AI",
        description: "Work with large language models — the cutting edge of ML engineering.",
        skills: ["LLM Fine-tuning (LoRA, QLoRA)", "RAG Architectures (Vector DBs, Embeddings)", "Prompt Engineering & Evaluation", "LLM Serving (vLLM, TGI)", "Guardrails & Safety", "LLM Evaluation Frameworks"],
        resources: ["Hugging Face PEFT Documentation", "LangChain / LlamaIndex", "vLLM Documentation", "LMSYS Chatbot Arena"],
        duration: "5–6 weeks",
        tips: "LLM engineering is the hottest ML specialization. Build a RAG system and a fine-tuned model for your portfolio."
      },
    ],
  },

  // ─── 14. ANDROID DEVELOPER ───
  {
    id: "android-developer",
    title: "Android Developer",
    icon: Smartphone,
    description: "Build native Android applications using Kotlin and Jetpack Compose",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    avgSalary: "$60K–$135K",
    demandLevel: "High",
    steps: [
      {
        title: "1. Kotlin Programming",
        description: "Master Kotlin — the official language for Android development.",
        skills: ["Kotlin Syntax (Null Safety, Extensions, Data Classes)", "Coroutines & Flow (Async Programming)", "Collections & Functional Programming", "OOP & Design Patterns", "Kotlin DSLs"],
        resources: ["Kotlin Koans (Official)", "Kotlin in Action (Book)", "JetBrains Academy", "Google — Kotlin Bootcamp"],
        duration: "4–6 weeks",
        tips: "Kotlin's null safety and coroutines are game-changers. Learn them deeply — they prevent entire categories of bugs."
      },
      {
        title: "2. Android Fundamentals & Jetpack Compose",
        description: "Build modern Android UIs with Jetpack Compose — the future of Android UI.",
        skills: ["Jetpack Compose (Composables, State, Layouts)", "Material Design 3 Components", "Navigation Compose", "Android Lifecycle & Architecture", "Permissions & System Services", "Android Studio & Debugging"],
        resources: ["Android Developer Official Docs", "Jetpack Compose Pathway (Google)", "Philipp Lackner YouTube", "Coding with Mitch YouTube"],
        duration: "6–8 weeks",
        tips: "Go straight to Jetpack Compose — skip XML layouts. Compose is the future and all new projects use it."
      },
      {
        title: "3. Architecture & State Management",
        description: "Build scalable, maintainable Android applications with clean architecture.",
        skills: ["MVVM Architecture", "Clean Architecture (Domain, Data, Presentation)", "Dependency Injection (Hilt/Dagger)", "Repository Pattern", "UseCase Pattern", "State Management (StateFlow, LiveData)"],
        resources: ["Guide to App Architecture (Google)", "Now in Android (Google Sample)", "Hilt Documentation", "Clean Architecture (Book)"],
        duration: "4–5 weeks",
        tips: "Study Google's 'Now in Android' app — it's the gold standard for modern Android architecture."
      },
      {
        title: "4. Networking, Storage & APIs",
        description: "Connect to APIs, store data locally, and handle offline scenarios.",
        skills: ["Retrofit & OkHttp (REST APIs)", "Room Database (Local Storage)", "DataStore (Preferences)", "Offline-First Architecture", "Paging 3 Library", "Image Loading (Coil / Glide)"],
        resources: ["Retrofit Documentation", "Room Documentation", "Paging 3 Codelab", "Android Architecture Samples"],
        duration: "4–5 weeks",
        tips: "Room + Retrofit + Coroutines is the holy trinity. Master this stack for any API-driven app."
      },
      {
        title: "5. Testing & Quality",
        description: "Write comprehensive tests and ensure app quality.",
        skills: ["Unit Testing (JUnit, MockK)", "UI Testing (Compose Testing, Espresso)", "Integration Testing", "Code Coverage (JaCoCo)", "Static Analysis (Detekt, ktlint)", "Performance Profiling (Android Studio Profiler)"],
        resources: ["Android Testing Codelab", "MockK Documentation", "Testing Best Practices (Google)", "Android Studio Profiler Guide"],
        duration: "3–4 weeks",
        tips: "Test ViewModels and Use Cases heavily — they contain your business logic. Compose makes UI testing much easier."
      },
      {
        title: "6. Advanced Features & Publishing",
        description: "Add advanced features and publish to the Play Store.",
        skills: ["WorkManager (Background Tasks)", "Firebase (Auth, Firestore, Crashlytics, Analytics)", "Push Notifications (FCM)", "In-App Purchases & Subscriptions", "App Signing & Release Process", "Play Store Listing Optimization"],
        resources: ["Firebase Documentation", "WorkManager Guide", "Google Play Console", "Android App Bundle Guide"],
        duration: "4–5 weeks",
        tips: "Firebase is your best friend for MVPs. Auth + Firestore + Crashlytics gives you a complete backend in minutes."
      },
      {
        title: "7. Portfolio & Open Source",
        description: "Build impressive apps and contribute to the Android community.",
        skills: ["2–3 Published Play Store Apps", "Open Source Contributions", "Custom Compose Components", "Technical Blog / YouTube", "Google Developer Expert Program", "Conference Talks"],
        resources: ["Google Play Console", "GitHub — Android Open Source", "Dev.to — Android Blog", "Droidcon Conferences"],
        duration: "Ongoing",
        tips: "Publish at least one app. Contributing to popular open source Android libraries is the fastest way to get noticed."
      },
    ],
  },

  // ─── 15. iOS DEVELOPER ───
  {
    id: "ios-developer",
    title: "iOS Developer",
    icon: Smartphone,
    description: "Build beautiful, performant native iOS applications using Swift and SwiftUI",
    color: "bg-gray-500/10 text-gray-600 border-gray-500/20",
    avgSalary: "$70K–$150K",
    demandLevel: "High",
    steps: [
      {
        title: "1. Swift Programming Language",
        description: "Master Swift — Apple's powerful and intuitive programming language.",
        skills: ["Swift Syntax (Optionals, Enums, Protocols)", "Closures & Higher-Order Functions", "Generics & Associated Types", "Error Handling (Result Type, Throws)", "Concurrency (async/await, Actors, Structured Concurrency)", "Memory Management (ARC)"],
        resources: ["Swift Programming Language (Apple Book, Free)", "Swift Playgrounds (iPad/Mac)", "Hacking with Swift — 100 Days of Swift", "Stanford CS193p (Free Course)"],
        duration: "5–6 weeks",
        tips: "Swift's type system is your ally. Embrace optionals and protocols — they make your code safer and more flexible."
      },
      {
        title: "2. SwiftUI & Modern iOS Development",
        description: "Build declarative UIs with SwiftUI — Apple's modern UI framework.",
        skills: ["SwiftUI Views & Modifiers", "State Management (@State, @Binding, @ObservedObject)", "Navigation (NavigationStack, Sheets)", "List & Grid Layouts", "Animations & Transitions", "Human Interface Guidelines (HIG)"],
        resources: ["SwiftUI Documentation (Apple)", "Hacking with Swift — 100 Days of SwiftUI", "Stanford CS193p SwiftUI", "Apple Developer Tutorials"],
        duration: "6–8 weeks",
        tips: "Go SwiftUI-first for new projects. UIKit knowledge is still valuable for legacy code and advanced customization."
      },
      {
        title: "3. Architecture & Data Flow",
        description: "Build scalable, maintainable iOS applications.",
        skills: ["MVVM Architecture with SwiftUI", "The Composable Architecture (TCA)", "Dependency Injection", "Repository Pattern", "Combine Framework", "SwiftData / Core Data"],
        resources: ["Apple — App Organization", "Point-Free — TCA", "Combine by Tutorials (Book)", "SwiftData Documentation"],
        duration: "4–5 weeks",
        tips: "MVVM is the standard. For complex apps, explore TCA — it enforces best practices and makes testing a breeze."
      },
      {
        title: "4. Networking, Storage & System Integration",
        description: "Integrate with APIs, persist data, and leverage iOS system features.",
        skills: ["URLSession & REST APIs", "Codable (JSON Serialization)", "SwiftData / Core Data (Persistence)", "Keychain (Secure Storage)", "WidgetKit (Home Screen Widgets)", "App Intents & Shortcuts"],
        resources: ["URLSession Tutorial (Apple)", "SwiftData WWDC Sessions", "WidgetKit Documentation", "Apple Developer Forums"],
        duration: "4–5 weeks",
        tips: "Apple rewards apps that integrate deeply with the system. Widgets, Shortcuts, and Live Activities make your app stand out."
      },
      {
        title: "5. Testing & Performance",
        description: "Build reliable, high-performance iOS applications.",
        skills: ["XCTest (Unit & UI Testing)", "Swift Testing Framework (New)", "Snapshot Testing", "Instruments (Profiling & Performance)", "Memory Leak Detection", "Accessibility Testing"],
        resources: ["XCTest Documentation", "WWDC Testing Sessions", "Instruments User Guide", "Accessibility Inspector"],
        duration: "3–4 weeks",
        tips: "Use Instruments to find performance issues. Apple reviewers reject apps with poor performance."
      },
      {
        title: "6. App Store & Distribution",
        description: "Publish your app and manage its lifecycle on the App Store.",
        skills: ["App Store Connect", "Code Signing & Provisioning", "TestFlight (Beta Testing)", "In-App Purchases & StoreKit 2", "App Store Review Guidelines", "App Analytics & A/B Testing", "Xcode Cloud (CI/CD)"],
        resources: ["App Store Connect Help", "StoreKit 2 Documentation", "App Store Review Guidelines", "WWDC Sessions"],
        duration: "3–4 weeks",
        tips: "Read the App Store Review Guidelines carefully. 30% of first submissions get rejected for guideline violations."
      },
      {
        title: "7. Portfolio & Community",
        description: "Build and publish polished iOS apps, engage with the community.",
        skills: ["2–3 Published App Store Apps", "Open Source Swift Packages", "WWDC Scholarship Application", "Technical Blog / YouTube", "Local Meetups & Conferences", "Apple Developer Forums"],
        resources: ["App Store Connect", "Swift Package Index", "iOS Dev Weekly Newsletter", "WWDC Videos (developer.apple.com)"],
        duration: "Ongoing",
        tips: "Watch every WWDC keynote and sessions for your area. Apply for the WWDC scholarship — it's resume gold."
      },
    ],
  },

  // ─── 16. GAME DEVELOPER ───
  {
    id: "game-developer",
    title: "Game Developer",
    icon: Gamepad2,
    description: "Create interactive games for PC, console, and mobile platforms",
    color: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20",
    avgSalary: "$55K–$120K",
    demandLevel: "Moderate",
    steps: [
      {
        title: "1. Programming Fundamentals",
        description: "Learn C# (Unity) or C++ (Unreal) — the languages that power game engines.",
        skills: ["C# or C++ (Core Language)", "OOP (Classes, Inheritance, Interfaces)", "Data Structures (Arrays, Lists, Dictionaries, Graphs)", "Math for Games (Vectors, Matrices, Quaternions)", "Design Patterns (State, Observer, Command, Object Pool)"],
        resources: ["C# Yellow Book (Free)", "LearnCpp.com", "Game Programming Patterns by Robert Nystrom (Free)", "3D Math Primer for Graphics (Book)"],
        duration: "6–8 weeks",
        tips: "Unity (C#) has a lower barrier to entry. Unreal (C++) offers AAA-quality but a steeper learning curve."
      },
      {
        title: "2. Game Engine Mastery (Unity or Unreal)",
        description: "Learn your chosen game engine inside and out.",
        skills: ["Unity: GameObjects, Components, Scenes, Prefabs", "Unreal: Actors, Blueprints, Levels", "Physics Engine & Collision Detection", "Input System & Controls", "Animation System & State Machines", "Audio Integration"],
        resources: ["Unity Learn (Free)", "Unreal Engine Learning Portal (Free)", "Brackeys YouTube (Unity)", "Unreal Sensei YouTube"],
        duration: "8–10 weeks",
        tips: "Follow along with a complete game tutorial, then rebuild it from scratch without looking. That's when real learning happens."
      },
      {
        title: "3. Game Design & Level Design",
        description: "Learn to design fun, engaging game experiences.",
        skills: ["Game Design Document (GDD) Writing", "Core Mechanics & Game Loops", "Level Design Principles", "Difficulty Curves & Player Psychology", "Narrative Design Basics", "Balancing & Playtesting"],
        resources: ["The Art of Game Design by Jesse Schell (Book)", "Extra Credits YouTube", "GDC Vault (Free Talks)", "Game Maker's Toolkit YouTube"],
        duration: "3–4 weeks",
        tips: "Play games analytically. Ask 'why is this fun?' for every mechanic. Great developers are great players first."
      },
      {
        title: "4. Graphics, Shaders & Visual Effects",
        description: "Create stunning visuals with shaders, particles, and post-processing.",
        skills: ["Shader Programming (ShaderLab / HLSL)", "Particle Systems", "Lighting & Shadows", "Post-Processing Effects", "UI Design for Games (HUD, Menus)", "Optimization (Draw Calls, Batching, LOD)"],
        resources: ["Shader Forge / Amplify Shader Editor", "Catlike Coding (Unity Tutorials)", "Ben Cloward YouTube (Shaders)", "Unity URP/HDRP Documentation"],
        duration: "4–6 weeks",
        tips: "Shaders are intimidating but rewarding. Start with visual shader editors before writing code."
      },
      {
        title: "5. Multiplayer & Networking",
        description: "Build online multiplayer experiences.",
        skills: ["Client-Server Architecture", "Unity Netcode / Photon / Mirror", "Unreal Replication System", "Lag Compensation & Prediction", "Matchmaking & Lobbies", "Anti-Cheat Basics"],
        resources: ["Unity Multiplayer Docs", "Photon PUN2 Documentation", "Gabriel Gambetta — Fast-Paced Multiplayer (Free Articles)", "Unreal Networking Docs"],
        duration: "4–5 weeks",
        tips: "Networking is the hardest part of game dev. Start with simple turn-based multiplayer before real-time."
      },
      {
        title: "6. Mobile, VR/AR & Platform Publishing",
        description: "Optimize for different platforms and publish your games.",
        skills: ["Mobile Optimization (Memory, Battery, Input)", "VR/AR Development Basics", "Platform-Specific APIs", "Build & Deployment Pipelines", "Steam / Itch.io / App Store Publishing", "Marketing & Community Building"],
        resources: ["Steam Direct Guide", "Itch.io Creator Docs", "Unity Mobile Optimization Guide", "Oculus Developer Docs"],
        duration: "3–4 weeks",
        tips: "Itch.io is the best place to publish your first game. Join game jams — they force you to ship."
      },
      {
        title: "7. Game Jams & Portfolio",
        description: "Build games under pressure and assemble a compelling portfolio.",
        skills: ["Game Jam Participation (Ludum Dare, GMTK, GGJ)", "5+ Completed Game Projects", "Developer Blog / Devlogs", "Portfolio Website with Playable Demos", "Trailer & Screenshot Creation", "Open Source Game Projects"],
        resources: ["Ludum Dare", "GMTK Game Jam", "Global Game Jam", "itch.io Game Jams"],
        duration: "Ongoing",
        tips: "Finished games beat perfect games. Ship 5 small games before attempting your dream project."
      },
    ],
  },

  // ─── 17. BLOCKCHAIN DEVELOPER ───
  {
    id: "blockchain-developer",
    title: "Blockchain Developer",
    icon: Link2,
    description: "Build decentralized applications, smart contracts, and Web3 protocols",
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    avgSalary: "$80K–$180K",
    demandLevel: "Growing",
    steps: [
      {
        title: "1. Blockchain & Cryptography Fundamentals",
        description: "Understand how blockchains work under the hood.",
        skills: ["Cryptographic Hash Functions (SHA-256)", "Public Key Cryptography (ECDSA)", "Consensus Mechanisms (PoW, PoS, BFT)", "Merkle Trees & Data Structures", "P2P Networking", "Bitcoin & Ethereum Architecture"],
        resources: ["Bitcoin Whitepaper", "Mastering Bitcoin by Andreas Antonopoulos (Free)", "Mastering Ethereum (Free)", "Blockchain at Berkeley (YouTube)"],
        duration: "4–5 weeks",
        tips: "Read the Bitcoin whitepaper at least twice. Understanding the fundamentals prevents you from building on shaky ground."
      },
      {
        title: "2. Solidity & Smart Contract Development",
        description: "Write smart contracts on Ethereum and EVM-compatible chains.",
        skills: ["Solidity (Types, Functions, Modifiers, Events)", "ERC Standards (ERC-20, ERC-721, ERC-1155)", "Inheritance & Interface Patterns", "Gas Optimization", "Hardhat / Foundry Development Framework", "Testing Smart Contracts (Chai, Forge)"],
        resources: ["CryptoZombies (Interactive)", "Solidity by Example", "Patrick Collins — Blockchain Course (Free)", "Foundry Documentation"],
        duration: "6–8 weeks",
        tips: "Use Foundry over Hardhat for new projects — it's faster and uses Solidity for testing. CryptoZombies is the best starting point."
      },
      {
        title: "3. Smart Contract Security",
        description: "Security is paramount in blockchain — one bug can lose millions.",
        skills: ["Common Vulnerabilities (Reentrancy, Front-running, Integer Overflow)", "OpenZeppelin Contracts Library", "Static Analysis (Slither, Mythril)", "Formal Verification Basics", "Audit Report Reading & Writing", "Fuzzing & Invariant Testing"],
        resources: ["Damn Vulnerable DeFi (Challenges)", "OpenZeppelin Docs", "Trail of Bits — Security Resources", "Immunefi — Bug Bounty Platform"],
        duration: "4–6 weeks",
        tips: "Do every challenge in 'Damn Vulnerable DeFi'. Security is the #1 differentiator for blockchain developers."
      },
      {
        title: "4. DApp Frontend & Web3 Integration",
        description: "Build user interfaces that interact with smart contracts.",
        skills: ["Ethers.js / Viem / Wagmi", "Wallet Integration (MetaMask, WalletConnect)", "Transaction Handling & Error States", "IPFS & Decentralized Storage", "The Graph (Indexing & Querying)", "React + Web3 Patterns"],
        resources: ["Wagmi Documentation", "The Graph Documentation", "Alchemy University (Free)", "Chainlink Documentation"],
        duration: "4–5 weeks",
        tips: "Wagmi + Viem is the modern Web3 frontend stack. Use The Graph for efficient blockchain data queries."
      },
      {
        title: "5. DeFi & Advanced Protocols",
        description: "Understand and build decentralized finance protocols.",
        skills: ["AMMs (Uniswap V2/V3 Architecture)", "Lending Protocols (Aave, Compound)", "Stablecoins & Oracles (Chainlink)", "Flash Loans", "Governance & DAOs", "Cross-chain Bridges & Interoperability"],
        resources: ["Uniswap V2/V3 Documentation", "Aave Documentation", "Chainlink Developer Docs", "DeFi MOOC (Berkeley)"],
        duration: "4–6 weeks",
        tips: "Fork and modify Uniswap V2 — it's the best way to learn DeFi protocol design."
      },
      {
        title: "6. Layer 2s, Alt Chains & Scaling",
        description: "Build on L2s and alternative blockchain platforms.",
        skills: ["Rollups (Optimistic & ZK)", "Polygon, Arbitrum, Optimism, Base", "Solana (Rust/Anchor Framework)", "Cosmos SDK", "Cross-chain Messaging", "Account Abstraction (ERC-4337)"],
        resources: ["L2Beat — L2 Comparison", "Solana Cookbook", "Anchor Framework Docs", "Cosmos SDK Documentation"],
        duration: "4–5 weeks",
        tips: "L2s are where the action is. Build on Base or Arbitrum — they have the most developer activity."
      },
      {
        title: "7. Portfolio, Hackathons & Community",
        description: "Ship projects, win hackathons, and build your Web3 reputation.",
        skills: ["3–5 Deployed DApps (Testnet & Mainnet)", "Hackathon Participation (ETHGlobal, Chainlink)", "Open Source Contributions (OpenZeppelin, etc.)", "Technical Blog / Twitter Presence", "DAO Participation", "Bug Bounty Hunting (Immunefi)"],
        resources: ["ETHGlobal — Hackathons", "Immunefi — Bug Bounties", "Mirror.xyz — Web3 Blogging", "Devfolio — Hackathons"],
        duration: "Ongoing",
        tips: "ETHGlobal hackathons are the best networking opportunity in Web3. Winners get job offers from top protocols."
      },
    ],
  },

  // ─── 18. QA / TEST ENGINEER ───
  {
    id: "qa-engineer",
    title: "QA / Test Engineer",
    icon: TestTube,
    description: "Ensure software quality through testing, automation, and quality processes",
    color: "bg-lime-500/10 text-lime-600 border-lime-500/20",
    avgSalary: "$55K–$110K",
    demandLevel: "High",
    steps: [
      {
        title: "1. Testing Fundamentals",
        description: "Learn testing theory, methodologies, and best practices.",
        skills: ["Testing Types (Unit, Integration, System, Acceptance)", "Test Design Techniques (Boundary Value, Equivalence, Decision Table)", "Test Plans & Test Cases", "Bug Reporting & Tracking (Jira)", "SDLC & STLC", "Agile Testing & Scrum"],
        resources: ["ISTQB Foundation Syllabus (Free)", "Guru99 — Software Testing Tutorial", "Ministry of Testing — Resources", "Agile Testing by Lisa Crispin (Book)"],
        duration: "3–4 weeks",
        tips: "Good test design prevents more bugs than automation catches. Master the techniques before the tools."
      },
      {
        title: "2. Programming for Testers",
        description: "Learn programming to transition from manual to automated testing.",
        skills: ["Python or JavaScript (Core Language)", "OOP Basics", "Data Structures", "File I/O & APIs", "Git Version Control", "Command Line Proficiency"],
        resources: ["Automate the Boring Stuff with Python", "JavaScript.info", "Codecademy — Python/JS", "Git — Official Tutorial"],
        duration: "4–5 weeks",
        tips: "Python is easiest for beginners. JavaScript is best if you're testing web apps. Pick one and go deep."
      },
      {
        title: "3. Web UI Automation",
        description: "Automate browser-based testing for web applications.",
        skills: ["Selenium WebDriver / Playwright / Cypress", "Page Object Model Design Pattern", "Locator Strategies (CSS, XPath)", "Wait Strategies & Synchronization", "Cross-Browser Testing", "Screenshot & Visual Comparison", "Test Reporting (Allure, HTML Reports)"],
        resources: ["Playwright Documentation (Recommended)", "Cypress Documentation", "Selenium WebDriver Docs", "Test Automation University (Free)"],
        duration: "5–6 weeks",
        tips: "Start with Playwright — it's the most modern and reliable. Cypress is great for frontend-heavy apps."
      },
      {
        title: "4. API Testing",
        description: "Test backend services and APIs thoroughly.",
        skills: ["REST API Testing (Postman, RestAssured)", "GraphQL Testing", "Response Validation (Schema, Status, Body)", "Authentication Testing (JWT, OAuth)", "Performance Testing (Load, Stress)", "Contract Testing (Pact)", "Mock Servers"],
        resources: ["Postman Learning Center", "RestAssured Documentation", "K6 — Load Testing", "Pact — Contract Testing"],
        duration: "3–4 weeks",
        tips: "API testing catches bugs earlier and runs faster than UI tests. It should be 60-70% of your test automation."
      },
      {
        title: "5. CI/CD & DevOps for QA",
        description: "Integrate testing into the development pipeline.",
        skills: ["CI/CD Pipeline Integration (GitHub Actions, Jenkins)", "Docker for Test Environments", "Parallel Test Execution", "Test Environment Management", "Database Testing & Test Data Management", "Quality Gates & Build Policies"],
        resources: ["GitHub Actions for Testing", "Docker for Testers", "Jenkins Pipeline Tutorial", "Test Containers Documentation"],
        duration: "3–4 weeks",
        tips: "Tests that don't run in CI are decoration. Make your tests run on every pull request."
      },
      {
        title: "6. Performance & Security Testing",
        description: "Ensure applications perform well under load and are secure.",
        skills: ["Performance Testing (JMeter, K6, Gatling)", "Load Testing Strategies", "Performance Metrics & Analysis", "Security Testing Basics (OWASP ZAP)", "Accessibility Testing (axe-core)", "Mobile Testing (Appium)"],
        resources: ["K6 Documentation", "JMeter Tutorial", "OWASP ZAP Documentation", "axe-core — Accessibility Testing"],
        duration: "4–5 weeks",
        tips: "Performance testing skills command premium salaries. Most QA engineers skip this — it's your competitive advantage."
      },
      {
        title: "7. Leadership & Quality Strategy",
        description: "Level up from individual contributor to quality leader.",
        skills: ["Test Strategy & Architecture", "Quality Metrics & Reporting", "Test Pyramid Optimization", "Shift-Left Testing Culture", "Mentoring Junior QAs", "ISTQB Advanced Certification", "Chaos Engineering for QA"],
        resources: ["ISTQB Advanced Level", "Continuous Testing for DevOps (Book)", "Ministry of Testing — Community", "QA Lead Interview Questions"],
        duration: "4–6 weeks",
        tips: "Quality is a team responsibility, not just QA's. Advocate for 'shift-left' — testing earlier saves 10x the cost."
      },
    ],
  },

  // ─── 19. BUSINESS ANALYST ───
  {
    id: "business-analyst",
    title: "Business Analyst",
    icon: TrendingUp,
    description: "Bridge the gap between business needs and technology solutions",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    avgSalary: "$55K–$100K",
    demandLevel: "High",
    steps: [
      {
        title: "1. Business Analysis Fundamentals",
        description: "Learn the core concepts, frameworks, and methodologies of business analysis.",
        skills: ["BABOK Guide (Business Analysis Body of Knowledge)", "Requirements Elicitation Techniques", "Stakeholder Analysis & Management", "Business Process Modeling (BPMN)", "SWOT & PESTLE Analysis", "Agile vs Waterfall Methodologies"],
        resources: ["BABOK Guide v3 (IIBA)", "BA Times — Articles & Resources", "Coursera — Business Analysis Fundamentals", "Udemy — Complete Business Analysis Course"],
        duration: "4–5 weeks",
        tips: "BABOK is the industry standard. Read it, but focus on practical application over memorization."
      },
      {
        title: "2. Requirements Engineering",
        description: "Master the art of gathering, documenting, and managing requirements.",
        skills: ["User Stories & Acceptance Criteria", "Use Case Diagrams & Specifications", "Business Requirements Document (BRD)", "Functional & Non-Functional Requirements", "Requirements Traceability Matrix", "Wireframing & Prototyping Basics", "Prioritization (MoSCoW, WSJF)"],
        resources: ["User Story Mapping by Jeff Patton (Book)", "Figma — Basic Wireframing", "Jira — Agile Project Management", "Lucidchart — Diagramming"],
        duration: "4–5 weeks",
        tips: "Good user stories have clear acceptance criteria. Use the 'Given-When-Then' format for testable requirements."
      },
      {
        title: "3. Data Analysis & SQL",
        description: "Analyze data to support business decisions and validate requirements.",
        skills: ["SQL (Queries, JOINs, Aggregations)", "Excel (Advanced Formulas, Pivot Tables, Charts)", "Data Visualization (Tableau / Power BI)", "KPIs & Business Metrics", "Report Writing & Dashboards", "Statistical Basics"],
        resources: ["SQLBolt", "Excel Easy Tutorials", "Tableau Public", "Google Data Analytics Certificate"],
        duration: "5–6 weeks",
        tips: "Data-driven BAs are in high demand. Being able to pull your own data gives you independence and credibility."
      },
      {
        title: "4. Process Improvement & Modeling",
        description: "Analyze and optimize business processes for efficiency.",
        skills: ["Process Mapping (As-Is & To-Be)", "Lean & Six Sigma Basics", "Value Stream Mapping", "Gap Analysis", "Root Cause Analysis (Fishbone, 5 Whys)", "Business Case Development (ROI, NPV, Payback)"],
        resources: ["Lean Six Sigma Yellow Belt (Free Courses)", "Lucidchart — Process Mapping", "Business Model Canvas", "The Lean Startup (Book)"],
        duration: "3–4 weeks",
        tips: "Always quantify improvements. 'We reduced processing time by 40%' is infinitely more powerful than 'we made it faster.'"
      },
      {
        title: "5. Agile & Product Management Skills",
        description: "Work effectively in agile environments and understand product thinking.",
        skills: ["Scrum Framework (Sprint Planning, Retros, Reviews)", "Kanban & Lean Principles", "Product Backlog Management", "Sprint Metrics (Velocity, Burndown)", "Acceptance Testing & UAT", "Cross-functional Team Collaboration"],
        resources: ["Scrum Guide (Free)", "Agile Alliance — Resources", "Mountain Goat Software — Agile Blog", "SAFe Framework Overview"],
        duration: "3–4 weeks",
        tips: "Most companies are agile now. A CSPO (Certified Scrum Product Owner) certification opens many doors."
      },
      {
        title: "6. Domain Knowledge & Communication",
        description: "Develop industry expertise and master communication skills.",
        skills: ["Industry Knowledge (Healthcare, Finance, E-commerce, etc.)", "Presentation Skills (Executive Summaries)", "Facilitation & Workshop Skills", "Conflict Resolution", "Technical Writing", "Stakeholder Communication (Up, Down, Across)"],
        resources: ["Harvard Business Review", "Presentation Zen (Book)", "Toastmasters (Public Speaking)", "Industry-Specific Publications"],
        duration: "Ongoing",
        tips: "Domain expertise is your moat. BAs who understand healthcare or finance earn 20-30% more than generalists."
      },
      {
        title: "7. Certifications & Career Growth",
        description: "Get certified and advance your career.",
        skills: ["CBAP (Certified Business Analysis Professional)", "CCBA (Certification of Capability in Business Analysis)", "PMI-PBA (Professional in Business Analysis)", "CSPO (Certified Scrum Product Owner)", "Portfolio of Case Studies", "Mentoring & Community"],
        resources: ["IIBA — CBAP/CCBA Certification", "PMI — PBA Certification", "BA Podcast", "LinkedIn BA Groups"],
        duration: "6–8 weeks per cert",
        tips: "ECBA → CCBA → CBAP is the IIBA progression. Start with ECBA — no experience required."
      },
    ],
  },

  // ─── 20. NETWORK ENGINEER ───
  {
    id: "network-engineer",
    title: "Network Engineer",
    icon: Network,
    description: "Design, implement, and maintain computer networks and communication systems",
    color: "bg-slate-500/10 text-slate-600 border-slate-500/20",
    avgSalary: "$60K–$120K",
    demandLevel: "High",
    steps: [
      {
        title: "1. Networking Fundamentals",
        description: "Master the theoretical and practical foundations of computer networking.",
        skills: ["OSI & TCP/IP Models", "IPv4/IPv6 Addressing & Subnetting", "MAC Addresses & ARP", "DNS, DHCP, HTTP/HTTPS", "Network Topologies", "Cabling & Physical Layer"],
        resources: ["CompTIA Network+ Study Guide", "Professor Messer — Network+ Playlist", "Computer Networking: A Top-Down Approach (Book)", "Packet Tracer (Cisco, Free)"],
        duration: "5–6 weeks",
        tips: "Subnetting is the #1 interview topic. Practice until you can subnet in your head."
      },
      {
        title: "2. Switching & Routing",
        description: "Configure and manage switches and routers — the backbone of networks.",
        skills: ["VLANs & Trunk Ports", "Spanning Tree Protocol (STP)", "Static & Dynamic Routing", "OSPF, EIGRP, BGP", "Inter-VLAN Routing", "EtherChannel / Link Aggregation", "First Hop Redundancy (HSRP, VRRP)"],
        resources: ["Cisco CCNA Study Materials", "GNS3 / EVE-NG (Network Simulators)", "Jeremy's IT Lab YouTube (CCNA)", "NetworkLessons.com"],
        duration: "6–8 weeks",
        tips: "Build a virtual lab with GNS3. Configure everything hands-on — reading about routing is not the same as doing it."
      },
      {
        title: "3. Network Security",
        description: "Secure networks against internal and external threats.",
        skills: ["Firewall Configuration (ASA, pfSense)", "ACLs (Access Control Lists)", "VPN Technologies (IPsec, SSL)", "NAT & PAT", "802.1X & Network Access Control", "IDS/IPS Systems", "DMZ Architecture"],
        resources: ["CCNA Security Materials", "pfSense Documentation", "CompTIA Security+", "Fortinet NSE Courses (Free)"],
        duration: "4–5 weeks",
        tips: "Security is non-negotiable for network engineers. Every network you build must have security baked in from day one."
      },
      {
        title: "4. Wireless & WAN Technologies",
        description: "Design and manage wireless networks and wide area connections.",
        skills: ["Wi-Fi Standards (802.11ax/Wi-Fi 6)", "Wireless Controller Architecture", "Site Surveys & RF Planning", "WAN Technologies (MPLS, SD-WAN)", "QoS (Quality of Service)", "VoIP & Unified Communications"],
        resources: ["CWNA Study Guide", "Ekahau — Wi-Fi Design", "Cisco SD-WAN Documentation", "Meraki Documentation"],
        duration: "4–5 weeks",
        tips: "SD-WAN is replacing traditional WAN. Learn Cisco Viptela or VMware VeloCloud — they're in high demand."
      },
      {
        title: "5. Network Automation & Programmability",
        description: "Automate network configuration and management — the future of networking.",
        skills: ["Python for Network Automation", "Ansible for Network Devices", "REST APIs & RESTCONF/NETCONF", "Network Configuration Management", "Infrastructure as Code for Networks", "Scripting (Bash, Python)"],
        resources: ["Network Programmability with YANG (Book)", "Ansible Network Modules", "Nornir — Python Network Automation", "Cisco DevNet (Free Labs)"],
        duration: "5–6 weeks",
        tips: "Network automation is the #1 career differentiator. Engineers who can code are 2x more valuable."
      },
      {
        title: "6. Cloud Networking",
        description: "Extend networking skills to cloud environments.",
        skills: ["AWS VPC, Subnets, Route Tables", "Azure Virtual Networks", "Cloud Load Balancers", "Transit Gateways & Peering", "Hybrid Cloud Networking", "Cloud Firewalls & Security Groups"],
        resources: ["AWS Networking Specialty", "Azure Networking Documentation", "Cloud Networking (O'Reilly Book)", "A Cloud Guru — Networking Courses"],
        duration: "4–5 weeks",
        tips: "Cloud networking is the fastest-growing area. Traditional network engineers who learn cloud are extremely valuable."
      },
      {
        title: "7. Certifications & Career Path",
        description: "Get industry-recognized certifications and specialize.",
        skills: ["CCNA (Cisco Certified Network Associate)", "CCNP Enterprise / Security / Data Center", "CompTIA Network+ & Security+", "AWS Advanced Networking", "Juniper JNCIA/JNCIS", "Home Lab Documentation"],
        resources: ["Cisco Learning Network", "Boson ExSim (Practice Exams)", "CBT Nuggets", "Reddit r/networking & r/ccna"],
        duration: "8–12 weeks per cert",
        tips: "CCNA is the gold standard entry cert. CCNP opens senior roles. Document your home lab on GitHub."
      },
    ],
  },

  // ─── 21. AI ENGINEER ───
  {
    id: "ai-engineer",
    title: "AI Engineer",
    icon: Bot,
    description: "Build AI-powered applications using LLMs, embeddings, and intelligent agents",
    color: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    avgSalary: "$100K–$200K",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Software Engineering & Python",
        description: "Strong engineering skills are the foundation of AI engineering.",
        skills: ["Python (Advanced — Typing, Async, Decorators)", "Software Architecture & Design Patterns", "API Design (FastAPI / Flask)", "Docker & Containerization", "Git & CI/CD", "Testing & Code Quality"],
        resources: ["FastAPI Documentation", "Fluent Python (Book)", "Docker Documentation", "Clean Code (Book)"],
        duration: "5–6 weeks",
        tips: "AI Engineers are software engineers who specialize in AI. Strong SWE fundamentals are non-negotiable."
      },
      {
        title: "2. ML & Deep Learning Foundations",
        description: "Understand the AI models you'll be working with.",
        skills: ["ML Basics (Supervised, Unsupervised, Evaluation)", "Neural Networks & Deep Learning", "NLP Fundamentals (Tokenization, Embeddings)", "Transformer Architecture", "Transfer Learning & Fine-tuning", "PyTorch Basics"],
        resources: ["Fast.ai", "3Blue1Brown — Neural Networks", "Attention Is All You Need (Paper)", "Andrej Karpathy — Neural Networks Zero to Hero"],
        duration: "6–8 weeks",
        tips: "You don't need to train models from scratch, but understanding how they work makes you 10x more effective."
      },
      {
        title: "3. LLM APIs & Prompt Engineering",
        description: "Master working with large language model APIs and prompt design.",
        skills: ["OpenAI API / Anthropic API / Google AI", "Prompt Engineering (Few-shot, CoT, ReAct)", "Token Management & Cost Optimization", "Structured Output (JSON Mode, Function Calling)", "Streaming Responses", "Multi-modal AI (Vision, Audio)", "Evaluation & Benchmarking"],
        resources: ["OpenAI Cookbook", "Anthropic Prompt Engineering Guide", "Prompt Engineering Guide (GitHub)", "LMSYS Chatbot Arena"],
        duration: "3–4 weeks",
        tips: "Prompt engineering is 80% of AI engineering. Master structured outputs and function calling — they're the key to reliable AI apps."
      },
      {
        title: "4. RAG & Vector Databases",
        description: "Build retrieval-augmented generation systems for knowledge-powered AI.",
        skills: ["Embeddings (OpenAI, Cohere, HuggingFace)", "Vector Databases (Pinecone, Weaviate, Chroma, pgvector)", "Chunking Strategies", "Hybrid Search (Semantic + Keyword)", "RAG Pipeline Architecture", "Document Parsing & Processing", "Evaluation Metrics (RAGAS, Faithfulness)"],
        resources: ["LlamaIndex Documentation", "LangChain Documentation", "Pinecone Learning Center", "RAGAS — RAG Evaluation"],
        duration: "4–5 weeks",
        tips: "RAG is the most common AI application pattern. Master chunking and retrieval — they determine answer quality more than the LLM."
      },
      {
        title: "5. AI Agents & Tool Use",
        description: "Build autonomous AI agents that can reason, plan, and take action.",
        skills: ["Agent Architectures (ReAct, Plan-and-Execute)", "Tool/Function Calling", "Multi-Agent Systems", "Memory & Context Management", "Guardrails & Safety", "Human-in-the-Loop Workflows", "LangGraph / CrewAI / AutoGen"],
        resources: ["LangGraph Documentation", "CrewAI Documentation", "AutoGen Documentation", "Building AI Agents — DeepLearning.AI"],
        duration: "4–5 weeks",
        tips: "Agents are the future but they're hard to make reliable. Start with simple tool-use agents before building complex multi-agent systems."
      },
      {
        title: "6. Fine-tuning & Model Optimization",
        description: "Customize models for specific use cases and optimize for production.",
        skills: ["Fine-tuning (LoRA, QLoRA, Full Fine-tuning)", "Dataset Preparation & Curation", "Evaluation & Benchmarking", "Model Quantization (GPTQ, AWQ, GGUF)", "Serving Optimized Models (vLLM, TGI)", "Distillation & Smaller Models"],
        resources: ["Hugging Face PEFT Documentation", "Axolotl — Fine-tuning Framework", "vLLM Documentation", "Unsloth — Fast Fine-tuning"],
        duration: "4–5 weeks",
        tips: "Fine-tuning a small model can outperform prompting a large one for specific tasks. But only fine-tune when prompting isn't enough."
      },
      {
        title: "7. Production AI & Portfolio",
        description: "Deploy AI applications at scale and build your reputation.",
        skills: ["AI Application Architecture", "Monitoring & Observability (LangSmith, Langfuse)", "Cost Management & Optimization", "A/B Testing AI Features", "Safety & Content Filtering", "3–5 Deployed AI Projects", "Technical Blog / Open Source"],
        resources: ["LangSmith Documentation", "Langfuse Documentation", "AI Engineer (YouTube/Blog)", "Latent Space Podcast"],
        duration: "Ongoing",
        tips: "The AI engineering field is 2 years old. Ship projects fast, write about what you learn, and you'll stand out."
      },
    ],
  },

  // ─── 22. TECHNICAL WRITER ───
  {
    id: "technical-writer",
    title: "Technical Writer",
    icon: PenTool,
    description: "Create clear, accurate documentation for software, APIs, and technical products",
    color: "bg-stone-500/10 text-stone-600 border-stone-500/20",
    avgSalary: "$55K–$110K",
    demandLevel: "High",
    steps: [
      {
        title: "1. Writing Fundamentals",
        description: "Master clear, concise, and effective technical writing.",
        skills: ["Technical Writing Principles (Clarity, Brevity, Accuracy)", "Grammar & Style Guides (Chicago, Microsoft)", "Audience Analysis & Persona-Based Writing", "Information Architecture", "Document Structure & Hierarchy", "Plain Language & Readability"],
        resources: ["Google Technical Writing Course (Free)", "Microsoft Style Guide", "Technical Communication by Markel (Book)", "Hemingway Editor (Readability Tool)"],
        duration: "3–4 weeks",
        tips: "Write for your least technical reader. If they understand it, everyone will."
      },
      {
        title: "2. Documentation Types & Standards",
        description: "Learn the different types of documentation and industry standards.",
        skills: ["API Documentation (OpenAPI/Swagger)", "User Guides & Tutorials", "How-to Guides & Quickstarts", "Reference Documentation", "Release Notes & Changelogs", "Docs-as-Code Workflow", "DITA & Structured Authoring"],
        resources: ["Write the Docs — Community & Guides", "Divio Documentation Framework", "Swagger Editor", "ReadMe.com — API Docs"],
        duration: "3–4 weeks",
        tips: "The Divio framework (tutorials, how-tos, reference, explanation) is the gold standard for organizing documentation."
      },
      {
        title: "3. Developer Tools & Markup Languages",
        description: "Learn the tools technical writers use daily.",
        skills: ["Markdown & MDX", "Git & GitHub (Version Control for Docs)", "Static Site Generators (Docusaurus, MkDocs, GitBook)", "Diagramming (Mermaid, Lucidchart, Excalidraw)", "Screenshot & Screen Recording Tools", "Code Examples & Syntax Highlighting"],
        resources: ["Docusaurus Documentation", "MkDocs Material Theme", "GitBook Documentation", "Mermaid.js Documentation"],
        duration: "3–4 weeks",
        tips: "Docs-as-code is the industry standard. Learn Markdown, Git, and a static site generator — that's your toolkit."
      },
      {
        title: "4. Technical Knowledge & Coding",
        description: "Build enough technical knowledge to write accurate documentation.",
        skills: ["Programming Basics (Python or JavaScript)", "REST API Concepts", "Command Line Proficiency", "Database Basics", "Cloud Concepts", "Reading & Understanding Code"],
        resources: ["freeCodeCamp — JS/Python", "Postman — API Basics", "AWS Cloud Practitioner Concepts", "Codecademy"],
        duration: "5–6 weeks",
        tips: "You don't need to be a developer, but you need to understand what developers build. Try to run the code you're documenting."
      },
      {
        title: "5. Visual Communication",
        description: "Create effective diagrams, screenshots, and visual guides.",
        skills: ["Architecture Diagrams", "Flowcharts & Sequence Diagrams", "Screenshot Annotation (Snagit, CleanShot)", "Video Tutorials & Screen Recordings", "Animated GIFs for UI Workflows", "Accessibility in Visual Content"],
        resources: ["Snagit / CleanShot X", "Excalidraw", "Loom — Video Recording", "Mermaid.js for Diagrams"],
        duration: "2–3 weeks",
        tips: "A well-annotated screenshot saves a thousand words. Invest in good screenshot tools — they pay for themselves."
      },
      {
        title: "6. Content Strategy & Analytics",
        description: "Measure documentation effectiveness and plan content strategically.",
        skills: ["Documentation Analytics (Google Analytics, Plausible)", "Search Optimization for Docs", "Content Audits & Gap Analysis", "Feedback Loops (Surveys, Thumbs Up/Down)", "Documentation Roadmapping", "Localization & Translation"],
        resources: ["Google Analytics Academy", "Write the Docs — Content Strategy Talks", "Docs Quality Rubrics", "Crowdin — Localization"],
        duration: "2–3 weeks",
        tips: "Track which pages get the most views and search queries. That tells you what users actually need."
      },
      {
        title: "7. Portfolio & Community",
        description: "Build a portfolio and engage with the technical writing community.",
        skills: ["3–5 Documentation Portfolio Projects", "Open Source Documentation Contributions", "Technical Blog", "Write the Docs Conference Participation", "Networking with Developer Relations", "Freelancing on Technical Writing Platforms"],
        resources: ["Write the Docs Conference", "Google Season of Docs", "Dev.to — Technical Blogging", "Contently / Upwork — Freelance"],
        duration: "Ongoing",
        tips: "Contribute to open source documentation — it's the fastest way to build your portfolio. Google Season of Docs is an amazing opportunity."
      },
    ],
  },

  // ─── 23. EMBEDDED SYSTEMS ENGINEER ───
  {
    id: "embedded-systems",
    title: "Embedded Systems Engineer",
    icon: CircuitBoard,
    description: "Program microcontrollers and build hardware-software systems for IoT and devices",
    color: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    avgSalary: "$70K–$135K",
    demandLevel: "High",
    steps: [
      {
        title: "1. C/C++ Programming",
        description: "Master the languages that run on bare metal.",
        skills: ["C (Pointers, Memory Management, Structs)", "C++ (Classes, Templates, RAII)", "Bit Manipulation & Bitfields", "Memory Management (Stack, Heap, Static)", "Compiler & Linker Basics", "Debugging (GDB)"],
        resources: ["C Programming Language (K&R Book)", "LearnCpp.com", "Embedded C by Michael Barr (Book)", "Exercism — C/C++ Tracks"],
        duration: "6–8 weeks",
        tips: "Pointers and memory management are your bread and butter. Get comfortable with raw memory manipulation."
      },
      {
        title: "2. Electronics & Hardware Basics",
        description: "Understand the hardware your software controls.",
        skills: ["Digital Electronics (Logic Gates, Flip-flops)", "Analog Basics (Resistors, Capacitors, Voltage Dividers)", "Circuit Reading (Schematics, Datasheets)", "Oscilloscope & Multimeter Usage", "PCB Design Basics", "Signal Protocols (UART, SPI, I2C)"],
        resources: ["All About Circuits (Free)", "The Art of Electronics (Book)", "SparkFun Tutorials", "Ben Eater YouTube"],
        duration: "4–6 weeks",
        tips: "Buy an Arduino and STM32 board. Hands-on tinkering teaches more than any textbook."
      },
      {
        title: "3. Microcontroller Programming",
        description: "Program microcontrollers at the register level and with HALs.",
        skills: ["ARM Cortex-M Architecture", "STM32 / ESP32 / Arduino", "GPIO, Timers, Interrupts", "ADC/DAC & PWM", "DMA (Direct Memory Access)", "HAL & Low-Level Drivers", "Bare Metal Programming"],
        resources: ["STM32 HAL Documentation", "Fastbit Embedded Brain Academy", "Mastering STM32 (Book)", "ESP-IDF Documentation"],
        duration: "6–8 weeks",
        tips: "Start with Arduino for concepts, then move to STM32 for professional development. Read datasheets — they're your documentation."
      },
      {
        title: "4. RTOS & Operating Systems",
        description: "Use real-time operating systems for complex embedded applications.",
        skills: ["FreeRTOS (Tasks, Queues, Semaphores, Mutexes)", "Zephyr RTOS", "Task Scheduling (Priority-based, Round-robin)", "Inter-task Communication", "Memory Management in RTOS", "Timing & Deadlines"],
        resources: ["FreeRTOS Documentation & Examples", "Zephyr Project Documentation", "Real-Time Concepts for Embedded Systems (Book)", "DigiKey — FreeRTOS Tutorials"],
        duration: "4–5 weeks",
        tips: "FreeRTOS runs on billions of devices. Master it — it's the industry standard for embedded RTOS."
      },
      {
        title: "5. Communication Protocols & IoT",
        description: "Connect embedded devices to the world.",
        skills: ["Wi-Fi & Bluetooth (BLE)", "MQTT & CoAP (IoT Protocols)", "TCP/IP Stack for Embedded", "LoRa & Zigbee", "USB Protocol", "CAN Bus (Automotive)", "Edge Computing Basics"],
        resources: ["MQTT.org Documentation", "ESP-IDF Wi-Fi & BLE Guide", "CAN Bus Explained", "AWS IoT Core Documentation"],
        duration: "4–5 weeks",
        tips: "IoT is the growth area for embedded. MQTT + ESP32 + AWS IoT is a powerful and employable stack."
      },
      {
        title: "6. Testing, Debugging & Safety",
        description: "Test and debug embedded systems — where bugs can be physical.",
        skills: ["Unit Testing for Embedded (CppUTest, Unity)", "Hardware-in-the-Loop Testing", "JTAG/SWD Debugging", "Static Analysis (PC-lint, Coverity)", "Safety Standards (IEC 61508, MISRA C)", "Power Optimization"],
        resources: ["Test Driven Development for Embedded C (Book)", "MISRA C Guidelines", "Segger J-Link Debugger Docs", "Embedded Artistry Blog"],
        duration: "3–4 weeks",
        tips: "Embedded bugs can be dangerous (medical devices, automotive). Testing is not optional — it's safety-critical."
      },
      {
        title: "7. Projects & Career",
        description: "Build impressive embedded projects and launch your career.",
        skills: ["Complete IoT Projects (Sensor → Cloud)", "Custom PCB Design & Manufacturing", "Open Source Hardware Contributions", "Technical Documentation", "Linux for Embedded (Yocto, Buildroot)", "Portfolio on GitHub"],
        resources: ["Hackaday — Project Inspiration", "KiCad — Free PCB Design", "Yocto Project Documentation", "Buildroot Documentation"],
        duration: "Ongoing",
        tips: "Build something that interacts with the physical world — a weather station, robot, or home automation system. That's your portfolio."
      },
    ],
  },

  // ─── 24. SRE (SITE RELIABILITY ENGINEER) ───
  {
    id: "sre",
    title: "Site Reliability Engineer",
    icon: Headphones,
    description: "Ensure the reliability, scalability, and performance of large-scale production systems",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    avgSalary: "$90K–$180K",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Software Engineering",
        description: "SREs are software engineers who focus on operations — coding is essential.",
        skills: ["Python / Go Programming", "Data Structures & Algorithms", "System Programming", "Scripting & Automation", "Version Control (Git)", "Software Design Principles"],
        resources: ["Go Programming Language (Book)", "Automate the Boring Stuff", "LeetCode — Medium Problems", "Exercism — Go/Python Tracks"],
        duration: "6–8 weeks",
        tips: "Go is the language of cloud infrastructure (Docker, Kubernetes, Terraform are all Go). Learn it."
      },
      {
        title: "2. Linux & Systems Administration",
        description: "Deep Linux knowledge is the foundation of SRE work.",
        skills: ["Linux Internals (Processes, Memory, I/O, Networking)", "SystemD & Service Management", "Performance Analysis (top, htop, strace, perf)", "Filesystem & Storage", "Networking (TCP/IP, DNS, Load Balancing)", "Security Hardening"],
        resources: ["Linux Performance by Brendan Gregg (Book)", "The Linux Command Line (Book)", "OverTheWire — Bandit & Natas", "Julia Evans — Linux Zines"],
        duration: "5–6 weeks",
        tips: "Read Brendan Gregg's work on performance. Understanding Linux internals separates SREs from sysadmins."
      },
      {
        title: "3. Cloud Infrastructure & IaC",
        description: "Manage cloud infrastructure at scale using code.",
        skills: ["AWS / GCP / Azure (Core Services)", "Terraform (Multi-Cloud IaC)", "Kubernetes (Production Operations)", "Service Mesh & Networking", "Cloud Networking & Security", "Cost Management & FinOps"],
        resources: ["Google SRE Book (Free)", "Terraform Documentation", "Kubernetes.io", "Cloud FinOps (Book)"],
        duration: "6–8 weeks",
        tips: "Read ALL THREE Google SRE books — they literally define the field."
      },
      {
        title: "4. Observability & Monitoring",
        description: "Build comprehensive observability for production systems.",
        skills: ["Metrics (Prometheus, Datadog, CloudWatch)", "Logging (ELK, Loki, CloudWatch Logs)", "Distributed Tracing (Jaeger, Tempo, X-Ray)", "Dashboarding (Grafana)", "Alerting Design (PagerDuty, Opsgenie)", "SLIs, SLOs & Error Budgets"],
        resources: ["Observability Engineering (Book)", "Prometheus Documentation", "Grafana University", "Google SRE Workbook"],
        duration: "4–5 weeks",
        tips: "The three pillars: metrics, logs, traces. Design SLOs before building alerts — alert on what matters to users."
      },
      {
        title: "5. Incident Management & Reliability",
        description: "Handle incidents professionally and build reliable systems.",
        skills: ["Incident Response Process", "Blameless Postmortems", "On-call Best Practices", "Chaos Engineering (Chaos Monkey, Litmus)", "Disaster Recovery & Business Continuity", "Capacity Planning", "Game Days & Fire Drills"],
        resources: ["Incident Management Handbook", "Gremlin — Chaos Engineering", "PagerDuty Incident Response Docs", "Learning from Incidents"],
        duration: "3–4 weeks",
        tips: "The best SREs learn from every incident. Write detailed postmortems and follow up on action items."
      },
      {
        title: "6. CI/CD & Release Engineering",
        description: "Build safe, automated deployment pipelines.",
        skills: ["CI/CD Pipeline Design", "Deployment Strategies (Canary, Blue/Green, Feature Flags)", "Release Management", "Rollback Automation", "Configuration Management", "GitOps (ArgoCD, Flux)"],
        resources: ["ArgoCD Documentation", "LaunchDarkly — Feature Flags", "Continuous Delivery (Book)", "Accelerate (Book)"],
        duration: "3–4 weeks",
        tips: "Read 'Accelerate' — it proves with data that deployment frequency correlates with organizational performance."
      },
      {
        title: "7. Culture, Certifications & Growth",
        description: "Build SRE culture and advance your career.",
        skills: ["SRE Team Practices & Toil Reduction", "Error Budget Policies", "Production Readiness Reviews", "CKA / AWS Solutions Architect / GCP Professional", "Technical Leadership", "Conference Talks & Blog"],
        resources: ["Google SRE Books (All Three)", "SREcon Talks", "Usenix Publications", "Will Larson — Blog (Irrational Exuberance)"],
        duration: "Ongoing",
        tips: "SRE is about culture as much as technology. Champion reliability, reduce toil, and measure everything."
      },
    ],
  },

  // ─── 25. PRODUCT MANAGER ───
  {
    id: "product-manager",
    title: "Product Manager",
    icon: Briefcase,
    description: "Define product vision, strategy, and roadmap to deliver value to users and business",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    avgSalary: "$80K–$170K",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Product Management Foundations",
        description: "Learn the frameworks, mindset, and processes of product management.",
        skills: ["Product Lifecycle Management", "Product Vision & Strategy", "Discovery vs Delivery", "Jobs-to-be-Done (JTBD) Framework", "Product-Market Fit", "Lean Startup Methodology"],
        resources: ["Inspired by Marty Cagan (Book)", "The Lean Startup by Eric Ries (Book)", "Reforge — Product Management Courses", "Lenny's Newsletter"],
        duration: "3–4 weeks",
        tips: "'Inspired' by Marty Cagan is the PM bible. Read it twice. Then read 'Empowered.'"
      },
      {
        title: "2. User Research & Discovery",
        description: "Discover what users need through research and experimentation.",
        skills: ["User Interviews & Surveys", "Usability Testing", "Competitive Analysis", "Market Research & Sizing (TAM/SAM/SOM)", "Prototype Testing", "Opportunity Assessment", "Continuous Discovery Habits"],
        resources: ["Continuous Discovery Habits by Teresa Torres (Book)", "Mom Test by Rob Fitzpatrick (Book)", "Nielsen Norman Group", "UserTesting.com"],
        duration: "3–4 weeks",
        tips: "Read 'The Mom Test' — it teaches you how to ask questions without leading users to the answer you want."
      },
      {
        title: "3. Strategy & Prioritization",
        description: "Define what to build and in what order.",
        skills: ["Product Strategy Frameworks", "Prioritization (RICE, ICE, Impact Mapping)", "OKRs (Objectives & Key Results)", "Roadmapping (Now/Next/Later)", "Stakeholder Management", "Trade-off Analysis", "Saying No Effectively"],
        resources: ["Good Strategy Bad Strategy (Book)", "Measure What Matters (OKRs Book)", "Product Roadmaps Relaunched (Book)", "Lenny's Podcast — Strategy Episodes"],
        duration: "3–4 weeks",
        tips: "The hardest PM skill is saying no. Every yes is a no to something else. Be intentional."
      },
      {
        title: "4. Data & Analytics",
        description: "Make data-informed product decisions.",
        skills: ["SQL Basics for PMs", "Product Analytics (Amplitude, Mixpanel)", "A/B Testing & Experimentation", "Funnel & Cohort Analysis", "Key Metrics (North Star, AARRR)", "Dashboard Design", "Data-Informed vs Data-Driven"],
        resources: ["SQL for Non-Programmers", "Amplitude Academy", "Trustworthy Online Controlled Experiments (Book)", "Reforge — Product Analytics"],
        duration: "4–5 weeks",
        tips: "PMs who can pull their own data are 2x more effective. Learn enough SQL to be dangerous."
      },
      {
        title: "5. Technical Acumen",
        description: "Understand technology enough to partner effectively with engineers.",
        skills: ["How the Web Works (HTTP, APIs, Databases)", "System Architecture Basics", "Mobile vs Web Platform Differences", "AI/ML Capabilities & Limitations", "Technical Debt & Trade-offs", "Reading Technical Documents"],
        resources: ["CS50 by Harvard (Free)", "APIs for Non-Developers", "Swipe to Unlock (Book)", "A Non-Technical Guide to Tech"],
        duration: "3–4 weeks",
        tips: "You don't need to code, but you need to speak the language. Engineers respect PMs who understand constraints."
      },
      {
        title: "6. Execution & Leadership",
        description: "Ship products and lead without authority.",
        skills: ["Agile & Scrum (Sprint Planning, Retros)", "Writing PRDs & Specs", "Cross-functional Leadership", "Launch Planning & Go-to-Market", "Stakeholder Communication", "Presentation & Storytelling", "Influencing Without Authority"],
        resources: ["Shape Up by Basecamp (Free)", "Scrum Guide", "Radical Candor (Book)", "Toastmasters"],
        duration: "3–4 weeks",
        tips: "Great PMs are great communicators. Write clear specs, present compelling narratives, and build trust."
      },
      {
        title: "7. Portfolio & Career Growth",
        description: "Build your PM portfolio and advance your career.",
        skills: ["Product Case Studies (Teardowns)", "Product Sense Interview Practice", "Analytical Interview Practice", "PM Portfolio / Blog", "Networking & Mentorship", "Certifications (PSPO, PMC)"],
        resources: ["Exponent — PM Interview Prep", "Product School Certifications", "Lewis Lin — Decode and Conquer (Book)", "ADPList — PM Mentorship"],
        duration: "4–6 weeks",
        tips: "Practice product sense cases: 'How would you improve X?' for 20 products. This is the #1 PM interview format."
      },
    ],
  },

  // ─── 26. SOLUTIONS ARCHITECT ───
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    icon: Blocks,
    description: "Design end-to-end technical solutions that meet business requirements at scale",
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    avgSalary: "$100K–$180K",
    demandLevel: "Very High",
    steps: [
      {
        title: "1. Software Development Experience",
        description: "You need hands-on development experience before becoming an architect.",
        skills: ["Full Stack Development (Frontend + Backend)", "Multiple Programming Languages", "API Design (REST, GraphQL, gRPC)", "Database Design & Optimization", "Microservices vs Monolith", "Design Patterns & SOLID Principles"],
        resources: ["Clean Architecture by Robert Martin (Book)", "Designing Data-Intensive Applications (Book)", "System Design Primer (GitHub)", "Refactoring Guru"],
        duration: "Prerequisites — 2+ years of development experience",
        tips: "You can't architect what you haven't built. Spend time as a developer first — it's the foundation."
      },
      {
        title: "2. Cloud Platform Deep Dive",
        description: "Master at least one cloud platform's full service catalog.",
        skills: ["AWS / Azure / GCP — All Core Services", "Compute, Storage, Networking, Databases", "Serverless Architecture", "Managed Services vs Self-Managed", "Multi-Region & Multi-AZ Design", "Cost Optimization & Reserved Instances"],
        resources: ["AWS Solutions Architect Associate → Professional", "Azure Solutions Architect Expert", "GCP Professional Cloud Architect", "A Cloud Guru / CloudAcademy"],
        duration: "8–12 weeks",
        tips: "AWS Solutions Architect is the most recognized cloud certification. It's a must-have for this role."
      },
      {
        title: "3. System Design & Architecture Patterns",
        description: "Master the patterns and trade-offs of distributed system design.",
        skills: ["Scalability Patterns (Horizontal, Vertical, Caching)", "Reliability Patterns (Circuit Breaker, Retry, Bulkhead)", "Event-Driven Architecture (Kafka, SQS, EventBridge)", "CQRS & Event Sourcing", "API Gateway & BFF Pattern", "Database Patterns (Sharding, Replication, Multi-tenancy)", "CAP Theorem & Consistency Models"],
        resources: ["System Design Interview Vol 1 & 2 by Alex Xu", "Building Microservices by Sam Newman (Book)", "Martin Fowler's Blog", "ByteByteGo YouTube"],
        duration: "6–8 weeks",
        tips: "Every system design decision is a trade-off. Document WHY you chose an approach, not just what you chose."
      },
      {
        title: "4. Security Architecture",
        description: "Design secure systems that protect data and comply with regulations.",
        skills: ["Authentication & Authorization Architecture (OAuth, OIDC, SAML)", "Zero Trust Architecture", "Encryption (At Rest, In Transit, E2E)", "Network Security (WAF, DDoS Protection)", "Compliance (SOC 2, HIPAA, PCI-DSS, GDPR)", "Threat Modeling", "Security Architecture Frameworks"],
        resources: ["OWASP Architecture Guide", "AWS Well-Architected — Security Pillar", "Threat Modeling by Adam Shostack (Book)", "NIST Security Framework"],
        duration: "4–5 weeks",
        tips: "Security must be designed in, not bolted on. Use threat modeling for every new architecture."
      },
      {
        title: "5. Communication & Stakeholder Management",
        description: "Translate technical solutions into business language and vice versa.",
        skills: ["Architecture Decision Records (ADRs)", "Technical Presentations to Non-Technical Audiences", "RFP/RFI Response Writing", "Proof of Concept Development", "Vendor Evaluation & Selection", "Diagramming (C4 Model, UML, Sequence Diagrams)"],
        resources: ["C4 Model (c4model.com)", "Architecture Decision Records (GitHub)", "Structurizr — Architecture Diagramming", "The Staff Engineer's Path (Book)"],
        duration: "3–4 weeks",
        tips: "The C4 model is the best way to communicate architecture. Learn it — Context, Container, Component, Code levels."
      },
      {
        title: "6. Enterprise Integration & Migration",
        description: "Integrate complex systems and manage cloud migrations.",
        skills: ["Enterprise Integration Patterns", "API Management & API Gateway", "Legacy System Modernization (Strangler Fig)", "Cloud Migration Strategies (6 Rs)", "Data Migration & ETL", "Multi-Cloud & Hybrid Cloud"],
        resources: ["Enterprise Integration Patterns (Book)", "AWS Migration Hub", "Strangler Fig Pattern (Martin Fowler)", "Cloud Migration Guide"],
        duration: "4–5 weeks",
        tips: "Most real-world architecture is about integrating existing systems, not greenfield design. Migration skills are gold."
      },
      {
        title: "7. Thought Leadership & Certifications",
        description: "Become a recognized expert and trusted advisor.",
        skills: ["AWS SA Professional / Azure SA Expert / GCP PCA", "TOGAF Certification", "Architecture Review Boards", "Technical Blog & Conference Talks", "Mentoring Engineers", "Staying Current with Technology Trends"],
        resources: ["TOGAF 10 Standard", "InfoQ — Architecture Articles", "QCon & re:Invent Conferences", "ThoughtWorks Technology Radar"],
        duration: "Ongoing",
        tips: "Read the ThoughtWorks Technology Radar quarterly. Architecture is about making the right choices — you need to know the landscape."
      },
    ],
  },

  // ─── 27. DIGITAL MARKETING ANALYST ───
  {
    id: "digital-marketing-analyst",
    title: "Digital Marketing Analyst",
    icon: Megaphone,
    description: "Analyze marketing campaigns, optimize spend, and drive growth through data",
    color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    avgSalary: "$50K–$95K",
    demandLevel: "High",
    steps: [
      {
        title: "1. Marketing Fundamentals",
        description: "Understand core marketing concepts and digital channels.",
        skills: ["Marketing Funnel (TOFU, MOFU, BOFU)", "Digital Channels (SEO, SEM, Social, Email, Content)", "Customer Journey Mapping", "Brand Positioning & Messaging", "Marketing Mix (4Ps/7Ps)", "Growth Marketing Concepts"],
        resources: ["Google Digital Marketing Certificate", "HubSpot Academy (Free)", "Seth Godin — This is Marketing (Book)", "Marketing Made Simple (Book)"],
        duration: "3–4 weeks",
        tips: "Understand the full funnel before specializing. The best analysts see the big picture."
      },
      {
        title: "2. Analytics Tools & Tracking",
        description: "Set up and use analytics tools to measure marketing performance.",
        skills: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "UTM Parameters & Campaign Tracking", "Conversion Tracking & Attribution", "Event Tracking Setup", "Google Search Console", "Pixel Implementation (Meta, LinkedIn)"],
        resources: ["Google Analytics Academy (Free)", "GTM Documentation", "Measure School YouTube", "Analytics Mania Blog"],
        duration: "4–5 weeks",
        tips: "GA4 is very different from Universal Analytics. Learn it from scratch — don't assume knowledge transfers."
      },
      {
        title: "3. Data Analysis & Visualization",
        description: "Analyze marketing data and create compelling reports.",
        skills: ["Excel / Google Sheets (Advanced)", "SQL for Marketing Data", "Looker Studio (Google Data Studio)", "Tableau / Power BI", "Statistical Analysis for Marketing", "A/B Testing Analysis", "Marketing Mix Modeling Basics"],
        resources: ["Looker Studio Templates", "SQLBolt", "Supermetrics — Data Pipelines", "CXL — Marketing Analytics"],
        duration: "5–6 weeks",
        tips: "Build automated Looker Studio dashboards that update daily. Executives love self-serve reporting."
      },
      {
        title: "4. SEO & Content Analytics",
        description: "Analyze and optimize organic search and content performance.",
        skills: ["Keyword Research & Analysis", "On-Page SEO Auditing", "Technical SEO (Core Web Vitals, Crawlability)", "Content Performance Analysis", "Backlink Analysis", "Rank Tracking", "SEO Tools (Ahrefs, SEMrush, Screaming Frog)"],
        resources: ["Ahrefs Academy (Free)", "Moz — Beginner's Guide to SEO", "Google Search Central", "SEMrush Academy"],
        duration: "3–4 weeks",
        tips: "SEO drives the highest ROI of any marketing channel long-term. Master it and you'll always be valuable."
      },
      {
        title: "5. Paid Media & Performance Marketing",
        description: "Analyze and optimize paid advertising campaigns.",
        skills: ["Google Ads (Search, Display, Shopping, YouTube)", "Meta Ads (Facebook, Instagram)", "LinkedIn Ads", "Campaign Structure & Budget Allocation", "ROAS & CPA Optimization", "Audience Targeting & Lookalike Models", "Attribution Modeling"],
        resources: ["Google Ads Certification (Free)", "Meta Blueprint (Free)", "Google Skillshop", "CXL — Paid Acquisition"],
        duration: "4–5 weeks",
        tips: "Get Google Ads and Meta Ads certified — they're free and employers look for them."
      },
      {
        title: "6. Marketing Automation & CRM",
        description: "Leverage automation and CRM data for marketing intelligence.",
        skills: ["HubSpot / Salesforce CRM", "Email Marketing Analytics (Mailchimp, Klaviyo)", "Marketing Automation Workflows", "Lead Scoring & Segmentation", "Customer Lifetime Value Analysis", "Cohort & Retention Analysis"],
        resources: ["HubSpot Academy — CRM & Automation", "Salesforce Trailhead", "Klaviyo Academy", "Mailchimp Learning Resources"],
        duration: "3–4 weeks",
        tips: "CRM data + marketing data = complete customer picture. Learn to connect the dots across systems."
      },
      {
        title: "7. Portfolio & Certifications",
        description: "Build your portfolio and get certified.",
        skills: ["Google Analytics Certification", "Google Ads Certifications", "HubSpot Inbound Marketing", "Case Studies with Real Data", "Marketing Dashboard Portfolio", "A/B Test Documentation"],
        resources: ["Google Skillshop", "HubSpot Academy", "CXL Institute", "Coursera — Digital Marketing Specializations"],
        duration: "4–6 weeks",
        tips: "Build 3 case studies: one SEO project, one paid media analysis, one full-funnel dashboard. That's a complete portfolio."
      },
    ],
  },

  // ─── 28. E-COMMERCE SPECIALIST ───
  {
    id: "ecommerce-specialist",
    title: "E-Commerce Specialist",
    icon: ShoppingCart,
    description: "Build and optimize online stores, manage product catalogs, and drive online sales",
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    avgSalary: "$45K–$90K",
    demandLevel: "High",
    steps: [
      {
        title: "1. E-Commerce Fundamentals",
        description: "Understand the online retail landscape and business models.",
        skills: ["E-Commerce Business Models (B2C, B2B, D2C, Marketplace)", "Customer Journey in E-Commerce", "Payment Processing & Gateways", "Shipping & Fulfillment Basics", "Legal & Compliance (Returns, Privacy, Taxes)", "Competitive Analysis"],
        resources: ["Shopify Academy (Free)", "BigCommerce University", "Baymard Institute — UX Research", "eCommerce Fuel Podcast"],
        duration: "2–3 weeks",
        tips: "Study successful DTC brands (Glossier, Allbirds, Warby Parker). Understand what makes them work."
      },
      {
        title: "2. Platform Setup & Management",
        description: "Set up and manage e-commerce platforms.",
        skills: ["Shopify (Themes, Apps, Liquid)", "WooCommerce / BigCommerce", "Product Catalog Management", "Inventory Management", "Order Processing & Fulfillment", "Multi-channel Selling (Amazon, eBay)"],
        resources: ["Shopify Partner Academy", "WooCommerce Documentation", "Shopify Theme Development", "Amazon Seller University"],
        duration: "4–5 weeks",
        tips: "Shopify dominates the market. Master it first, then expand to other platforms."
      },
      {
        title: "3. Conversion Rate Optimization (CRO)",
        description: "Optimize the shopping experience to maximize conversions.",
        skills: ["A/B Testing (Product Pages, Checkout)", "UX Best Practices for E-Commerce", "Cart Abandonment Strategies", "Product Page Optimization", "Mobile Commerce Optimization", "Site Speed Optimization", "Trust Signals & Social Proof"],
        resources: ["Baymard Institute — CRO Guidelines", "Google Optimize / VWO", "ConversionXL (CXL)", "Hotjar — User Behavior"],
        duration: "3–4 weeks",
        tips: "A 1% increase in conversion rate can mean thousands in revenue. Small changes compound dramatically."
      },
      {
        title: "4. E-Commerce Marketing",
        description: "Drive traffic and sales through digital marketing channels.",
        skills: ["SEO for E-Commerce (Product, Category, Blog)", "Google Shopping & Merchant Center", "Email Marketing & Automation (Klaviyo)", "Social Commerce (Instagram, TikTok Shopping)", "Influencer Marketing", "Content Marketing & UGC"],
        resources: ["Klaviyo Academy", "Google Merchant Center", "Later — Social Commerce Guide", "Shopify Blog — Marketing"],
        duration: "4–5 weeks",
        tips: "Email marketing drives the highest ROI in e-commerce. Set up automated flows (welcome, abandoned cart, post-purchase)."
      },
      {
        title: "5. Analytics & Data",
        description: "Track, measure, and optimize e-commerce performance.",
        skills: ["E-Commerce KPIs (AOV, CLV, Conversion Rate, ROAS)", "Google Analytics 4 for E-Commerce", "Enhanced E-Commerce Tracking", "Cohort & RFM Analysis", "Inventory Analytics & Demand Forecasting", "Unit Economics & Profitability Analysis"],
        resources: ["GA4 E-Commerce Setup", "Shopify Analytics", "Triple Whale — E-Commerce Analytics", "Lifetimely — CLV Analysis"],
        duration: "3–4 weeks",
        tips: "Track CLV (Customer Lifetime Value) — it changes how you think about acquisition costs. Most stores focus too much on first-order revenue."
      },
      {
        title: "6. Operations & Scaling",
        description: "Scale operations for growth.",
        skills: ["3PL & Fulfillment Partners", "International Expansion", "Subscription Models", "Customer Service & Returns", "Supply Chain Basics", "Automation (Zapier, Flow)"],
        resources: ["ShipBob — 3PL Guide", "Recharge — Subscriptions", "Gorgias — Customer Service", "Zapier — Automation"],
        duration: "3–4 weeks",
        tips: "Operations is where e-commerce businesses succeed or fail. Automate everything you can."
      },
      {
        title: "7. Portfolio & Career Growth",
        description: "Build case studies and grow your career.",
        skills: ["E-Commerce Case Studies (Before/After)", "Revenue Growth Documentation", "Shopify Partner Certification", "Google Ads & Analytics Certs", "Freelancing / Agency Work", "Personal Brand"],
        resources: ["Shopify Partner Program", "Google Skillshop", "Upwork — E-Commerce Freelance", "eCommerceFuel — Community"],
        duration: "Ongoing",
        tips: "Document every win: 'Increased conversion rate by X%', 'Grew email revenue by Y%'. Numbers get you hired."
      },
    ],
  },
];
