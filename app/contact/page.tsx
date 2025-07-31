"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Content Hub", href: "/content-hub" },
  { name: "Connect With Us", href: "/contact" },
]

const images = [
  "https://ampd-asset.s3.us-east-2.amazonaws.com/strawberriesgrowing.mp4",
]

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { scrollY } = useScroll()
  const imageScale = useTransform(scrollY, [0, 200], [1, 1.2])
  const imagePosition = useTransform(scrollY, [0, 200], ["80%", "100%"])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Mobile hamburger */}
      <motion.div className="lg:hidden absolute top-6 left-6 z-50" style={{ opacity }}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 focus:outline-none w-8 h-8 relative"
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
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
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
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop nav */}
      <motion.nav className="hidden lg:block w-1/4 p-8 z-10" style={{ opacity }}>
        <ul className="space-y-6">
          {navigation.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="group block text-gray-600 hover:text-black text-2xl transition-colors relative"
                style={{ fontFamily: "TeXGyreTermes, serif" }}
              >
                {item.name}
                <span className="absolute left-1 -bottom-1 w-0 h-[2px] bg-[rgba(134,24,4,1)] group-hover:w-full transition-all duration-500"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Background video */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute top-0 right-0 w-full h-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: imagePosition,
            height: "29%",
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

      {/* Animated heading */}
      <motion.h1
        className="absolute top-8 left-1/4 text-[6vw] lg:text-[70px] leading-none text-white mix-blend-difference italic"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ opacity }}
      >
        CONNECT
        <br />
        WITH US
      </motion.h1>

      {/* Contact content section */}
      <div className="w-full items-start min-h-screen px-5 pt-[20.5rem]">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl mb-6 font-bold text-gray-800">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32"></textarea>
            <button
              type="submit"
              className="w-full bg-[rgba(134,24,4,1)] text-white py-3 rounded-lg hover:bg-[rgba(134,24,4,0.9)] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[rgba(134,24,4,0.8)] hover:bg-[rgba(134,24,4,1)] text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
