import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe, 
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Students Taught", value: "1000+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in San Francisco, CA" },
  { icon: Briefcase, text: "Open for freelancer work" },
  { icon: GraduationCap, text: "CS Graduate from Stanford" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: 'Michael Carter',
    profession: 'Real Estate Agent',
    userImage: 'https://i.ibb.co/7yZ5FhH/businessman1.jpg',
    review:
      'Absolutely amazing service! Everything was smooth and professional from start to finish.',
  },
  {
    id: 2,
    name: 'Sophia Williams',
    profession: 'UI/UX Designer',
    userImage: 'https://i.ibb.co/3C0K8Xx/woman1.jpg',
    review:
      'The experience exceeded my expectations. The platform is fast, modern, and very user-friendly.',
  },
  {
    id: 3,
    name: 'Daniel Brown',
    profession: 'Full Stack Developer',
    userImage: 'https://i.ibb.co/ZYW3VTp/man2.jpg',
    review:
      'A reliable and efficient system that helped me complete my project without any hassle.',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    profession: 'Digital Marketer',
    userImage: 'https://i.ibb.co/JkL8m8F/woman2.jpg',
    review:
      'Great communication and excellent support. I truly appreciate the quick response time.',
  },
  {
    id: 5,
    name: 'David Anderson',
    profession: 'Software Engineer',
    userImage: 'https://i.ibb.co/9y8Xh5T/man3.jpg',
    review:
      'The features are powerful and easy to use. It saved me a lot of time and effort.',
  },
  {
    id: 6,
    name: 'Olivia Martinez',
    profession: 'Project Manager',
    userImage: 'https://i.ibb.co/6bQ7k6M/woman3.jpg',
    review:
      'Professional, clean design and outstanding performance. Highly recommended!',
  },
  {
    id: 7,
    name: 'James Wilson',
    profession: 'Entrepreneur',
    userImage: 'https://i.ibb.co/Ykq7p7b/man4.jpg',
    review:
      'I was impressed by the simplicity and effectiveness of the entire process.',
  },
  {
    id: 8,
    name: 'Isabella Moore',
    profession: 'Content Writer',
    userImage: 'https://i.ibb.co/VWz7HkP/woman4.jpg',
    review:
      'Everything worked perfectly. It gave me exactly what I was looking for.',
  },
  {
    id: 9,
    name: 'William Taylor',
    profession: 'Cyber Security Analyst',
    userImage: 'https://i.ibb.co/2kL8XhT/man5.jpg',
    review:
      'Secure, fast, and extremely well-built. I feel confident using this platform.',
  },
  {
    id: 10,
    name: 'Ava Thompson',
    profession: 'Mobile App Developer',
    userImage: 'https://i.ibb.co/4dP7h6K/woman5.jpg',
    review:
      'One of the best platforms I have used so far. Smooth experience and excellent quality.',
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@john.dev",
    href: "mailto:hello@john.dev"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-457464",
    href: "tel:+132838333"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  },
];

export const sociallinks = [
  { icon: FaGithub, href: '#', label: "GitHub" },
  { icon: FaLinkedinIn, href: '#', label: "LinkedIn" },
  { icon: FaTwitter, href: '#', label: "Twitter" },
  { icon: FaGithub, href: '#', label: "Facebook" },
];

