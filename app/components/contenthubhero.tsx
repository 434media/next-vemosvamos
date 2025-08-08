"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import RedIdentityPage from "./ourexp2";

export default function ContentHubHero() {

  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay between lines
      },
    },
  };
  
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        className="
          fixed
          topy-15
          left-0
          h-screen
          w-full
          bg-[#eeebe3]
          flex
          flex-col
          items-center
          justify-center
          overflow-hidden
          z-0
          pt-24
        "
      >
        {/* TOP LEFT TEXT */}
        <motion.div
          className="absolute top-6 left-6 text-red-700 font-inter uppercase text-base md:text-lg tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          A Multicultural Brand Studio
        </motion.div>

        {/* TOP RIGHT TEXT */}
        <motion.div
          className="absolute top-6 right-6 text-red-700 font-inter uppercase text-base md:text-lg tracking-wide text-right"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Powered by 434 Media
        </motion.div>

        {/* MAIN IMAGE */}
        <motion.div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <Image
            src="/images/ourexpertice.png"
            alt="Our Expertise"
            fill
            priority
            className="object-contain object-center drop-shadow-lg"
            style={{
            transform: "scale(.58) translateX(-750px)",
            top: "-190px",
            }}
        />
        </motion.div>

{/* TEXT UNDER IMAGE WITH STAGGERED MOTION */}
<motion.div
  className="absolute text-red-600 font-inter font-extrabold uppercase text-2xl md:text-3xl lg:text-[2.5rem]  tracking-wide text-left"
  style={{
    top: "63%",
    left: "34%",
    transform: "translateX(-59%)",
    lineHeight: "1.5",
  }}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
    Bilingual Storytelling
  </motion.div>
  <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
    Full‑Stack Creative Production
  </motion.div>
  <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
    Brand Integration & Partnership Design
  </motion.div>
</motion.div>


        {/* newpaper  */}
<div
  className="absolute z-20"
  style={{
    right: "36%",      // Adjust horizontal position
    bottom: "45%",     // Adjust vertical position
    width: "250px",    // Adjust size
    height: "auto",
  }}
>
  <Image
    src="/images/newspaper.png"
    alt="Paper Lady"
    width={500}
    height={500}
    className="object-contain drop-shadow-lg"
    style={{
      transform: "scale(6.6)", // Scale adjustment
    }}
  />
</div>

      </section>

      {/* PLANE IMAGE - Animated flight from right */}
        <motion.div
        className="absolute z-30"
        style={{
            bottom: "0%",      // Start from bottom
            right: "-10%",       // Start from right side
            width: "300px",    // Adjust plane size
            height: "auto",
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
            x: -600,          // Move left (negative x)
            y: -1700,          // Move up
            opacity: 1,
        }}
        transition={{
            duration: 3,       // Flight duration
            ease: "easeOut",
        }}
        >
        <Image
            src="/images/plane.png"
            alt="Flying Plane"
            width={900}        // Larger base width
            height={600}
            className="object-contain drop-shadow-lg"
            style={{
            transform: "scale(3.9) rotate(-8deg)", // Bigger + tilted slightly
            }}
        />
        </motion.div>



      {/* SPACER - pushes next section down */}
      <div className="h-screen"></div>

      {/* OVERLAPPING SECTION */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <RedIdentityPage  />
        </div>
      </section>
    </div>
  );
}