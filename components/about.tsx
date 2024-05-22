"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      ref={ref}
    >
      <h2 className="text-3xl font-medium text-gray-950 dark:text-white">
        About Me
      </h2>
      <p className="mb-3 mt-8 px-4 dark:text-white/80">
        After graduating with a degree in{" "}
        <span className="font-medium">Electrical and Electronics Engineering and practising as an IT support officer and Maintenance Officer fpr spme years</span>,  
        I decided to go for a change in profession. While setting a goal to become a fullStack developer.{" "}
        <span className="font-medium">These are the core stacks that i am familiar with:</span>{" "}
    
        <span className="font-medium">
          React, Next.js, Node.js, Tailwind CSS, and MongoDB, PostgreSQL, Express.
        </span>
        I am also familiar with TypeScript, Sequelize and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time or contract position</span> as a software
        developer.
      </p>
      <p className="px-4 dark:text-white/80">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Reading, watching movies, and playing Piano.
      </p>
    </motion.section>
  );
}
