"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-80 text-white z-50 flex items-center justify-between px-6 shadow-md">
        {/* Logo */}
        <div className="text-xl font-bold italic">LOGO</div>

        {/* Hamburger / Close Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Animated Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-16 right-0 w-64 h-screen bg-black bg-opacity-95 text-white z-40 shadow-lg flex flex-col items-center justify-center"
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
                  className="block text-white text-2xl my-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay background */}
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
