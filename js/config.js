/**
 * PORTFOLIO & CV CONFIGURATION
 * -------------------------------------------------------------
 * Edit your details below. Everything will automatically update
 * across both your interactive portfolio website and your ATS CV.
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Amanuel Kassie",
    profileImage: "assets/profile.jpg",
    badgeTitle: "B.Sc. Information Technology Student",
    roles: [
      "Full-Stack Web Developer",
      "Software Engineering Enthusiast",
      "API & Database Specialist",
      "Dire Dawa University (DDU) Student"
    ],
    university: "Dire Dawa University (DDU)",
    department: "Department of Information Technology, Institute of Technology",
    location: "Dire Dawa, Ethiopia",
    email: "amangmekael5@gmail.com",
    phone: "+251 900 000 000",           // Update with your mobile number anytime
    github: "https://github.com/amangmekael5",
    linkedin: "https://linkedin.com/in/amanuelkassie",
    telegram: "https://t.me/aman16you",
    aboutBio: [
      "I am a driven Information Technology (IT) student at Dire Dawa University (DDU) with an intense passion for building robust full-stack web applications, RESTful APIs, and scalable database architectures.",
      "My academic background provides me with strong foundations in computer networks, relational databases, data structures, and object-oriented software engineering. I love transforming complex real-world requirements into clean, user-friendly digital products."
    ],
    stats: [
      { label: "Projects Completed", value: "12+" },
      { label: "Core Tech Stack", value: "10+" },
      { label: "Academic CGPA", value: "3.7 / 4.0" },
      { label: "Commitment", value: "100%" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "Dire Dawa University (DDU)",
      faculty: "Institute of Technology (IoT)",
      location: "Dire Dawa, Ethiopia",
      period: "2022 - Present (Expected Graduation: 2026)",
      grade: "CGPA: 3.7 / 4.0 (Dean's Honor List)",
      courses: [
        "Web Programming & Technologies",
        "Database Systems & Administration (MySQL / PostgreSQL)",
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Java / C++)",
        "Software Engineering & Project Management",
        "Computer Networks & Data Communication",
        "Operating Systems & Linux Administration"
      ]
    }
  ],

  skills: {
    frontend: [
      { name: "HTML5 / Semantic Web", level: 95 },
      { name: "CSS3 / Modern Flexbox & Grid", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React.js", level: 82 },
      { name: "Tailwind CSS / Bootstrap", level: 88 }
    ],
    backend: [
      { name: "Node.js / Express.js", level: 85 },
      { name: "Python / Django / FastAPI", level: 80 },
      { name: "RESTful API Architecture", level: 88 },
      { name: "Authentication (JWT & OAuth)", level: 82 }
    ],
    databases: [
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 75 },
      { name: "Database Schema Design & Normalization", level: 85 }
    ],
    toolsAndDevOps: [
      { name: "Git & GitHub Version Control", level: 90 },
      { name: "Postman API Testing", level: 85 },
      { name: "Linux / Bash Scripting", level: 78 },
      { name: "Docker (Containerization Basics)", level: 70 },
      { name: "Agile / Scrum Methodology", level: 85 }
    ]
  },

  projects: [
    {
      id: "dormitory-management",
      title: "DDU Student Dormitory Management System",
      category: "fullstack",
      categoryLabel: "Campus Enterprise System",
      featured: true,
      summary: "A comprehensive campus accommodation management system developed for Dire Dawa University to automate room and bed allocation, manage dormitory blocks, proctors, and student maintenance requests.",
      highlights: [
        "Engineered automated room allocation logic based on student department, gender, and academic year, eliminating manual paper-based backlogs",
        "Implemented student incident & maintenance complaint ticketing module with real-time status updates for proctors",
        "Built secure role-based access control with distinct dashboards for Students, Block Proctors, and Dormitory Administration",
        "Streamlined semester dormitory clearance and check-in workflows, reducing student registration queue times by over 65%"
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Apache/XAMPP"],
      githubUrl: "https://github.com/amangmekael5/DormitoryManagementSystem_PHP",
      projectUrl: "projects/dormitory-management.html",
      status: "Production Ready"
    },
    {
      id: "online-exam-platform",
      title: "University Online Examination & Assessment Platform",
      category: "fullstack",
      categoryLabel: "Academic Assessment System",
      featured: true,
      summary: "A secure, scalable web-based examination platform designed to manage timed academic tests, automate grading, and enforce anti-cheating protocols for university courses.",
      highlights: [
        "Developed resilient real-time countdown timer with automated exam submission and local-state recovery in case of connection dropouts",
        "Built question bank creator supporting multiple question formats (MCQ, True/False, Short Answer) with randomized question delivery",
        "Automated immediate score computation and generated in-depth student performance analytics and grading distribution reports for instructors",
        "Implemented exam integrity protections including full-screen lockdown enforcement, tab-switch monitoring, and tokenized session cookies"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/amangmekael5/online-exam-platform",
      projectUrl: "projects/online-exam.html",
      status: "Production Ready"
    },
    {
      id: "electronics-store",
      title: "ElectroStore - Online Electronics Selling Platform",
      category: "fullstack",
      categoryLabel: "E-Commerce Platform",
      featured: true,
      summary: "A full-featured e-commerce web platform for browsing, filtering, and purchasing electronic gadgets, computer accessories, and hardware with shopping cart and localized payment workflows.",
      highlights: [
        "Constructed dynamic product catalog with real-time category filtering, price range sliders, keyword search indexing, and customer reviews",
        "Engineered transactional cart and checkout system ensuring atomic inventory updates and order integrity",
        "Integrated localized payment verification flow supporting Telebirr, CBE Birr, and mobile banking transfer confirmation",
        "Developed comprehensive admin management portal for product listing, stock replenishment alerts, and customer order tracking"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CSS3"],
      githubUrl: "https://github.com/amangmekael5/online-electronics-store",
      projectUrl: "projects/electronics-store.html",
      status: "Production Ready"
    },
    {
      id: "cafe-checkin",
      title: "Campus Café Check-In & Student Meal Verification System",
      category: "backend",
      categoryLabel: "Real-Time Campus System",
      featured: true,
      summary: "A high-speed student verification and meal attendance system built for university dining halls to prevent duplicate meal claims and expedite entry queues during peak hours.",
      highlights: [
        "Engineered instant student ID / barcode verification reducing per-student entry processing time to under 2 seconds",
        "Implemented strict meal schedule logic (Breakfast, Lunch, Dinner) preventing duplicate entries within the same meal timeframe",
        "Created live dining hall monitoring dashboard providing real-time headcount statistics, consumption reports, and peak hour trends",
        "Designed lightweight offline-capable caching layer ensuring continuous cafeteria check-ins even during campus network fluctuations"
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "WebSockets", "HTML5/CSS3", "Barcode Scanner API"],
      githubUrl: "https://github.com/amangmekael5/cafe-checkin-system",
      projectUrl: "projects/cafe-checkin.html",
      status: "Production Ready"
    }
  ],

  certifications: [
    {
      title: "Full-Stack Web Development Specialization",
      issuer: "freeCodeCamp / Coursera",
      date: "2024",
      skills: "HTML5, CSS3, JavaScript, React, Node.js"
    },
    {
      title: "Database Design and SQL Fundamentals",
      issuer: "Oracle Academy / Coursera",
      date: "2023",
      skills: "Relational Modeling, SQL, Joins, Normalization"
    },
    {
      title: "Cisco Networking Basics & Security",
      issuer: "Cisco Networking Academy",
      date: "2023",
      skills: "TCP/IP, Routing, Switching, Subnetting, Network Security"
    }
  ]
};

// Export for node or browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
