"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export default function StacySection() {
    const createVideoRef = () => useRef<HTMLVideoElement | null>(null)
    const videoRefs = Array.from({ length: 7 }, () => createVideoRef())
    const [hoverIndex, setHoverIndex] = useState<number | null>(null)

    const captions = [
        "encontramos un rinconcito lleno de paisanos 🥰☕️ things to do in San Antonio…. IG: @cafecito_parche!!! all proceeds from the event went directly to @raicestexas to support immigrant families seeking legal representation and long-term support. happening every month!!",
        "Capturing moments, not things 🎥",
        "Every frame tells a story 💕",
        "Love through our lens ❤️",
        "Pure candid vibes 🌸",
        "Memories made timeless ⏳",
        "Your story in motion 🎬"
    ]

    const handleMouseEnter = (index: number) => {
        setHoverIndex(index)
        videoRefs[index].current?.play()
    }
    const handleMouseLeave = (index: number) => {
        setHoverIndex(null)
        videoRefs[index].current?.pause()
    }

    return (
        <section className="py-16 px-6 bg-white">
            <div className="container mx-auto relative z-10 flex flex-col items-center">
                <motion.h2
                    className="text-4xl md:text-6xl font-light text-[rgba(134,24,4,1)] mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }}
                >
                    From Our Lens to Yours
                </motion.h2>
            </div>

            {/* Full-Width Video Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                {["reel1", "reel2", "reel3", "reel4", "reel5", "reel6"].map((name, i) => (
                    <motion.div
                        key={i}
                        className="w-full flex flex-col items-center aspect-auto rounded-xl shadow-md transition-transform"
                        animate={{
                            scale: hoverIndex === i ? 1.08 : hoverIndex !== null ? 0.92 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave(i)}
                    >
                        {/* Video */}
                        <div className="w-full aspect-[9/16] overflow-hidden rounded-xl shadow-md">
                            <video
                                ref={videoRefs[i]}
                                src={`/images/${name}.mp4`}
                                playsInline
                                className="w-full h-full rounded-xl bg-white"
                            />
                        </div>

                        {/* Caption Box */}
                        <div className="mt-2 w-full text-center bg-pink-100 text-pink-900 text-sm p-2 rounded-lg shadow-sm">
                            {captions[i]}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
