"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const brands = [
  "/generic-brand-logo-1.png",
  "/generic-brand-logo-2.png",
  "/brand-logo-3.png",
  "/brand-logo-4.png",
  "/brand-logo-5.png",
]

export default function BrandSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let scrollAmount = 0
    const scrollSpeed = 1

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0
      }
      slider.scrollLeft = scrollAmount
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">More Than 5K+ Brands With Work Techzen</h3>
        </div>

        <div ref={sliderRef} className="flex gap-12 overflow-hidden" style={{ scrollBehavior: "auto" }}>
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={brand || "/placeholder.svg"}
                alt={`Brand ${index + 1}`}
                width={150}
                height={80}
                className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
