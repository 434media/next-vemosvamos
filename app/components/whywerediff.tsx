"use client";

import { motion } from "framer-motion";

export default function WhyWeAreDifferentSection() {
  const taglineWords = ["Female-led", "•", "Authentically", "bicultural", "•", "Deeply", "embedded", "network"];

  return (
    <section
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-22 flex flex-col items-center px-6 py-24 text-red-700 overflow-hidden"
      style={{
        marginLeft: "calc(-50vw + 0px)",
        marginRight: "calc(-50vw + 0px)",
        backgroundColor: "#eeebe3",  
        willChange: "opacity, transform",
        transform: "translateZ(0)"
      }}
    >
      <motion.div
        className="w-full max-w-7xl text-left mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <motion.h1 
          className="text-red-700 text-6xl font-extrabold uppercase leading-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WHY WE ARE DIFFERENT
        </motion.h1>

        {/* STAGGERED WORD ANIMATION */}
        <motion.div
          className="text-2xl mt-4 font-semibold uppercase tracking-wide flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {taglineWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* VIDEO + TEXT */}
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
        {/* TEXT LEFT */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-tight">
            Our mission is to create impactful, culturally relevant connections that resonate deeply with Latino audiences across generations.
          </p>
        </motion.div>

        {/* VIDEO RIGHT */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <video
            src="/images/hebvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg w-full h-auto "
          />
        </motion.div>
      </div>
    </section>
  );
}
