"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurTeam() {
  return (
    <section className="relative w-full min-h-screen bg-[#eeebe3]">
      <motion.div
        className="absolute top-53 -right-15 md:top-40 md:right-16 lg:-right-13 lg:-top-70 w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10"
        initial={{ opacity: 0, scale: 0.6, rotate: -15, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3,
          scale: { type: "spring", stiffness: 120, damping: 20 },
        }}
        whileHover={{
          scale: 1.1,
          rotate: 8,
          transition: { duration: 0.4 },
        }}
      >
        <Image src="/images/wrestlecat.png" alt="Wrestle Cat" fill className="object-contain md:object-cover drop-shadow-2xl" />
      </motion.div>

      {/* RED BLOCK (TOP SECTION) - Enhanced with hero text */}
      <div className="w-full bg-[#ca0013] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[5vw] py-12 md:py-16 px-4 md:px-[5vw] relative z-5 min-h-[60vh] md:min-h-[50vh]">
        <motion.div
          className="relative w-full md:w-[40vw] flex justify-center md:justify-start"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            scale: { type: "spring", stiffness: 100, damping: 15 },
          }}
        >
          <h1
            className="text-white font-black text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-center md:text-left drop-shadow-lg"
            style={{ color: "#ffffff" }}
            role="heading"
            aria-level={1}
          >
            OUR
            <br />
            TEAM
          </h1>
        </motion.div>

        <div className="relative max-w-lg md:max-w-[40vw]">
          <motion.div
            className="text-white font-inter font-black text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight tracking-tight uppercase text-center md:text-left relative z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <span className="block md:hidden">
              Cultural relevance,
              <br />
              Audience trust, and
              <br />
              Creative quality.
            </span>
            <span className="hidden md:block">Cultural relevance, Audience trust, and Creative quality.</span>
          </motion.div>
        </div>
      </div>

      {/* CREAM SECTION - Enhanced scroll experience */}
      <div className="w-full bg-[#eeebe3] py-10 md:py-20 px-3 sm:px-4 md:px-8 relative z-10 overflow-hidden min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-10 lg:gap-20 max-w-[100vw] mx-auto">
          {/* TEAM IMAGE - Maximized size and impact */}
          <motion.div
            className="relative w-full max-w-none lg:w-[70vw] -mx-6 sm:mx-0"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.2,
              scale: { type: "spring", stiffness: 100, damping: 15 },
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src="/images/ourteamppl.png"
              alt="Our Team Members"
              width={2300}
              height={600}
              priority
              className="w-[140%] sm:w-full max-w-none h-auto object-contain drop-shadow-2xl -ml-12 md:ml-0"
            />
          </motion.div>

          {/* BRAIN IMAGE - Larger size and enhanced animations */}
          <motion.div
            className="relative w-full max-w-none lg:w-[45vw] -mx-4 sm:mx-0"
            initial={{ opacity: 0, x: 100, rotate: -8, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              delay: 0.5,
              scale: { type: "spring", stiffness: 120, damping: 18 },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.4 },
            }}
          >
            <Image
              src="/images/brain.png"
              alt="Hands and Brain"
              width={1500}
              height={450}
              priority
              className="w-[130%] sm:w-full max-w-none h-auto object-contain drop-shadow-2xl -ml-10 md:ml-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
