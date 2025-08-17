"use client";

import { motion } from "motion/react";
import Image from "next/image";

const offerings = [
  {
    title: "Branded Content Production",
    description:
      "High-impact, short-form video and photo tailored to culture-driven campaigns.",
    align: "left",
    delay: 0,
  },
  {
    title: "Community Activations",
    description:
      "Weekly monologues + carousels on marketing + entrepreneurship insights.",
    align: "left",
    delay: 0.2,
  },
  {
    title: "Bilingual Brand Development",
    description:
      "Visual identity, messaging, and content strategy.",
    align: "right",
    delay: 0.4,
  },
  {
    title: "Cultural Insights & Trends",
    description:
      "Real-time Gen Z Latino insights to shape brand decisions and creative direction.",
    align: "right",
    delay: 0.6,
  },
];

export default function Partnerships() {
  return (
    <section className="w-full bg-[#ca0013] py-14 md:py-24 px-4 md:px-10 relative overflow-hidden">
      {/* SECTION HEADER */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-white text-4xl sm:text-5xl md:text-7xl font-black uppercase font-inter tracking-tight md:tracking-wider mb-2"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          What We Offer
        </motion.h2>
        <motion.div
          className="mx-auto h-[4px] bg-white w-16 md:w-32 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* === FLOWER IMAGE === */}
      {/* Desktop: large, centered; Mobile: bottom left, visible */}
      <motion.div
        className="hidden md:block absolute z-0 pointer-events-none left-96 bottom-20 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, rotate: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, rotate: 20, scale: 1.18 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/images/flower.png"
          alt="Flower"
          width={800}
          height={400}
          className="object-contain opacity-80"
        />
      </motion.div>

      <motion.div
        className="md:hidden absolute left-0 bottom-0 z-0 pointer-events-none"
        style={{ transform: "rotate(-12deg)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/images/flower.png"
          alt="Flower"
          width={180}
          height={90}
          className="object-contain opacity-80"
        />
      </motion.div>


      {/* === TWO COLUMN LAYOUT === */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-x-16 md:gap-y-20 w-full z-10">
        {/* LEFT COLUMN */}
  <div className="flex flex-col gap-12 md:gap-20 text-left">
          {offerings
            .filter((item) => item.align === "left")
            .map((item) => (
              <motion.div
                key={item.title}
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase font-inter tracking-tight md:tracking-wide mb-2">
                  {item.title}
                </h3>

                <motion.div
                  className="h-[3px] bg-white mt-2 w-full rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "91%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay + 0.1,
                    ease: "easeOut",
                  }}
                />

                <p className="text-base sm:text-lg md:text-xl mt-4 font-medium uppercase max-w-md leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>

        {/* RIGHT COLUMN */}
  <div className="flex flex-col gap-12 md:gap-20 text-right">
          {offerings
            .filter((item) => item.align === "right")
            .map((item) => (
              <motion.div
                key={item.title}
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase font-inter tracking-tight md:tracking-wide mb-2">
                  {item.title}
                </h3>

                <motion.div
                  className="h-[3px] bg-white mt-2 ml-auto w-full rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay + 0.1,
                    ease: "easeOut",
                  }}
                />

                <p className="text-base sm:text-lg md:text-xl mt-4 font-medium uppercase max-w-md ml-auto leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
