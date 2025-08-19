"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { useLanguage } from "../lib/language-context"

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const teamMembers = [
  {
    id: 1,
    name: "Stacy Carrizales",
    title: "Creative Director",
    image: "/images/team-profile.jpg",
    linkedin: "https://linkedin.com/in/stacycarrizales",
  },
  {
    id: 2,
    name: "Diana Garcia",
    title: "Graphic Design",
    image: "/images/team-profile.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: 3,
    name: "Arely Reyes",
    title: "Digital Marketing",
    image: "/images/team-profile.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: 4,
    name: "Camille Rivera",
    title: "Web Developer",
    image: "/images/team-profile.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: 5,
    name: "Marcos Resendez",
    title: "Founder / CEO",
    image: "/images/team-profile.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: 6,
    name: "Barbara Carreon",
    title: "VP Business Development",
    image: "/images/team-profile.jpg",
    linkedin: "https://linkedin.com/in/",
  },
]

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)
  const { t } = useLanguage()

  return (
    <section className="relative w-full bg-[#eeebe3]">
      <motion.div
        className="absolute bottom-4 right-4 md:-top-57 md:-right-10 w-52 h-52 md:w-80 md:h-80 z-10"
        initial={{ opacity: 0, scale: 0.6, rotate: -15, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3,
          scale: { type: "spring", stiffness: 120, damping: 20 },
        }}
        whileHover={{
          scale: 1.1,
          rotate: 8,
          transition: { duration: 0.4 },
        }}
      >
        <Image
          src="/images/wrestlecat.png"
          alt="Wrestle Cat"
          fill
          className="object-contain md:object-cover drop-shadow-2xl"
        />
      </motion.div>

      {/* RED BLOCK (TOP SECTION) - Enhanced with hero text */}
      <div className="w-full bg-[#ca0013] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[5vw] py-12 md:py-16 px-4 md:px-[6vw] relative z-5 min-h-[60vh] md:min-h-[50vh]">
        <motion.div
          className="relative w-full md:w-[40vw] flex justify-center md:justify-start"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            scale: { type: "spring", stiffness: 100, damping: 15 },
          }}
        >
          <h1
            className="text-white font-black text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-center md:text-left drop-shadow-lg"
            style={{ color: "#ffffff" }}
            role="heading"
            aria-level={1}
          >
            {t("ourTeam")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word}
                  {index === 0 && <br />}
                </span>
              ))}
          </h1>
        </motion.div>

        <div className="relative max-w-xl md:max-w-[60vw]">
          <motion.div
            className="text-white font-inter font-black text-3xl md:text-4xl lg:text-7xl leading-tight md:leading-[0.9] tracking-tight uppercase text-center md:text-left relative z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <span className="block md:hidden">
              {t("culturalRelevanceMobile")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < t("culturalRelevanceMobile").split("\n").length - 1 && <br />}
                  </span>
                ))}
            </span>
            <span className="hidden md:block">{t("culturalRelevance")}</span>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#eeebe3] py-8 md:py-12 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.id}
                className="relative aspect-square rounded-lg overflow-hidden bg-transparent hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ca0013] focus:ring-opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMember(member)}
                aria-label={`View ${member.name}'s profile`}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ca0013]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-sm md:text-base">{member.name}</h3>
                    <p className="text-xs md:text-sm opacity-90">{member.title}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Brain Image - Full width at bottom */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3,
              scale: { type: "spring", stiffness: 100, damping: 15 },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
          >
            <video
              src="/images/hebvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain md:object-cover md:max-w-3xl md:mx-auto rounded-lg"
              aria-label="Team showcase video"
            />
          </motion.div>
        </div>
      </div>

      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="bg-[#eee3d2] rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 relative"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-opacity-50"
              aria-label="Close modal"
            >
              <X size={20} className="text-[#ca0013]" />
            </button>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={`${selectedMember.name} - ${selectedMember.title}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#ca0013] mb-2">{selectedMember.name}</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">{selectedMember.title}</p>

              <div className="flex justify-center">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#ca0013] text-white rounded-full hover:bg-[#a00010] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-opacity-50"
                  aria-label={`Visit ${selectedMember.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
