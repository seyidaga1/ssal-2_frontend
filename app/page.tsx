import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Projects from "@/components/projects"
import Services from "@/components/services"
import About from "@/components/about"
import FAQ from "@/components/faq"
import BrandSlider from "@/components/brand-slider"
import Contact from "@/components/contact"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Projects limit={6}/>
      <Services limit={3} />
      <About />
      <FAQ />
      <BrandSlider />
      <Contact />
      <Footer />
      <HolidayCard
        isActive={showHolidayCard}
        imageSrc="./public/holiday-celebration.png"
        title="Bayramınız Mübarək!"
        message="Bütün komandamız adından sizə və ailənizə xoşbəxt bayram günləri arzulayırıq!"
      />
    </main>
  )
}
