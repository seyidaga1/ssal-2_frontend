"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Autoplay from "embla-carousel-autoplay"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const galleryAutoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  const sponsorAutoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }))

  const galleryImages = [
    "/electrical-work-process.jpg",
    "/electrical-grid-infrastructure.jpg",
    "/solar-panels-energy.jpg",
    "/electricity-power-lines.jpg",
    "/electrical-team-1.jpg",
    "/electrical-team-2.jpg",
  ]

  const certificates = [
    { id: 1, name: "ISO 9001 Certification", image: "/iso-9001-certificate.png" },
    { id: 2, name: "Electrical Safety Certificate", image: "/electrical-safety-certificate.jpg" },
    { id: 3, name: "Quality Management", image: "/quality-management-certificate.jpg" },
    { id: 4, name: "Environmental Certification", image: "/environmental-certificate.jpg" },
    { id: 5, name: "Professional License", image: "/professional-license-certificate.jpg" },
  ]

  const sponsors = [
    "/electrical-company-logo-1.jpg",
    "/electrical-company-logo-2.jpg",
    "/electrical-company-logo-3.jpg",
    "/electrical-company-logo-4.jpg",
    "/electrical-company-logo-5.jpg",
    "/electrical-company-logo-6.jpg",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* About Page Content */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="/electrical-grid-infrastructure.jpg"
              alt="Electrical infrastructure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl text-balance">
              About Our Company
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed text-pretty">
              Powering communities with reliable, sustainable electrical solutions since 2005
            </p>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Mission</h2>
                  <div className="w-20 h-1 bg-primary mb-8" />
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6 text-pretty">
                    We are committed to delivering exceptional electrical services that power homes, businesses, and
                    communities. Our mission is to provide safe, reliable, and sustainable energy solutions while
                    maintaining the highest standards of quality and customer satisfaction.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    Through innovation and expertise, we strive to be the leading provider of electrical services,
                    contributing to a more sustainable and energy-efficient future.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Certified Electricians</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">18+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">Projects Done</div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/electrical-work-process.jpg" alt="Our team at work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Work Gallery</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our projects and see the quality of our work
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[galleryAutoplay.current]}
              className="w-full"
              onMouseEnter={() => galleryAutoplay.current.stop()}
              onMouseLeave={() => galleryAutoplay.current.play()}
            >
              <CarouselContent className="-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Recognized excellence and industry-standard certifications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {certificates.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                    <CardContent className="p-6">
                      <div className="relative h-[280px] mb-4 rounded-xl overflow-hidden bg-muted">
                        <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-cover" />
                      </div>
                      <p className="text-base font-semibold text-center text-foreground leading-snug">{cert.name}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <div className="relative h-[700px] w-full">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image src="/solar-panels-energy.jpg" alt="Solar energy solutions" fill className="object-cover" />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Why Choose Us</h2>
                <div className="w-20 h-1 bg-primary mb-8" />
                <div className="space-y-5">
                  {[
                    "Licensed and insured professionals",
                    "24/7 emergency service available",
                    "Competitive pricing with transparent quotes",
                    "Latest technology and equipment",
                    "Commitment to safety and quality",
                    "Eco-friendly and sustainable solutions",
                    "100% customer satisfaction guarantee",
                    "Ongoing training and certification",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Partners & Sponsors
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trusted by leading companies in the industry
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[sponsorAutoplay.current]}
              className="w-full"
              onMouseEnter={() => sponsorAutoplay.current.stop()}
              onMouseLeave={() => sponsorAutoplay.current.play()}
            >
              <CarouselContent className="-ml-6">
                {sponsors.map((sponsor, index) => (
                  <CarouselItem key={index} className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center h-[140px] bg-muted/50 rounded-xl border-2 hover:border-primary transition-colors duration-300 p-6">
                      <Image
                        src={sponsor || "/placeholder.svg"}
                        alt={`Sponsor ${index + 1}`}
                        width={180}
                        height={100}
                        className="object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </main>
  )
}
