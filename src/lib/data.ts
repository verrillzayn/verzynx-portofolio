import { GraduationCap, Atom, Play, Briefcase, AppWindow } from "lucide-react";
import vriteImg from "@public/vrite.png";
import velloImg from "@public/vello.png";
import inquiveImg from "@public/inquive.png";
import landingPage from "@public/landing-page-porto.png";
import apsmksi from "@public/apsmksi.png";
import valance from "@public/valance.png";
import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTrpc,
  SiZod,
  SiShadcnui,
  SiBun,
  SiDocker,
  SiDrizzle
} from "react-icons/si";
import { FiFramer } from "react-icons/fi";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type ExperiencesData = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
}[];

export const experiencesData: ExperiencesData = [
  {
    title: "Started Programming",
    location: "",
    description: "",
    icon: React.createElement(Play),
    date: "2021",
  },
  {
    title: "IDCamp | Dicoding Scholarship",
    location: "Certified",
    description:
      "Every year, for 3 months I studied with the IDCamp online training module developed by Dicoding, which is a Google Authorized Training Partner in Indonesia.",
    icon: React.createElement(GraduationCap),
    date: "2022-2023",
  },
  {
    title: "DevHandal | Codepolitan | Alibaba Cloud",
    location: "Certified",
    description:
      "The DeveloperHandal Program is a 1 year learning coding scholarship program that equipped me with Full Stack JavaScript skills and international developer certification from Alibaba Cloud.",
    icon: React.createElement(Atom),
    date: "2023",
  },
  {
    title: "Full Stack Developer (International Internship)",
    location: "Betr Beta (Singapore)",
    description:
      "Contributed to full stack development for a Singapore-based startup, including user authentication,dashboard features, and backend API integration. Worked collaboratively in an agile environment and cross-functional team.",
    icon: React.createElement(Briefcase),
    date: "May 2024",
  },
  {
    title: "Full Stack Developer (Project-Based)",
    location: "APSMKSI (UIN SGD Bandung)",
    description:
      "Built, deployed, and Maintaining the official website for a national academic association, Association of Islamic Financial Management Study Programs (APSMKSI), comprising 14 universities across Indonesia. Developed and deployed via Virtual Private Server (VPS).",
    icon: React.createElement(AppWindow),
    date: "Nov 2024",
  },
  {
    title: "Junior Front-End Developer & Automation Engineer",
    location: "Hedra.id (Jakarta)",
    description:
      "Responsible for developing responsive user interfaces using React and Next.js for a growing tech media startup. Also designed and implemented workflow automation systems using Zapier and Make.com.",
    icon: React.createElement(Briefcase),
    date: "May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Valance",
    url: "https://mini-erp-v2.verzynx.fun/",
    description:
      "Valance is a lean ERP system. Manage your finances, stocks, and operations without the complexity of traditional software.",
    tags: [
      "ERP",
      "Next.js",
      "PostgreSQL",
      "Shadcn/ui",
      "Motion",
      "Drizzle",
      "Github Actions",
      "VPS",
    ],
    imageUrl: valance,
  },
  {
    title: "APSMKSI",
    url: "https://demo-apsmksi.verzynx.me",
    description:
      "APSMKSI is an official website for a national academic association. Developed using modern web technologies and deployed it via VPS.",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "Drizzle",
      "Docker",
      "Zod",
    ],
    imageUrl: apsmksi,
  },
  {
    title: "Inquive Ai",
    url: "https://inquive.vercel.app",
    description:
      "Inquive is a fullstack app that allows user chat with their PDF's. Upload a documents, compose prompts, and let our AI orchestrate a unique dialogue.",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "Prisma",
      "OpenAi",
      "TRPC",
    ],
    imageUrl: inquiveImg,
  },
  {
    title: "Vrite",
    url: "https://vrite.vercel.app/",
    description:
      "The connected workspace, now get Better and Faster. Vrite is note maker app where you can create note realtime and publish it.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Convex",
      "Zustand",
      "RealtimeApp",
    ],
    imageUrl: vriteImg,
  },
  {
    title: "Company Landing Page",
    url: "https://porto-landing-page.vercel.app/",
    description:
      "A Beautiful Saas Landing Page with stunning animation and motion",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Saas",
      "Landing Page",
    ],
    imageUrl: landingPage,
  },
  {
    title: "Vello",
    url: "https://github.com/verrillzayn/vello-next-app",
    description:
      "Vello is an marketplace for digital assets. Build with payload, Nextjs 14 custom server with express and TRPC",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Payload",
      "express",
      "Zod",
      "TRPC",
    ],
    imageUrl: velloImg,
  },
] as const;

export const skillsData = [
  {
    label: "HTML",
    icon: FaHtml5,
  },
  {
    label: "CSS",
    icon: FaCss3Alt,
  },
  {
    label: "JavaScript",
    icon: RiJavascriptFill,
  },
  {
    label: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    label: "React",
    icon: FaReact,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "Node.js",
    icon: FaNodeJs,
  },
  {
    label: "Git",
    icon: FaGitAlt,
  },
  {
    label: "Github",
    icon: FaGithub,
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "Shadcn UI",
    icon: SiShadcnui ,
  },
  {
    label: "Prisma",
    icon: SiPrisma,
  },
  {
    label: "Drizzle",
    icon: SiDrizzle,
  },
  {
    label: "Zod",
    icon: SiZod,
  },
  {
    label: "Trpc",
    icon: SiTrpc,
  },
  {
    label: "MongoDB",
    icon: SiMongodb,
  },
  {
    label: "Mongoose",
    icon: SiMongoose,
  },
  {
    label: "Express",
    icon: SiExpress,
  },
  {
    label: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
  {
    label: "Framer Motion",
    icon: FiFramer ,
  },
  {
    label: "Bun",
    icon: SiBun ,
  },
  {
    label: "Docker",
    icon: SiDocker ,
  },
] as const;
