"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      className="relative h-screen w-full bg-[#eeebe3] flex flex-col items-center justify-center md:items-start md:justify-start overflow-hidden z-10 pt-32 md:pt-28 -mt-24 md:mt-0"
    >
      {/* Top texts removed per request */}

      {/* MAIN IMAGE - desktop: larger and top-aligned, mobile: top */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center md:justify-start overflow-hidden mt-24 md:-mt-32 md:ml-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/images/opp.png"
          alt="Our Expertise"
          fill
          priority
          className="object-contain object-top drop-shadow-lg"
          style={{ transform: "scale(0.82) md:scale(1.62)" }}
        />
      </motion.div>

      {/* City image: mobile bottom right, scaled up; desktop unchanged */}
      <div
        className="absolute z-10 w-[320px] h-[320px] right-0 bottom-0 md:w-[260px] md:h-auto md:left-auto md:right-[50%] md:top-auto md:bottom-[44%]"
      >
        <Image
          src="/images/city.png"
          alt="CityScape"
          width={500}
          height={500}
          priority
          className="drop-shadow-lg object-contain object-center scale-[2.6] md:scale-[5.6]"
        />
      </div>

      {/* Floating little V (larger one) - mobile smaller, lower right */}
      <motion.div
        className="absolute z-20 w-[220px] bottom-16 right-6 md:w-[190px] md:bottom-8 md:right-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-6, -8, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/bigv.png"
            alt="littlev"
            width={500}
            height={500}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Floating big V (smaller one) - mobile smaller, lower right */}
      <motion.div
        className="absolute z-20 w-[180px] bottom-16 -right-4 md:w-[170px] md:bottom-4 md:right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [6, 8, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/littlev.png"
            alt="bigv"
            width={500}
            height={500}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
