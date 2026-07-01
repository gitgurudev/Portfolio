export const personalInfo = {
  name: "Yash Ramesh Dharme",
  tagline: "AI Engineer",
  roles: [
    "AI Engineer",
    "LLM Systems Builder",
    "GenAI Product Developer",
    "Full-Stack Engineer",
    "Cloud Architect",
  ],
  summary:
    "AI Engineer with 3+ years building production-ready AI systems, GenAI applications, and scalable backend architectures. Specialized in LLM-powered apps, RAG pipelines, and AI-driven automation across fintech and real-world business systems.",
  email: "yashrd04@gmail.com",
  phone: "+91 9730871339",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/yash-dharme-2b784b160",
  github: "https://github.com/gitgurudev",
};

export const skills = {
  "AI / LLM": ["LLaMA 3", "OpenRouter", "RAG Pipelines", "LLM-as-a-Judge", "Prompt Engineering", "n8n Automation", "LangChain"],
  "Frontend": ["React", "TypeScript", "Vite", "Tailwind CSS", "Flutter"],
  "Backend": ["Node.js", "Express", "PHP", "REST APIs", "Microservices"],
  "Databases": ["MySQL", "MongoDB", "Supabase"],
  "Cloud & DevOps": ["AWS", "GCP", "Oracle Cloud"],
  "APIs & Integrations": ["CIBIL", "Equifax", "FINVU", "Razorpay", "CCAvenue", "Google Maps API", "Google OAuth"],
};

export const experiences = [
  {
    company: "Viliso Technologies Private Limited",
    role: "AI Engineer",
    period: "Jun 2026 – Present",
    location: "Mumbai",
    projects: [
      {
        name: "AI Engineering",
        description: "Building production-grade AI systems and automation workflows",
        bullets: [
          "Developing AI-powered applications using Python, LLMs, and Generative AI technologies",
          "Designing and implementing RAG pipelines with vector databases for intelligent document retrieval",
          "Building REST APIs and scalable backend services using FastAPI",
          "Developing AI workflows using LangChain and LangGraph for automation and intelligent decision-making",
          "Integrating LLM APIs and optimizing prompt engineering for domain-specific AI solutions",
        ],
        stack: ["Python", "FastAPI", "LangChain", "LangGraph", "RAG", "Vector DBs", "LLM APIs"],
      },
    ],
  },
  {
    company: "Grafotics LTD",
    role: "AI Engineer",
    period: "Dec 2022 – May 2026",
    location: "Virar (E), Mumbai",
    projects: [
      {
        name: "FoodFox",
        description: "Cloud-native food delivery system (multi-panel architecture)",
        bullets: [
          "Designed scalable AWS-based architecture with full system data flow",
          "Built role-based panels for Admin, Restaurant, Cash Counter & Customers",
          "Engineered AI-driven UI generation using optimized prompts",
          "Integrated Razorpay & Google Maps Platform for payments and tracking",
        ],
        stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "AWS", "Razorpay", "Google Maps"],
      },
      {
        name: "Atlantaa — Real Estate CRM",
        description: "Custom CRM for real estate & construction",
        bullets: [
          "Developed CRM modules for campaigns, lead capture, and pipeline tracking",
          "Built inventory management with live unit availability and booking workflows",
          "Automated workflows using cron jobs for financial calculations",
        ],
        stack: ["PHP", "SuiteCRM", "MySQL", "JavaScript", "Cron Jobs"],
      },
      {
        name: "CreditMantra — Fintech AI",
        description: "AI-powered credit intelligence platform",
        bullets: [
          "Built AI Credit Report Analyzer supporting CRIF & CIBIL using LLaMA 3",
          "Developed PDF parsing pipeline extracting 15+ structured data fields",
          "Engineered credit score impact analysis with factor-level insights",
          "Built n8n workflows for automated SEO content generation and publishing",
        ],
        stack: ["PHP", "MERN", "SuiteCRM", "MySQL", "n8n", "OpenRouter", "LLaMA 3", "CCAvenue"],
      },
      {
        name: "SRFC — Loan Management System",
        description: "End-to-end fintech LMS with microservices",
        bullets: [
          "Developed LMS with end-to-end loan lifecycle handling",
          "Integrated Equifax, CIBIL, CRIF for real-time credit score retrieval",
          "Built financial data integrations via Finvu APIs",
        ],
        stack: ["Microservices", "Finvu", "Equifax", "CIBIL", "CRIF", "KYC APIs"],
      },
    ],
  },
  {
    company: "Spine Technologies",
    role: "Implementation Engineer",
    period: "May 2022 – Sep 2022",
    location: "Mumbai",
    projects: [],
  },
  {
    company: "Nucsoft LTD",
    role: "Application Support Engineer",
    period: "Jan 2022 – Apr 2022",
    location: "Mumbai",
    projects: [],
    note: "Client: TATA AIG",
  },
];

