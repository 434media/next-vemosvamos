"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

const images1 = [
  "/images/KSU1.jpg",
  "/images/KSU2.jpg",
  "/images/KSU3.jpg",
  "/images/KSU4.jpg",
  "/images/KSU5.jpg",
  "/images/KSU6.jpg",
]

const images2 = [
  "/images/secrets1.jpg",
  "/images/secrets2.jpg",
  "/images/secrets3.jpg",
  "/images/secrets4.jpg",
]

const images3 = [
  "/images/slowEx1.jpg",
  "/images/slowEx2.jpg",
  "/images/slowEx3.jpg",
  "/images/slowEx4.jpg",
  "/images/slowEx5.jpg",
  "/images/slowEx6.jpg",
  "/images/slowEx7.jpg",
  "/images/slowEx8.jpg",

]

const images4 = [
  "/images/funk1.jpg",
  "/images/funk2.jpg",
  "/images/funk3.jpg",
  "/images/funk4.jpg",
  "/images/funk5.jpg",
]


export default function CollectionSection() {
  const [current1, setCurrent1] = useState(0)
  const [current2, setCurrent2] = useState(0)
  const [current3, setCurrent3] = useState(0)
  const [current4, setCurrent4] = useState(0)



  const nextImage1 = () => setCurrent1((prev) => (prev + 1) % images1.length)
  const prevImage1 = () => setCurrent1((prev) => (prev - 1 + images1.length) % images1.length)


  const nextImage2 = () => setCurrent2((prev) => (prev + 1) % images2.length)
  const prevImage2 = () => setCurrent2((prev) => (prev - 1 + images2.length) % images2.length)

  const nextImage3 = () => setCurrent3((prev) => (prev + 1) % images3.length)
  const prevImage3 = () => setCurrent3((prev) => (prev - 1 + images3.length) % images3.length)

  const nextImage4 = () => setCurrent4((prev) => (prev + 1) % images4.length)
  const prevImage4 = () => setCurrent4((prev) => (prev - 1 + images4.length) % images4.length)


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

  {/* Flex container to align boxes horizontally */}
  <div className="flex flex-wrap justify-center gap-6">
  <div className="relative w-[350px] h-90 rounded-xl overflow-hidden shadow-lg">
      <img
        src={images1[current1]}
        alt={`Slide ${current1 + 1}`}
        className="w-full h-full object-cover transition duration-500"
      />
      <button
        onClick={prevImage1}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ◀
      </button>
      <button
        onClick={nextImage1}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ▶
      </button>
    </div>

{/*2nd box*/}
<div className="relative w-[350px] h-90 rounded-xl overflow-hidden shadow-lg">
      <img
        src={images2[(current2 + 1) % images2.length]} // Show different image
        alt={`Slide ${(current2 + 2)}`}
        className="w-full h-full object-cover transition duration-500"
      />
      <button
        onClick={prevImage2}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ◀
      </button>
      <button
        onClick={nextImage2}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ▶
      </button>
    </div>

{/*3rd box*/}
<div className="relative w-[350px] h-90 rounded-xl overflow-hidden shadow-lg">
      <img
        src={images3[(current3 + 1) % images3.length]} // Show different image
        alt={`Slide ${(current3 + 2)}`}
        className="w-full h-full object-cover transition duration-500"
      />
      <button
        onClick={prevImage3}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ◀
      </button>
      <button
        onClick={nextImage3}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ▶
      </button>
    </div>
{/*4th box*/}
<div className="relative w-[350px] h-90 rounded-xl overflow-hidden shadow-lg">
      <img
        src={images4[(current4 + 1) % images4.length]} // Show different image
        alt={`Slide ${(current4 + 2)}`}
        className="w-full h-full object-cover transition duration-500"
      />
      <button
        onClick={prevImage4}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ◀
      </button>
      <button
        onClick={nextImage4}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ▶
      </button>
    </div>

  </div>
</div>

    
  )
}