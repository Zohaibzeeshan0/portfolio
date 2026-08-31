import type { Project, SkillCategory, Service, ProcessStep, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Zohaib Zeeshan',
  greeting: "HI, I'M ZOHAIB ZEESHAN",
  role: 'Full Stack JavaScript Developer',
  experience: '3+ Years',
  headline: 'Full Stack JavaScript Developer with 3+ Years of Experience in Building Dynamic Web Applications.',
  supportingText: 'Passionate Full Stack JavaScript Developer focused on architecting reliable, scalable, and high-performance modern web applications.',
  about: 'I’m Zohaib Zeeshan, a Full Stack JavaScript Developer passionate about transforming ideas into scalable, reliable, and modern digital products. I focus on writing clean code, solving complex problems, building intuitive user experiences, and continuously improving my technical skills.',
  phone: '0305 7823775',
  email: 'zohaibzeeshan26@gmail.com',
  gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=zohaibzeeshan26@gmail.com',
  github: 'https://github.com/Zohaibzeeshan0',
  linkedin: 'https://www.linkedin.com/in/zohaibzeeshan/',
  whatsapp: 'https://wa.me/923057823775',
  location: 'Pakistan',
};

export const TYPING_ROLES = [
  'Full Stack JavaScript Developer',
  'MERN / Next.js Engineer',
  'Dynamic Web Application Engineer',
  'Problem Solver'
];

export const EXPERIENCE_STATS: StatItem[] = [
  { value: 3, suffix: '+', label: 'Years Experience', description: 'Building dynamic web & mobile applications' },
  { value: 20, suffix: '+', label: 'Projects Delivered', description: 'From full-stack web apps to APIs' },
  { value: 10, suffix: '+', label: 'Technologies', description: 'Modern frontend & backend stack' },
  { value: 100, suffix: '%', label: 'Commitment to Quality', description: 'Clean code & scalable architecture' }
];

