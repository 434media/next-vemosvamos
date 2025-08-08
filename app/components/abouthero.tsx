"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OurTeam from "./ourteam";

export default function AboutHero() {
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
            src="/images/whywerediff.png"
            alt="Why We're Different"
            fill
            priority
            className="object-contain object-center drop-shadow-lg"
            style={{
              transform: "scale(1.09)",
              top: "-50px",
              left: "0px",
            }}
          />
        </motion.div>

        {/* CENTER-RIGHT FADE-IN FROM RIGHT TEXT BLOCK */}
<motion.div
  className="absolute right-[20%] top-[57%] -translate-y-1/2 text-red-600 font-inter text-2xl md:text-5xl font-extrabold leading-relaxed md:leading-[1.4] text-left uppercase"
  initial={{ opacity: 0, x: 50 }} // Start 50px to the right
  animate={{ opacity: 1, x: 0 }}   // Animate to normal position
  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
  style={{ maxWidth: "none" }}
>
  <div>FEMALE-LED</div>
  <div>Authentically bicultural </div>
  <div>Deeply embedded network</div>
</motion.div>


        {/* NEW IMAGE - WRESTLECAT (BOTTOM RIGHT, ADJUSTABLE) */}
        <motion.div
          className="absolute z-20"
          style={{
            right: "5%",
            bottom: "20%",
            width: "250px",
            height: "auto",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <Image
            src="/images/wrestlecat.png"
            alt="Wrestle Cat"
            width={500}
            height={500}
            className="object-contain drop-shadow-lg"
            style={{ transform: "scale(3)" }}
          />
        </motion.div>
      </section>

      {/* SPACER */}
      <div className="h-screen"></div>

      {/* TEAM SECTION */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <OurTeam />
        </div>
      </section>
    </div>
  );
}
