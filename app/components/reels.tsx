"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export default function StacySection() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
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

    const videos = [
        "https://ampd-asset.s3.us-east-2.amazonaws.com/RGV+Start+Up+Week+2025.mov",
        "https://nam11.safelinks.protection.outlook.com/?url=https%3A%2F%2Fampd-asset.s3.us-east-2.amazonaws.com%2FCafecito%2By%2BParche.mov&data=05%7C02%7CCamille.Rivera%40my.utsa.edu%7C745d5f4f5a084fec77cc08ddcf8c4e1a%7C3a228dfbc64744cb88357b20617fc906%7C0%7C1%7C638894923692337318%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C60000%7C%7C%7C&sdata=5Yl4Bu3ul2GIB2PWs1rAvbvcxhdC86cix%2B5abA2A8uA%3D&reserved=0",
        "https://ampd-asset.s3.us-east-2.amazonaws.com/AltBionics+.mov",
        "https://ampd-asset.s3.us-east-2.amazonaws.com/4+Film+Facts.mov",
        "https://ampd-asset.s3.us-east-2.amazonaws.com/Arely+Reel+%232+.mov",
        "https://ampd-asset.s3.us-east-2.amazonaws.com/Marcos+x+Stacy+Motivational+Advice.mov",
    ]

    const handleMouseEnter = (index: number) => {
        setHoverIndex(index)
        videoRefs.current[index]?.play()
    }

    const handleMouseLeave = (index: number) => {
        setHoverIndex(null)
        if (videoRefs.current[index]) {
            videoRefs.current[index]?.pause()
            videoRefs.current[index]!.currentTime = 0
        }
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

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                {videos.map((url, i) => (
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
                                ref={el => (videoRefs.current[i] = el)}
                                src={url}
                                playsInline
                                muted
                                loop
                                preload="metadata"
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
