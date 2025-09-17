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

// Translation dictionary
const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    // Mobile Menu
    "menu.whyDifferent": "MEET THE TEAM",
    "menu.contentHub": "CONTENT HUB",
    "menu.connectWithUs": "CONNECT",
    "menu.followUs": "FOLLOW US",
    "menu.newsletter": "VEMOS VAMOS NEWSLETTER",
    "menu.letsConnect": "Let's Connect",
    "menu.getInTouch": "VEMOS VAMOS NEWSLETTER",
    "menu.contactDescription": "Fill out the form below and we'll get back to you soon.",

    // Hero Section
    "hero.title": "Bicultural Media for a New Generation",
    "hero.subtitle": "Empowering bilingual entrepreneurs with community and resources",
    "hero.cta": "Join Our Community",
    "hero.learnMore": "Learn More",
    "hero.videoError": "Unable to load video content",
    "hero.retry": "Retry",

    // Three Pillars
    "pillars.title": "Who We Reach",
    "pillars.subtitle": "Our community spans across diverse backgrounds",
    "pillars.content": "WE CREATE FOR THE AUDIENCE THAT LIVES IN TWO WORLDS AND BELONGS TO BOTH.",

    // Why It Matters
    "matters.title": "Why It Matters",
    "matters.titleFull": "WHY IT MATTERS ",
    "matters.subtitle": "Building bridges between cultures and opportunities",
    "matters.stat1": "U.S. Latinos hold $2.4 Trillion in consumer spending power.",
    "matters.stat2": "1 in 5 Americans is Latino – the fastest growing population in the U.S.",
    "matters.stat3": "55% of Gen Z Latinos consume bilingual content daily",

    "stats.spending": "U.S. Latinos hold",
    "stats.spendingText": "in consumer spending power.",
    "stats.spendingSource": "NielsenIQ 2024",
    "stats.population": "in",
    "stats.populationText": "Americans is Latino – the fastest growing population in the U.S.",
    "stats.content": "of Gen Z Latinos consume bilingual content daily",
    "stats.contentSource": "MRI Simmons",

    // Contact Hero
    "contact.hero.opportunities": "OPPORTUNITIES",
    "contact.hero.for": "FOR",
    "contact.hero.partnerships": "PARTNERSHIPS",
    "contact.hero.goToPartnerships": "Go to partnerships section",

    // Partnerships/Oppfor
    "partnerships.title": "What We Offer",
    "partnerships.brandedContent.title": "Branded Content Production",
    "partnerships.brandedContent.description":
      "High-impact, short-form video and photo tailored to culture-driven campaigns.",
    "partnerships.communityActivations.title": "Community Activations",
    "partnerships.communityActivations.description":
      "Weekly monologues + carousels on marketing + entrepreneurship insights.",
    "partnerships.bilingualBrand.title": "Bilingual Brand Development",
    "partnerships.bilingualBrand.description": "Visual identity, messaging, and content strategy.",
    "partnerships.culturalInsights.title": "Cultural Insights & Trends",
    "partnerships.culturalInsights.description":
      "Real-time Gen Z Latino insights to shape brand decisions and creative direction.",

    // Listo Component
    "listo.joinNewsletter": "Join Our Newsletter",
    "listo.joinNewsletterMobile": "Join Newsletter",
    "listo.openNewsletterSignup": "Open newsletter signup",
    "listo.closeNewsletterSignup": "Close newsletter signup",
    "listo.stayConnected": "Stay connected with bi-cultural resources and partnership opportunities",

    // Newsletter
    "newsletter.title": "Join the Vemos Vamos newsletter",
    "newsletter.subtitle": "Get the latest updates and insights",
    "newsletter.placeholder": "Enter your email",
    "newsletter.submit": "Subscribe",
    "newsletter.success": "Thank you for subscribing!",
    "newsletter.error": "Something went wrong. Please try again.",
    // Newsletter Form
    "newsletter.emailPlaceholder": "Enter your email",
    "newsletter.subscribe": "Subscribe",
    "newsletter.subscribing": "Subscribing...",
    "newsletter.successMessage": "Thanks for subscribing! Check your email to confirm.",
    "newsletter.errorPrefix": "An error occurred:",
    "newsletter.errorEmpty": "Please enter your email address",
    "newsletter.errorInvalid": "Please enter a valid email address",
    "newsletter.errorGeneral": "Something went wrong. Please try again.",
    "newsletter.description": "We create for the audience that lives in two worlds and belongs to both",

    // Footer
    "footer.copyright": "© 2025 Vemos Vamos. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // About Page
    "about.title": "WHY WE'RE DIFFERENT",
    "about.description":
      "We are a bilingual platform fostering entrepreneurial success through community, resources, and innovative solutions.",
    "about.femaleLed": "FEMALE-LED",
    "about.bicultural": "Authentically bicultural",
    "about.network": "Deeply embedded network",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.description": "Get in touch with our team",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.close": "Close",
    "common.open": "Open",

    // Our Team
    ourTeam: "OUR TEAM",
    culturalRelevance: "Cultural relevance, Audience trust, and Creative quality.",
    culturalRelevanceMobile: "Cultural relevance, Audience trust, and Creative quality.",
    "team.intro":
      "Bringing together 70 years of combined expertise in bilingual storytelling, design, and community-driven marketing, our team crafts meaningful brand experiences deeply rooted in Latinx culture.",

    // Experience/Active Productions
    partnershipStatement:
      "We partner with brands to define and express their identity in ways that foster genuine connections with Latinx audiences visually, verbally, and culturally.",
    activeProductions: "ACTIVE PRODUCTIONS",
    series1Title: "Series 1: Stay Local, Look Deeper",
    series1Description:
      'Weekly 1–2 min "Come With Me" videos designed to build trust through local insight + community presence.',
    series2Title: "Series 2: Creator Tips W/Vemos Vamos",
    series2Description: "Weekly monologues + carousels on marketing + entrepreneurship insights.",
    series3Title: "Series 3: Vamos A Experimentar",
    series3Description: "A bi-weekly series with creators for rapid innovation and real-time cultural relevance.",

    // Content Hub Hero
    ourExpertiseIncludes: "OUR EXPERTISE INCLUDES",
    bilingualStorytelling: "Bilingual Storytelling",
    brandIntegration: "Brand Integration &",
    partnershipDesign: "Partnership Design",
    fullStackCreative: "Full‑Stack Creative",
    production: "Production",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "nav.menu": "Menú",

    // Mobile Menu
    "menu.whyDifferent": "CONOCE AL EQUIPO",
    "menu.contentHub": "CENTRO DE CONTENIDO",
    "menu.connectWithUs": "CONÉCTATE",
    "menu.followUs": "SÍGUENOS",
    "menu.newsletter": "BOLETÍN VEMOS VAMOS",
    "menu.letsConnect": "Conectemos",
    "menu.getInTouch": "BOLETÍN VEMOS VAMOS",
    "menu.contactDescription": "Completa el formulario y te responderemos pronto.",

    // Hero Section
    "hero.title": "Periodismo Para Una Nueva Generación Bicultural",
    "hero.subtitle": "Empoderando emprendedores bilingües con comunidad y recursos",
    "hero.cta": "Únete a Nosotros",
    "hero.learnMore": "Saber Más",
    "hero.videoError": "No se pudo cargar el video",
    "hero.retry": "Reintentar",

    // Three Pillars
    "pillars.title": "A Quién Llegamos",
    "pillars.subtitle": "Nuestra comunidad abarca diversos orígenes",
    "pillars.content": "CREAMOS PARA QUIENES VIVEN EN DOS MUNDOS Y PERTENECEN A AMBOS.",

    // Why It Matters
    "matters.title": "Por Qué Importa",
    "matters.titleFull": "POR QUÉ IMPORTA? ",
    "matters.subtitle": "Construyendo puentes entre culturas y oportunidades",
    "matters.stat1": "Latinos de EE.UU. tienen $2.4 trillion en poder adquisitivo.",
    "matters.stat2": "1 de cada 5 estadounidenses es latino: la población más rápida en crecimiento.",
    "matters.stat3": "55% de latinos Gen Z consumen contenido bilingüe diariamente",

    "stats.spending": "Latinos de EE.UU. tienen",
    "stats.spendingText": "en poder adquisitivo.",
    "stats.spendingSource": "NielsenIQ 2024",
    "stats.population": "de cada",
    "stats.populationText": "estadounidenses es latino – la población más rápida en crecimiento en EE.UU.",
    "stats.populationSource": "Censo EE.UU. 2023",
    "stats.content": "de latinos Gen Z consumen contenido bilingüe diariamente",
    "stats.contentSource": "MRI Simmons",

    // Contact Hero
    "contact.hero.opportunities": "OPORTUNIDADES",
    "contact.hero.for": "PARA FORMAR",
    "contact.hero.partnerships": "ALIANZAS",
    "contact.hero.goToPartnerships": "Ir a la sección de alianzas",

    // Partnerships/Oppfor
    "partnerships.title": "Lo Que Ofrecemos",
    "partnerships.brandedContent.title": "Producción de Contenido de Marca",
    "partnerships.brandedContent.description":
      "Video y foto de alto impacto y formato corto adaptado a campañas culturales.",
    "partnerships.communityActivations.title": "Activaciones Comunitarias",
    "partnerships.communityActivations.description":
      "Monólogos semanales + carruseles sobre marketing e insights empresariales.",
    "partnerships.bilingualBrand.title": "Desarrollo de Marca Bilingüe",
    "partnerships.bilingualBrand.description": "Identidad visual, mensajería y estrategia de contenido.",
    "partnerships.culturalInsights.title": "Insights y Tendencias Culturales",
    "partnerships.culturalInsights.description":
      "Insights latinos Gen Z en tiempo real para moldear decisiones de marca y dirección creativa.",

    // Listo Component
    "listo.joinNewsletter": "Únete al Boletín",
    "listo.joinNewsletterMobile": "Únete al Boletín",
    "listo.openNewsletterSignup": "Abrir registro de boletín",
    "listo.closeNewsletterSignup": "Cerrar registro de boletín",
    "listo.stayConnected": "Mantente conectado con recursos biculturales y oportunidades de alianza",

    // Newsletter
    "newsletter.title": "Únete al boletín de Vemos Vamos",
    "newsletter.subtitle": "Recibe las últimas actualizaciones e insights",
    "newsletter.placeholder": "Ingresa tu email",
    "newsletter.submit": "Subscríbete",
    "newsletter.success": "¡Gracias por suscribirte!",
    "newsletter.error": "Algo salió mal. Por favor intenta de nuevo.",
    // Newsletter Form
    "newsletter.emailPlaceholder": "Ingresa tu correo electrónico",
    "newsletter.subscribe": "Subscríbete",
    "newsletter.subscribing": "Suscribiendo...",
    "newsletter.successMessage": "¡Gracias por suscribirte! Revisa tu correo para confirmar.",
    "newsletter.errorPrefix": "Ocurrió un error:",
    "newsletter.errorEmpty": "Por favor ingresa tu correo electrónico",
    "newsletter.errorInvalid": "Por favor ingresa un correo electrónico válido",
    "newsletter.errorGeneral": "Algo salió mal. Por favor intenta de nuevo.",
    "newsletter.description": "Creamos para la audiencia que vive en dos mundos y pertenece a ambos",

    // Footer
    "footer.copyright": "© 2025 Vemos Vamos. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",

    // About Page
    "about.title": "POR QUÉ SOMOS ÚNICOS",
    "about.description":
      "Somos una plataforma bilingüe que fomenta el éxito empresarial a través de la comunidad, recursos y soluciones innovadoras.",
    "about.femaleLed": "LIDERADO POR MUJERES",
    "about.bicultural": "Auténticamente bicultural",
    "about.network": "Red profundamente integrada",

    // Contact Page
    "contact.title": "Contáctanos",
    "contact.description": "Ponte en contacto con nuestro equipo",
    "contact.name": "Nombre",
    "contact.email": "Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.close": "Cerrar",
    "common.open": "Abrir",

    // Our Team
    ourTeam: "NUESTRO EQUIPO",
    culturalRelevance: "Relevancia cultural, calidad creativa y una audiencia que confía en nosotros.",
    culturalRelevanceMobile: "Relevancia cultural, calidad creativa y una audiencia que confía en nosotros.",
    "team.intro":
      "Reuniendo 70 años de experiencia combinada en narrativa bilingüe, diseño y marketing impulsado por la comunidad, nuestro equipo crea experiencias de marca significativas profundamente arraigadas en la cultura Latinx.",

    // Experience/Active Productions
    partnershipStatement:
      "Nos asociamos con marcas para definir y expresar su identidad de maneras que fomenten conexiones genuinas con audiencias Latinx visual, verbal y culturalmente.",
    activeProductions: "PRODUCCIONES ACTIVAS",
    series1Title: "Serie 1: Mantente Local, Mira Más Profundo",
    series1Description:
      'Videos semanales de 1-2 min "Ven Conmigo" diseñados para generar confianza a través de perspectiva local + presencia comunitaria.',
    series2Title: "Serie 2: Consejos de Creador con Vemos Vamos",
    series2Description: "Monólogos semanales + carruseles sobre marketing e insights empresariales.",
    series3Title: "Serie 3: Vamos A Experimentar",
    series3Description:
      "Una serie quincenal con creadores para innovación rápida y relevancia cultural en tiempo real.",

    // Content Hub Hero
    ourExpertiseIncludes: "NUESTRAS ESPECIALIDADES ",
    bilingualStorytelling: "Narrativa Bilingüe",
    brandIntegration: "Integración de Marca &",
    partnershipDesign: "Diseño de Alianzas",
    fullStackCreative: "Producción Creativa",
    production: "Completa",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("vv-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      console.log("[v0] Loading saved language:", savedLanguage)
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    console.log("[v0] Toggling language from", language, "to", newLanguage)
    setLanguage(newLanguage)
    localStorage.setItem("vv-language", newLanguage)
  }

  const t = (key: string): string => {
    const translation = translations[language][key as keyof (typeof translations)["en"]] || key
    console.log("[v0] Translating key:", key, "to:", translation, "for language:", language)
    return translation
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
