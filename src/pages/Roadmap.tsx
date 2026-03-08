import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronRight, CheckCircle2, Circle, MapPin, Clock, BookOpen, Briefcase, TrendingUp, Database, Code, BarChart3, Brain, Shield, Cloud, Smartphone, Palette } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RoadmapStep {
  title: string;
  description: string;
  skills: string[];
  resources: string[];
  duration: string;
}

interface CareerPath {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  color: string;
  steps: RoadmapStep[];
}

const careerPaths: CareerPath[] = [
  {
    id: "data-analyst",
    title: "Data Analyst",
    icon: BarChart3,
    description: "Analyze data to help businesses make informed decisions",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    steps: [
      {
        title: "1. Foundation — Mathematics & Statistics",
        description: "Build a strong base in statistics, probability, and linear algebra.",
        skills: ["Descriptive Statistics", "Probability", "Hypothesis Testing", "Linear Algebra Basics"],
        resources: ["Khan Academy Statistics", "StatQuest YouTube Channel", "Think Stats (Book)"],
        duration: "4–6 weeks",
      },
      {
        title: "2. Excel & Spreadsheets Mastery",
        description: "Learn advanced Excel functions, pivot tables, and data cleaning.",
        skills: ["VLOOKUP / XLOOKUP", "Pivot Tables", "Conditional Formatting", "Data Validation", "Power Query"],
        resources: ["Excel Easy Tutorials", "Chandoo.org", "Google Sheets Training"],
        duration: "2–3 weeks",
      },
      {
        title: "3. SQL for Data Analysis",
        description: "Master querying databases to extract and manipulate data.",
        skills: ["SELECT, JOIN, GROUP BY", "Subqueries & CTEs", "Window Functions", "Database Design Basics"],
        resources: ["SQLBolt", "Mode Analytics SQL Tutorial", "LeetCode SQL Problems"],
        duration: "4–5 weeks",
      },
      {
        title: "4. Python / R for Analysis",
        description: "Learn a programming language for data manipulation and analysis.",
        skills: ["Pandas & NumPy", "Data Cleaning", "Matplotlib / Seaborn", "Exploratory Data Analysis"],
        resources: ["Kaggle Python Course", "DataCamp", "Automate the Boring Stuff"],
        duration: "6–8 weeks",
      },
      {
        title: "5. Data Visualization & BI Tools",
        description: "Create compelling dashboards and visual stories from data.",
        skills: ["Tableau / Power BI", "Dashboard Design", "Storytelling with Data", "KPI Tracking"],
        resources: ["Tableau Public Gallery", "Power BI Guided Learning", "Storytelling with Data (Book)"],
        duration: "4–5 weeks",
      },
      {
        title: "6. Portfolio & Job Preparation",
        description: "Build projects, prepare resume, and practice interview questions.",
        skills: ["End-to-End Projects", "Portfolio Website", "Business Case Studies", "Communication Skills"],
        resources: ["Kaggle Datasets", "GitHub Portfolio", "Glassdoor Interview Questions"],
        duration: "4–6 weeks",
      },
    ],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    icon: Code,
    description: "Build beautiful, interactive web applications and user interfaces",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    steps: [
      {
        title: "1. HTML, CSS & JavaScript Fundamentals",
        description: "Master the building blocks of the web.",
        skills: ["Semantic HTML", "CSS Flexbox & Grid", "Responsive Design", "JavaScript ES6+", "DOM Manipulation"],
        resources: ["MDN Web Docs", "freeCodeCamp", "JavaScript.info"],
        duration: "6–8 weeks",
      },
      {
        title: "2. CSS Frameworks & Preprocessors",
        description: "Speed up styling with modern tools.",
        skills: ["Tailwind CSS", "Bootstrap", "Sass/SCSS", "CSS Animations"],
        resources: ["Tailwind Docs", "CSS-Tricks", "Kevin Powell YouTube"],
        duration: "2–3 weeks",
      },
      {
        title: "3. React.js & Component Architecture",
        description: "Learn the most popular frontend framework.",
        skills: ["JSX & Components", "State & Props", "Hooks", "React Router", "Context API"],
        resources: ["React Official Docs", "Scrimba React Course", "Full Stack Open"],
        duration: "6–8 weeks",
      },
      {
        title: "4. TypeScript & Testing",
        description: "Write type-safe, reliable code.",
        skills: ["TypeScript Basics", "Generics & Utility Types", "Jest / Vitest", "React Testing Library"],
        resources: ["TypeScript Handbook", "Testing JavaScript (Kent C. Dodds)", "Total TypeScript"],
        duration: "4–5 weeks",
      },
      {
        title: "5. State Management & APIs",
        description: "Handle complex state and communicate with backends.",
        skills: ["Redux / Zustand", "REST APIs", "React Query / TanStack Query", "Authentication"],
        resources: ["TanStack Query Docs", "Redux Toolkit Docs", "Postman Learning Center"],
        duration: "3–4 weeks",
      },
      {
        title: "6. Build & Deploy Projects",
        description: "Create a portfolio with real-world projects.",
        skills: ["Git & GitHub", "CI/CD Basics", "Vercel / Netlify", "Performance Optimization"],
        resources: ["GitHub Learning Lab", "Vercel Docs", "web.dev by Google"],
        duration: "4–6 weeks",
      },
    ],
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    icon: Database,
    description: "Build servers, APIs, and database-driven applications",
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    steps: [
      {
        title: "1. Programming Language Mastery",
        description: "Get proficient in a backend language like Python, Java, or Node.js.",
        skills: ["Core Language Syntax", "OOP Concepts", "Data Structures", "Error Handling"],
        resources: ["Codecademy", "The Odin Project", "CS50 by Harvard"],
        duration: "6–8 weeks",
      },
      {
        title: "2. Databases & SQL",
        description: "Learn relational and NoSQL databases.",
        skills: ["PostgreSQL / MySQL", "MongoDB", "Database Design", "ORMs (Prisma, SQLAlchemy)"],
        resources: ["PostgreSQL Tutorial", "MongoDB University", "Database Design Course"],
        duration: "4–5 weeks",
      },
      {
        title: "3. Web Frameworks & REST APIs",
        description: "Build APIs using popular frameworks.",
        skills: ["Express.js / Django / Spring Boot", "REST API Design", "Middleware", "Authentication & JWT"],
        resources: ["Express.js Guide", "Django REST Framework", "REST API Design Rulebook"],
        duration: "5–6 weeks",
      },
      {
        title: "4. DevOps & Deployment",
        description: "Learn to deploy and manage applications.",
        skills: ["Docker", "Linux Basics", "CI/CD Pipelines", "Cloud (AWS / GCP)"],
        resources: ["Docker Docs", "Linux Journey", "AWS Free Tier"],
        duration: "4–5 weeks",
      },
      {
        title: "5. Security & Optimization",
        description: "Secure and scale your applications.",
        skills: ["OWASP Top 10", "Rate Limiting", "Caching (Redis)", "Load Balancing"],
        resources: ["OWASP Cheat Sheets", "Redis University", "System Design Primer"],
        duration: "3–4 weeks",
      },
      {
        title: "6. System Design & Projects",
        description: "Design scalable systems and build portfolio projects.",
        skills: ["Microservices", "Message Queues", "API Gateway", "Documentation"],
        resources: ["System Design Interview (Book)", "Designing Data-Intensive Apps", "GitHub Projects"],
        duration: "4–6 weeks",
      },
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: Brain,
    description: "Use machine learning and AI to solve complex problems",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    steps: [
      {
        title: "1. Mathematics & Statistics",
        description: "Deep dive into math foundations for ML.",
        skills: ["Linear Algebra", "Calculus", "Probability & Statistics", "Optimization"],
        resources: ["3Blue1Brown", "MIT OpenCourseWare", "Mathematics for Machine Learning (Book)"],
        duration: "6–8 weeks",
      },
      {
        title: "2. Python for Data Science",
        description: "Master Python libraries for data science.",
        skills: ["NumPy & Pandas", "Matplotlib & Seaborn", "Scikit-learn", "Jupyter Notebooks"],
        resources: ["Python Data Science Handbook", "Kaggle Learn", "DataCamp"],
        duration: "5–6 weeks",
      },
      {
        title: "3. Machine Learning",
        description: "Learn core ML algorithms and techniques.",
        skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
        resources: ["Andrew Ng's ML Course", "Hands-On ML (Book)", "Scikit-learn Docs"],
        duration: "8–10 weeks",
      },
      {
        title: "4. Deep Learning & NLP",
        description: "Explore neural networks and language processing.",
        skills: ["TensorFlow / PyTorch", "CNNs & RNNs", "Transformers & NLP", "Computer Vision"],
        resources: ["Fast.ai", "Deep Learning Specialization", "Hugging Face Course"],
        duration: "8–10 weeks",
      },
      {
        title: "5. MLOps & Deployment",
        description: "Deploy models to production.",
        skills: ["Model Serving", "MLflow", "Docker for ML", "A/B Testing"],
        resources: ["MLOps Zoomcamp", "Full Stack Deep Learning", "Weights & Biases"],
        duration: "4–5 weeks",
      },
      {
        title: "6. Kaggle & Portfolio",
        description: "Compete and build an impressive portfolio.",
        skills: ["Kaggle Competitions", "Research Papers", "Blog Writing", "End-to-End Projects"],
        resources: ["Kaggle", "Papers With Code", "Towards Data Science"],
        duration: "Ongoing",
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Analyst",
    icon: Shield,
    description: "Protect systems and data from security threats",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    steps: [
      {
        title: "1. Networking & OS Fundamentals",
        description: "Understand how networks and operating systems work.",
        skills: ["TCP/IP & OSI Model", "Linux Administration", "Windows Server", "Network Protocols"],
        resources: ["CompTIA Network+", "Linux Journey", "Professor Messer"],
        duration: "6–8 weeks",
      },
      {
        title: "2. Security Fundamentals",
        description: "Learn core security concepts and frameworks.",
        skills: ["CIA Triad", "Encryption & Hashing", "Firewalls & IDS", "Security Policies"],
        resources: ["CompTIA Security+", "Cybrary", "NIST Framework"],
        duration: "4–6 weeks",
      },
      {
        title: "3. Ethical Hacking & Pentesting",
        description: "Learn offensive security techniques.",
        skills: ["Kali Linux", "Nmap & Burp Suite", "Web App Security", "OWASP Top 10"],
        resources: ["TryHackMe", "HackTheBox", "PortSwigger Web Academy"],
        duration: "6–8 weeks",
      },
      {
        title: "4. Incident Response & SOC",
        description: "Handle security incidents and monitoring.",
        skills: ["SIEM Tools", "Log Analysis", "Threat Hunting", "Forensics Basics"],
        resources: ["Splunk Free Training", "Blue Team Labs", "SANS Reading Room"],
        duration: "4–5 weeks",
      },
      {
        title: "5. Certifications & Specialization",
        description: "Get certified and pick a specialization.",
        skills: ["CEH / OSCP", "Cloud Security", "GRC & Compliance", "Malware Analysis"],
        resources: ["Offensive Security", "ISC2", "SANS Institute"],
        duration: "8–12 weeks",
      },
      {
        title: "6. CTFs & Real-World Practice",
        description: "Sharpen skills through competitions and labs.",
        skills: ["CTF Competitions", "Bug Bounties", "Security Blog", "Community Involvement"],
        resources: ["PicoCTF", "HackerOne", "BugCrowd"],
        duration: "Ongoing",
      },
    ],
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    icon: Cloud,
    description: "Design and manage cloud infrastructure and services",
    color: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    steps: [
      {
        title: "1. Linux & Networking Basics",
        description: "Get comfortable with command line and networking.",
        skills: ["Linux CLI", "Bash Scripting", "DNS & HTTP", "SSH & Firewalls"],
        resources: ["Linux Academy", "Networking Fundamentals", "Bash Guide"],
        duration: "4–5 weeks",
      },
      {
        title: "2. Cloud Platform (AWS / Azure / GCP)",
        description: "Learn a major cloud provider in depth.",
        skills: ["Compute & Storage", "Networking (VPC)", "IAM & Security", "Serverless"],
        resources: ["AWS Cloud Practitioner", "Azure Fundamentals", "GCP Essentials"],
        duration: "6–8 weeks",
      },
      {
        title: "3. Infrastructure as Code",
        description: "Automate infrastructure provisioning.",
        skills: ["Terraform", "CloudFormation", "Ansible", "Configuration Management"],
        resources: ["Terraform Docs", "HashiCorp Learn", "Ansible Docs"],
        duration: "4–5 weeks",
      },
      {
        title: "4. Containers & Orchestration",
        description: "Master containerization and Kubernetes.",
        skills: ["Docker", "Kubernetes", "Helm Charts", "Container Security"],
        resources: ["Docker Docs", "Kubernetes.io", "KodeKloud"],
        duration: "5–6 weeks",
      },
      {
        title: "5. CI/CD & Monitoring",
        description: "Build pipelines and set up observability.",
        skills: ["GitHub Actions / Jenkins", "Prometheus & Grafana", "ELK Stack", "Alerting"],
        resources: ["GitHub Actions Docs", "Prometheus Docs", "Grafana University"],
        duration: "3–4 weeks",
      },
      {
        title: "6. Certifications & Projects",
        description: "Get certified and build real projects.",
        skills: ["AWS Solutions Architect", "CKA / CKAD", "Multi-Cloud Projects", "Cost Optimization"],
        resources: ["A Cloud Guru", "Cloud Resume Challenge", "AWS Well-Architected"],
        duration: "6–8 weeks",
      },
    ],
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    icon: Smartphone,
    description: "Build native and cross-platform mobile applications",
    color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    steps: [
      {
        title: "1. Programming Fundamentals",
        description: "Learn JavaScript/TypeScript or Kotlin/Swift.",
        skills: ["JavaScript / TypeScript", "OOP Concepts", "Async Programming", "Git"],
        resources: ["JavaScript.info", "Kotlin Koans", "Swift Playgrounds"],
        duration: "4–6 weeks",
      },
      {
        title: "2. Cross-Platform Framework",
        description: "Learn React Native or Flutter.",
        skills: ["React Native / Flutter", "Component Architecture", "Navigation", "Platform APIs"],
        resources: ["React Native Docs", "Flutter.dev", "Expo Documentation"],
        duration: "6–8 weeks",
      },
      {
        title: "3. UI/UX for Mobile",
        description: "Design intuitive mobile interfaces.",
        skills: ["Material Design / HIG", "Responsive Layouts", "Animations", "Accessibility"],
        resources: ["Material.io", "Apple HIG", "Dribbble for Inspiration"],
        duration: "3–4 weeks",
      },
      {
        title: "4. State Management & APIs",
        description: "Handle data and connect to backends.",
        skills: ["Redux / Provider", "REST & GraphQL", "Local Storage", "Push Notifications"],
        resources: ["Firebase Docs", "Apollo GraphQL", "AsyncStorage Guide"],
        duration: "4–5 weeks",
      },
      {
        title: "5. Testing & Performance",
        description: "Ensure quality and speed.",
        skills: ["Unit Testing", "Integration Testing", "Performance Profiling", "Crash Reporting"],
        resources: ["Jest / Detox", "Flutter Testing", "Firebase Crashlytics"],
        duration: "3–4 weeks",
      },
      {
        title: "6. Publishing & Portfolio",
        description: "Ship apps to stores and build your portfolio.",
        skills: ["App Store / Play Store", "CI/CD for Mobile", "App Analytics", "Portfolio Projects"],
        resources: ["App Store Connect", "Google Play Console", "Fastlane"],
        duration: "4–6 weeks",
      },
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    icon: Palette,
    description: "Design user-centered digital experiences and interfaces",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    steps: [
      {
        title: "1. Design Fundamentals",
        description: "Learn visual design principles and theory.",
        skills: ["Color Theory", "Typography", "Layout & Composition", "Gestalt Principles"],
        resources: ["Refactoring UI", "Design Principles (Book)", "Canva Design School"],
        duration: "3–4 weeks",
      },
      {
        title: "2. UX Research & Strategy",
        description: "Understand users and their needs.",
        skills: ["User Interviews", "Personas & Journey Maps", "Competitive Analysis", "Information Architecture"],
        resources: ["Don't Make Me Think (Book)", "Nielsen Norman Group", "Google UX Certificate"],
        duration: "4–5 weeks",
      },
      {
        title: "3. Wireframing & Prototyping",
        description: "Create low and high-fidelity prototypes.",
        skills: ["Figma / Sketch", "Wireframes", "Interactive Prototypes", "Design Systems"],
        resources: ["Figma Tutorials", "Sketch Docs", "Material Design Kit"],
        duration: "4–6 weeks",
      },
      {
        title: "4. Visual & Interaction Design",
        description: "Create polished, delightful interfaces.",
        skills: ["Icon Design", "Micro-interactions", "Motion Design", "Responsive Design"],
        resources: ["Lottie Animations", "Dribbble", "Awwwards"],
        duration: "4–5 weeks",
      },
      {
        title: "5. Usability Testing",
        description: "Validate designs with real users.",
        skills: ["Usability Testing", "A/B Testing", "Heuristic Evaluation", "Analytics"],
        resources: ["Maze", "Hotjar", "UsabilityHub"],
        duration: "3–4 weeks",
      },
      {
        title: "6. Portfolio & Job Prep",
        description: "Build a case-study-driven portfolio.",
        skills: ["Case Studies", "Design Portfolio Site", "Presentation Skills", "Design Challenges"],
        resources: ["Behance", "Dribbble", "ADPList Mentorship"],
        duration: "4–6 weeks",
      },
    ],
  },
];

const Roadmap = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const toggleStep = (stepTitle: string) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepTitle)) next.delete(stepTitle);
      else next.add(stepTitle);
      return next;
    });
  };

  if (selectedPath) {
    const progress = Math.round(
      (selectedPath.steps.filter((s) => completedSteps.has(s.title)).length /
        selectedPath.steps.length) *
        100
    );

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" onClick={() => setSelectedPath(null)} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Roadmaps
            </Button>
            <div className="ml-auto">
              <Button variant="outline" size="sm" onClick={() => navigate("/interview-mode")}>
                Back to Hub
              </Button>
            </div>
          </div>
        </header>

        <div className="container px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg border ${selectedPath.color}`}>
                <selectedPath.icon className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">{selectedPath.title} Roadmap</h1>
                <p className="text-muted-foreground">{selectedPath.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {progress}% complete
              </span>
            </div>
          </div>

          <div className="relative space-y-0">
            {selectedPath.steps.map((step, index) => {
              const isCompleted = completedSteps.has(step.title);
              const isLast = index === selectedPath.steps.length - 1;

              return (
                <div key={step.title} className="relative flex gap-4">
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border" />
                  )}

                  {/* Timeline dot */}
                  <button
                    onClick={() => toggleStep(step.title)}
                    className="relative z-10 mt-1 flex-shrink-0"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-10 w-10 text-primary fill-primary/20" />
                    ) : (
                      <Circle className="h-10 w-10 text-muted-foreground/40" />
                    )}
                  </button>

                  {/* Content */}
                  <Card className={`flex-1 mb-6 transition-all ${isCompleted ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <Badge variant="secondary" className="gap-1 text-xs">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </Badge>
                      </div>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                          <TrendingUp className="h-3.5 w-3.5 text-primary" />
                          Skills to Learn
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {step.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5 text-primary" />
                          Recommended Resources
                        </h4>
                        <ul className="space-y-1">
                          {step.resources.map((resource) => (
                            <li key={resource} className="text-sm text-muted-foreground flex items-center gap-2">
                              <ChevronRight className="h-3 w-3 text-primary/60" />
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PrepMaster
          </h2>
          <div className="ml-auto">
            <Button variant="outline" size="sm" onClick={() => navigate("/interview-mode")}>
              Back to Hub
            </Button>
          </div>
        </div>
      </header>

      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              Career Roadmaps
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Choose Your Career Path
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow a structured, step-by-step roadmap to land your dream role. Each path includes skills, resources, and timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {careerPaths.map((path) => (
              <Card
                key={path.id}
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                onClick={() => setSelectedPath(path)}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-3 ${path.color}`}>
                    <path.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{path.steps.length} phases</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
