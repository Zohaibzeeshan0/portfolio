export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Web Apps' | 'Full Stack' | 'Mobile' | 'Systems';
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  architecture: string;
  githubUrl: string;
  liveDemoUrl?: string;
  isComingSoon?: boolean;
  imagePlaceholderGradient: string;
  demoType?: 'hospital' | 'library' | 'ecommerce' | 'cloud' | 'mobile' | 'kanban' | 'api' | 'db' | 'ai' | 'auth';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    iconName: string;
    description: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}
