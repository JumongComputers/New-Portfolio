import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import riseImg from "/public/rise.png";
import ecommImg from "@/public/ecomm.png";
import devhireImg from "@/public/devhire.png";
import { url } from "inspector";



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

export const experiencesData = [
  {
    title: "Completed The leaning of Html, Css and JavaScript",
    location: "Rambey",
    description:
      "Within the space of a yar i worked on severa persona project which helped to perfect my skills on the rudiment of web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Completed the Learning of React, Firebase and State managements",
    location: "Self-Taught",
    description:
      "I built on my previous knowledge by learning React js, Redux, RTK, Context API, React Query, Typescript",
      icon: React.createElement(FaReact),
    
    date: "2023- 2024",
  },
  {
    title: "Internship and Skil improvement",
    location: "Remote",
    description:
      "Worked on Production project meant for event ticketing, learnt Next js, Tailwind CSS, chakra MongoDB, Express",
      icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Hotel Management",
    description:
      "I worked as a project manager and frotend developer on this project from Nov 2023 till now. Customers can book for hotel and the hotel staffs can also use the admin page.",
    tags: [ "Next.js", "MongoDB", "Tailwind", "Mongo DB", "Framer Motion", "Express" ],
    imageUrl: riseImg,
    url: "https://rise-hotel-management.vercel.app/",
  },
  {
    title: "Product page of an Ecommerce",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Javascript", "Css", "Html"],
    imageUrl: ecommImg,
    url: "https://ecommerce-project-jumong.vercel.app/",
  },
  {
    title: "Dev Hire",
    description:
      "A public web app for built to allow propective client to hire software engineer and other tech professionals. It has features like filtering, sorting",
    tags: ["React", "Java script", "Css"],
    imageUrl: devhireImg,
    url: "https://devhire-jumong.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "Chakra UI",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "sequlize",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
