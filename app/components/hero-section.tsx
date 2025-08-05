"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhoWeReach from "./three-pillars";

export default function NewLandingPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* HERO SECTION FIXED IN VIEW */}
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
          pt-26   
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
          className="
            relative 
            w-full 
            h-full 
            flex 
            items-center 
            justify-center 
            overflow-hidden
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/vemosvamos.png"
            alt="Vemos Vamos"
            fill
            priority
            className="object-contain object-center drop-shadow-lg"
            style={{ 
              transform: "scale(0.85)", 
              top: "20px"               
            }}
          />

          {/* SECONDARY IMAGE */}
          <motion.div
            className="
              absolute 
              right-[400px] 
              top-[65%] 
              -translate-y-1/2 
              w-[300px] 
              md:w-[350px] 
              lg:w-[400px] 
              z-20
            "
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/bicultural.png"
              alt="Bicultural Visual"
              width={400}
              height={400}
              className="rounded-lg object-contain drop-shadow-xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* SPACER to allow scrolling */}
      <div className="h-screen"></div>

      {/* OVERLAPPING SECTION */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl">
      <div className="relative w-full">
          <WhoWeReach />
        </div>
      </section>
    </div>
  );
}