export const experience = [
  {
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'TechNova Solutions',
    period: '2023 - Present',
    description:
      'Leading the development of scalable web applications for international clients. Managing both frontend and backend architecture, optimizing performance, and mentoring junior developers to maintain clean and efficient code standards.',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'CreativeSoft Agency',
    period: '2021 - 2023',
    description:
      'Developed responsive and interactive user interfaces for modern web applications. Collaborated closely with designers and backend teams to ensure seamless API integration and exceptional user experience across devices.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'REST API', 'Firebase'],
  },
  {
    type: 'work',
    title: 'Backend Developer',
    company: 'DataBridge Systems',
    period: '2020 - 2021',
    description:
      'Designed secure and efficient server-side applications with optimized database structures. Implemented authentication systems, payment integrations, and role-based access control for enterprise-level platforms.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe API'],
  },
  {
    type: 'education',
    title: 'Master of Computer Science',
    company: 'Global Tech University',
    period: '2018 - 2020',
    description:
      'Specialized in Artificial Intelligence and distributed systems. Conducted research on machine learning algorithms and developed academic projects focused on data analysis, cloud computing, and system optimization.',
    technologies: ['AI/ML', 'Data Structures', 'Cloud Computing', 'Research'],
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science & Engineering',
    company: 'National Institute of Technology',
    period: '2014 - 2018',
    description:
      'Built a strong foundation in programming, software engineering principles, and database management systems. Completed multiple team-based software development projects and participated in coding competitions.',
    technologies: ['C++', 'Java', 'Database Systems', 'Software Engineering'],
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'Innovatech Labs',
    period: '2019 - 2020',
    description:
      'Assisted in building dynamic websites and maintaining client projects. Focused on debugging, UI improvements, and implementing new features based on client requirements.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
  },
];

export const footerSociallinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export const projects = [
  {
    title: 'Freelance Marketplace Platform',
    description:
      'A full-stack freelance marketplace where clients can post jobs, hire freelancers, manage payments, and track project progress with secure authentication and role-based dashboards.',
    image: 'https://i.ibb.co/0jQ8ZxM/freelance-platform.png',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'School Management System',
    description:
      'A complete school management web app for managing students, teachers, classes, attendance, and results with admin and teacher control panels.',
    image: 'https://i.ibb.co/Yc6b1zP/school-management.png',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Firebase'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Hotel Booking Application',
    description:
      'An online hotel booking system with real-time room availability, user authentication, payment gateway integration, and booking history management.',
    image: 'https://i.ibb.co/Wk8R7kK/hotel-booking.png',
    techStack: ['React', 'Stripe', 'Node.js', 'MongoDB'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Job Portal Website',
    description:
      'A modern job portal platform where employers can post jobs and applicants can apply, upload resumes, and track application status.',
    image: 'https://i.ibb.co/9p9QwZf/job-portal.png',
    techStack: ['Next.js', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Task Management Dashboard',
    description:
      'A productivity-focused task management app with drag-and-drop Kanban boards, user roles, real-time updates, and deadline tracking.',
    image: 'https://i.ibb.co/3N4yRkX/task-dashboard.png',
    techStack: ['React', 'Redux', 'Node.js', 'Socket.io'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Real Estate Listing Platform',
    description:
      'A property listing platform where users can browse, filter, and contact agents with advanced search functionality and interactive maps.',
    image: 'https://i.ibb.co/x1pPZrM/real-estate.png',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Google Maps API'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Social Media Web App',
    description:
      'A full-stack social networking platform with posts, comments, likes, user profiles, and real-time notifications.',
    image: 'https://i.ibb.co/ZV7XH1M/social-media.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Online Learning Platform',
    description:
      'An e-learning platform with course enrollment, video streaming, instructor dashboards, and secure payment integration.',
    image: 'https://i.ibb.co/2kM7QfN/elearning.png',
    techStack: ['Next.js', 'Stripe', 'Express.js', 'MongoDB'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Inventory Management System',
    description:
      'A business inventory tracking system with product management, stock alerts, sales reports, and analytics dashboard.',
    image: 'https://i.ibb.co/q0F6RrM/inventory.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
  {
    title: 'Portfolio Builder Application',
    description:
      'A dynamic portfolio builder app where users can create, customize, and publish personal portfolio websites with theme support.',
    image: 'https://i.ibb.co/6Xh7YgK/portfolio-builder.png',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'http://example.com',
    githubUrl: 'http://example.com',
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Shadcn UI", icon: Smartphone },
      { name: "Vite", icon: Layout },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers},
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database},
      { name: "GraphQL", icon: Cpu},
      { name: "REST APIs", icon: Cloud},
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      {name: "Git", icon: GitBranch},
      {name: "Docker", icon: Server},
      {name: "AWS", icon: Cloud},
      {name: "Linux", icon: Terminal},
      {name: "Figma", icon: Palette},
      {name: "CI/CD", icon: Cpu},
    ]
  }
];

