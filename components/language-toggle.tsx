"use client"

import { useLanguage } from "../lib/language-context"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  const button = (target: "en" | "es", label: string) => {
    const isActive = language === target
    return (
      <button
        type="button"
        onClick={() => {
          if (!isActive) toggleLanguage()
        }}
        aria-pressed={isActive}
        aria-label={target === "en" ? "Switch to English" : "Cambiar a Español"}
        className={`text-[13px] sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ca0013] focus-visible:ring-offset-2 rounded-sm
                    ${
                      isActive
                        ? "text-[#ca0013] underline underline-offset-4 decoration-2"
                        : "text-current opacity-60 hover:opacity-100"
                    }`}
      >
        {label}
      </button>
    )
  }

  return (
    <div role="group" aria-label="Language selector" className="inline-flex items-center gap-2">
      {button("en", "EN")}
      <span aria-hidden="true" className="text-current opacity-25 text-xs">
        ·
      </span>
      {button("es", "ES")}
    </div>
  )
}
