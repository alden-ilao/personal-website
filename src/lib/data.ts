import investmentImg from "../assets/Investments-Calculator.jpg";
import mealsImg from "../assets/React-Meals.jpg";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectData = [
  {
    title: "Investments Calculator",
    description: "Utility compound interest calculator. Data visualization created with Chart.js",
    tags: ["React", "Chart.js", "HTML", "CSS"],
    imageUrl: investmentImg,
  },
  {
    title: "React Meals",
    description:
      "Web app built to practice and learn about react context utilizing firebase as a backend service.",
    tags: ["React", "Firebase"],
    imageUrl: mealsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Jest",
  "React Query",
  "Redux",
  "Framer Motion",
  "express",
  "SQL",
  "Azure Dev Ops",
] as const;
