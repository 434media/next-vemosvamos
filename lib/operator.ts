export type Locale = "en" | "es"

export interface Skill {
  /** Two-digit ordering for editorial display. */
  number: string
  nameEn: string
  nameEs: string
  description: Record<Locale, string>
}

export interface Feed {
  /** "Daily", "Hourly", etc. — bilingual. */
  cadence: Record<Locale, string>
  /** Plain-language sentence describing what flows. Bilingual. */
  source: Record<Locale, string>
}

/**
 * The Operator is the single AI-enabled judgment layer in the system.
 * Everything else is scheduled loops or human review.
 */
export const OPERATOR = {
  nameEn: "The Operator",
  nameEs: "La Operadora",
}

export const SKILLS: Skill[] = [
  {
    number: "01",
    nameEn: "Read the signal",
    nameEs: "Lee la señal",
    description: {
      en: "Each day, what's actually worth a story rises to the top. Brand-voice-aware. Quiet on the noise.",
      es: "Cada día, lo que de verdad vale la pena contar sale a la superficie. Con voz de marca. Silencio para el ruido.",
    },
  },
  {
    number: "02",
    nameEn: "Propose the angle",
    nameEs: "Propone el ángulo",
    description: {
      en: "Once a signal is picked, a few angles get drafted. Hook, tone, format. For human review.",
      es: "Una vez elegida una señal, se redactan unos ángulos. Hook, tono, formato. Para revisión humana.",
    },
  },
  {
    number: "03",
    nameEn: "Draft the copy",
    nameEs: "Redacta el texto",
    description: {
      en: "Once a brief is approved, the versions for every platform get written. Captions, short and long, hashtags. Editor checks tone before anything goes live.",
      es: "Una vez aprobado un brief, se escriben las versiones para cada plataforma. Captions, corta y larga, hashtags. El editor revisa el tono antes de que salga algo.",
    },
  },
  {
    number: "04",
    nameEn: "Review the results",
    nameEs: "Revisa los resultados",
    description: {
      en: "After a post goes out, what worked and what didn't surfaces. The next ten ideas follow.",
      es: "Después de que sale una publicación, lo que funcionó y lo que no sale a la luz. Siguen las próximas diez ideas.",
    },
  },
]

export const FEEDS: Feed[] = [
  {
    cadence: { en: "Daily", es: "Diario" },
    source: {
      en: "News, social posts, and event signals flow in.",
      es: "Llegan noticias, posts y señales de eventos.",
    },
  },
  {
    cadence: { en: "Daily", es: "Diario" },
    source: {
      en: "Numbers from IG, TikTok, and LinkedIn come back.",
      es: "Vuelven los números de IG, TikTok y LinkedIn.",
    },
  },
  {
    cadence: { en: "Hourly", es: "Cada hora" },
    source: {
      en: "Scheduled posts go out.",
      es: "Las publicaciones programadas salen.",
    },
  },
]
