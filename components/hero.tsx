"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/electricity-power-lines.jpg",
    title: "Xarici elektrik təchizatı və quraşdırılması",
    subtitle: "Current Electricity Services",
    description:
      "Whether you're a homeowner, business owner, or community leader, we're here to light up your life with sustainable energy solutions that.",
  },
  {
    id: 2,
    image: "/solar-panels-energy.jpg",
    title: "Power for Seamless Electricity Solutions",
    subtitle: "Current Electricity Services",
    description:
      "Whether you're a homeowner, business owner, or community leader, we're here to light up your life with sustainable energy solutions that.",
  },
  {
    id: 3,
    image: "/electrical-grid-infrastructure.jpg",
    title: "Power for Seamless Electricity Solutions",
    subtitle: "Current Electricity Services",
    description:
      "Whether you're a homeowner, business owner, or community leader, we're here to light up your life with sustainable energy solutions that.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white pl-8 md:pl-12 lg:pl-16">
              <h5 className="text-lg md:text-xl mb-4 text-yellow-400 font-medium">{slide.subtitle}</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get A Free Estimate <span className="ml-2">→</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
                >
                  <Link href="/about">
                    Discover More <span className="ml-2">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
