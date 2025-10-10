"use client"

import type React from "react"

import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "../lib/language-context"

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fill="currentColor" {...props}>
    <path
      d="M351 317c.012-8.165.306-15.843-.03-23.493-.515-11.679-2.535-23.024-8.873-33.222-5.03-8.093-13.158-11.83-21.686-12.969-12.13-1.62-24.17-.265-34.805 7.324-8.612 6.144-12.387 15.077-14.358 24.624-1.917 9.286-2.964 18.904-3.05 28.388-.331 36.826-.125 73.657-.132 110.486 0 1.121-.142 2.243-.233 3.601h-69.466V190.286h67.411v32.824c2.393-2.21 4.08-3.22 5.002-4.704 6.962-11.21 17.023-18.857 28.408-24.973 14.178-7.617 29.208-9.172 45.163-7.73 9.056.82 17.984 1.36 26.622 4.3 12.309 4.189 23.26 10.624 31.04 21.195 12.245 16.635 16.761 35.727 18.174 56.18 3.42 49.532.977 99.094 1.81 148.632.03 1.795.003 3.591.003 5.686h-71V317zM109 422.001H80.308V190.398h70.387V422H109zM81.2 94.275c8.971-13.222 21.435-20.017 36.73-19.013 15.228.999 26.973 8.523 34.234 22.893 10.564 20.903.61 44.172-17.035 53.907-20.267 11.18-44.835 2.39-54.839-15.374-7.993-14.192-7.671-28.217.91-42.413z"
    />
  </svg>
)
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.874 5.874 0 00-2.124 1.388 5.878 5.878 0 00-1.38 2.127C.321 4.926.12 5.8.064 7.076.008 8.354-.005 8.764.001 12.023c.007 3.259.021 3.667.083 4.947.061 1.277.264 2.149.563 2.911.308.789.72 1.457 1.388 2.123a5.872 5.872 0 002.129 1.38c.763.295 1.636.496 2.913.552 1.278.056 1.689.069 4.947.063 3.257-.007 3.668-.021 4.947-.082 1.28-.06 2.147-.265 2.91-.563a5.881 5.881 0 002.123-1.388 5.881 5.881 0 001.38-2.129c.295-.763.496-1.636.551-2.912.056-1.28.07-1.69.063-4.948-.006-3.258-.02-3.667-.081-4.947-.06-1.28-.264-2.148-.564-2.911a5.892 5.892 0 00-1.387-2.123 5.857 5.857 0 00-2.128-1.38C19.074.322 18.202.12 16.924.066 15.647.009 15.236-.006 11.977 0 8.718.008 8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.736 3.736 0 01-1.382-.895 3.695 3.695 0 01-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.705 3.705 0 011.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.804.244 2.227.408.56.216.96.475 1.382.895.421.42.681.817.9 1.378.165.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848.005 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.805-.408 2.23-.216.56-.477.96-.896 1.38a3.705 3.705 0 01-1.378.9c-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079-3.204.007-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 101.437-1.442 1.44 1.44 0 00-1.437 1.442M5.839 12.012a6.161 6.161 0 1012.323-.024 6.162 6.162 0 00-12.323.024M8 12.008A4 4 0 1112.008 16 4 4 0 018 12.008" />
  </svg>
)