export const PROFESSIONAL_STRENGTHS = [
  { title: 'Software Architecture', desc: 'Designing modular, scalable, and maintainable application structures.' },
  { title: 'Problem Solving', desc: 'Analyzing complex requirements and engineering performant algorithmic logic.' },
  { title: 'Clean Code', desc: 'Writing readable, well-documented, testable code adhering to SOLID principles.' },
  { title: 'Scalable Applications', desc: 'Building systems capable of handling growing workloads seamlessly.' },
  { title: 'API Development', desc: 'Architecting RESTful endpoints, data pipelines, and third-party integrations.' },
  { title: 'Database Integration', desc: 'Designing efficient relational and NoSQL database schemas & queries.' },
  { title: 'Authentication & Security', desc: 'Implementing role-based access control, JWT tokens, and secure workflows.' },
  { title: 'Responsive UI Development', desc: 'Crafting fluid, user-friendly mobile-first interfaces with micro-animations.' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 95, iconName: 'Code', description: 'Semantic structure, accessibility, HTML5 APIs' },
      { name: 'CSS3', level: 90, iconName: 'Palette', description: 'Flexbox, Grid, CSS variables, keyframe animations' },
      { name: 'JavaScript', level: 92, iconName: 'FileCode', description: 'ES6+, Async/Await, DOM, closure & memory management' },
      { name: 'React', level: 90, iconName: 'Atom', description: 'Hooks, Custom Hooks, State Management, Virtual DOM optimization' },
      { name: 'Next.js', level: 85, iconName: 'Globe', description: 'Server Components, SSR, SSG, App Router, Dynamic routing' },
      { name: 'Tailwind CSS', level: 92, iconName: 'Sparkles', description: 'Design systems, responsive utility layout, standard tokens' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 88, iconName: 'Server', description: 'Event loop, asynchronous IO, middleware pipelines' },
      { name: 'Express.js', level: 90, iconName: 'Cpu', description: 'RESTful API routing, error handling, custom middleware' },
      { name: 'REST APIs', level: 92, iconName: 'Network', description: 'API contract design, status codes, payload optimization' },
      { name: 'JWT Authentication', level: 88, iconName: 'ShieldCheck', description: 'Token validation, refresh tokens, auth guards, RBAC' }
    ]
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'MongoDB', level: 85, iconName: 'Database', description: 'Document schema design, Mongoose ORM, aggregation pipelines' },
      { name: 'MySQL', level: 85, iconName: 'Table', description: 'Relational data modeling, indexing, foreign keys, SQL queries' },
      { name: 'PostgreSQL', level: 82, iconName: 'Layers', description: 'Relational databases, ACID compliance, complex queries' }
    ]
  },
  {
    title: 'Developer Tools & Workflow',
    skills: [
      { name: 'Git', level: 90, iconName: 'GitBranch', description: 'Branching strategies, merging, rebasing, versioning' },
      { name: 'GitHub', level: 90, iconName: 'Github', description: 'Pull requests, code review, actions, repository management' },
      { name: 'VS Code', level: 95, iconName: 'Terminal', description: 'Extensions, debugging, refactoring, workspace setup' },
      { name: 'Postman', level: 90, iconName: 'CheckCircle2', description: 'API testing collections, environment variables, automation' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    shortDescription: 'A modern web-based system for managing hospital operations, authentication, users, records, and workflows.',
    fullDescription: 'A comprehensive full-stack enterprise web system designed to streamline healthcare facilities operations. Features role-based access control for Doctors, Admins, Nurses, and Patients, automated appointment booking, real-time patient status tracking, electronic health record (EHR) management, and audit logging.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    features: [
      'Multi-tier Role-Based Access Control (Admin, Doctor, Patient, Receptionist)',
      'Automated appointment scheduling & room allocation manager',
      'Electronic Patient Health Record (EHR) timeline and diagnosis logger',
      'Real-time bed availability & department operational dashboard',
      'Secure JWT authentication flow with refresh token mechanisms'
    ],
    problem: 'Healthcare providers face administrative delays, scattered patient records, and cumbersome manual scheduling workflows.',
    solution: 'Engineered a centralized, secure web application with real-time patient monitoring and automated appointment management to reduce wait times and record errors.',
    architecture: 'Modular REST API architecture on Node.js/Express backed by MongoDB, with a decoupled React single-page frontend leveraging Tailwind CSS.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'hospital',
    imagePlaceholderGradient: 'from-blue-600/40 to-indigo-900/60'
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    shortDescription: 'A complete library solution for managing books, members, issuing, returns, and reporting.',
    fullDescription: 'An intuitive digital library governance platform designed to automate cataloging, book issuance, return tracking, member membership tiers, overdue fine calculations, and automated inventory search filter functionality.',
    category: 'Full Stack',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'React', 'REST APIs', 'CSS Modules'],
    features: [
      'Instant ISBN & Title catalog search with dynamic availability status',
      'Digital member check-out / check-in workflow with receipt generation',
      'Automated overdue fine computation & notification alerts',
      'Comprehensive administrative reports on book statistics and active loans',
      'Relational database schema ensuring ACID compliant transaction safety'
    ],
    problem: 'Traditional libraries struggle with untracked missing books, manual paper logs, and inefficient member loan tracking.',
    solution: 'Developed an automated management portal featuring relational MySQL schema constraints to eliminate duplicate records and streamline book issuance.',
    architecture: 'Express.js backend connected to MySQL relational database via clean query builders, served to a responsive React user interface.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'library',
    imagePlaceholderGradient: 'from-violet-600/40 to-purple-900/60'
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'A scalable e-commerce application with product management, users, authentication, shopping workflows, and order management.',
    fullDescription: 'A modern, high-performance online storefront equipped with real-time product filtering, dynamic shopping cart management, user authentication, customer orders history tracking, and a powerful admin control dashboard for product catalog management.',
    category: 'Web Apps',
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Interactive product gallery with faceted multi-category filtering',
      'Dynamic persistent shopping cart and instant wishlist state',
      'Customer account authentication, profile dashboard & order history',
      'Admin portal for adding products, managing stock inventory & orders',
      'Optimized server-side rendering for fast page load performance'
    ],
    problem: 'E-commerce users abandon shopping carts due to slow page loads, complex checkout flows, and unresponsive UI elements.',
    solution: 'Built a high-speed Next.js frontend with optimistic UI updates and efficient backend API endpoints for seamless shopping workflows.',
    architecture: 'Next.js App Router for hybrid SSR/SSG frontend pages, interacting with a Node.js REST service layer and MongoDB database.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'ecommerce',
    imagePlaceholderGradient: 'from-cyan-600/40 to-blue-900/60'
  },
  {
    id: 'cloud-management-system',
    title: 'Cloud Infrastructure Telemetry System',
    shortDescription: 'A modern cloud-focused system designed around scalability, reliability, monitoring, and centralized management.',
    fullDescription: 'A centralized infrastructure dashboard built to monitor server health metrics, container status, API endpoint latencies, resource allocation, and automated alert triggering for distributed modern web applications.',
    category: 'Systems',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'REST APIs', 'WebSockets'],
    features: [
      'Real-time server CPU, Memory, and Disk metric telemetry visualization',
      'Centralized logs console with multi-level severity filtering',
      'Automated service health ping probes & breach notification triggers',
      'API key management & microservice connection registry',
      'Dark-theme optimized control panel with high-density layout'
    ],
    problem: 'DevOps and system engineering teams lack a unified view of server metrics across multi-host deployment environments.',
    solution: 'Created a centralized telemetry web application aggregating server stats into real-time visual charts and status indicators.',
    architecture: 'Event-driven Node.js backend streaming telemetry logs into a PostgreSQL time-series table, rendered on a high-speed React dashboard.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'cloud',
    imagePlaceholderGradient: 'from-emerald-600/40 to-teal-900/60'
  },
  {
    id: 'cross-platform-fintech-mobile',
    title: 'Cross-Platform Mobile FinTech App',
    shortDescription: 'A modern mobile application concept focused on user experience, performance, authentication, and real-time functionality.',
    fullDescription: 'A cross-platform mobile application prototype designed for sleek touch UX, secure user authentication, offline local data caching, push notifications support, and real-time backend synchronization.',
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'Node.js', 'Express', 'JWT', 'REST API'],
    features: [
      'Fluid mobile touch interactions with micro-animations & gesture support',
      'Biometric / JWT token authentication flow',
      'Offline data caching mechanism with background auto-sync',
      'Push notifications service integration for instant alert delivery',
      'Adaptable mobile layout supporting diverse screen dimensions'
    ],
    problem: 'Mobile users require instant responsiveness and offline capability even under intermittent network connectivity.',
    solution: 'Architected a mobile app interface utilizing local storage caching layers and optimistic background API synchronization.',
    architecture: 'React Native mobile application communicating with a lightweight Node.js Express API backend secured by JWT auth.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'mobile',
    imagePlaceholderGradient: 'from-pink-600/40 to-rose-900/60'
  },
  {
    id: 'realtime-kanban-workflow',
    title: 'Real-Time Task & Workflow Engine',
    shortDescription: 'Interactive workflow and task management system with real-time board updates and status tracking.',
    fullDescription: 'A collaborative project management portal built with drag-and-drop task boards, priority filters, automated progress indicators, team member assignments, and audit history logs.',
    category: 'Web Apps',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs'],
    features: [
      'Interactive Kanban board with drag-and-drop task movement',
      'Task priority indicators (High, Medium, Low) & deadline countdowns',
      'Real-time status updates & activity audit stream',
      'Tag filtering and search query matching for quick task discovery'
    ],
    problem: 'Teams struggle with fragmented communication and unclear task ownership across complex projects.',
    solution: 'Built an interactive task management engine with instant state updates and visual workflow columns.',
    architecture: 'Component-based React application utilizing centralized state management and clean REST API contracts.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'kanban',
    imagePlaceholderGradient: 'from-amber-600/40 to-orange-900/60'
  },
  {
    id: 'api-gateway-security-service',
    title: 'High-Throughput RESTful API Gateway',
    shortDescription: 'Secure API gateway service featuring rate limiting, JWT validation, payload validation, and request logging.',
    fullDescription: 'An enterprise API middleware gateway service handling route routing, client rate limiting, JWT verification headers, request payload validation, and centralized error handling.',
    category: 'Systems',
    technologies: ['Node.js', 'Express', 'JWT', 'REST APIs', 'Postman', 'JavaScript'],
    features: [
      'Rate-limiting middleware preventing DDoS and spam requests',
      'Centralized JWT authentication guard & token verification',
      'Structured JSON error formatting with HTTP status compliance',
      'Request latency logging and health check endpoints'
    ],
    problem: 'Microservice systems require standardized security policies and request validation before traffic hits core databases.',
    solution: 'Engineered a lightweight Node.js API gateway enforcing rate limits, token security, and request payload sanitization.',
    architecture: 'Express.js middleware pipeline operating as an entry gateway to backend services.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'api',
    imagePlaceholderGradient: 'from-sky-600/40 to-blue-900/60'
  },
  {
    id: 'database-migration-benchmarking',
    title: 'Database Query Benchmarking Tool',
    shortDescription: 'Performance analysis and schema benchmarking tool comparing SQL and NoSQL execution latencies.',
    fullDescription: 'A specialized database engineering dashboard built to benchmark query execution speeds, index efficiency, join operations, and data throughput between PostgreSQL, MySQL, and MongoDB.',
    category: 'Systems',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Node.js', 'Express', 'React'],
    features: [
      'Side-by-side SQL vs NoSQL query execution latency benchmark',
      'Index performance measurement & execution plan inspector',
      'ACID transaction safety compliance checks',
      'Visual query timing comparison charts'
    ],
    problem: 'Developers lack direct empirical metrics when deciding between relational SQL vs document NoSQL storage engines.',
    solution: 'Constructed an automated query benchmarking tool executing standardized queries against live DB instances to report exact millisecond latencies.',
    architecture: 'Node.js backend runner executing parallel drivers against MySQL, PostgreSQL, and MongoDB, exposed via React UI.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'db',
    imagePlaceholderGradient: 'from-purple-600/40 to-indigo-900/60'
  },
  {
    id: 'ai-code-analyzer-summarizer',
    title: 'AI Smart Code Analyzer & Summarizer',
    shortDescription: 'Intelligent code parsing utility for analyzing syntax quality, complexity, and docstring generation.',
    fullDescription: 'A web tool designed for developers to analyze code snippets, inspect complexity metrics, detect syntax patterns, and auto-generate clean documentation summaries.',
    category: 'Web Apps',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    features: [
      'Real-time syntax validation & code complexity scoring',
      'Automated docstring generator for functions and classes',
      'Code formatting & beautification preview',
      'One-click clean summary copy feature'
    ],
    problem: 'Developers spend significant time manually writing documentation and refactoring legacy code functions.',
    solution: 'Built an interactive code analysis application providing automated complexity insights and structured summaries.',
    architecture: 'React frontend connected to a lightweight parsing engine built on Node.js.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'ai',
    imagePlaceholderGradient: 'from-teal-600/40 to-emerald-900/60'
  },
  {
    id: 'identity-sso-authentication-portal',
    title: 'Secure SSO & Identity Portal',
    shortDescription: 'Enterprise single sign-on authentication portal with multi-factor auth, session management, and OAuth2.',
    fullDescription: 'A production-grade identity management portal supporting secure user registration, email verification flows, JWT access token issue & revoke, session tracking, and role-based permissions.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'JWT', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Complete Login, Register, Forgot Password, and MFA verification flows',
      'JWT token pair (Short-lived Access Token + HttpOnly Refresh Token)',
      'Role-based authorization middleware (Admin, Staff, User)',
      'Session activity log with remote sign-out capability'
    ],
    problem: 'Fragmented authentication mechanisms increase vulnerability to session hijacking and unauthorized data access.',
    solution: 'Implemented an isolated, secure identity server enforcing OAuth2 / JWT standards with strict session lifecycle controls.',
    architecture: 'Decoupled React auth client communicating with Node.js Express identity provider and PostgreSQL storage.',
    githubUrl: 'https://github.com/Zohaibzeeshan0',
    demoType: 'auth',
    imagePlaceholderGradient: 'from-blue-700/40 to-slate-900/60'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Modern, responsive and scalable web applications engineered with clean code and cutting-edge frontend technology.',
    iconName: 'Layout',
    highlights: ['Single Page Applications (SPA)', 'Responsive Mobile-First UI', 'Performance Optimization', 'SEO Best Practices']
  },
  {
    id: 'full-stack-solutions',
    title: 'Full-Stack Solutions',
    description: 'Complete end-to-end frontend, backend, database, and API solutions designed to power complex digital products.',
    iconName: 'Layers',
    highlights: ['End-to-End Architecture', 'Database & ORM Integration', 'State Management', 'Full System Deployment']
  },
  {
    id: 'api-development',
    title: 'API Development',
    description: 'Secure, high-performance RESTful APIs built for seamless integration between systems, web, and mobile apps.',
    iconName: 'Server',
    highlights: ['RESTful Endpoint Architecture', 'Payload Optimization', 'Third-Party Webhooks', 'Clear Swagger/Postman Docs']
  },
  {
    id: 'authentication-systems',
    title: 'Authentication Systems',
    description: 'Robust authentication & authorization solutions featuring JWT access tokens, password hashing, and RBAC.',
    iconName: 'ShieldCheck',
    highlights: ['JWT Access & Refresh Tokens', 'Role-Based Access Control (RBAC)', 'Bcrypt Password Hashing', 'Secure Auth Middleware']
  },
  {
    id: 'business-management-systems',
    title: 'Business Management Systems',
    description: 'Tailored enterprise software tools designed around specific operational workflows, tracking, and reporting needs.',
    iconName: 'Briefcase',
    highlights: ['Custom Admin Portals', 'Automated Workflow Tracking', 'Analytical Reporting', 'Database Governance']
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    description: 'Modern, responsive, and user-focused mobile application experiences focused on speed, usability, and stability.',
    iconName: 'Smartphone',
    highlights: ['Cross-Platform Frameworks', 'Mobile Touch Micro-Interactions', 'Offline Data Caching', 'Secure API Sync']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the idea and requirements.',
    details: ['Analyze core business goals', 'Identify target audience & workflows', 'Define functional specifications']
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define architecture, technology and project structure.',
    details: ['Select optimal tech stack', 'Design database schemas & API contracts', 'Map application component hierarchy']
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create intuitive UI/UX and user flows.',
    details: ['Establish sleek dark/light color palette', 'Wireframe key screen layouts', 'Incorporate micro-animations & glassmorphism']
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build scalable frontend, backend and APIs.',
    details: ['Write clean, modular TypeScript/JS code', 'Implement secure backend logic & endpoints', 'Ensure responsive mobile-first behavior']
  },
  {
    number: '05',
    title: 'Test',
    description: 'Test functionality, performance and security.',
    details: ['Audit REST API payloads & edge cases', 'Verify cross-browser compatibility', 'Validate form inputs & auth guards']
  },
  {
    number: '06',
    title: 'Deploy',
    description: 'Launch and maintain the product.',
    details: ['Configure production build bundles', 'Deploy to high-speed cloud hosts', 'Monitor system performance & stability']
  }
];

export const TECH_MARQUEE_ITEMS = [
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'REST APIs', category: 'Architecture' },
  { name: 'JWT Auth', category: 'Security' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Postman', category: 'Tools' }
];
