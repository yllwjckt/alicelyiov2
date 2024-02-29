"use client";

import Image from "next/image";

export default function Work () {
  return (
    <>
      <h1 className="md:text-7xl text-4xl tracking-wide font-bold mb-12"><span>My Work</span></h1>
      <div className="md:grid md:grid-cols-12 gap-8">
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
    </>
  )
}