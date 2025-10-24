"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Commercial Office Building Electrical Installation",
      category: "commercial",
      image: "/electrical-grid-infrastructure.jpg",
      location: "Baku City Center",
      date: "2024",
      client: "Tech Corp Azerbaijan",
      description:
        "Complete electrical system installation for a 15-story modern office building including power distribution, lighting systems, and backup generators.",
      features: ["Power Distribution", "LED Lighting", "Emergency Systems", "Smart Controls"],
    },
    {
      id: 2,
      title: "Residential Complex Solar Panel Installation",
      category: "solar",
      image: "/solar-panels-energy.jpg",
      location: "Yasamal District",
      date: "2024",
      client: "Green Living Residences",
      description:
        "Installation of 500kW solar panel system for a residential complex, providing sustainable energy solutions for 200+ apartments.",
      features: ["Solar Panels", "Energy Storage", "Grid Integration", "Monitoring System"],
    },
    {
      id: 3,
      title: "Industrial Factory Power Infrastructure",
      category: "industrial",
      image: "/electricity-power-lines.jpg",
      location: "Sumgayit Industrial Zone",
      date: "2023",
      client: "Manufacturing Solutions LLC",
      description:
        "High-voltage power infrastructure setup for a large manufacturing facility with specialized equipment requirements.",
      features: ["High Voltage Systems", "Industrial Wiring", "Safety Systems", "Load Management"],
    },
    {
      id: 4,
      title: "Shopping Mall Electrical Renovation",
      category: "commercial",
      image: "/electrical-work-process.jpg",
      location: "Ganjlik Mall",
      date: "2023",
      client: "Retail Group Azerbaijan",
      description:
        "Complete electrical system upgrade for a major shopping center including modern lighting, HVAC controls, and security systems.",
      features: ["System Upgrade", "Energy Efficiency", "Smart Lighting", "Security Integration"],
    },
    {
      id: 5,
      title: "Luxury Villa Smart Home System",
      category: "residential",
      image: "/electrical-team-1.jpg",
      location: "Bilgah Beach",
      date: "2023",
      client: "Private Client",
      description:
        "Premium smart home electrical installation with automated lighting, climate control, and integrated security systems.",
      features: ["Smart Home", "Automation", "Security Systems", "Energy Management"],
    },
    {
      id: 6,
      title: "Hospital Emergency Power System",
      category: "commercial",
      image: "/electrical-team-2.jpg",
      location: "Central Hospital Baku",
      date: "2022",
      client: "Healthcare Ministry",
      description:
        "Critical infrastructure installation including backup generators, UPS systems, and redundant power distribution for hospital operations.",
      features: ["Backup Power", "UPS Systems", "Critical Infrastructure", "24/7 Reliability"],
    },
    {
      id: 7,
      title: "Agricultural Solar Farm Project",
      category: "solar",
      image: "/solar-panels-energy.jpg",
      location: "Shamakhi Region",
      date: "2022",
      client: "AgriTech Solutions",
      description:
        "Large-scale solar farm installation providing clean energy for agricultural operations and feeding excess power back to the grid.",
      features: ["Solar Farm", "Grid Connection", "Agricultural Integration", "Sustainable Energy"],
    },
    {
      id: 8,
      title: "Residential Neighborhood Upgrade",
      category: "residential",
      image: "/electrical-grid-infrastructure.jpg",
      location: "Nasimi District",
      date: "2022",
      client: "Municipal Government",
      description:
        "Infrastructure upgrade for an entire residential neighborhood including underground cabling, street lighting, and distribution systems.",
      features: ["Underground Cabling", "Street Lighting", "Distribution Upgrade", "Safety Enhancement"],
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "industrial", label: "Industrial" },
    { id: "solar", label: "Solar Energy" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Tamamlanmış Layihələr
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
                Kommersiya, yaşayış, sənaye və bərpa olunan enerji sektorlarında keyfiyyətli elektrik işlərimiz
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        {/* <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className="text-sm md:text-base"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section> */}

        {/* Projects Grid */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="group">
                  <article className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-[320px] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground capitalize px-3 py-1">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-white/90">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

                      {/* View Details Link */}
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
