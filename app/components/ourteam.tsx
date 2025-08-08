"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="relative w-screen min-h-[120vh] bg-[#eeebe3] overflow-hidden">
      
{/* === RED BLOCK (TOP SECTION) === */}
<div className="w-full bg-[#ca0013] flex justify-center items-center gap-[5vw] py-12 px-[10vw] relative z-20">
  
  {/* LEFT IMAGE */}
  <motion.div
    className="relative"
    style={{ width: "30vw", height: "300px" }}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <Image
      src="/images/ourteamwhite.png"
      alt="Our Team"
      fill
      priority
      className="object-contain drop-shadow-lg"
    />
  </motion.div>

  {/* RIGHT TEXT */}
  <motion.div
    className="text-white font-inter font-extrabold text-2xl md:text-5xl leading-snug uppercase"
    style={{ maxWidth: "40vw" }}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
  >
    Cultural relevance,
    <br />
    Audience trust, and
    <br />
    Creative quality.
  </motion.div>
</div>


{/* === CREAM SECTION === */}
<div className="w-full bg-[#eeebe3] py-12 px-0 relative z-10 overflow-visible">
  <div className="flex w-full justify-between items-start relative">

    {/* === TEAM IMAGE (LEFT) === */}
    <motion.div
  className="relative"
  style={{
    translateX: "100px",
    translateY: "30px",
  }}
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
>
  <motion.div
    className="scale-[1.21]" // ✅ this will now apply scaling
  >
    <Image
      src="/images/ourteamppl.png"
      alt="Our Team Members"
      width={2300}
      height={600}
      priority
      className="w-full h-auto object-contain drop-shadow-lg"
    />
  </motion.div>
</motion.div>



    {/* === BRAIN IMAGE (RIGHT) === */}
    <motion.div
      className="relative"
      style={{
        translateX: "30px", // ✅ move left
        translateY: "134px", // ✅ move down
        width: "1500px",
      }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
    >
      <Image
        src="/images/brain.png"
        alt="Hands and Brain"
        width={1500}
        height={450}
        priority
        className="object-contain drop-shadow-lg"
      />
    </motion.div>

  </div>
</div>



    </section>
  );
}
