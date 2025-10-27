export type CardType = "insight" | "tendencia" | "movimiento" | "flavor" | "takeaway" | "podcast"

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
}

export const articles: CultureDeckArticle[] = [
  {
    id: "1",
    slug: "bilingual-brand-storytelling",
    date: "2025.01.15",
    title: {
      en: "The Rise of Bilingual Brand Storytelling",
      es: "El Auge de la Narrativa de Marca Bilingüe",
    },
    type: "insight",
    summary: {
      en: "Brands that authentically integrate bilingual content see 3x higher engagement rates among Gen Z Latino audiences.",
      es: "Las marcas que integran auténticamente contenido bilingüe ven tasas de participación 3 veces más altas entre las audiencias latinas de la Generación Z.",
    },
    content: {
      en: "Recent data shows that bilingual content isn't just a nice-to-have—it's essential for reaching the fastest-growing consumer segment in the U.S. Brands that seamlessly blend English and Spanish in their storytelling create deeper emotional connections and drive measurable business results.\n\nThe key is authenticity. Gen Z Latino audiences can immediately detect when brands are simply translating content versus creating culturally relevant narratives that honor both languages and cultures. Successful brands are hiring bilingual creators, investing in cultural consultants, and building teams that reflect the diversity of their audience.\n\nThis shift represents more than a marketing trend—it's a fundamental change in how brands communicate with multicultural audiences. Companies that embrace this approach early will build lasting relationships with the most influential consumer demographic of the next decade.",
      es: "Datos recientes muestran que el contenido bilingüe no es solo algo agradable de tener, es esencial para llegar al segmento de consumidores de más rápido crecimiento en los EE. UU. Las marcas que mezclan sin problemas inglés y español en su narrativa crean conexiones emocionales más profundas y generan resultados comerciales medibles.\n\nLa clave es la autenticidad. Las audiencias latinas de la Generación Z pueden detectar inmediatamente cuando las marcas simplemente están traduciendo contenido en lugar de crear narrativas culturalmente relevantes que honren ambos idiomas y culturas. Las marcas exitosas están contratando creadores bilingües, invirtiendo en consultores culturales y construyendo equipos que reflejen la diversidad de su audiencia.\n\nEste cambio representa más que una tendencia de marketing: es un cambio fundamental en cómo las marcas se comunican con audiencias multiculturales. Las empresas que adopten este enfoque temprano construirán relaciones duraderas con el grupo demográfico de consumidores más influyente de la próxima década.",
    },
    author: "Strawberry Stacy",
    tags: ["Marketing", "Bilingual", "Gen Z"],
    cardImage: "/images/buildingvv.png",
  },
  {
    id: "2",
    slug: "cultural-code-switching",
    date: "2025.01.10",
    title: {
      en: "Cultural Code-Switching in Digital Spaces",
      es: "Cambio de Código Cultural en Espacios Digitales",
    },
    type: "tendencia",
    summary: {
      en: "How bicultural creators are redefining authenticity by embracing both languages and cultural references in a single piece of content.",
      es: "Cómo los creadores biculturales están redefiniendo la autenticidad al abrazar ambos idiomas y referencias culturales en una sola pieza de contenido.",
    },
    content: {
      en: "The trend of cultural code-switching has evolved from a survival mechanism to a creative superpower. Today's bicultural creators are building massive audiences by authentically expressing their dual identity, mixing Spanglish, cultural references, and visual aesthetics that resonate with those who live between worlds.\n\nThis phenomenon is particularly powerful on platforms like TikTok and Instagram, where short-form content allows creators to seamlessly blend languages mid-sentence, reference both American and Latin American pop culture, and create inside jokes that only bicultural audiences fully understand.\n\nBrands are taking notice. The most successful campaigns now feature creators who naturally code-switch, rather than forcing separate English and Spanish campaigns. This approach not only saves resources but creates more authentic connections with audiences who live their lives in both languages.",
      es: "La tendencia del cambio de código cultural ha evolucionado de un mecanismo de supervivencia a un superpoder creativo. Los creadores biculturales de hoy están construyendo audiencias masivas al expresar auténticamente su identidad dual, mezclando Spanglish, referencias culturales y estéticas visuales que resuenan con aquellos que viven entre mundos.\n\nEste fenómeno es particularmente poderoso en plataformas como TikTok e Instagram, donde el contenido de formato corto permite a los creadores mezclar idiomas sin problemas a mitad de oración, hacer referencia tanto a la cultura pop estadounidense como latinoamericana, y crear chistes internos que solo las audiencias biculturales entienden completamente.\n\nLas marcas están tomando nota. Las campañas más exitosas ahora presentan creadores que cambian de código naturalmente, en lugar de forzar campañas separadas en inglés y español. Este enfoque no solo ahorra recursos, sino que crea conexiones más auténticas con audiencias que viven sus vidas en ambos idiomas.",
    },
    author: "Diana García",
    tags: ["Trends", "Culture", "Content Creation"],
    cardImage: "/images/handsbrain.png",
  },
  {
    id: "3",
    slug: "san-antonio-tech-week-2025",
    date: "2025.01.05",
    title: {
      en: "San Antonio Tech Week 2025",
      es: "Semana Tecnológica de San Antonio 2025",
    },
    type: "movimiento",
    summary: {
      en: "Join DEVSA for a week of innovation, networking, and celebrating Latino entrepreneurship in tech.",
      es: "Únete a nosotros para una semana de innovación, networking y celebración del emprendimiento latino en tecnología.",
    },
    content: {
      en: "San Antonio Tech Week brings together founders, investors, and innovators for a week of panels, workshops, and networking events. This year's theme focuses on the intersection of culture and technology, highlighting how Latino entrepreneurs are building the future.\n\nThe week features keynote speakers from leading tech companies, pitch competitions for early-stage startups, and workshops on everything from fundraising to product development. Special sessions will focus on building bilingual products, marketing to multicultural audiences, and creating inclusive tech ecosystems.\n\nWhether you're a founder, investor, or simply curious about the tech scene in San Antonio, this is the event to attend. Join us in celebrating the vibrant Latino tech community and building connections that will shape the future of innovation.",
      es: "La Semana Tecnológica de San Antonio reúne a fundadores, inversionistas e innovadores para una semana de paneles, talleres y eventos de networking. El tema de este año se centra en la intersección de cultura y tecnología, destacando cómo los emprendedores latinos están construyendo el futuro.\n\nLa semana presenta oradores principales de empresas tecnológicas líderes, competencias de pitch para startups en etapa temprana y talleres sobre todo, desde recaudación de fondos hasta desarrollo de productos. Las sesiones especiales se centrarán en construir productos bilingües, marketing para audiencias multiculturales y crear ecosistemas tecnológicos inclusivos.\n\nYa seas fundador, inversionista o simplemente curioso sobre la escena tecnológica en San Antonio, este es el evento al que debes asistir. Únete a nosotros para celebrar la vibrante comunidad tecnológica latina y construir conexiones que darán forma al futuro de la innovación.",
    },
    tags: ["Events", "Tech", "Entrepreneurship"],
    link: "https://devsa.community",
    cardImage: "/images/buildingvv.png",
  },
  {
    id: "4",
    slug: "bilingual-content-strategy",
    date: "2025.01.01",
    title: {
      en: "How to Build a Bilingual Content Strategy",
      es: "Cómo Construir una Estrategia de Contenido Bilingüe",
    },
    type: "takeaway",
    summary: {
      en: "A practical framework for creating content that resonates with bicultural audiences without losing authenticity.",
      es: "Un marco práctico para crear contenido que resuene con audiencias biculturales sin perder autenticidad.",
    },
    content: {
      en: "Building a bilingual content strategy requires more than translation. Here's a 5-step framework:\n\n1. Understand your audience's language preferences - Survey your audience to learn when they prefer English, Spanish, or Spanglish.\n\n2. Create culturally relevant narratives - Don't just translate; create stories that honor both cultures and resonate with bicultural experiences.\n\n3. Use code-switching strategically - Mix languages naturally where it makes sense, just like your audience does in real life.\n\n4. Test and iterate based on engagement - Track which content performs best and double down on what works.\n\n5. Build a bilingual content calendar - Plan content around cultural moments in both American and Latin American calendars.\n\nThe key is authenticity. Your audience can tell when you're forcing it versus when you genuinely understand their bicultural experience.",
      es: "Construir una estrategia de contenido bilingüe requiere más que traducción. Aquí hay un marco de 5 pasos:\n\n1. Comprende las preferencias de idioma de tu audiencia - Encuesta a tu audiencia para aprender cuándo prefieren inglés, español o Spanglish.\n\n2. Crea narrativas culturalmente relevantes - No solo traduzcas; crea historias que honren ambas culturas y resuenen con experiencias biculturales.\n\n3. Usa el cambio de código estratégicamente - Mezcla idiomas naturalmente donde tenga sentido, tal como tu audiencia lo hace en la vida real.\n\n4. Prueba e itera basándote en el engagement - Rastrea qué contenido funciona mejor y duplica lo que funciona.\n\n5. Construye un calendario de contenido bilingüe - Planifica contenido alrededor de momentos culturales en calendarios tanto estadounidenses como latinoamericanos.\n\nLa clave es la autenticidad. Tu audiencia puede notar cuando lo estás forzando versus cuando genuinamente entiendes su experiencia bicultural.",
    },
    author: "Vemos Vamos Team",
    tags: ["Strategy", "Content", "Framework"],
    cardImage: "/images/buildingvv.png",
  },
]

export function getArticleBySlug(slug: string): CultureDeckArticle | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByType(type: CardType): CultureDeckArticle[] {
  return articles.filter((article) => article.type === type)
}
