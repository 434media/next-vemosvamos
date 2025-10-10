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
    "menu.partnerships": "PARTNERSHIPS",
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

    // Connect Form
    "connect.form.title": "Let's Collaborate Together!",
    "connect.form.subtitle": "Fill out the form below and our team will get back to you soon.",
    "connect.form.fullName": "Full Name*",
    "connect.form.email": "Email Address*",
    "connect.form.phone": "Phone Number",
    "connect.form.company": "Company / Brand Name",
    "connect.form.city": "City",
    "connect.form.state": "State",
    "connect.form.country": "Country",
    "connect.form.message": "Tell us more about your idea or request*",
    "connect.form.consent": "I agree to be contacted by the Vemos Vamos team regarding my request.",
    "connect.form.send": "SEND MESSAGE",
    "connect.form.sending": "SENDING...",
    "connect.form.success": "Thank you for reaching out! We'll get back to you soon.",
    "connect.form.errorTurnstile": "Please complete the security verification",
    "connect.form.errorGeneral": "Something went wrong. Please try again.",

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
    "team.member1.title": "Creative Director",
    "team.member1.description": "Leading brand vision and creative strategy with over 8 years of experience.",
    "team.member2.title": "Graphic Design",
    "team.member2.description":
      "Diana García is a bilingual brand strategist, creative director, and Owner of Veintidós Studios (22 Studios).",
    "team.member3.title": "Digital Marketing",
    "team.member3.description":
      "First-generation Mexican-American rooted in faith, culture, and service, passionate about using creativity to uplift communities and tell meaningful stories.",
    "team.member4.title": "Web Developer",
    "team.member4.description":
      "Creative software engineer with a focus on user-experience, loves building responsive, full-stack web applications.",
    "team.member5.title": "VP Business Development",
    "team.member5.description":
      "Helping connect brands to opportunities for growth by leveraging strategic insights, creative solutions, and targeted marketing approaches to drive success.",
    "team.member6.title": "Founder / CEO",
    "team.member6.description": "Visionary leader with a passion for innovation and creativity.",

    // Content Hub Hero translations
    ourExpertiseIncludes: "OUR EXPERTISE INCLUDES",
    bilingualStorytelling: "BILINGUAL STORYTELLING",
    brandIntegration: "BRAND INTEGRATION +",
    partnershipDesign: "PARTNERSHIP DESIGN",
    fullStackCreative: "FULL-STACK CREATIVE",
    production: "PRODUCTION",

    // Our Exp2 translations
    partnershipStatement: "WE PARTNER WITH BRANDS TO CREATE CULTURALLY RELEVANT CONTENT THAT RESONATES",
    activeProductions: "ACTIVE PRODUCTIONS",
    series1Title: "VEMOS VAMOS PODCAST",
    series1Description:
      "Weekly monologues + carousels on marketing + entrepreneurship insights. Hosted by Marcos Resendez, founder of Vemos Vamos.",
    series2Title: "BICULTURAL BUSINESS SERIES",
    series2Description:
      "Short-form video series highlighting Latino entrepreneurs building businesses rooted in culture and community.",
    series3Title: "BRAND SPOTLIGHT FEATURES",
    series3Description:
      "Collaborative content showcasing brands making an impact in Latino communities through authentic storytelling.",
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
    "menu.partnerships": "ALIANZAS",
    "menu.followUs": "SÍGUENOS",
    "menu.newsletter": "BOLETÍN VEMOS VAMOS",
    "menu.letsConnect": "Conectemos",
    "menu.getInTouch": "BOLETÍN VEMOS VAMOS",
    "menu.contactDescription": "Completa el formulario y nuestro equipo te responderá pronto.",

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
    "newsletter.placeholder": "Ingresa tu correo electrónico",
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
    "newsletter.description": "creamos para la audiencia que vive en dos mundos y pertenece a ambos",

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

    // Connect Form
    "connect.form.title": "Colaboremos Juntos!",
    "connect.form.subtitle": "Completa el formulario y nuestro equipo te responderá pronto.",
    "connect.form.fullName": "Nombre Completo*",
    "connect.form.email": "Correo Electrónico*",
    "connect.form.phone": "Número de Teléfono",
    "connect.form.company": "Empresa / Nombre de Marca",
    "connect.form.city": "Ciudad",
    "connect.form.state": "Estado",
    "connect.form.country": "País",
    "connect.form.message": "Cuéntanos más sobre tu idea o solicitud*",
    "connect.form.consent": "Acepto ser contactado por el equipo de Vemos Vamos con respecto a mi solicitud.",
    "connect.form.send": "ENVIAR MENSAJE",
    "connect.form.sending": "ENVIANDO...",
    "connect.form.success": "¡Gracias por contactarnos! Te responderemos pronto.",
    "connect.form.errorTurnstile": "Por favor completa la verificación de seguridad",
    "connect.form.errorGeneral": "Algo salió mal. Por favor intenta de nuevo.",

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
    "team.member1.title": "Directora Creativa",
    "team.member1.description": "Liderando la visión de marca y estrategia creativa con más de 8 años de experiencia.",
    "team.member2.title": "Diseño Gráfico",
    "team.member2.description":
      "Diana García es una estratega de marca bilingüe, directora creativa y propietaria de Veintidós Studios (22 Studios).",
    "team.member3.title": "Marketing Digital",
    "team.member3.description":
      "Mexicana-americana de primera generación arraigada en la fe, la cultura y el servicio, apasionada por usar la creatividad para elevar comunidades y contar historias significativas.",
    "team.member4.title": "Desarrolladora Web",
    "team.member4.description":
      "Ingeniera de software creativa con enfoque en experiencia de usuario, le encanta construir aplicaciones web responsivas y full-stack.",
    "team.member5.title": "VP Desarrollo de Negocios",
    "team.member5.description":
      "Ayudando a conectar marcas con oportunidades de crecimiento aprovechando insights estratégicos, soluciones creativas y enfoques de marketing dirigidos para impulsar el éxito.",
    "team.member6.title": "Fundador / CEO",
    "team.member6.description": "Líder visionario con pasión por la innovación y la creatividad.",

    // Content Hub Hero translations in Spanish
    ourExpertiseIncludes: "NUESTRA EXPERIENCIA INCLUYE",
    bilingualStorytelling: "NARRATIVA BILINGÜE",
    brandIntegration: "INTEGRACIÓN DE MARCA +",
    partnershipDesign: "DISEÑO DE ALIANZAS",
    fullStackCreative: "PRODUCCIÓN CREATIVA",
    production: "COMPLETA",

    // Our Exp2 translations in Spanish
    partnershipStatement: "NOS ASOCIAMOS CON MARCAS PARA CREAR CONTENIDO CULTURALMENTE RELEVANTE QUE RESUENA",
    activeProductions: "PRODUCCIONES ACTIVAS",
    series1Title: "PODCAST VEMOS VAMOS",
    series1Description:
      "Monólogos semanales + carruseles sobre marketing e insights empresariales. Presentado por Marcos Resendez, fundador de Vemos Vamos.",
    series2Title: "SERIE DE NEGOCIOS BICULTURALES",
    series2Description:
      "Serie de videos cortos destacando emprendedores latinos construyendo negocios arraigados en cultura y comunidad.",
    series3Title: "DESTACADOS DE MARCAS",
    series3Description:
      "Contenido colaborativo mostrando marcas que impactan comunidades latinas a través de narrativa auténtica.",
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
