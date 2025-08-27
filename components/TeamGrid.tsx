"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  image: string
  skills: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Stacy Carrizales",
    role: "Creative Director",
    description: "Leading brand vision and creative strategy with over 8 years of experience.",
    image: "/images/stacy-carrizales.jpeg",
    skills: ["Brand Strategy", "Creative Direction", "Visual Design"],
  },
  {
    id: 2,
    name: "Diana García",
    role: "Vemos Vamos Ambassador",
    description: "Diana García is a bilingual brand strategist, creative director, and Owner of Veintidós Studios (22 Studios).",
    image: "/images/diana.jpeg?height=300&width=300",
    skills: ["Strategist", "Storytelling"],
  },
  {
    id: 3,
    name: "Arely Reyes",
    role: "Vemos Vamos Ambassador",
    description: "Dedicated to creating intuitive and accessible digital experiences.",
    image: "/images/arely.jpeg?height=100&width=200",
    skills: ["Graphic Design", "Cultural Connection"],
  },
]

interface TeamGridProps {
  language: "en" | "es"
}

export default function TeamGrid({ language }: TeamGridProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`w-full py-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`bg-[rgba(134,24,4,0.03)] rounded-2xl p-6 border border-[rgba(134,24,4,0.1)] relative overflow-hidden group hover:shadow-lg transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
            }}
          >
            {/* Animated background elements */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-[rgba(134,24,4,0.1)] rounded transform rotate-12 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 bg-[rgba(134,24,4,0.15)] rounded-full transition-transform duration-700 group-hover:scale-125"></div>

            <div className="relative z-10 space-y-4 text-center">
              {/* Image */}
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-[rgba(134,24,4,0.1)] to-[rgba(134,24,4,0.2)] rounded-full transform rotate-3 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"></div>
                <div className="relative rounded-full overflow-hidden">
                <div className="w-24 aspect-square relative">
                   <Image
                    src={member.image}
                    alt={member.name}
                     fill
                     className="object-cover rounded-full"
                     />
                    </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-light italic text-[rgba(134,24,4,1)] font-pp-editorial">{member.name}</h3>
                <p className="text-xs text-[rgba(134,24,4,0.8)] font-medium uppercase tracking-wide">{member.role}</p>
                <p className="text-[rgba(134,24,4,0.7)] leading-relaxed text-sm">{member.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 justify-center pt-2">
                  {member.skills.slice(0, 2).map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-[rgba(134,24,4,0.1)] text-[rgba(134,24,4,1)] text-xs rounded-full border border-[rgba(134,24,4,0.2)] transition-all duration-300 group-hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
