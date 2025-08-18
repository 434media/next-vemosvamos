"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const images = [
  "https://ampd-asset.s3.us-east-2.amazonaws.com/VVSpanishQuote.mp4",
]

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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
    <section 
      ref={sectionRef} 
      className="relative px-0 bg-[#eeebe3] overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-0 w-full h-[750px]">
        
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 pl-72 px-10 relative z-20 flex flex-col justify-start items-start text-left h-full pt-40"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-red-700 text-6xl font-extrabold uppercase leading-[1] whitespace-nowrap">
            WHAT IS VEMOS VAMOS?
          </h1>

          <p className="text-red-600 text-5xl font-extrabold uppercase max-w-2xl leading-[1.15] mt-4 whitespace-normal">
            We create for the audience that lives in two worlds<br />
            and belongs to both.
          </p>

          {/* WHO WE REACH heading */}
          <motion.h1 
  className="absolute bottom-8 left-[75%] -translate-x-1/2 text-red-700 text-6xl font-extrabold uppercase leading-[1] text-center whitespace-nowrap"
  initial={{ opacity: 0, y: 20 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  WHO WE REACH
</motion.h1>

        </motion.div>

        {/* Video Section */}
        <div className="ml-auto relative w-[80%] max-w-[500px] h-full min-h-[400px] overflow-hidden bg-[#eeebe3] flex flex-col justify-end items-center">
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <video
              key={currentImageIndex}
              src={images[currentImageIndex]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover -mt-[50px]" 
            ></video>

            {/* Side fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#eeebe3]/100 via-[#eeebe3]/60 via-40% to-transparent pointer-events-none"></div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#eeebe3] to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
