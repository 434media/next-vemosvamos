import HeroSection from "./components/hero-section"
import CollectionSection from "./components/inspo-content"
import AboutSection from "./components/what-is-vemos"
import AnimatedSections from "./components/three-pillars"


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AnimatedSections />
    </main>
  )
}