"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images1 = ["/images/KSU1.jpg", "/images/KSU2.jpg", "/images/KSU3.jpg", "/images/KSU4.jpg", "/images/KSU5.jpg", "/images/KSU6.jpg"]
const images2 = ["/images/secrets1.jpg", "/images/secrets2.jpg", "/images/secrets3.jpg", "/images/secrets4.jpg"]
const images3 = ["/images/slowEx1.jpg", "/images/slowEx2.jpg", "/images/slowEx3.jpg", "/images/slowEx4.jpg", "/images/slowEx5.jpg", "/images/slowEx6.jpg", "/images/slowEx7.jpg", "/images/slowEx8.jpg"]
const images4 = ["/images/funk1.jpg", "/images/funk2.jpg", "/images/funk3.jpg", "/images/funk4.jpg", "/images/funk5.jpg"]
const images5 = ["/images/norisk1.jpg", "/images/norisk2.jpg", "/images/norisk3.jpg", "/images/norisk4.jpg", "/images/norisk5.jpg", "/images/norisk6.jpg", "/images/norisk7.jpg", "/images/norisk8.jpg"]


export default function CollectionSection() {
  const [current1, setCurrent1] = useState(0)
  const [current2, setCurrent2] = useState(0)
  const [current3, setCurrent3] = useState(0)
  const [current4, setCurrent4] = useState(0)
  const [showMore, setShowMore] = useState(false)

  const nextImage = (set, images) => set((prev) => (prev + 1) % images.length)
  const prevImage = (set, images) => set((prev) => (prev - 1 + images.length) % images.length)

  const imageBox = (images, current, setCurrent) => (
    <div className="relative w-[400px] h-[500px] rounded-xl overflow-hidden shadow-lg">
      <div className="relative w-[400px] h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
  
      {/* Prev button */}
      <button
        onClick={() => prevImage(setCurrent, images)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[rgba(400,222,239,0.83)] p-2 rounded-full shadow hover:bg-[rgba(400,222,239,1)]"
      >
        ◀
      </button>
  
      {/* Next button */}
      <button
        onClick={() => nextImage(setCurrent, images)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[rgba(241,222,239,0.83)] p-2 rounded-full shadow hover:bg-[rgba(241,222,239,1)]"
      >
        ▶
      </button>
    </div>
  );
  

  return (
    <div className="bg-[rgba(241,222,239,0.83)] backdrop-blur-md p-7 rounded-2xl shadow-xl">
      <motion.h1
        className="text-4xl md:text-5xl font-light text-[rgba(134,24,4,1)] mb-12 text-center italic"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >
        Motivation & Inspiration
      </motion.h1>

      {/* Main Image Boxes */}
      <div className="flex flex-wrap justify-center gap-6">
        {imageBox(images1, current1, setCurrent1)}
        {imageBox(images2, current2, setCurrent2)}
        {imageBox(images3, current3, setCurrent3)}
        {imageBox(images4, current4, setCurrent4)}

      </div>

      {/* Dropdown Extra Posts */}
<AnimatePresence>
  {showMore && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden mt-4 flex flex-col items-center gap-6"
    >
      <div className="flex flex-wrap justify-center gap-6">
      {imageBox(images5, current4, setCurrent4)}
        {imageBox(images2, current2, setCurrent2)}
      </div>

      {/* Moved button here */}
      <button
  onClick={() => setShowMore(false)}
  className="px-4 py-2 bg-[rgba(134,24,4,0.9)] text-white rounded-full shadow-md hover:bg-[rgba(134,24,4,1)] mt-4"
>
  Show Less ▲
</button>
    </motion.div>
  )}
</AnimatePresence>

{/* Show More button (only when dropdown is closed) */}
{!showMore && (
  <div className="text-center mt-6">
    <button
      onClick={() => setShowMore(true)}
      className="px-4 py-2 bg-[rgba(134,24,4,0.9)] text-white rounded-full shadow-md hover:bg-[rgba(134,24,4,1)] mt-4"
      >
      Show More ▼
    </button>
  </div>
)}


      {/* Dropdown Extra Posts */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden mt-4 flex flex-wrap justify-center gap-6"
          >
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
