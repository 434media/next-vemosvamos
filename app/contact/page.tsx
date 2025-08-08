"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Partnerships from "../components/oppfor";
import Listo from "../components/listo";

export default function ContactPage() {

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
            src="/images/opp.png"
            alt="Our Expertise"
            fill
            priority
            className="object-contain object-center drop-shadow-lg"
            style={{
            transform: "scale(.85) translateX(210px)",
            top: "-170px",
            }}
        />
        </motion.div>



        {/* city  */}
<div
  className="absolute z-20"
  style={{
    right: "52%",      // Adjust horizontal position
    bottom: "46%",     // Adjust vertical position
    width: "250px",    // Adjust size
    height: "auto",
  }}
>
  <Image
    src="/images/city.png"
    alt="CityScape"
    width={500}
    height={500}
    className="object-contain drop-shadow-lg"
    style={{
      transform: "scale(6.4)", // Scale adjustment
    }}
  />
</div>

{/* === FLOATING LITTLEV === */}
<motion.div
  className="absolute z-20"
  style={{
    right: "20%",
    bottom: "15%",
    width: "250px",
    height: "auto",
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [-6, -8, -6],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/images/bigv.png"
      alt="littlev"
      width={500}
      height={500}
      className="object-contain drop-shadow-lg"
      style={{
        transform: "scale(1.5)",
      }}
    />
  </motion.div>
</motion.div>

{/* === FLOATING BIGV === */}
<motion.div
  className="absolute z-20"
  style={{
    right: "11%",
    bottom: "12%",
    width: "250px",
    height: "auto",
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
>
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [6, 8, 6],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/images/littlev.png"
      alt="bigv"
      width={500}
      height={500}
      className="object-contain drop-shadow-lg"
      style={{
        transform: "scale(1)",
      }}
    />
  </motion.div>
</motion.div>



      </section>


      {/* SPACER - pushes next section down */}
      <div className="h-screen"></div>

      {/* OVERLAPPING SECTION */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <Partnerships />
          <Listo  />
        </div>
      </section>
    </div>
  );
}