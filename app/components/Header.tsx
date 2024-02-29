"use client";

import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ToggleButton } from "./navigation/ToggleButton";
import { NavItem } from "./navigation/NavItem";
import { useOnClickOutside } from "./navigation/useOnClickOutside";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsMenuOpen(false));

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen && window.innerWidth < 1024) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  return (
    <header className="relative flex p-4 md:p-6 items-center justify-between bg-brandaccent">
      <div className="logo flex items-center">
        <Link href="/" className="md:text-7xl text-4xl tracking-wide font-bold">
          <h1>alice</h1>
        </Link>
      </div>
      <div ref={ref}>
        <ToggleButton
          isOpen={isMenuOpen}
          onClick={handleToggleClick}
          strokeWidth="3"
        />
        <AnimatePresence initial={false}>
          {isMenuOpen &&
            <motion.nav
              key="menu"
              initial="closed"
              animate="opened"
              exit="closed"
              variants={{
                opened: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 1,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  }
                },
                closed: {
                  clipPath: "inset(0% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.5
                  }
                }
              }}
              className="mobile-menu"
            >
              <ul>
                {itemIds.map(i => (
                  <motion.li
                    variants={{
                      opened: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavItem onClick={handleToggleClick} i={i} key={i} />
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          }
        </AnimatePresence>
      </div>
    </header>
  )
}

const itemIds = [0, 1, 2];