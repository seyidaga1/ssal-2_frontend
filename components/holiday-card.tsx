"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HolidayCardProps {
  isActive?: boolean
  imageSrc?: string
  title?: string
  message?: string
}

export default function HolidayCard({
  isActive = false,
  imageSrc = "/holiday-celebration.png",
  title = "Bayramınız Mübarək!",
  message = "Bütün komandamız adından sizə və ailənizə xoşbəxt bayram günləri arzulayırıq!",
}: HolidayCardProps) {
  const [isVisible, setIsVisible] = useState(isActive)

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="relative h-64 md:h-80 w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>

        <div className="p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  )
}
