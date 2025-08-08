"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Listo() {
  return (
    <section className="relative w-full h-[90vh] bg-[#eee3d2] px-4 md:px-12 overflow-hidden flex items-center justify-center">
      {/* === BACKGROUND IMAGE === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/buildingvv.png"
          alt="Listo Building Background"
          fill
          priority
          className="object-contain"
          style={{ transform: "translateY(30px) scale(1.25)" }}
        />
      </div>

      {/* === FOREGROUND CONTENT === */}
      <div className="relative z-30 flex flex-col items-center justify-center gap-10">
        {/* Logo Image */}
        <div style={{ transform: "translateY(-230px) translateX(-30px) scale(1.25)" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <Image
              src="/images/listo.png"
              alt="listo"
              width={300}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-8 py-4 text-lg rounded-full shadow-md"
        >
          Join Our Newsletter
        </motion.button>
      </div>

      {/* === DRIVING CAR IMAGE === */}
      <motion.div
        className="absolute z-10"
        style={{ bottom: "-390px", left: "-50px" }}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 50, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
          delay: 0.5,
        }}
      >
        <Image
          src="/images/car.png"
          alt="Driving Car"
          width={1700}
          height={200}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