export const projects = [
  {
    id: 1,
    name: "NarrativeAuditor",
    tagline: "LLM-as-a-Judge Script Evaluation System",
    description:
      "Designed an LLM-as-a-Judge architecture with 4 independent evaluators (Clarity, Creativity, Engagement, Coherence). Processes 136-page PDFs using chunking + parallel evaluation workflows.",
    highlights: [
      "4 independent LLM judges — separate focus per criterion",
      "Multi-stage reasoning: reason → summarize → score",
      "Character consistency tracking & plot gap detection",
      "Tone arc analysis + AI-powered scene rewriting",
      "Model-agnostic — runs across multiple LLM providers",
      "Fully client-side, privacy-first (no backend)",
    ],
    stack: ["React", "TypeScript", "LLM-as-a-Judge", "PDF Processing", "Parallel Evaluation"],
    github: "https://github.com/gitgurudev/NarrativeAuditor",
    accent: "#a78bfa",
    icon: "🎬",
    video: "/images/narrative_auditor.mp4",
    screenshots: [
      "/images/Narrativestart.png",
      "/images/Narrativemiddle.png",
      "/images/Narativefinal.png",
      "/images/narrative-audit-results.png",
    ],
  },
  {
    id: 2,
    name: "AstroTalks",
    tagline: "AI-powered Vedic Astrology Chat Application",
    description:
      "Full-stack GenAI app simulating a Vedic astrologer with controlled persona and structured conversational flow. Context-aware responses using name, DOB → Sun sign, Nakshatra mapping.",
    highlights: [
      "Persona-consistent AI (Jyotish Guruji) across all sessions",
      "Prompt architecture for tone, format & domain alignment",
      "Conversation persistence via MongoDB Atlas",
      "Context-aware Sun sign & Nakshatra mapping",
      "Resolved API reliability & DNS integration challenges",
    ],
    stack: ["React (Vite)", "Node.js", "Express", "MongoDB Atlas", "OpenRouter", "Mixtral 8x7B"],
    github: "https://github.com/gitgurudev/AstroTalks",
    accent: "#06b6d4",
    icon: "🔮",
    screenshots: [
      "/images/Astrotalksstart.png",
      "/images/AstrotalksMiddle.png",
      "/images/Astrotalkschat.png",
      "/images/Astrotalksfinal.png",
    ],
  },
  {
    id: 3,
    name: "AI Credit Report Analyzer",
    tagline: "Fintech AI — CIBIL/CRIF PDF Intelligence",
    description:
      "Takes a customer's CIBIL/CRIF PDF report and turns it into a clear, actionable dashboard. Extracts 15+ fields, shows score impact factors, generates improvement roadmap, and enables one-click disputes.",
    highlights: [
      "PDF parsing pipeline for complex CIBIL/CRIF formats",
      "Credit score impact analysis (utilization, history, mix, inquiries)",
      "Personalized improvement roadmap with score gain estimates",
      "One-click dispute system with automated email escalation",
      "Structured JSON prompting extracting 15+ data fields",
    ],
    stack: ["PHP", "OpenRouter", "LLaMA 3", "pdftotext", "SVG", "CSS Grid", "PHPMailer"],
    accent: "#10b981",
    icon: "💳",
    video: "/images/Credit-Report-ai-aNALIZER.mp4",
    screenshots: [
      "/images/Credit-report-start-one.png",
      "/images/credit-report-start-two.png",
      "/images/Credit-report-anlized.png",
      "/images/Credit-report-analized-json.png",
      "/images/Credit-report-dispute-raised.png",
      "/images/Credit-report-email.png",
    ],
  },
  {
    id: 4,
    name: "AI Blog Automation",
    tagline: "n8n Workflow — AI Content Generation Pipeline",
    description:
      "Automated blog creation workflow using AI and n8n. Auto-selects finance topics, generates complete articles with AI, creates custom illustrations, and pushes content directly to CRM.",
    highlights: [
      "End-to-end automated blog generation via n8n",
      "AI-generated content + visual header creation",
      "Direct CRM publishing integration",
      "Turned multi-step manual process into single automated flow",
    ],
    stack: ["n8n", "OpenAI", "AI Automation", "CRM Integration"],
    accent: "#f59e0b",
    icon: "⚡",
    screenshots: [
      "/images/AI-Blog-Automation-one.png",
      "/images/AI-Blog-Automation-two.png",
      "/images/AI-Blog-Automation-three.png",
    ],
  },
];

