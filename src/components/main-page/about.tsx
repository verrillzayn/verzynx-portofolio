"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Self-motivated and passionate to Full Stack Web Developer seek. Strong
        understanding of programming and full-stack engineering principles.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I really like
        exploring new ideas and solving puzzles that arise during the
        development process. My desire to continue learning that reflects my
        life philosophy &apos;&apos;Never stop learning&apos;&apos;. My core
        stack is{" "}
        <span className="font-medium">
          React, Next.js, Tailwind, and PostgreSQL or MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and reading comics. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
