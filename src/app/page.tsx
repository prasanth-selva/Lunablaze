import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import FocusAreasSection from '@/components/FocusAreasSection'
import InsightsSection from '@/components/InsightsSection'
import OpportunitiesSection from '@/components/OpportunitiesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#F5F5F5] selection:bg-[#E50925] selection:text-white">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:font-bold focus:text-sm"
      >
        Skip to content
      </a>
      <Preloader />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FocusAreasSection />
      <InsightsSection />
      <OpportunitiesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
