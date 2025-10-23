import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Zap, Shield, Clock, Award, Users, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      id: "1",
      title: "Residential Electrical Services",
      description:
        "Complete electrical solutions for your home including installations, repairs, and upgrades. Our certified electricians ensure your home's electrical system is safe, efficient, and up to code.",
      image: "/electrical-service-1.jpg",
      highlights: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Safety Inspections"],
    },
    {
      id: "2",
      title: "Commercial Electrical Solutions",
      description:
        "Professional electrical services for businesses, offices, and commercial properties. We handle everything from new installations to maintenance and emergency repairs with minimal disruption to your operations.",
      image: "/electrical-service-2.jpg",
      highlights: ["Office Electrical Systems", "Emergency Lighting", "Power Distribution", "Maintenance Contracts"],
    },
    {
      id: "3",
      title: "Solar Energy Installation",
      description:
        "Harness the power of the sun with our professional solar panel installation services. Reduce your energy bills and carbon footprint with clean, renewable solar energy tailored to your property.",
      image: "/solar-panels-energy.jpg",
      highlights: ["Solar Panel Installation", "Battery Storage", "Grid Integration", "Energy Monitoring"],
    },
    {
      id: "4",
      title: "Smart Home Automation",
      description:
        "Transform your home into a smart, connected space with our automation services. Control lighting, climate, security, and more from your smartphone or voice commands for ultimate convenience.",
      image: "/electrical-service-3.jpg",
      highlights: ["Smart Lighting", "Voice Control", "Security Integration", "Energy Management"],
    },
    {
      id: "5",
      title: "EV Charging Station Installation",
      description:
        "Professional installation of electric vehicle charging stations for homes and businesses. Fast, reliable charging solutions that make owning an EV more convenient and cost-effective.",
      image: "/electrical-work-process.jpg",
      highlights: ["Home Chargers", "Commercial Stations", "Fast Charging", "Smart Charging"],
    },
    {
      id: "6",
      title: "24/7 Emergency Electrical Services",
      description:
        "Round-the-clock emergency electrical services for urgent repairs and power outages. Our rapid response team is available 24/7 to restore your power and ensure your safety.",
      image: "/electrical-grid-infrastructure.jpg",
      highlights: ["24/7 Availability", "Rapid Response", "Emergency Repairs", "Power Restoration"],
    },
    {
      id: "7",
      title: "Industrial Electrical Systems",
      description:
        "Heavy-duty electrical solutions for industrial facilities, factories, and manufacturing plants. We design, install, and maintain robust electrical systems that keep your operations running smoothly.",
      image: "/electricity-power-lines.jpg",
      highlights: ["High-Voltage Systems", "Motor Controls", "Industrial Automation", "Preventive Maintenance"],
    },
    {
      id: "8",
      title: "Energy Efficiency Audits",
      description:
        "Comprehensive energy audits to identify savings opportunities and improve efficiency. Our experts analyze your energy consumption and provide actionable recommendations to reduce costs.",
      image: "/power-icon.jpg",
      highlights: ["Consumption Analysis", "Cost Reduction", "Efficiency Upgrades", "ROI Calculations"],
    },
    {
      id: "9",
      title: "Backup Power & Generator Systems",
      description:
        "Reliable backup power solutions including generator installation and maintenance. Ensure uninterrupted power supply for your home or business during outages with our professional systems.",
      image: "/engine-icon.png",
      highlights: ["Generator Installation", "Automatic Transfer", "Maintenance Plans", "Fuel Systems"],
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "Emergency services available 24/7 with rapid response times to keep your power running.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All work complies with national safety standards and regulations for your peace of mind.",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We respect your time with punctual arrivals and efficient project completion.",
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Our team consists of licensed electricians with years of industry experience.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated support team ensuring your satisfaction from start to finish.",
    },
    {
      icon: TrendingUp,
      title: "Energy Efficiency",
      description: "Solutions designed to reduce your energy consumption and lower utility bills.",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Contact us for a free consultation. We'll discuss your needs and provide expert recommendations.",
    },
    {
      step: "02",
      title: "Assessment",
      description: "Our team conducts a thorough on-site assessment to understand your electrical requirements.",
    },
    {
      step: "03",
      title: "Proposal",
      description: "Receive a detailed proposal with transparent pricing and timeline for your project.",
    },
    {
      step: "04",
      title: "Implementation",
      description: "Our certified electricians execute the work with precision, safety, and minimal disruption.",
    },
    {
      step: "05",
      title: "Quality Check",
      description: "Comprehensive testing and inspection to ensure everything meets our high standards.",
    },
    {
      step: "06",
      title: "Follow-up",
      description: "Ongoing support and maintenance to keep your electrical systems running optimally.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <Image src="/electricity-power-lines.jpg" alt="Electrical services" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl text-balance">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed text-pretty">
            Comprehensive electrical solutions for every need
          </p>
        </div>
      </section>

      {/* Services Section with Zigzag Layout */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Electrical Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional electrical solutions tailored to your specific needs
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <Link key={service.id} href={`/services/${service.id}`} className="block group">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
                  >
                    {/* Image Section */}
                    <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                      <div className="relative h-[400px] rounded-2xl overflow-hidden border-4 border-border shadow-xl group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                      <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          Service {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-balance group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {service.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Service Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A streamlined approach to delivering exceptional electrical services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col h-full p-6 rounded-xl border-2 border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Contact us today for a free consultation and let us help you with all your electrical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
