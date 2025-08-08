"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Content Hub", href: "/content-hub" },
  { name: "Connect With Us", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* === TOP NAVBAR === */}
      <div className="fixed top-0 left-0 w-full h-16 bg-[#7b0000] text-white z-50 flex items-center justify-between px-6">
        {/* === LOGO === */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/suckerlogo.png"
            alt="Logo"
            width={30}
            height={40}
            className="object-contain"
            style={{ transform: "rotate(35deg)" }}
          />
        </div>

        {/* === HAMBURGER ICON === */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative w-8 h-8 text-white focus:outline-none z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
              isMenuOpen ? "rotate-45 top-3.5" : "top-2"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
              isMenuOpen ? "opacity-0" : "top-4"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
              isMenuOpen ? "-rotate-45 top-3.5" : "top-6"
            }`}
          ></span>
        </button>
      </div>

      {/* === SLIDE-IN MENU === */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-16 right-0 w-64 h-screen bg-[#7b0000] text-white z-40 shadow-lg flex flex-col items-start px-6 pt-10"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative block text-white text-xl font-bold uppercase my-4 text-left"
                >
                  <span>{item.name}</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 origin-left" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* === OVERLAY BACKGROUND === */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-30"
            onClick={() => setIsMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