export const posts = [
  {
    id: 1,
    title: "NarrativeAuditor — Building LLM-as-a-Judge",
    excerpt:
      "Saw a post about Netflix's LLM-as-a-Judge system for show synopses. Four criteria. Separate judge per criterion. The architectural thinking was so clean — so I built it for movie scripts.",
    tags: ["#GenAI", "#LLMEngineering", "#BuildInPublic", "#AIEngineering"],
    insight:
      "Asking one model to evaluate 4 things at once gives diluted answers. Separate judges, separate focus — noticeably better.",
    projectRef: "NarrativeAuditor",
    icon: "🎬",
    accent: "#a78bfa",
  },
  {
    id: 2,
    title: "AstroTalks — Prompt Design for Persona Control",
    excerpt:
      "Built a full-stack GenAI app simulating a Vedic astrologer. The most non-trivial part wasn't the stack — it was controlling the model's behavior. Small prompt changes had disproportionate impact.",
    tags: ["#GenerativeAI", "#PromptEngineering", "#FullStackDevelopment", "#MERNStack"],
    insight:
      "Small prompt changes had a disproportionate impact on tone, structure, and safety. The prompt IS the product.",
    projectRef: "AstroTalks",
    icon: "🔮",
    accent: "#06b6d4",
  },
  {
    id: 3,
    title: "AI Credit Report Analyzer — Fintech Meets LLM",
    excerpt:
      "Shipped an AI tool that takes a CIBIL/CRIF PDF and turns it into a clear dashboard with score factors, improvement roadmap, and one-click dispute filing.",
    tags: ["#FinTechAI", "#LLM", "#CreditAnalytics", "#BuildInPublic"],
    insight:
      "Most people don't understand their credit report. This bridges that gap — not just where you stand, but exactly how to improve.",
    projectRef: "Credit Report Analyzer",
    icon: "💳",
    accent: "#10b981",
  },
  {
    id: 4,
    title: "AI Blog Automation with n8n",
    excerpt:
      "Built a small experiment to automate blog creation using AI and workflow automation. The workflow auto-selects topics, generates content + illustrations, and pushes to CRM — fully automated.",
    tags: ["#AIAutomation", "#n8n", "#AIWorkflows", "#ContentAutomation"],
    insight:
      "Seeing the system generate both blog content and its visual header automatically was exciting. Powerful tools when used together.",
    projectRef: "Blog Automation",
    icon: "⚡",
    accent: "#f59e0b",
  },
];

export const certifications = [
  {
    name: "Google Cloud Certified",
    level: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    issued: "Jun 09, 2023",
    expires: "Jun 09, 2026",
    id: "bb2814d1336b459e81caa46c9c1a5ab6",
    seriesId: "110780",
  },
];

export const education = [
  {
    degree: "MSc, IT",
    institution: "Patkar Varde College, Goregaon East, MH",
    status: "Completed",
  },
  {
    degree: "BSc. IT",
    institution: "Viva College",
    gpa: "6.07 / 10",
    percentage: "57.67%",
  },
];
