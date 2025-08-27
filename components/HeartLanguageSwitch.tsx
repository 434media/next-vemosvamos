"use client"

import { useState } from "react"

interface HeartLanguageSwitchProps {
  onLanguageChange: (language: "en" | "es") => void
  currentLanguage: "en" | "es"
}

export default function HeartLanguageSwitch({ onLanguageChange, currentLanguage }: HeartLanguageSwitchProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleToggle = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en"
    onLanguageChange(newLanguage)
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group focus:outline-none focus:ring-2 focus:ring-[rgba(134,24,4,0.5)] focus:ring-offset-2 focus:ring-offset-[rgba(236,234,222,1)] rounded-full"
        aria-label={`Switch to ${currentLanguage === "en" ? "Spanish" : "English"}`}
      >
        {/* Heart Shape */}
        <div
          className="relative w-12 h-12 transform transition-all duration-300 ease-out"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          {/* Heart SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full transition-all duration-500 ease-out"
            style={{
              filter: isHovered ? "drop-shadow(0 4px 8px rgba(134,24,4,0.3))" : "none",
            }}
          >
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={currentLanguage === "en" ? "rgba(134,24,4,1)" : "rgba(220,38,38,1)"}
                  className="transition-all duration-500"
                />
                <stop
                  offset="100%"
                  stopColor={currentLanguage === "en" ? "rgba(185,28,28,1)" : "rgba(239,68,68,1)"}
                  className="transition-all duration-500"
                />
              </linearGradient>
            </defs>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="url(#heartGradient)"
              className="transition-all duration-500 ease-out"
              style={{
                transform: currentLanguage === "es" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "center",
              }}
            />
          </svg>

          {/* Language Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-[rgba(143,48,48,1)]">
            <span
              className="text-white font-bold text-xs transition-all duration-300 ease-out"
              style={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              {currentLanguage === "en" ? "EN" : "ES"}
            </span>
          </div>

          {/* Pulse Animation */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-1000 ease-out"
            style={{
              background: `radial-gradient(circle, ${
                currentLanguage === "en" ? "rgba(134,24,4,0.2)" : "rgba(220,38,38,0.2)"
              } 0%, transparent 70%)`,
              transform: isHovered ? "scale(1.5)" : "scale(0)",
              opacity: isHovered ? 0.6 : 0,
            }}
          />
        </div>

        {/* Language Labels */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xs">
          <span
            className={`transition-all duration-300 ${
              currentLanguage === "en"
                ? "text-[rgba(134,24,4,1)] font-semibold"
                : "text-[rgba(134,24,4,0.5)] font-normal"
            }`}
          >
            EN
          </span>
          <div className="w-1 h-1 bg-[rgba(134,24,4,0.3)] rounded-full" />
          <span
            className={`transition-all duration-300 ${
              currentLanguage === "es"
                ? "text-[rgba(134,24,4,1)] font-semibold"
                : "text-[rgba(134,24,4,0.5)] font-normal"
            }`}
          >
            ES
          </span>
        </div>
      </button>
    </div>
  )
}
