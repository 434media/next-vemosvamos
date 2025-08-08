"use client";

import { motion } from "framer-motion";
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
    <section className="w-full bg-[#ca0013] py-10 px-2 md:px-6 relative overflow-hidden">
      {/* SECTION HEADER */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-white text-4xl md:text-7xl font-extrabold uppercase font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What We Offer
        </motion.h2>
      </div>

      {/* === FLOWER IMAGE IN BETWEEN COLUMNS === */}
<motion.div
  className="hidden md:block absolute z-0 pointer-events-none"
  style={{
    top: "35%",
    left: "36%",
    transform: "translate(-60%, -50%) rotate(-12deg)", // Rotate and center
  }}
  initial={{ opacity: 0, rotate: -20, scale: 0.95 }}
  whileInView={{ opacity: 1, rotate: 20, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <Image
    src="/images/flower.png"
    alt="Flower"
    width={550}  // You can adjust width/height
    height={300}
    className="object-contain opacity-80"
  />
</motion.div>


      {/* === TWO COLUMN LAYOUT === */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-22 w-full z-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-16 text-left">
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
                <h3 className="text-3xl md:text-[45px] font-extrabold uppercase font-inter">
                  {item.title}
                </h3>

                <motion.div
                  className="h-[3px] bg-white mt-2 w-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "91%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay + 0.1,
                    ease: "easeOut",
                  }}
                />

                <p className="text-base md:text-lg mt-4 font-bold uppercase max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-16 text-right">
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
                <h3 className="text-3xl md:text-[45px] font-extrabold uppercase font-inter">
                  {item.title}
                </h3>

                <motion.div
                  className="h-[3px] bg-white mt-2 ml-auto"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay + 0.1,
                    ease: "easeOut",
                  }}
                />

                <p className="text-base md:text-lg mt-4 font-bold uppercase max-w-md ml-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
