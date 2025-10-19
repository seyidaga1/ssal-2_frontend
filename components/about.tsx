import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image src="/electrical-team-1.jpg" alt="About us" fill className="object-cover" />
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mt-8">
                <Image src="/electrical-team-2.jpg" alt="About us" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <h3 className="text-4xl font-bold mb-1">
                <span className="text-5xl">12</span>+
              </h3>
              <p className="text-sm">Years of Experienced</p>
            </div>
          </div>

          <div>
            <h5 className="text-primary text-lg font-semibold mb-4">About Us</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Charged with Purpose to Shaping Future of Energy
            </h2>
            <p className="text-muted-foreground mb-6">
              We more than just a provider of electricity services - we're pioneers in the energy industry, dedicated to
              shaping a brighter, more sustainable future for all.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Highlight the unique features or benefits</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Our Commitment to Sustainable Energy</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Present your main solutions/services.</span>
              </li>
            </ul>

            <Button asChild size="lg">
              <Link href="/about">
                About Us <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
