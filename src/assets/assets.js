import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaFilePowerpoint,
} from "react-icons/fa";

import profileImg from "../assets/portrait.png";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.avif";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

{
  /*
  import cert1 from "../assets/Excel.png";
  import cert2 from "../assets/GSC.png";
  import cert4 from "../assets/gdg.png";
*/
}

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Data Cleaning",
    description:
      "I prepare messy datasets by removing duplicates, fixing errors, and making the data ready for analysis.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Data Visualization",
    description:
      "I turn raw data into clear charts and dashboards that make insights easier to understand.",
    color: "text-pink",
  },
  {
    icon: FaTools,
    title: "Problem Solving",
    description:
      "I use data-driven thinking to solve challenges and support better decision-making.",
    color: "text-blue",
  },
  {
    icon: FaMobileAlt,
    title: "Communication",
    description:
      "I present insights clearly so technical and non-technical people can understand them.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "AI & ML",
    icon: FaRobot,
    description:
      "Building intelligent applications with machine learning and artificial intelligence.",
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Vue.js", "TypeScript", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications.",
    tags: ["Node.js", "Django"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Deploying and managing applications in cloud environments.",
    tags: ["AWS", "Docker"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git", "GitHub", "Power BI", "Tableau"],
  },
];

export const projects = [
  {
    title: "Book Genre Analysis",
    description:
      "An analysis of book genres and their popularity across different regions and time periods.",
    image: project1,
    tech: ["R", "MongoDB"],
    icons: [FaCode, FaDatabase],
    livelink: "#",
  },
  {
    title: "AI Workforce Market Analysis",
    description:
      "A Power BI dashboard analyzing the AI workforce market, covering job count, salary range, industry demand, company size, employment type, required tools and skills, locations, and experience levels.",
    image: project2,
    tech: ["Power BI", "SQL", "kaggle"],
    icons: [FaFilePowerpoint, FaDatabase, FaFire],
    livelink:
      "https://drive.google.com/file/d/1ngM7jdrMZRojLzazin2LuOo5uy0BPwPw/view?usp=drivesdk",
  },
  {
    title: "AarogyaSanchay",
    description:
      "A healthcare record platform designed to track migrant health data, improve disease surveillance, and support fair access to care.",
    image: project3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    livelink: "https://arogyasanchay.onrender.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: project4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    livelink: "https://portfolio-daiss216s-projects.vercel.app",
  },
  {
    title: "ResourceHub",
    description:
      "A simple platform for students to upload, approve, and access department study resources in one place.",
    image: project5,
    tech: ["React", "Vite", "Tailwind CSS", "Firebase"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    livelink: "https://resource-sharing-five.vercel.app",
  },
  {
    title: "Dark Pattern Detector",
    description:
      "An AI tool that identifies misleading design patterns such as fake urgency and hidden fees on websites.",
    image: project6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    livelink: "https://dark-pattern-detector-prototype.vercel.app",
  },
];

export const certificates = [
  {
    title: "Google Data Analytics",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "Power BI Essentials",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    year: "2024",
  },
];

export const Info = [
  {
    head: "Education",
    source: "Devi Ahilya Vishwavidyalaya, Indore",
    duration: "2023 - Present",
  },
  {
    head: "Volunteer Experience",
    source: "GDG On Campus SDSF | PR and Marketing Lead",
    duration: "2024 - 2025",
  },
];
