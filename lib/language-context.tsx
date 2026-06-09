"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary — every key here is consumed by a live component.
// If you add a key, add it to BOTH en and es. If a key stops being used,
// delete it from both. The order within each block mirrors the live surfaces:
// hero masthead → footer → operator console.
const translations = {
  en: {
    // Hero masthead (components/hero-section.tsx)
    "hero.masthead.eyebrow": "A bicultural creative media system",
    "hero.masthead.tagline": "Acciones hablan más fuerte.",
    "hero.masthead.opSee": "See the signal",
    "hero.masthead.opShape": "Shape the story",
    "hero.masthead.opMove": "Move the market",
    "hero.masthead.stampAlt": "Vemos Vamos brand mark",

    // Footer (components/footer.tsx) — bicultural close + newsletter + colophon
    "footer.close.en": "We see. We shape. We move.",
    "footer.close.es": "Vemos. Damos forma. Movemos.",
    "footer.newsletter.heading": "The system is on",
    "footer.newsletter.subhead": "When the next post lands, you'll see it first.",
    "footer.newsletter.placeholder": "you@email.com",
    "footer.newsletter.button": "Subscribe",
    "footer.newsletter.submitting": "Sending…",
    "footer.newsletter.success": "Thanks. The system is on.",
    "footer.newsletter.errorGeneral": "Something went wrong. Try again.",
    "footer.newsletter.errorEmail": "Enter a valid email.",
    "footer.parent": "A 434 Media studio",
    "footer.followLabel": "FOLLOW",

    // Operator console (components/operator-console.tsx) — easter egg modal
    "console.maskhead": "VEMOS VAMOS · OPERATING SYSTEM",
    "console.version": "FOR CULTURALLY FLUENT MEDIA",
    "console.intro": "One operator. Four skills. Always a human in the loop.",
    "console.section.operator": "The Operator",
    "console.section.skills": "Skills",
    "console.section.feeds": "Feeds",
    "console.section.loop": "Human in the loop",
    "console.operatorPurpose":
      "An AI-enabled operator. Helps the team move from signal to post — with editorial judgment, not autopilot.",
    "console.humanLoopLine1": "Editorial review of every draft.",
    "console.humanLoopLine2": "Final approval before any post.",
    "console.humanLoopLine3": "Brand voice is human-decided. Always.",
    "console.hint": "Esc to close",
    "console.closeLabel": "Close console",
    "console.outro": "See the signal. Shape the story. Move the market.",
    "console.discoveryHint": "Right-click to look inside",
  },
  es: {
    // Hero masthead (components/hero-section.tsx)
    "hero.masthead.eyebrow": "Sistema bicultural de medios",
    "hero.masthead.tagline": "Acciones hablan más fuerte.",
    "hero.masthead.opSee": "Ve la señal",
    "hero.masthead.opShape": "Forma la historia",
    "hero.masthead.opMove": "Mueve el mercado",
    "hero.masthead.stampAlt": "Marca Vemos Vamos",

    // Footer (components/footer.tsx) — bicultural close + newsletter + colophon
    "footer.close.en": "We see. We shape. We move.",
    "footer.close.es": "Vemos. Damos forma. Movemos.",
    "footer.newsletter.heading": "El sistema está encendido",
    "footer.newsletter.subhead": "Cuando llegue el próximo post, lo verás primero.",
    "footer.newsletter.placeholder": "tu@correo.com",
    "footer.newsletter.button": "Suscribirme",
    "footer.newsletter.submitting": "Enviando…",
    "footer.newsletter.success": "Gracias. El sistema está encendido.",
    "footer.newsletter.errorGeneral": "Algo salió mal. Intenta de nuevo.",
    "footer.newsletter.errorEmail": "Ingresa un correo válido.",
    "footer.parent": "Un estudio de 434 Media",
    "footer.followLabel": "SÍGUENOS",

    // Operator console (components/operator-console.tsx) — easter egg modal
    "console.maskhead": "VEMOS VAMOS · SISTEMA OPERATIVO",
    "console.version": "PARA MEDIOS CULTURALMENTE FLUENTES",
    "console.intro": "Una operadora. Cuatro habilidades. Siempre con humano en el loop.",
    "console.section.operator": "La Operadora",
    "console.section.skills": "Habilidades",
    "console.section.feeds": "Flujos",
    "console.section.loop": "Humano en el loop",
    "console.operatorPurpose":
      "Una operadora potenciada por IA. Ayuda al equipo a pasar de la señal a la publicación — con criterio editorial, no en piloto automático.",
    "console.humanLoopLine1": "Revisión editorial de cada borrador.",
    "console.humanLoopLine2": "Aprobación final antes de cualquier publicación.",
    "console.humanLoopLine3": "La voz de la marca la decide la persona. Siempre.",
    "console.hint": "Esc para cerrar",
    "console.closeLabel": "Cerrar consola",
    "console.outro": "Ve la señal. Da forma a la historia. Mueve el mercado.",
    "console.discoveryHint": "Click derecho para ver adentro",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("vv-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("vv-language", newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
