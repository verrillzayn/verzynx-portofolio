import { GraduationCap, Atom, Briefcase, Play } from "lucide-react";
import vriteImg from "@public/vrite.png";
import velloImg from "@public/vello.png";
import inquiveImg from "@public/inquive.png";
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
} from "react-icons/si";

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
] as const;

export const projectsData = [
  {
    title: "Inquive Ai",
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
    title: "Vello",
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
    label: "Prisma",
    icon: SiPrisma,
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
] as const;
