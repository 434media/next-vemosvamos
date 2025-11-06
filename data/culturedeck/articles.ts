import type { CultureDeckArticle, CardType } from "../../lib/types/culturedeck"

// Fallback data for Culture Deck - matches new Airtable structure
// Sorted by most recent published_date first
export const fallbackArticles: CultureDeckArticle[] = [
  {
    id: "deck002",
    slug: "434-crashes-sasw-10th-year",
    date: "2025-11-03",
    title: {
      en: "434 Crashes SASW 10th Year",
      es: "434 Se Estrella en SASW Año 10"
    },
    type: "la tendencia",
    summary: {
      en: "If SASW 2025 proved anything, it's that San Antonio has incredible momentum right now and it's fueled by those bold enough to imagine what's next.",
      es: "Si SASW 2025 demostró algo, es que San Antonio tiene un impulso increíble en este momento y está impulsado por aquellos lo suficientemente audaces como para imaginar lo que sigue."
    },
    content: {
      en: "San Antonio Startup Week showcased the city's growing tech ecosystem and entrepreneurial spirit.",
      es: "La Semana de Startups de San Antonio mostró el creciente ecosistema tecnológico y espíritu empresarial de la ciudad."
    },
    author: "Digital Canvas Team",
    tags: ["development", "Design", "technology"],
    cardImage: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/434-crashes-sasw-10th-year-og.png",
    
    heroImage: {
      desktop: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/November+Cover_Desktop.jpg",
      mobile: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/November+Cover.jpg"
    },
    foundersNote: {
      text: {
        en: "It's been a busy month! From <strong>Texas Venture Fest</strong>, where we talked a lil' pinche, through <strong>San Antonio Startup Week</strong>, one theme kept echoing:<br/><br/><strong>San Antonio Rising!</strong><br/><br/>As we stand on the precipice of a historic vote, I'm reminded of the confidence we found in the people and partners shaping this city's future. The energy, ambition, and creativity we witnessed this week are proof that San Antonio's future is as bright as the minds fueling the current conversation.<br/><br/>As for 11/4: <strong>Don't be a Goober…again.</strong>",
        es: "¡Ha sido un mes ocupado! Desde <strong>Texas Venture Fest</strong>, donde hablamos un poquito, hasta <strong>San Antonio Startup Week</strong>, un tema siguió resonando:<br/><br/><strong>¡San Antonio en Ascenso!</strong><br/><br/>Mientras estamos al borde de una votación histórica, me recuerda la confianza que encontramos en las personas y socios que están dando forma al futuro de esta ciudad. La energía, ambición y creatividad que presenciamos esta semana son prueba de que el futuro de San Antonio es tan brillante como las mentes que alimentan la conversación actual.<br/><br/>En cuanto al 11/4: <strong>No seas un Goober…otra vez.</strong>"
      },
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/Marcos5.PNG"
    },
    lastMonthGif: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/motion.gif",
    theDropGif: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/drop.gif",
    featuredPost: {
      title: {
        en: "434 Crashes SASW 10th Year",
        es: "434 Se Estrella en SASW Año 10"
      },
      content: {
        en: "As the sun set over downtown from the top of 300 Main, our team joined hundreds of founders, creators, and dreamers at TechBloc's networking mixer during <strong>San Antonio Startup Week 2025</strong>. The space was alive with conversation, ideas traded hands as easily as handshakes, and the view mirrored the energy of a city on the rise.<br/><br/>It was also a night of milestones, as <strong>Beto Altamirano</strong> took the mic for his first public address as <strong>TechBloc's new CEO</strong>, sharing a message that resonated across the rooftop:<br/><br/>\"The next Rackspace, the next tech company to put San Antonio on the global map is already taking shape.\"<br/><br/>If SASW 2025 proved anything, it's that San Antonio has incredible momentum right now and it's fueled by those bold enough to imagine what's next.",
        es: "Mientras el sol se ponía sobre el centro desde la cima de 300 Main, nuestro equipo se unió a cientos de fundadores, creadores y soñadores en el mixer de networking de TechBloc durante la <strong>Semana de Startups de San Antonio 2025</strong>. El espacio estaba vivo con conversación, las ideas se intercambiaban tan fácilmente como los apretones de manos, y la vista reflejaba la energía de una ciudad en ascenso.<br/><br/>También fue una noche de hitos, cuando <strong>Beto Altamirano</strong> tomó el micrófono para su primer discurso público como <strong>nuevo CEO de TechBloc</strong>, compartiendo un mensaje que resonó en toda la azotea:<br/><br/>\"El próximo Rackspace, la próxima empresa tecnológica que ponga a San Antonio en el mapa global ya se está formando.\"<br/><br/>Si SASW 2025 demostró algo, es que San Antonio tiene un impulso increíble en este momento y está impulsado por aquellos lo suficientemente audaces como para imaginar lo que sigue."
      },
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/saswcrash.jpeg"
    },
    upcomingEvent: {
      title: {
        en: "The First Python Conference in San Antonio",
        es: "La Primera Conferencia de Python en San Antonio"
      },
      description: {
        en: "Alamo Python, the PyTexas Foundation, and DEVSA are excited to activate the first-ever Python conference in San Antonio!",
        es: "¡Alamo Python, la Fundación PyTexas y DEVSA están emocionados de activar la primera conferencia de Python en San Antonio!"
      },
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/flyers-11-python.png",
      ctaText: {
        en: "Explore Events",
        es: "Explorar Eventos"
      },
      ctaLink: "https://www.434media.com/events"
    },
    spotlights: [
      {
        title: {
          en: "Emerge and Rise Open House",
          es: "Casa Abierta de Emerge and Rise"
        },
        description: {
          en: "Vemos Vamos & DevSA link up with Lina Rugova and Christine Colburn for a closer look at the vision behind Emerge and Rise.",
          es: "Vemos Vamos & DevSA se conectan con Lina Rugova y Christine Colburn para una mirada más cercana a la visión detrás de Emerge and Rise."
        },
        image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/emergeopenhouse.jpeg",
        ctaText: {
          en: "Learn More",
          es: "Aprende Más"
        },
        ctaLink: "https://emergeandrise.org/"
      },
      {
        title: {
          en: "Cine Las Americas",
          es: "Cine Las Américas"
        },
        description: {
          en: "Our very own Miguel Cedillo struck a chord at this years Cine Las Americas International Film Festival.",
          es: "Nuestro propio Miguel Cedillo tocó una fibra sensible en el Festival Internacional de Cine Las Américas de este año."
        },
        image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/cinemiguel.jpeg",
        ctaText: {
          en: "Learn More",
          es: "Aprende Más"
        },
        ctaLink: "https://cinelasamericas.org/"
      },
      {
        title: {
          en: "Closing the Digital Gap",
          es: "Cerrando la Brecha Digital"
        },
        description: {
          en: "What happens when 110 families suddenly get access to tech they never had? TechBloc, Human-I-T, and SA Hope Center teamed up to find out. See how access to technology is still reshaping health and economic equity.",
          es: "¿Qué pasa cuando 110 familias de repente obtienen acceso a tecnología que nunca tuvieron? TechBloc, Human-I-T y SA Hope Center se unieron para descubrirlo. Ve cómo el acceso a la tecnología sigue reformando la equidad de salud y económica."
        },
        image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/closinggap.jpg",
        ctaText: {
          en: "Learn More",
          es: "Aprende Más"
        },
        ctaLink: "https://www.sanantoniotechday.com/"
      }
    ]
  },
  {
    id: "deck001",
    slug: "the-road-to-rgvsw",
    date: "2025-06-02",
    title: {
      en: "The Road to RGVSW",
      es: "El Camino a RGVSW"
    },
    type: "el movimiento",
    summary: {
      en: "You can't tell meaningful stories from a distance which is why our team headed to Brownsville for RGV Startup Week 2025.",
      es: "No puedes contar historias significativas desde la distancia, por eso nuestro equipo se dirigió a Brownsville para la Semana de Startups RGV 2025."
    },
    content: {
      en: "Whether it's SDOH work in the Valley, closing the digital gap with TechBloc, supporting ecosystem builders at Emerge and Rise, or sharing a message with a connected community — it all comes back to one thing: access.",
      es: "Ya sea trabajo de SDOH en el Valle, cerrar la brecha digital con TechBloc, apoyar a los constructores de ecosistemas en Emerge and Rise, o compartir un mensaje con una comunidad conectada — todo se reduce a una cosa: acceso."
    },
    author: "Digital Canvas Team",
    tags: ["development", "Design", "technology"],
    cardImage: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/434-crashes-sasw-10th-year-og.png",
    
    heroImage: {
      desktop: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/November+Cover_Desktop.jpg",
      mobile: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/November+Cover.jpg"
    },
    foundersNote: {
      text: {
        en: "It's been a busy month! From <strong>Texas Venture Fest</strong>, where we talked a lil' pinche, through <strong>San Antonio Startup Week</strong>, one theme kept echoing:<br/><br/><strong>San Antonio Rising!</strong><br/><br/>As we stand on the precipice of a historic vote, I'm reminded of the confidence we found in the people and partners shaping this city's future. The energy, ambition, and creativity we witnessed this week are proof that San Antonio's future is as bright as the minds fueling the current conversation.<br/><br/>As for 11/4: <strong>Don't be a Goober…again.</strong>",
        es: "¡Ha sido un mes ocupado! Desde <strong>Texas Venture Fest</strong>, donde hablamos un poquito, hasta <strong>San Antonio Startup Week</strong>, un tema siguió resonando:<br/><br/><strong>¡San Antonio en Ascenso!</strong><br/><br/>Mientras estamos al borde de una votación histórica, me recuerda la confianza que encontramos en las personas y socios que están dando forma al futuro de esta ciudad. La energía, ambición y creatividad que presenciamos esta semana son prueba de que el futuro de San Antonio es tan brillante como las mentes que alimentan la conversación actual.<br/><br/>En cuanto al 11/4: <strong>No seas un Goober…otra vez.</strong>"
      },
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/Marcos5.PNG"
    },
    lastMonthGif: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/motion.gif",
    theDropGif: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/drop.gif",
    featuredPost: {
      title: {
        en: "434 Crashes SASW 10th Year",
        es: "434 Se Estrella en SASW Año 10"
      },
      content: {
        en: "As the sun set over downtown from the top of 300 Main, our team joined hundreds of founders, creators, and dreamers at TechBloc's networking mixer during <strong>San Antonio Startup Week 2025</strong>. The space was alive with conversation, ideas traded hands as easily as handshakes, and the view mirrored the energy of a city on the rise.<br/><br/>It was also a night of milestones, as <strong>Beto Altamirano</strong> took the mic for his first public address as <strong>TechBloc's new CEO</strong>, sharing a message that resonated across the rooftop:<br/><br/>\"The next Rackspace, the next tech company to put San Antonio on the global map is already taking shape.\"<br/><br/>If SASW 2025 proved anything, it's that San Antonio has incredible momentum right now and it's fueled by those bold enough to imagine what's next.",
        es: "Mientras el sol se ponía sobre el centro desde la cima de 300 Main, nuestro equipo se unió a cientos de fundadores, creadores y soñadores en el mixer de networking de TechBloc durante la <strong>Semana de Startups de San Antonio 2025</strong>. El espacio estaba vivo con conversación, las ideas se intercambiaban tan fácilmente como los apretones de manos, y la vista reflejaba la energía de una ciudad en ascenso.<br/><br/>También fue una noche de hitos, cuando <strong>Beto Altamirano</strong> tomó el micrófono para su primer discurso público como <strong>nuevo CEO de TechBloc</strong>, compartiendo un mensaje que resonó en toda la azotea:<br/><br/>\"El próximo Rackspace, la próxima empresa tecnológica que ponga a San Antonio en el mapa global ya se está formando.\"<br/><br/>Si SASW 2025 demostró algo, es que San Antonio tiene un impulso increíble en este momento y está impulsado por aquellos lo suficientemente audaces como para imaginar lo que sigue."
      },
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/saswcrash.jpeg"
    },
    upcomingEvent: {
      title: {
        en: "The First Python Conference in San Antonio",
        es: "La Primera Conferencia de Python en San Antonio"
      },
      description: {
        en: "Alamo Python, the PyTexas Foundation, and DEVSA are excited to activate the first-ever Python conference in San Antonio!",
        es: "¡Alamo Python, la Fundación PyTexas y DEVSA están emocionados de activar la primera conferencia de Python en San Antonio!"
      },
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/flyers-11-python.png",
      ctaText: {
        en: "Explore Events",
        es: "Explorar Eventos"
      },
      ctaLink: "https://www.434media.com/events"
    },
    spotlights: [
      {
        title: {
          en: "Expanding the Mission of Collaboration",
          es: "Expandiendo la Misión de Colaboración"
        },
        description: {
          en: "<strong>AIM 2026</strong> returns with an expanded focus on creating an always-on environment that connects AIM programming to the broader innovation ecosystem through <strong>VelocityTX</strong> and community partnerships.<br/><br/>This year-round approach strengthens collaboration across academia, industry, and the military—cementing San Antonio's position as a national hub for bioscience, dual-use innovation, and economic growth. Curious about innovating in the Federal space?",
          es: "<strong>AIM 2026</strong> regresa con un enfoque expandido en crear un ambiente siempre activo que conecta la programación de AIM al ecosistema de innovación más amplio a través de <strong>VelocityTX</strong> y asociaciones comunitarias.<br/><br/>Este enfoque durante todo el año fortalece la colaboración entre la academia, la industria y el ejército, cementando la posición de San Antonio como un centro nacional para biociencia, innovación de doble uso y crecimiento económico. ¿Tienes curiosidad sobre innovar en el espacio Federal?"
        },
        image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/aimannounced.png",
        ctaText: {
          en: "Register Now!",
          es: "¡Regístrate Ahora!"
        },
        ctaLink: "https://www.aimsatx.com/"
      },
      {
        title: {
          en: "Vemos Vamos Launches The Culture Deck",
          es: "Vemos Vamos Lanza The Culture Deck"
        },
        description: {
          en: "You're early — and that's a good thing. This growing library functions like a hand of cards, a set of creative insights and cultural drops you can use to play smarter in business and storytelling. Be the first to receive The Culture Deck when it launches.",
          es: "Llegas temprano — y eso es algo bueno. Esta biblioteca en crecimiento funciona como una mano de cartas, un conjunto de insights creativos y drops culturales que puedes usar para jugar más inteligentemente en negocios y storytelling. Sé el primero en recibir The Culture Deck cuando se lance."
        },
        image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/vemosinsights.jpg",
        ctaText: {
          en: "Subscribe Here",
          es: "Suscríbete Aquí"
        },
        ctaLink: "https://www.vemosvamos.com/"
      },
      {
        title: {
          en: "learn2AI Launched with a Bold Vision for the 210",
          es: "learn2AI Se Lanza con una Visión Audaz para el 210"
        },
        description: {
          en: "<strong>San Antonio Startup Week</strong> may have wrapped, but the momentum continues. This year, Learn2AI, 434 MEDIA, and DEVSA set out to make San Antonio one of the most AI-literate cities by 2030.<br/><br/>The collaboration debuted with an interactive workshop where founders and small businesses got a peek under the hood of agenticAI, exploring the technical layers behind how functional AI agents are built and applied in real-world use cases.<br/><br/>Read the full story and see what's next for this collaboration.",
          es: "La <strong>Semana de Startups de San Antonio</strong> puede haber terminado, pero el impulso continúa. Este año, Learn2AI, 434 MEDIA y DEVSA se propusieron hacer de San Antonio una de las ciudades más alfabetizadas en IA para 2030.<br/><br/>La colaboración debutó con un taller interactivo donde fundadores y pequeños negocios echaron un vistazo bajo el capó de agenticAI, explorando las capas técnicas detrás de cómo los agentes de IA funcionales se construyen y aplican en casos de uso del mundo real.<br/><br/>Lee la historia completa y ve qué sigue para esta colaboración."
        },
        image: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/agents.png",
        ctaText: {
          en: "Learn More",
          es: "Aprende Más"
        },
        ctaLink: "https://www.434media.com/blog/a-new-chapter-for-san-antonios-tech-community"
      }
    ]
  }
]

