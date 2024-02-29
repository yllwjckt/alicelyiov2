"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
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
          <h1 className="md:text-7xl text-4xl tracking-wide font-bold mb-12"><span>Contact Me</span></h1>
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
            <div className="col-span-12 md:col-span-10">
              <p>Do you want to collaborate with or get in touch with me with opportunities? Send me an <Link href="mailto:alicely1986@gmail.com">email</Link> and I'll get back to you as soon as I can.<br />
              I am also available on these platforms: <Link href="https://www.linkedin.com/in/alicelly" target="_blank">LinkedIn</Link>, <Link href="https://github.com/yllwjckt/" target="_blank">Github</Link></p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}