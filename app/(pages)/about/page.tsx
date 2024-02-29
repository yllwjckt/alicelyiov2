"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5, ease: "easeInOut"
          }}
        >
          <h1 className="md:text-7xl text-4xl tracking-wide font-bold mb-12"><span>About Me</span></h1>
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
            <div className="col-span-12 md:col-span-8 order-2 md:order-1">
              <p className="mb-4">It all began with a Hewlett-Packard desktop computer and a 7-day free trial of AOL. From Geocities and a passion for all things Sailor Moon, I found myself immersed in the world of web design. It was the sight of a neon green scroll bar on another site that sparked my interest in HTML. Fast forward a little over 10 years, and I've dedicated myself to honing my skills and embracing new technologies.</p>
              <p className="mb-4">With more than 8 years of experience spanning branding, marketing, e-commerce, and education, I've had the privilege of collaborating with clients worldwide. Proficient in HTML, CSS, and JavaScript, I also have hands-on experience with cutting-edge frameworks such as React, Vue.js, and Next.js. My passion lies in crafting exceptional user experiences, and I'm committed to continuously expanding my knowledge base with emerging technologies.</p>
              <p className="mb-4">I enjoy spending time with my amazing daughter and playing cozy video games. You'll often find me in the office with earbuds in, playing Stardew Valley or Disney Dreamlight Valley.</p>
            </div>
            <div className="col-span-12 md:col-span-4 order-1 md:order-2">
              <img 
                src="/profile_pic.png"
                alt="Photo of Alice"
                width={400}
                height={400}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}