"use client";

import { motion } from "framer-motion";

export default function WhyWeAreDifferentSection() {
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
      </motion.div>

      {/* VIDEO + TEXT + TAGLINE LIST */}
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

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* TEXT BLOCK RIGHT */}
          <motion.div
            className="text-right text-2xl font-semibold uppercase tracking-wide"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>Female-led</p>
            <p>Authentically bicultural</p>
            <p>Deeply embedded network</p>
          </motion.div>

          {/* VIDEO RIGHT */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <video
              src="/images/hebvideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
