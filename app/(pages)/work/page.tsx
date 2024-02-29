"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Work () {
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
          <h1 className="md:text-7xl text-4xl tracking-wide font-bold mb-12"><span>My Work</span></h1>
          <div className="md:grid md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-8">
              <Image
                className="mx-auto mb-4 w-3/4"
                src="/al_screen.png"
                alt="alicely.io version 2"
                width={400}
                height={400}
              />
              <p className="text-center">My new web portfolio is built with <Link href="https://nextjs.org" target="_blank">Next.js</Link> and uses <Link href="https://www.framer.com/motion/" target="_blank">Framer Motion</Link> for all of the animations. I will be making visual updates in the future.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-8">
              <Image
                className="mx-auto mb-4 w-3/4"
                src="/wsu_screen.png"
                alt="Washington State University"
                width={400}
                height={400}
              />
              <p className="text-center">WSU's Online MBA website was revamped for usability and performance. Built with Svelte and styled with SASS and Tailwind.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-8">
              <Image
                className="mx-auto mb-4 w-3/4"
                src="/nu_screen.png"
                alt="Norwich University"
                width={400}
                height={400}
              />
              <p className="text-center">Norwich University's Online Public Health Degrees website was revamped for usability and performance. Built with Svelte and styled with SASS and Tailwind.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-8">
              <Image
                className="mx-auto mb-4 w-3/4"
                src="/yb_screen.png"
                alt="Yamaha Boats"
                width={400}
                height={400}
              />
              <p className="text-center">Yamaha Boat's Build & Price tool gives real-time pricing and special offers tailored to their customers. Built with JavaScript and styled with SASS.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-8">
              <Image
                className="mx-auto mb-4 w-3/4"
                src="/um_screen.png"
                alt="Uttermost"
                width={400}
                height={400}
              />
              <p className="text-center">Uttermost's website was revamped with a robust filtering feature and navigation. Built with JavaScript and styled with SASS.</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}