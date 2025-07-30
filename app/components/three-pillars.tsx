"use client";
import { motion } from "framer-motion";

export default function AnimatedSections() {
  const sections = [
    {
      title: "Cultural Insight",
      text: "Stories that reflect the real-world experiences of bilingual founders.",
      img: "/images/cultural.jpeg",
    },
    {
      title: "Creative Tools",
      text: "Resources and media that help translate passion into profit.",
      img: "/images/rowdy.jpeg",
    },
    {
      title: "Community-Backed Content",
      text: "Content shaped with and by our network of founders, organizations, and mentors.",
      img: "/images/commbacked.jpeg",
    },
  ];

  return (
    <section
      className="w-full flex justify-center py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/rednwhite.jpg')", // 🔹 Your red-white background
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl px-8">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl bg-white bg-opacity-90 shadow-2xl hover:shadow-3xl overflow-hidden flex flex-col items-center text-center p-10 w-[360px] min-h-[440px] transform transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ 
              y: [0, -6, 0], 
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 } 
            }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={sec.img}
              alt={sec.title}
              className="max-h-[240px] object-contain rounded-lg mb-6"
              animate={{
                y: [0, -4, 0],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }
              }}
              whileHover={{ scale: 1.08, rotate: 1.5 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
            <motion.h2 
              className="text-2xl font-semibold text-[#9e1b1b] mb-3"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3 }}
            >
              {sec.title}
            </motion.h2>
            <p className="text-[#4b1e1e] text-base leading-relaxed max-w-[280px]">
              {sec.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
