"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:pt-32 md:p-16 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-10">
            <h1 className="md:text-7xl tracking-wide font-bold mb-12">Hi, I'm <span>alice</span></h1>
            <h2 className="md:text-4xl tracking-wide font-bold mb-32">I'm a <span>Front End Developer</span> specializing in crafting user experiences, elevating websites to a whole new level of engagement and usability.</h2>
            <p className="md:text-2xl">I have been in web development for over 8 years with experience in JavaScript frameworks, content management systems, and e-commerce platforms. If you're interested in collaborating, feel free to <a>contact me</a>!</p>
          </div>
        </div>
      </div>
      <motion.div
        className="circle-fill absolute"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.25 }}
      />
      <motion.div
        className="circle-outline absolute"
        initial={{ scale: 0 }}
        animate={{ scale: 1.15 }}
        transition={{ delay: 0.5, duration: 1.25 }}
      />
      <motion.div
        className="next-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.span className="browse">Browse My Work</motion.span>
        <motion.span
          className="line-down"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        />
      </motion.div>
    </main>
  );
}
