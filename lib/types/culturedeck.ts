export type CardType = "el insight" | "la tendencia" | "el movimiento" | "el flavor" | "el takeaway" | "el podcast"

export interface CultureDeckArticle {
  id: string
  slug: string
  date: string
  title: {
    en: string
    es: string
  }
  type: CardType
  summary: {
    en: string
    es: string
  }
  content: {
    en: string
    es: string
  }
  author?: string
  tags?: string[]
  link?: string
  cardImage?: string
  
  // Newsletter-specific fields
  heroImage?: {
    desktop?: string
    mobile?: string
  }
  foundersNote?: {
    text: {
      en: string
      es: string
    }
    image?: string
  }
  lastMonthGif?: string
  theDropGif?: string
  featuredPost?: {
    title: {
      en: string
      es: string
    }
    content: {
      en: string
      es: string
    }
    image?: string
  }
  upcomingEvent?: {
    title: {
      en: string
      es: string
    }
    description: {
      en: string
      es: string
    }
    image?: string
    ctaText: {
      en: string
      es: string
    }
    ctaLink?: string
  }
  spotlights?: Array<{
    title: {
      en: string
      es: string
    }
    description: {
      en: string
      es: string
    }
    image?: string
    ctaText: {
      en: string
      es: string
    }
    ctaLink?: string
  }>
}