// Example non-newsletter articles for testing different card types
export const fallbackInsightArticles: CultureDeckArticle[] = [
  {
    id: "insight001",
    slug: "bilingual-marketing-insights",
    date: "2025-01-15",
    title: {
      en: "The Rise of Bilingual Brand Storytelling",
      es: "El Auge de la Narrativa de Marca Bilingüe"
    },
    type: "el insight",
    summary: {
      en: "Brands that authentically integrate bilingual content see 3x higher engagement rates among Gen Z Latino audiences.",
      es: "Las marcas que integran auténticamente contenido bilingüe ven tasas de participación 3 veces más altas entre las audiencias latinas de la Generación Z."
    },
    content: {
      en: "Recent data shows that bilingual content isn't just a nice-to-have—it's essential for reaching the fastest-growing consumer segment in the U.S.\n\nGen Z Latinos, who make up 25% of Gen Z overall, are driving a cultural shift that demands authentic representation. They don't just want to see Spanish words thrown into English campaigns; they want brands that understand the nuances of living between two languages and cultures.\n\nSuccessful bilingual storytelling requires more than translation—it requires cultural fluency and genuine connection to the community you're trying to reach.",
      es: "Datos recientes muestran que el contenido bilingüe no es solo algo agradable de tener, es esencial para llegar al segmento de consumidores de más rápido crecimiento en EE.UU.\n\nLos Latinos de la Generación Z, que representan el 25% de la Generación Z en general, están impulsando un cambio cultural que exige representación auténtica. No solo quieren ver palabras en español arrojadas a campañas en inglés; quieren marcas que entiendan los matices de vivir entre dos idiomas y culturas.\n\nLa narrativa bilingüe exitosa requiere más que traducción—requiere fluidez cultural y conexión genuina con la comunidad que estás tratando de alcanzar."
    },
    author: "Strawberry Stacy",
    tags: ["Marketing", "Bilingual", "Gen Z"],
    link: "https://devsa.community",
    cardImage: "https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/buildingvv.png"
  }
]

// Combine all fallback articles
export const allFallbackArticles: CultureDeckArticle[] = [
  ...fallbackArticles,
  ...fallbackInsightArticles
]

// Export card types and topics for consistency
export const cardTypes: CardType[] = ["el insight", "la tendencia", "el movimiento", "el flavor", "el takeaway", "el podcast"]
export const topics = [
  "community",
  "Innovation", 
  "creative",
  "development",
  "Design",
  "technology",
  "Marketing",
  "Bilingual",
  "Gen Z",
  "Collaboration",
  "Trends"
]
