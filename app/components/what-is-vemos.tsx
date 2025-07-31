"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react" // make sure useRef is imported

const images = [
  "https://ampd-asset.s3.us-east-2.amazonaws.com/VVSpanishQuote.mp4",
]

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

    // Define common variants for the images
    const imageVariants = {
      hidden: { opacity: 0, scale: 0.8, rotate: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 45, // example
        transition: {
          duration: 1.2,
          ease: "easeOut",
          delay: 0.4 // Adjust delay for staggered animation
        }
      },
      hover: {
        scale: 1.2,
        rotate: 60,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10
        }
      },
      float: { // For continuous floating/subtle movement
        y: ["0%", "5%", "0%"],
        x: ["0%", "2%", "0%"],
        rotate: [0, 5, 0],
        transition: {
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }
      }
    };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Optional: If you want it to fade out when scrolling away
          // setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Adjust as needed
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    // The section needs to be `relative` for the absolute children to position correctly
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto relative z-10"> {/* Add relative and z-10 to container */}
        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-800 mb-12 text-center italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
           What is VemosVamos?
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >
            <div className="w-[600px] h-[600px] mx-auto">
              <video
                key={currentImageIndex}
                src={images[currentImageIndex]}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain rounded-tl-3xl"
              ></video>
            </div>
          </motion.div>
          <div className="md:w-1/2 space-y-16">
            <motion.p
              className="text-gray-700 text-lg leading-relaxed border-l-4 border-[rgba(192,43,39,1)] pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.2 }}
            >
Vemos Vamos is a bilingual thought leadership platform spotlighting entrepreneurial voices from Latin and bicultural communities. We help emerging founders and creators make their passions profitable by connecting stories of ambition with actionable strategies and authentic cultural insight.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ amount: 0.2 }}
            >
              <div className="bg-[rgba(192,43,39,1)] p-6 rounded-2xl shadow-lg flex-1 min-w-[200px] text-white">
                <h3 className="text-xl font-semibold mb-2"> Personal Passion</h3>
                <p className="text-sm">Bridging cultures and unlocking opportunities through authentic, dual-language content and mentorship.</p>
              </div>
              <div className="bg-[rgba(192,43,39,1)] p-6 rounded-2xl shadow-lg flex-1 min-w-[200px] text-white">
                <h3 className="text-xl font-semibold mb-2">Practical Ambition</h3>
                <p className="text-sm">Forging powerful networks and fostering growth within vibrant online spaces.</p>
              </div>
              <div className="bg-[rgba(192,43,39,1)] p-6 rounded-2xl shadow-lg flex-1 min-w-[200px] text-white">
                <h3 className="text-xl font-semibold mb-2">From Passion to Impact</h3>
                <p className="text-sm">Guiding creators and entrepreneurs to transform their deepest passions into resonant, real-world success.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background images container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
      <motion.img
  src="/images/VV_Sucker_logo.png"
  alt="Vemos Vamos Sucker Logo"
  width={150}
  height={150}
  className="absolute top-16 left-[calc(100%-400px)] w-24 h-24 rounded-lg object-contain transition-all duration-1200 ease-out"
  variants={imageVariants}
  initial="hidden"
  animate={isVisible ? ["visible", "float"] : "hidden"}
  whileHover="hover"
  priority
  draggable={false}
/>

<motion.img
  src="/images/vvheart.png"
  alt="Vemos Vamos Sucker Logo"
  width={150}
  height={150}
  className="absolute top-[300px] left-15 right-[calc(100%-200px)] w-24 h-24 rounded-lg object-contain transition-all duration-1200 ease-out"
  variants={imageVariants}
  initial="hidden"
  animate={isVisible ? ["visible", "float"] : "hidden"}
  whileHover="hover"
  priority
  draggable={false}
/>
        <motion.img // Changed to motion.img
          src="/images/deco1.png"
          alt="Decorative element"
          width={100}
          height={100}
          className="absolute bottom-10 right-10 w-20 h-20 rounded-lg object-cover"
          variants={imageVariants} // Apply variants
          initial="hidden" // Initial state
          animate={isVisible ? ["visible", "float"] : "hidden"} // Animate when visible, and then continuously float
          whileHover="hover" // Animate on hover
          draggable={false}
          style={{ transformOrigin: "bottom right" }} // Set origin for rotation
        />
      </div>

    {/* under videos */}
    
    </section>
  )
}