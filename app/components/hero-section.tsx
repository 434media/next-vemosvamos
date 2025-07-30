"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Content Hub", href: "/content-hub" },
  { name: "Connect With Us", href: "/contact" },
]



const images = [
  "/images/vvintro.mp4",
]

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { scrollY } = useScroll()
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.5])
  const imagePosition = useTransform(scrollY, [0, 300], ["80%", "100%"])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hamburger menu for mobile */}
      <motion.div className="lg:hidden absolute top-6 left-6 z-50" style={{ opacity }}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-gray-600 focus:outline-none w-8 h-8 relative ${isMenuOpen ? "text-white" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            style={{ left: "6px", top: "50%" }}
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              translateY: isMenuOpen ? 0 : -5,
            }}
          />
          <motion.span
            className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            style={{ left: "6px", top: "50%" }}
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <motion.span
            className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            style={{ left: "6px", top: "50%" }}
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              translateY: isMenuOpen ? 0 : 5,
            }}
          />
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FFC0CB] z-40 lg:hidden flex flex-col items-center justify-center"
          >
            
            <div className="text-center">
  {navigation.map((item) => (
    <motion.div
      key={item.name}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Link
        href={item.href}
        className="block text-white text-2xl my-4"
        onClick={() => setIsMenuOpen(false)} // optional: close menu after click!
      >
        {item.name}
      </Link>
    </motion.div>
  ))}
</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop navigation */}
<motion.nav className="hidden lg:block w-1/4 p-8 z-10" style={{ opacity }}>
  <ul className="space-y-6"> {/* more vertical spacing */}
    {navigation.map((item) => (
      <motion.li
        key={item.name}
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href={item.href}
          className="group block text-gray-600 hover:text-black text-2xl transition-colors relative"
          style={{ fontFamily: "TeXGyreTermes, serif" }} 
        >
          {item.name}
          {/* Animated underline */}
          <span className="absolute left-1 -bottom-1/4 w-0 h-[2px] bg-[rgba(134,24,4,1)] group-hover:w-60 transition-all duration-500"></span>
        </Link>
      </motion.li>
    ))}
  </ul>
</motion.nav>


      {/* Main content with video */}
      <AnimatePresence mode="wait">
  <motion.div
    key={currentImageIndex}
    className="absolute bottom-0 right-0 w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    style={{
      scale: imageScale,
      width: imagePosition,
      height: imagePosition,
    }}
  >
    <video
      key={currentImageIndex}
      src={images[currentImageIndex]}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover rounded-tl-3xl"
    ></video>
  </motion.div>
</AnimatePresence>


      {/* Company name */}
      <motion.div
  className="absolute bottom-4 left-8 text-2xl font-light text-[rgba(134,24,4,1)] z-10 hidden lg:block"
  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ opacity }}
      >
        Creatively Raw. Curiosity Driven
      </motion.div>

      {/* Title overlay */}
      <motion.h1
  className="absolute top-8 left-1/4 text-[12.75vw] lg:text-[150px] leading-none text-[rgba(134,24,4,1)] z-20 italic"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  style={{ opacity }}
>
  VEMOS
</motion.h1>

<motion.h1
  className="absolute top-[calc(8rem+50px)] left-1/4 text-[12.75vw] lg:text-[150px] leading-none text-white mix-blend-difference italic"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  style={{ opacity }}
>
  VAMOS
</motion.h1>

    </div>
  )
}
