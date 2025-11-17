// TypeScript interfaces for portfolio content configuration

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency?: number;
  icon?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  startDate?: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  skills?: string[];
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'contained' | 'outlined' | 'text';
  primary?: boolean;
}

export interface HeroSection {
  tagline: string;
  ctaButtons: CTAButton[];
}

export interface AboutSection {
  bio: string;
  highlights: string[];
}

export interface ContentConfig {
  // Personal Information
  name: string;
  title: string;
  summary: string;
  email: string;
  resumeUrl?: string;
  location?: string;

  // Hero Section
  hero: HeroSection;

  // About Section
  about: AboutSection;

  // Skills
  skills: Skill[];

  // Experience
  experience: ExperienceItem[];

  // Projects
  projects: Project[];

  // Testimonials
  testimonials: Testimonial[];

  // Certifications
  certifications: Certification[];

  // Social Links
  socialLinks: SocialLink[];
}


// Sample content data
export const contentConfig: ContentConfig = {
  // Personal Information
  name: 'Keval Shah',
  title: 'Sr. Software Engineer',
  summary: 'Senior Software Engineer specializing in React.js, Next.js, Node.js & AWS. Delivering scalable web solutions for healthcare & government sectors. Expert in building high-performance web applications with 5+ years of experience.',
  email: 'kevalshah074@gmail.com',
  resumeUrl: '/Keval-Shah-Resume.pdf',
  location: 'Gujarat, India',

  // Hero Section
  hero: {
    tagline: 'Transforming complex challenges into scalable solutions',
    ctaButtons: [
      {
        text: 'View My Work',
        href: '#projects',
        variant: 'contained',
        primary: true,
      },
      {
        text: 'Get In Touch',
        href: '#contact',
        variant: 'outlined',
      },
    ],
  },

  // About Section
  about: {
    bio: 'Experienced Software Engineer specializing in building scalable, high-performance web applications across healthcare and government domains. With deep expertise in React.js, Next.js, Redux Toolkit, Node.js, and AWS, I lead frontend development initiatives that transform complex requirements into elegant, user-centric solutions. My approach combines technical excellence with strategic thinking, consistently delivering innovative features that exceed client expectations while maintaining rigorous quality standards.',
    highlights: [
      'Led frontend development for enterprise healthcare and government applications',
      'Architected solutions achieving 5x performance improvements through optimization',
      'Delivered complex integrations including CRM systems, e-ticketing platforms, and payment gateways',
      'Maintained perfect on-time delivery record with 100% client approval ratings',
      'Championed Agile best practices, code quality, and collaborative development',
      'Expertise in AWS cloud infrastructure, CI/CD pipelines, and modern DevOps practices',
    ],
  },

  // Skills
  skills: [
    // Frontend
    { name: 'React.js', category: 'Frontend', proficiency: 95 },
    { name: 'Next.js', category: 'Frontend', proficiency: 90 },
    { name: 'Redux Toolkit', category: 'Frontend', proficiency: 90 },
    { name: 'JavaScript', category: 'Frontend', proficiency: 95 },
    { name: 'TypeScript', category: 'Frontend', proficiency: 85 },
    { name: 'HTML5', category: 'Frontend', proficiency: 95 },
    { name: 'CSS3', category: 'Frontend', proficiency: 90 },
    { name: 'Tailwind CSS', category: 'Frontend', proficiency: 85 },
    { name: 'Material-UI', category: 'Frontend', proficiency: 88 },

    // Backend
    { name: 'Node.js', category: 'Backend', proficiency: 85 },
    { name: 'Express.js', category: 'Backend', proficiency: 82 },
    { name: 'Java', category: 'Backend', proficiency: 80 },
    { name: 'REST APIs', category: 'Backend', proficiency: 90 },
    { name: 'Stripe', category: 'Backend', proficiency: 85 },

    // Database
    { name: 'MongoDB', category: 'Database', proficiency: 88 },
    { name: 'MySQL', category: 'Database', proficiency: 85 },
    { name: 'DBeaver', category: 'Database', proficiency: 82 },

    // Cloud & DevOps
    { name: 'AWS', category: 'Cloud & DevOps', proficiency: 80 },
    { name: 'CI/CD', category: 'Cloud & DevOps', proficiency: 82 },
    { name: 'Docker', category: 'Cloud & DevOps', proficiency: 75 },

    // Tools
    { name: 'Git', category: 'Tools', proficiency: 92 },
    { name: 'GitHub', category: 'Tools', proficiency: 90 },
    { name: 'VS Code', category: 'Tools', proficiency: 95 },
    { name: 'Postman', category: 'Tools', proficiency: 88 },
    { name: 'Tortoise SVN', category: 'Tools', proficiency: 80 },

    // Methodologies
    { name: 'Agile', category: 'Other', proficiency: 90 },
    { name: 'Scrum', category: 'Other', proficiency: 88 },
    { name: 'Code Reviews', category: 'Other', proficiency: 90 },
  ],

  // Experience
  experience: [
    {
      company: 'Techforce Infotech Pvt Ltd.',
      role: 'Sr. Software Engineer - L1',
      duration: 'Dec 2024 - Present',
      startDate: '2024-12',
      endDate: 'Present',
      description: 'Led a frontend team on a US healthcare project, delivering features that integrated government data into patient applications with one-click retrieval. Achieved 100% sprint completion on release dates by following Agile methodology. Built patient-facing features using Advanced React.js, Redux Toolkit, and Tortoise SVN. Gained hands-on AWS experience, managing 5 EC2 instances, troubleshooting errors, and restarting servers. Delivered end-to-end Stripe payment integration, collaborating across teams and implementing Java + React.js solutions successfully approved by the client.',
      technologies: ['React.js', 'Redux Toolkit', 'Tortoise SVN', 'AWS EC2', 'Stripe', 'Java', 'Agile'],
    },
    {
      company: 'Techforce Infotech Pvt Ltd.',
      role: 'Software Engineer - L1',
      duration: 'Dec 2023 - Dec 2024',
      startDate: '2023-12',
      endDate: '2024-12',
      description: 'Handled frontend development for a live US government e-ticketing project using advanced React.js. Optimized the form-filling workflow to 19 seconds, enabling in-house delivery and replacing a third-party solution. Delivered high-performance, scalable solutions for government sector applications.',
      technologies: ['React.js', 'JavaScript', 'Redux', 'Performance Optimization'],
    },
    {
      company: 'Techforce Infotech Pvt Ltd.',
      role: 'Associate Software Engineer',
      duration: 'Aug 2022 - Dec 2023',
      startDate: '2022-08',
      endDate: '2023-12',
      description: 'Developed and maintained responsive web applications using React.js, Redux Toolkit, and Redux-Saga, delivering solutions for healthcare and government domains. Refactored and optimized legacy code, improving reusability, reducing API dependency, and achieving 5x faster load times. Built a CRM proof of concept (inspired by Zoho) with React.js frontend and Node.js backend, achieving 100% responsiveness across devices. Collaborated in Agile sprints, conducted code reviews, and participated in testing cycles.',
      technologies: ['React.js', 'Redux Toolkit', 'Redux-Saga', 'Node.js', 'Agile', 'Code Reviews'],
    },
    {
      company: 'Techforce Infotech Pvt Ltd.',
      role: 'React.js Trainee',
      duration: 'Mar 2022 - Aug 2022',
      startDate: '2022-03',
      endDate: '2022-08',
      description: 'Built dynamic, responsive UIs with React.js, JavaScript, and modern frameworks to enhance user experience. Applied JSX, lifecycle methods, props, and state management for scalable front-end solutions. Used Git/GitHub for version control and collaborated in Agile teams with stand-ups and code reviews. Developed a Digital Signature App in React.js, enabling secure, real-time electronic document signing.',
      technologies: ['React.js', 'JavaScript', 'JSX', 'Git', 'GitHub', 'Agile'],
    },
  ],

  // Projects
  projects: [
    {
      title: 'Healthcare Patient Portal',
      description: 'Enterprise healthcare application integrating government data with patient records. Features one-click data retrieval, secure authentication, and HIPAA-compliant data handling. Led frontend development using advanced React.js patterns.',
      image: '/projects/healthcare.png',
      technologies: ['React.js', 'Redux Toolkit', 'Java', 'AWS EC2', 'Stripe'],
      featured: true,
    },
    {
      title: 'Government E-Ticketing System',
      description: 'Live US government e-ticketing platform with optimized form workflows. Reduced form completion time to 19 seconds through performance optimization. Handles high-volume ticket processing with real-time updates.',
      image: '/projects/eticket.png',
      technologies: ['React.js', 'Redux', 'JavaScript', 'Performance Optimization'],
      featured: true,
    },
    {
      title: 'CRM Platform (Zoho-inspired)',
      description: 'Full-stack CRM proof of concept with customer management, sales pipeline tracking, and analytics dashboard. Achieved 100% responsiveness across all devices with modern UI/UX design.',
      image: '/projects/crm.png',
      technologies: ['React.js', 'Node.js', 'Redux Toolkit', 'Redux-Saga', 'REST APIs'],
      featured: true,
    },
    {
      title: 'Digital Signature Application',
      description: 'Secure electronic document signing application with real-time signature capture and verification. Implements cryptographic signing for document authenticity and legal compliance.',
      image: '/projects/signature.png',
      technologies: ['React.js', 'JavaScript', 'Canvas API', 'Cryptography'],
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with Next.js and Material-UI. Features dark mode, smooth animations, contact form integration, and SEO optimization. Achieves 90+ Lighthouse scores across all metrics.',
      image: '/projects/portfolio.png',
      technologies: ['Next.js', 'TypeScript', 'Material-UI', 'Formspree'],
      featured: false,
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: 'Rajesh Patel',
      role: 'Senior Project Manager',
      company: 'Techforce Infotech',
      quote: 'Keval is an exceptional frontend developer who consistently delivers high-quality work. His ability to optimize performance and lead the team on complex healthcare projects is remarkable. He achieved 100% on-time delivery across all sprints.',
      avatar: '/testimonials/rajesh.jpg',
    },
    {
      name: 'Priya Sharma',
      role: 'Tech Lead',
      company: 'Techforce Infotech',
      quote: 'Working with Keval has been outstanding. He refactored our legacy code and achieved 5x faster load times. His expertise in React.js and Redux Toolkit helped us deliver a robust CRM solution with 100% responsiveness.',
      avatar: '/testimonials/priya.jpg',
    },
    {
      name: 'Amit Desai',
      role: 'Product Owner',
      company: 'Techforce Infotech',
      quote: 'Keval has excellent problem-solving skills. He optimized our government e-ticketing platform to 19 seconds, replacing a third-party solution. His attention to detail and Agile approach make him a valuable team member.',
      avatar: '/testimonials/amit.jpg',
    },
  ],

  // Certifications
  certifications: [
    {
      title: 'React Foundations for Next.js',
      issuer: 'Vercel',
      date: '2025',
      skills: ['React.js', 'Next.js'],
    },
    {
      title: 'Getting Started with MongoDB Atlas',
      issuer: 'MongoDB',
      date: '2023',
      skills: ['MongoDB', 'Database', 'NoSQL'],
    },
    {
      title: 'Oracle Cloud Infrastructure Foundation 2021 Certified Associate',
      issuer: 'Oracle',
      date: '2022',
      skills: ['Oracle Cloud', 'Cloud Computing', 'Infrastructure'],
    },
  ],

  // Social Links
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/keval074',
      icon: 'GitHub',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kevalshah6802/',
      icon: 'LinkedIn',
    },
    {
      platform: 'Email',
      url: 'mailto:kevalshah074@gmail.com',
      icon: 'Email',
    },
  ],
};
