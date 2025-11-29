import { Experience, Project, SkillCategory, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Partha Saha",
  title: "Creative Webflow Developer",
  email: "partasaha1234567@gmail.com",
  phone: "+91 70762 83042",
  github: "github.com/parthasaha21",
  linkedin: "linkedin.com/in/partha-saha-66681627a",
  location: "Kolkata, India",
  summary: "Webflow Developer transforming static designs into immersive web experiences. Specializing in high-performance builds, complex interactions, and seamless animations."
};

export const SKILLS: SkillCategory[] = [
  { 
    title: "Webflow Mastery", 
    skills: ["Webflow CMS", "Interactions 2.0", "Client-First", "Finsweet Attributes", "Wized", "Relume"] 
  },
  { 
    title: "Frontend Code", 
    skills: ["React JS", "Tailwind CSS", "HTML5/CSS3", "JavaScript ES6+", "GSAP", "Framer Motion"] 
  },
  { 
    title: "Design & Tools", 
    skills: ["Figma", "Spline (3D)", "Make.com", "Zapier", "Adobe CS", "UI/UX"] 
  },
  { 
    title: "AI & Automation", 
    skills: ["Voice Agents", "Retail AI", "Chatbots", "Automation"] 
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Freelance Webflow Developer",
    company: "Melbourne Agency (Remote)",
    period: "2025 – Present",
    description: [
      "Architecting enterprise-grade Webflow sites for Australian clients.",
      "Implementing complex CMS structures and custom Javascript solutions.",
      "Optimizing load times to achieve 95+ Google Lighthouse scores.",
      "Integrating third-party APIs via Make.com for automation."
    ]
  },
  {
    id: "exp-2",
    role: "Webflow Developer",
    company: "RK Web Solution",
    period: "2024 – 2025",
    description: [
      "Led the migration of legacy sites to Webflow, reducing maintenance costs by 40%.",
      "Created pixel-perfect conversions from Figma designs.",
      "Developed custom animations using GSAP and Webflow Interactions.",
      "Shipped projects: Azlytics, Saasyfy, BotCloud."
    ]
  }
];

export const PROJECTS: Project[] = [
  { 
    id: "p1", 
    name: "Sipcam", 
    category: "Corporate", 
    description: "Enterprise Webflow build with advanced CMS filtering."
  },
  { 
    id: "p2", 
    name: "Crewther", 
    category: "Healthcare",
    description: "Trust-focused accessible design with booking systems." 
  },
  { 
    id: "p3", 
    name: "Treand", 
    category: "Portfolio",
    description: "Animation-heavy construction portfolio."
  },
  { 
    id: "p4", 
    name: "Azlytics", 
    category: "SaaS",
    description: "High-conversion landing page with Lottie integration."
  },
  { 
    id: "p5", 
    name: "Saasyfy", 
    category: "Template",
    description: "Dark-mode startup template using utility classes."
  },
  { 
    id: "p6", 
    name: "BotCloud", 
    category: "AI Platform",
    description: "Futuristic 3D-integrated AI platform showcase."
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Arts",
  institution: "West Bengal State University",
  year: "2019–2022"
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "HTML Front-End Development",
    provider: "Webskitters Academy"
  }
];

export const AI_SYSTEM_PROMPT = `You are the digital assistant of Partha Saha.
Persona: Minimalist, Creative Director, High-End, Professional.
You speak in concise sentences. You are helpful but stylish.
Context:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}

If asked about availability, say he is available for select opportunities.
`;