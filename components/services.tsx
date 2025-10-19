"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface Service {
  id: number
  title: string
  description: string
  image: string | null
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/services/`, {
          method: 'GET',
          credentials: 'include', // Include credentials if your backend requires them
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch services')
        }
        const data = await response.json()
        setServices(data)
        setError(null)
      } catch (err) {
        setError('Error loading services. Please try again later.')
        console.error('Error fetching services:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchServices()
  }, [])
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h5 className="text-primary text-lg font-semibold mb-4">Our Service</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Electricity Service Offerings</h2>
          <p className="text-muted-foreground">
            From residential households to commercial enterprises, we provide reliable, efficient, and sustainable
            energy solutions.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            <p className="mt-4 text-muted-foreground">Loading services...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">
            {error}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image ? (service.image.startsWith('http') ? service.image : `http://127.0.0.1:8000${service.image}`) : "/electrical-service-1.jpg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Link href={`/services/${service.id}`}>
                  <h4 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{service.title}</h4>
                </Link>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </section>
  )
}
