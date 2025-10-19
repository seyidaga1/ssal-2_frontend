import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Blog from "@/components/blog"
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
      <Blog />
      <Services />
      <About />
      <FAQ />
      <BrandSlider />
      <Contact />
      <Footer />
    </main>
  )
}
