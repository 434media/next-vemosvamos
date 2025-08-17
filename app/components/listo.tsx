"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Listo() {
  return (
  <section className="relative w-full h-[90vh] md:h-screen bg-[#eee3d2] pt-2 pb-2 md:pt-24 md:pb-0 overflow-hidden flex items-center justify-center aspect-[4/5] md:aspect-auto">
      {/* === BACKGROUND IMAGE === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/buildingvv.png"
          alt="Listo Building Background"
          fill
          priority
          className="object-cover object-left md:object-left"
          style={{ transform: "translateY(30px) scale(1.25)" }}
        />
      </div>

      {/* === FOREGROUND CONTENT === */}
  <div className="relative z-10 w-full h-full">
    {/* Car image for desktop - left side, own parent */}
    <div className="hidden md:block absolute left-0 bottom-0 z-20 w-[70vw] h-auto">
      <Image src="/images/car.png" alt="Car" width={1800} height={600} className="w-full h-auto" />
    </div>
    {/* Car image for mobile - maximized for 4:5 aspect, own parent */}
    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-[100vw] h-auto md:hidden">
      <Image src="/images/car.png" alt="Car" width={900} height={400} className="w-full h-auto" />
    </div>
    {/* Logo and button grouped, centered in section */}
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 relative z-30 md:-mt-16 -mt-24">
      {/* Logo Image - larger and centered at top */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
        className="w-full flex justify-center mt-4"
      >
        <Image
          src="/images/listo.png"
          alt="listo"
          width={700}
          height={500}
          className="object-contain w-[90vw] h-auto max-w-[700px] md:w-[700px] md:h-auto mx-auto"
        />
      </motion.div>
      {/* Button - centered in section */}
      <div className="w-full flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-8 py-4 text-lg rounded-full shadow-md mt-2 mx-auto"
        >
          Join Our Newsletter
        </motion.button>
      </div>
    </div>
  </div>
    </section>
  );
}
