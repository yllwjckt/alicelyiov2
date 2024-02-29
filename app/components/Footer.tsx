"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 w-full mt-16 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1
        }}
        className="flex gap-8 justify-center text-center mx-auto"
      >
        <Link href="https://www.linkedin.com/in/alicelly" target="_blank">
          <img
            src="/li_icon.png"
            alt="LinkedIn"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://github.com/yllwjckt/" target="_blank" className="inline-block">
          <img
            src="/gh_icon.png"
            alt="GitHub"
            width={32}
            height={32}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1
        }}
        className="flex flex-col gap-4 justify-center text-center mx-auto"
      >
        <p className="text-xl">Made by Alice &copy; 2024</p>
        <p className="text-xl">Made with
          <Link href="https://nextjs.org/" target="_blank">
            <img
              src="/next.png"
              alt="Next.js"
              width={70}
              height={20}
              className="ml-2 inline-block"
            />
          </Link>
        </p>
      </motion.div>
    </footer>
  )
}