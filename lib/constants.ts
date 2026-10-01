export const siteConfig = {
  name: 'Harish G',
  description:
    'AI & Data Science enthusiast building intelligent applications with Machine Learning, LLMs, RAG, Computer Vision and AI automation.',
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Education', href: '/education' },
    { title: 'Skills', href: '/skills' },
    { title: 'Experience', href: '/experience' },
    { title: 'Projects', href: '/projects' },
    { title: 'Certificates', href: '/certificates' },
    { title: 'Contact', href: '/contact' },
  ],
  links: {
    github: 'https://github.com/harishganesan123',
    linkedin: 'https://www.linkedin.com/in/harish-ai-enthusiast',
    twitter: '#',
    facebook: '#',
    instagram: '#',
    whatsapp: '#',
    email: 'mailto:harishganesan123@gmail.com',
    phone: 'tel:+919843233133',
  },
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    title: 'AI & Data Science Intern',
    company: 'HCL GUVI',
    location: 'Remote',
    startDate: 'Mar 2026',
    endDate: 'Present',
    description: [
      'Contributed to AI and Data Science initiatives involving AI-powered educational content, automation workflows, and learning solutions.',
      'Created AI-generated educational videos and technical learning content using AI automation and multimedia tools.',
      'Coordinated a team of interns, supporting task planning, technical discussions, execution, and delivery.',
      'Collaborated with mentors and stakeholders across internship activities and project execution.',
    ],
    technologies: ['Python', 'AI/ML', 'LLMs', 'AI Automation', 'HeyGen'],
  },
  {
    title: 'Networking & Wi-Fi Intern',
    company: 'VVDN Technologies Pvt. Ltd.',
    location: '—',
    startDate: '1 Month',
    endDate: 'Completed',
    description: [
      'Worked as an intern in the Networking and Wi-Fi domain for one month.',
      'Gained practical exposure to networking and wireless connectivity concepts in a professional engineering environment.',
    ],
    technologies: ['Networking', 'Wi-Fi'],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'AI-Powered GitHub Repository Analyzer & Viva Assistant',
    description:
      'AI platform that analyzes GitHub repositories, explains architecture and code, generates project insights, learning notes, and personalized viva/interview questions.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    tags: ['Python', 'FastAPI', 'React', 'LLMs', 'RAG', 'GitHub API', 'SQLAlchemy'],
    repo: 'https://github.com/harishganesan123/repo-viva-assistant',
  },
  {
    title: 'CareerPilot AI',
    description:
      'AI-powered academic and career success platform integrating learning assistance, adaptive study planning, skill-gap analysis, career roadmaps, resume/ATS analysis, internship recommendations, placement readiness and mock interviews.',
    image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg',
    tags: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'AI/NLP', 'Redis', 'Celery'],
    link: 'https://drive.google.com/drive/folders/1VH4LAq04LdUdXiJRy1jSUVwS02mA0KVS?usp=sharing',
  },
  {
    title: 'Solar-Powered Smart Wildlife Water Management System',
    description:
      'Solar-powered autonomous wildlife watering system using ESP32, IoT sensors, automated pumping and predictive water-demand analysis for intelligent water management in remote habitats.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    tags: ['Solar Energy', 'ESP32', 'IoT', 'Sensors', 'ML', 'Predictive Analytics'],
    link: 'https://drive.google.com/drive/folders/1eysFh8vZZE4ISlUZUMyknKPN80J4CAkC?usp=drive_link',
  },
];

export type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements: string[];
};

export const education: Education[] = [
  {
    degree: 'B.Tech.',
    field: 'Artificial Intelligence',
    institution: 'Amity University Lucknow',
    location: 'Lucknow, Uttar Pradesh',
    startDate: '2023',
    endDate: '2027',
    gpa: '8.61/10 CGPA',
    achievements: [
      'Latest SGPA: 9.20/10',
      'Focused on Artificial Intelligence, Machine Learning and Data Science.',
      'Selected as Subject Matter Expert (SME) — uCertify through the university campus placement process, 2026.',
    ],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  url?: string;
  pdf?: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Reinforcement Learning',
    issuer: 'HCL GUVI',
    date: '2026',
    url: 'https://www.guvi.in/share-certificate/r883nYp341736CXF33',
  },
  {
    title: 'Data Analytics and Machine Learning for IoT',
    issuer: 'HCL GUVI',
    date: '2026',
    url: 'https://www.guvi.in/share-certificate/1M700kR2i67hP5O7u8',
  },
  {
    title: 'Data Wrangling and Analysis',
    issuer: 'HCL GUVI',
    date: '2026',
    url: 'https://www.guvi.in/share-certificate/977brD7a51d67Q511N',
  },
  {
    title: 'Mastering MySQL',
    issuer: 'HCL GUVI',
    date: '2026',
    url: 'https://www.guvi.in/share-certificate/10OF9760752KXe116Z',
  },
  {
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    date: '2026',
    url: 'https://www.udacity.com/certificate/e/3a0a8bc6-390b-11f1-b19f-4f17b75e5bab',
  },
  {
    title: 'Introduction to Data Science with Python',
    issuer: 'Simplilearn',
    date: '2025',
    url: 'https://simpli-web.app.link/e/jHcKAyIoS6b',
  },
];

export type Skill = {
  name: string;
  level: number;
  category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
  { name: 'Machine Learning', level: 9, category: 'technical' },
  { name: 'Deep Learning', level: 8, category: 'technical' },
  { name: 'NLP', level: 9, category: 'technical' },
  { name: 'Computer Vision', level: 8, category: 'technical' },
  { name: 'LLMs', level: 9, category: 'technical' },
  { name: 'RAG', level: 9, category: 'technical' },
  { name: 'Reinforcement Learning', level: 7, category: 'technical' },
  { name: 'Agentic AI & Architecture', level: 8, category: 'technical' },
  { name: 'Python', level: 9, category: 'software' },
  { name: 'PyTorch', level: 8, category: 'software' },
  { name: 'TensorFlow', level: 8, category: 'software' },
  { name: 'FastAPI', level: 9, category: 'software' },
  { name: 'React.js', level: 8, category: 'software' },
  { name: 'Pandas / NumPy', level: 9, category: 'software' },
  { name: 'PostgreSQL / MySQL', level: 8, category: 'software' },
  { name: 'Git / GitHub', level: 9, category: 'software' },
  { name: 'Problem Solving', level: 9, category: 'soft' },
  { name: 'Team Leadership', level: 8, category: 'soft' },
  { name: 'Technical Communication', level: 8, category: 'soft' },
  { name: 'Presentation', level: 8, category: 'soft' },
  { name: 'English', level: 9, category: 'language' },
  { name: 'Tamil', level: 10, category: 'language' },
  { name: 'Hindi', level: 8, category: 'language' },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Building AI-Powered Applications',
    excerpt: 'Notes on building practical AI systems with LLMs, RAG, APIs and modern web stacks.',
    date: '2026',
    author: 'Harish G',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    slug: 'building-ai-powered-applications',
  },
];