const teamMembers = [
  {
    id: 1,
    name: "Stacy Carrizales",
    titleKey: "team.member1.title",
    descriptionKey: "team.member1.description",
    image: "https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/stacy-team",
    linkedin: "https://www.linkedin.com/in/stacycarrizales/",
    instagram: "https://www.instagram.com/strawberry.stacyy/",
  },
  {
    id: 2,
    name: "Diana Garcia",
    titleKey: "team.member2.title",
    descriptionKey: "team.member2.description",
    image: "https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/diana-team",
    linkedin: "https://www.linkedin.com/in/dianagrc/",
  },
  {
    id: 3,
    name: "Arely Reyes",
    titleKey: "team.member3.title",
    descriptionKey: "team.member3.description",
    image: "https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/team-arely.png",
    linkedin: "https://www.linkedin.com/in/arely-reyes/",
    instagram: "https://www.instagram.com/reyes.arely_/",
  },
  {
    id: 4,
    name: "Camille Rivera",
    titleKey: "team.member4.title",
    descriptionKey: "team.member4.description",
    image: "https://ampd-asset.s3.us-east-2.amazonaws.com/team-camille.png",
    linkedin: "https://www.linkedin.com/in/camille-louise-rivera/",
  },
  {
    id: 5,
    name: "Barbara Carreon",
    titleKey: "team.member5.title",
    descriptionKey: "team.member5.description",
    image: "https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/team-barb.png",
    linkedin: "https://www.linkedin.com/in/barbara-c-6299ba1/",
  },
  {
    id: 6,
    name: "Marcos Resendez",
    titleKey: "team.member6.title",
    descriptionKey: "team.member6.description",
    image: "https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/team-marcos.png",
    linkedin: "https://www.linkedin.com/in/marcosresendez/",
  },
]

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)
  const { t } = useLanguage()

  return (
    <section className="relative w-full bg-[#eeebe3]">
      <motion.div
        className="absolute bottom-4 right-4 xs:bottom-2 xs:right-2 sm:bottom-4 sm:right-4 md:-top-57 md:-right-10 lg:-top-64 lg:-right-12 xl:-top-72 xl:-right-16 w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] z-10"
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
      ></motion.div>

      <div className="w-full bg-[#eeebe3] py-6 xs:py-8 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-2 xs:px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:gap-8 lg:gap-12 xl:gap-16 md:items-stretch">
            <div className="md:w-1/2 lg:w-2/5 md:sticky md:top-8 md:h-fit">
              <motion.div
                className="max-w-4xl md:max-w-none mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/brain.png"
                  alt="Team Introduction"
                  width={600}
                  height={400}
                  className="mx-auto md:mx-0 mb-6 object-cover w-full max-w-md md:max-w-full"
                />
                <p className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl md:leading-relaxed tracking-tight text-neutral-800 font-semibold px-2 xs:px-4 sm:px-4 md:px-0">
                  {t("team.intro")
                    .split(
                      /(\b70 years\b|\bbilingual storytelling\b|\bdesign\b|\bcommunity-driven marketing\b|\bmeaningful brand experiences\b|\bLatinx culture\b|\b70 años\b|\bnarrativa bilingüe\b|\bdiseño\b|\bmarketing impulsado por la comunidad\b|\bexperiencias de marca significativas\b|\bcultura Latinx\b)/g,
                    )
                    .map((part, index) => {
                      const isHighlighted = [
                        "70 years",
                        "bilingual storytelling",
                        "design",
                        "community-driven marketing",
                        "meaningful brand experiences",
                        "Latinx culture",
                        "70 años",
                        "narrativa bilingüe",
                        "diseño",
                        "marketing impulsado por la comunidad",
                        "experiencias de marca significativas",
                        "cultura Latinx",
                      ].includes(part)

                      return isHighlighted ? (
                        <span key={index} className="font-bold text-[#ca0013]">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    })}
                </p>
              </motion.div>
            </div>

            <div className="md:w-1/2 lg:w-3/5 md:order-first">
              <motion.div
                className="mb-6 xs:mb-8 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 md:h-full md:flex md:flex-col md:justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="md:hidden">
                  <div className="relative">
                    <div className="overflow-x-auto pb-4 scrollbar-hide">
                      <div className="flex gap-2 xs:gap-3 sm:gap-4 min-w-max">
                        {teamMembers.map((member, index) => (
                          <motion.button
                            key={member.id}
                            className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 flex-shrink-0 rounded-lg overflow-hidden bg-transparent hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ca0013] focus:ring-opacity-50"
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
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedMember(member)}
                            aria-label={`View ${member.name}'s profile`}
                          >
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={`${member.name} - ${t(member.titleKey)}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 480px) 160px, (max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ca0013]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4 right-2 xs:right-3 sm:right-4 text-white">
                                <h3 className="font-bold text-xs xs:text-sm sm:text-sm">{member.name}</h3>
                                <p className="text-[10px] xs:text-xs sm:text-xs opacity-90">{t(member.titleKey)}</p>
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#eeebe3] to-transparent w-8 h-full flex items-center justify-start pl-1 pointer-events-none">
                      <ChevronLeft className="text-[#ca0013] w-4 h-4 animate-pulse" />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#eeebe3] to-transparent w-8 h-full flex items-center justify-end pr-1 pointer-events-none">
                      <ChevronRight className="text-[#ca0013] w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-center text-sm text-neutral-600 mt-2 font-medium">
                    ← Swipe to see all team members →
                  </p>
                </div>

                <div className="hidden md:block">
                  <div className="grid grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
                    {teamMembers.map((member, index) => (
                      <motion.button
                        key={member.id}
                        className="relative w-full h-56 lg:h-64 xl:h-72 rounded-lg overflow-hidden bg-transparent hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ca0013] focus:ring-opacity-50"
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
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMember(member)}
                        aria-label={`View ${member.name}'s profile`}
                      >
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${t(member.titleKey)}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ca0013]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="font-bold text-base lg:text-lg xl:text-xl">{member.name}</h3>
                            <p className="text-sm lg:text-base xl:text-lg opacity-90">{t(member.titleKey)}</p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
              <div className="relative w-48 h-48 rounded-lg mx-auto mb-6 overflow-hidden">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={`${selectedMember.name} - ${t(selectedMember.titleKey)}`}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#ca0013] mb-2">{selectedMember.name}</h2>
              <p className="text-lg md:text-xl text-neutral-700 mb-2 font-medium">{t(selectedMember.titleKey)}</p>
              <p className="text-base md:text-lg text-neutral-800 mb-2">{t(selectedMember.descriptionKey)}</p>

              <div className="flex justify-center gap-3">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#ca0013] text-white rounded-full hover:bg-[#a00010] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-opacity-50"
                  aria-label={`Visit ${selectedMember.name}'s LinkedIn profile`}
                >
                  <LinkedInIcon className="w-6 h-6" />
                </a>
                {selectedMember.instagram && (
                  <a
                    href={selectedMember.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#ca0013] text-white rounded-full hover:bg-[#a00010] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-opacity-50"
                    aria-label={`Visit ${selectedMember.name}'s Instagram profile`}
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
