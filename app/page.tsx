"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.5, ease: "easeInOut"
        }}
        className="flex min-h-screen flex-col md:pt-32 md:p-16 m-4 relative"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12 md:gap-4">
            <div className="md:col-span-10 col-span-12">
              <h1 className="md:text-7xl text-4xl tracking-wide font-bold md:mb-12 mb-6">Hi, I'm <span>Alice</span></h1>
              <h2 className="md:text-4xl text-xl tracking-wide font-bold md:mb-32 mb-16">I'm a <span>Front End Developer</span> specializing in crafting user experiences, elevating websites to a whole new level of engagement and usability.</h2>
              <p className="md:text-2xl text-md">I have been in web development for over 8 years with experience in JavaScript frameworks, content management systems, and e-commerce platforms. If you're interested in collaborating, feel free to <Link href="/contact">contact me</Link>!</p>
            </div>
          </div>
        </div>
        <motion.div
          className="circle-fill absolute lg:block hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.25 }}
        />
        <motion.div
          className="circle-outline absolute lg:block hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1.15 }}
          transition={{ delay: 0.5, duration: 1.25 }}
        />
        <motion.div
          className="next-page lg:block hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Link href="/work" className="browse">
            <motion.span>Browse My Work</motion.span>
            <motion.span
              className="line-down"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            />
          </Link>
        </motion.div>
        <div className="next-page lg:hidden block">
          <Link href="/work" className="browse">
            <span>Browse My Work</span>
            <span className="line-down"></span>
          </Link>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
