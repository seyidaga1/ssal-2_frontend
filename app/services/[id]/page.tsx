import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Service {
  id: number
  title: string
  description: string
  image: string | null
}

export default async function ServicePage({ params }: { params: { id: string } }) {
  const { id } = params

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/services/${id}/`, {
      // don't cache in dev — adjust as needed for production
      cache: "no-store",
    })

    if (!res.ok) {
      // throw next.js notFound to render the app's not-found UI
      return notFound()
    }

    const service: Service = await res.json()

    // Render a simple detail page
    const imageSrc = service.image
      ? (service.image.startsWith("http") ? service.image : `http://127.0.0.1:8000${service.image}`)
      : "/electrical-service-1.jpg"

    return (
      <>
        <Header />
        <main className="min-h-screen container mx-auto px-4 py-12">
        <Link href="/services" className="text-sm text-muted-foreground underline mb-6 inline-block">
          ← Back to Services
        </Link>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
            <p className="text-muted-foreground mb-6">{service.description}</p>
          </div>

          <div className="w-full md:col-span-1">
            <div className="aspect-video relative w-full overflow-hidden rounded-lg bg-gray-100">
              {/* Use a regular img tag if Image throws in some env; Image requires the domain to be allowed in next.config.mjs */}
              <Image src={imageSrc} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </>
    )
  } catch (err) {
    console.error("Error fetching service:", err)
    return notFound()
  }
}
