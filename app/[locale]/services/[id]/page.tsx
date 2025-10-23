import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowLeft, Phone, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Backend service interface
interface Service {
  id: number
  title_az: string
  title_ru: string
  title_en: string
  description_az: string
  description_ru: string
  description_en: string
  image: string | null
  overview_az?: string
  overview_ru?: string
  overview_en?: string
}

async function getService(id: string): Promise<Service | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://157.173.118.59'
  
  try {
    const res = await fetch(`${apiUrl}/api/services/${id}/`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      return null
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

const servicesData = {
  "residential-electrical": {
    title: "Residential Electrical Services",
    description:
      "Complete electrical solutions for your home including installations, repairs, and upgrades. Our certified electricians ensure your home's electrical system is safe, efficient, and up to code.",
    image: "/electrical-service-1.jpg",
    heroImage: "/electrical-service-1.jpg",
    overview:
      "Your home's electrical system is the backbone of modern living. From powering your appliances to keeping your family safe, reliable electrical service is essential. Our residential electrical services cover everything from simple repairs to complete home rewiring, ensuring your electrical system meets current safety standards and your family's needs.",
    services: [
      {
        title: "Electrical Installations",
        items: [
          "New home electrical wiring",
          "Outlet and switch installation",
          "Ceiling fan installation",
          "Light fixture installation",
          "GFCI outlet installation",
          "USB outlet installation",
        ],
      },
      {
        title: "Electrical Repairs",
        items: [
          "Circuit breaker repairs",
          "Outlet and switch repairs",
          "Lighting repairs",
          "Electrical troubleshooting",
          "Power outage diagnosis",
          "Flickering lights repair",
        ],
      },
      {
        title: "Electrical Upgrades",
        items: [
          "Electrical panel upgrades",
          "Home rewiring",
          "Surge protection installation",
          "Smoke detector installation",
          "Carbon monoxide detector installation",
          "Whole-home generator installation",
        ],
      },
    ],
    benefits: [
      "Licensed and insured electricians",
      "Same-day service available",
      "Upfront pricing with no hidden fees",
      "Lifetime warranty on workmanship",
      "Clean and professional service",
      "Code-compliant installations",
    ],
    process: [
      {
        step: "1",
        title: "Schedule Consultation",
        description: "Contact us to schedule a convenient time for our electrician to visit your home.",
      },
      {
        step: "2",
        title: "Assessment & Quote",
        description: "We assess your electrical needs and provide a detailed, transparent quote.",
      },
      {
        step: "3",
        title: "Professional Installation",
        description: "Our certified electricians complete the work efficiently and safely.",
      },
      {
        step: "4",
        title: "Testing & Cleanup",
        description: "We test all work thoroughly and leave your home clean and tidy.",
      },
    ],
  },
  "commercial-electrical": {
    title: "Commercial Electrical Solutions",
    description:
      "Professional electrical services for businesses, offices, and commercial properties. We handle everything from new installations to maintenance and emergency repairs with minimal disruption to your operations.",
    image: "/electrical-service-2.jpg",
    heroImage: "/electrical-service-2.jpg",
    overview:
      "Commercial electrical systems require specialized expertise and reliable service to keep your business running smoothly. Our commercial electrical services are designed to minimize downtime, ensure safety compliance, and support your business operations with efficient, scalable electrical solutions.",
    services: [
      {
        title: "Commercial Installations",
        items: [
          "Office electrical systems",
          "Retail store lighting",
          "Restaurant electrical setup",
          "Warehouse power distribution",
          "Data center electrical infrastructure",
          "Parking lot lighting",
        ],
      },
      {
        title: "Maintenance Services",
        items: [
          "Preventive maintenance programs",
          "Emergency lighting testing",
          "Electrical safety inspections",
          "Power quality analysis",
          "Thermal imaging inspections",
          "Equipment testing and certification",
        ],
      },
      {
        title: "Upgrades & Retrofits",
        items: [
          "LED lighting retrofits",
          "Panel upgrades and replacements",
          "Energy efficiency improvements",
          "Building automation integration",
          "Emergency power systems",
          "Code compliance upgrades",
        ],
      },
    ],
    benefits: [
      "Minimal disruption to business operations",
      "24/7 emergency service available",
      "Flexible scheduling including after-hours",
      "Comprehensive maintenance contracts",
      "Energy efficiency consulting",
      "OSHA and NEC code compliance",
    ],
    process: [
      {
        step: "1",
        title: "Site Assessment",
        description: "We evaluate your facility and discuss your electrical needs and goals.",
      },
      {
        step: "2",
        title: "Custom Proposal",
        description: "Receive a detailed proposal with timeline, costs, and project scope.",
      },
      {
        step: "3",
        title: "Scheduled Installation",
        description: "Work is completed during off-hours or scheduled to minimize disruption.",
      },
      {
        step: "4",
        title: "Ongoing Support",
        description: "Maintenance and support services to keep your systems running optimally.",
      },
    ],
  },
  "solar-energy": {
    title: "Solar Energy Installation",
    description:
      "Harness the power of the sun with our professional solar panel installation services. Reduce your energy bills and carbon footprint with clean, renewable solar energy tailored to your property.",
    image: "/solar-panels-energy.jpg",
    heroImage: "/solar-panels-energy.jpg",
    overview:
      "Solar energy is the future of sustainable power. Our solar installation services help you take control of your energy costs while reducing your environmental impact. From initial consultation to final installation and monitoring, we guide you through every step of going solar.",
    services: [
      {
        title: "Solar Panel Systems",
        items: [
          "Residential solar installations",
          "Commercial solar arrays",
          "Ground-mounted systems",
          "Roof-mounted systems",
          "Solar carport installations",
          "Off-grid solar systems",
        ],
      },
      {
        title: "Energy Storage",
        items: [
          "Battery backup systems",
          "Tesla Powerwall installation",
          "Whole-home battery systems",
          "Commercial energy storage",
          "Hybrid solar-battery systems",
          "Emergency backup power",
        ],
      },
      {
        title: "Solar Services",
        items: [
          "Solar system design",
          "Energy production analysis",
          "Grid interconnection",
          "Net metering setup",
          "Solar monitoring systems",
          "Maintenance and cleaning",
        ],
      },
    ],
    benefits: [
      "Reduce or eliminate electric bills",
      "Increase property value",
      "Federal and state tax incentives",
      "25-year equipment warranties",
      "Professional installation and support",
      "Real-time energy monitoring",
    ],
    process: [
      {
        step: "1",
        title: "Solar Consultation",
        description: "We analyze your energy usage and property to design the optimal solar system.",
      },
      {
        step: "2",
        title: "Custom Design",
        description: "Receive a custom solar design with production estimates and financial analysis.",
      },
      {
        step: "3",
        title: "Installation",
        description: "Professional installation typically completed in 1-3 days.",
      },
      {
        step: "4",
        title: "Activation & Monitoring",
        description: "System activation and setup of monitoring tools to track your energy production.",
      },
    ],
  },
  "smart-home": {
    title: "Smart Home Automation",
    description:
      "Transform your home into a smart, connected space with our automation services. Control lighting, climate, security, and more from your smartphone or voice commands for ultimate convenience.",
    image: "/electrical-service-3.jpg",
    heroImage: "/electrical-service-3.jpg",
    overview:
      "Smart home technology brings convenience, security, and energy efficiency to your fingertips. Our smart home automation services integrate the latest technology seamlessly into your home, allowing you to control everything from lighting to security with simple voice commands or smartphone apps.",
    services: [
      {
        title: "Smart Lighting",
        items: [
          "Smart bulb installation",
          "Automated lighting scenes",
          "Motion-activated lighting",
          "Color-changing LED systems",
          "Outdoor smart lighting",
          "Voice-controlled lighting",
        ],
      },
      {
        title: "Home Automation",
        items: [
          "Smart thermostat installation",
          "Automated window treatments",
          "Smart door locks",
          "Video doorbell installation",
          "Smart garage door openers",
          "Whole-home automation systems",
        ],
      },
      {
        title: "Integration Services",
        items: [
          "Amazon Alexa integration",
          "Google Home setup",
          "Apple HomeKit configuration",
          "Multi-room audio systems",
          "Smart security integration",
          "Energy monitoring systems",
        ],
      },
    ],
    benefits: [
      "Enhanced home security",
      "Reduced energy consumption",
      "Increased convenience and comfort",
      "Remote access and control",
      "Customizable automation scenes",
      "Integration with existing devices",
    ],
    process: [
      {
        step: "1",
        title: "Smart Home Consultation",
        description: "Discuss your lifestyle and automation goals to design the perfect system.",
      },
      {
        step: "2",
        title: "System Design",
        description: "We create a custom smart home plan that fits your needs and budget.",
      },
      {
        step: "3",
        title: "Installation & Setup",
        description: "Professional installation and configuration of all smart devices.",
      },
      {
        step: "4",
        title: "Training & Support",
        description: "We teach you how to use your new system and provide ongoing support.",
      },
    ],
  },
  "ev-charging": {
    title: "EV Charging Station Installation",
    description:
      "Professional installation of electric vehicle charging stations for homes and businesses. Fast, reliable charging solutions that make owning an EV more convenient and cost-effective.",
    image: "/electrical-work-process.jpg",
    heroImage: "/electrical-work-process.jpg",
    overview:
      "Electric vehicles are the future of transportation, and having a reliable charging solution at home or work is essential. Our EV charging installation services provide fast, efficient charging that's tailored to your vehicle and electrical system, making EV ownership more convenient than ever.",
    services: [
      {
        title: "Residential Charging",
        items: [
          "Level 2 home charger installation",
          "Garage charging stations",
          "Outdoor charging posts",
          "Smart EV chargers",
          "Tesla Wall Connector installation",
          "Universal EV chargers",
        ],
      },
      {
        title: "Commercial Charging",
        items: [
          "Workplace charging stations",
          "Multi-unit dwelling charging",
          "Public charging stations",
          "Fleet charging solutions",
          "DC fast charging installation",
          "Networked charging systems",
        ],
      },
      {
        title: "Charging Services",
        items: [
          "Electrical panel upgrades",
          "Load management systems",
          "Charging station maintenance",
          "Smart charging setup",
          "Energy monitoring",
          "Permit and inspection coordination",
        ],
      },
    ],
    benefits: [
      "Charge your EV overnight at home",
      "Lower fuel costs compared to gas",
      "Increase property value",
      "Federal and state incentives available",
      "Smart charging features",
      "Professional installation and support",
    ],
    process: [
      {
        step: "1",
        title: "Site Evaluation",
        description: "We assess your electrical system and determine the best charging solution.",
      },
      {
        step: "2",
        title: "Charger Selection",
        description: "Choose the right charger for your vehicle and charging needs.",
      },
      {
        step: "3",
        title: "Installation",
        description: "Professional installation including any necessary electrical upgrades.",
      },
      {
        step: "4",
        title: "Testing & Training",
        description: "We test the system and show you how to use your new EV charger.",
      },
    ],
  },
  "emergency-services": {
    title: "24/7 Emergency Electrical Services",
    description:
      "Round-the-clock emergency electrical services for urgent repairs and power outages. Our rapid response team is available 24/7 to restore your power and ensure your safety.",
    image: "/electrical-grid-infrastructure.jpg",
    heroImage: "/electrical-grid-infrastructure.jpg",
    overview:
      "Electrical emergencies can happen at any time, and when they do, you need a reliable electrician who can respond quickly. Our 24/7 emergency electrical services ensure that help is always just a phone call away, whether it's a power outage, electrical fire hazard, or any other urgent electrical issue.",
    services: [
      {
        title: "Emergency Repairs",
        items: [
          "Power outage restoration",
          "Circuit breaker failures",
          "Electrical fire hazards",
          "Sparking outlets or switches",
          "Burning smell investigations",
          "Storm damage repairs",
        ],
      },
      {
        title: "Urgent Services",
        items: [
          "No power troubleshooting",
          "Partial power loss repairs",
          "Tripped breaker diagnosis",
          "Electrical shock hazards",
          "Water damage electrical repairs",
          "Emergency lighting repairs",
        ],
      },
      {
        title: "Safety Services",
        items: [
          "Electrical safety inspections",
          "Smoke detector repairs",
          "Carbon monoxide detector service",
          "GFCI outlet repairs",
          "Arc fault breaker installation",
          "Emergency generator service",
        ],
      },
    ],
    benefits: [
      "24/7 availability every day of the year",
      "Rapid response within 60 minutes",
      "Fully stocked service vehicles",
      "Licensed emergency electricians",
      "Upfront emergency pricing",
      "Safety-first approach",
    ],
    process: [
      {
        step: "1",
        title: "Emergency Call",
        description: "Call our 24/7 hotline and describe your electrical emergency.",
      },
      {
        step: "2",
        title: "Rapid Dispatch",
        description: "An electrician is dispatched immediately to your location.",
      },
      {
        step: "3",
        title: "Diagnosis & Repair",
        description: "Quick diagnosis and immediate repairs to restore power and safety.",
      },
      {
        step: "4",
        title: "Follow-up",
        description: "We follow up to ensure everything is working properly.",
      },
    ],
  },
  "industrial-electrical": {
    title: "Industrial Electrical Systems",
    description:
      "Heavy-duty electrical solutions for industrial facilities, factories, and manufacturing plants. We design, install, and maintain robust electrical systems that keep your operations running smoothly.",
    image: "/electricity-power-lines.jpg",
    heroImage: "/electricity-power-lines.jpg",
    overview:
      "Industrial electrical systems require specialized knowledge and experience to handle high-voltage equipment, complex machinery, and demanding production environments. Our industrial electrical services are designed to maximize uptime, ensure worker safety, and support your manufacturing operations with reliable, efficient power systems.",
    services: [
      {
        title: "Industrial Installations",
        items: [
          "High-voltage power distribution",
          "Motor control centers",
          "Variable frequency drives",
          "Industrial lighting systems",
          "Crane and hoist electrical",
          "Conveyor system electrical",
        ],
      },
      {
        title: "Maintenance Programs",
        items: [
          "Preventive maintenance schedules",
          "Predictive maintenance services",
          "Thermal imaging inspections",
          "Power quality monitoring",
          "Equipment testing and certification",
          "Emergency repair services",
        ],
      },
      {
        title: "Industrial Upgrades",
        items: [
          "Automation system integration",
          "PLC programming and installation",
          "SCADA system implementation",
          "Energy efficiency improvements",
          "Power factor correction",
          "Backup power systems",
        ],
      },
    ],
    benefits: [
      "Minimize production downtime",
      "Improve operational efficiency",
      "Ensure worker safety compliance",
      "Reduce energy costs",
      "Extend equipment lifespan",
      "24/7 emergency support available",
    ],
    process: [
      {
        step: "1",
        title: "Facility Assessment",
        description: "Comprehensive evaluation of your industrial electrical needs and challenges.",
      },
      {
        step: "2",
        title: "Engineering Design",
        description: "Custom electrical system design optimized for your operations.",
      },
      {
        step: "3",
        title: "Phased Implementation",
        description: "Installation scheduled to minimize impact on production.",
      },
      {
        step: "4",
        title: "Ongoing Maintenance",
        description: "Regular maintenance programs to ensure optimal performance.",
      },
    ],
  },
  "energy-audit": {
    title: "Energy Efficiency Audits",
    description:
      "Comprehensive energy audits to identify savings opportunities and improve efficiency. Our experts analyze your energy consumption and provide actionable recommendations to reduce costs.",
    image: "/power-icon.jpg",
    heroImage: "/power-icon.jpg",
    overview:
      "Understanding your energy consumption is the first step toward reducing costs and improving efficiency. Our comprehensive energy audits use advanced diagnostic tools and expert analysis to identify where you're wasting energy and provide practical solutions to reduce your utility bills while improving comfort and sustainability.",
    services: [
      {
        title: "Audit Services",
        items: [
          "Residential energy audits",
          "Commercial energy assessments",
          "Industrial energy analysis",
          "Thermal imaging inspections",
          "Power quality analysis",
          "Load profiling and monitoring",
        ],
      },
      {
        title: "Efficiency Solutions",
        items: [
          "LED lighting upgrades",
          "HVAC optimization",
          "Insulation improvements",
          "Window and door sealing",
          "Smart thermostat installation",
          "Energy management systems",
        ],
      },
      {
        title: "Reporting & Analysis",
        items: [
          "Detailed energy reports",
          "Cost-benefit analysis",
          "ROI calculations",
          "Utility bill analysis",
          "Rebate and incentive identification",
          "Implementation roadmap",
        ],
      },
    ],
    benefits: [
      "Reduce energy costs by 20-40%",
      "Identify utility rebates and incentives",
      "Improve comfort and air quality",
      "Increase property value",
      "Reduce carbon footprint",
      "Prioritized improvement recommendations",
    ],
    process: [
      {
        step: "1",
        title: "Initial Consultation",
        description: "Discuss your energy concerns and review utility bills.",
      },
      {
        step: "2",
        title: "Comprehensive Audit",
        description: "Thorough inspection using advanced diagnostic equipment.",
      },
      {
        step: "3",
        title: "Detailed Report",
        description: "Receive a comprehensive report with prioritized recommendations.",
      },
      {
        step: "4",
        title: "Implementation Support",
        description: "We can implement recommended improvements or guide your contractors.",
      },
    ],
  },
  "backup-power": {
    title: "Backup Power & Generator Systems",
    description:
      "Reliable backup power solutions including generator installation and maintenance. Ensure uninterrupted power supply for your home or business during outages with our professional systems.",
    image: "/engine-icon.png",
    heroImage: "/engine-icon.png",
    overview:
      "Power outages can be more than just an inconvenience—they can be costly and dangerous. Our backup power solutions ensure that your home or business stays powered during outages, protecting your comfort, security, and business operations. From whole-home generators to commercial backup systems, we provide reliable power when you need it most.",
    services: [
      {
        title: "Generator Installation",
        items: [
          "Whole-home generators",
          "Portable generator hookups",
          "Commercial standby generators",
          "Industrial backup power",
          "Natural gas generators",
          "Propane generator systems",
        ],
      },
      {
        title: "Transfer Switches",
        items: [
          "Automatic transfer switches",
          "Manual transfer switches",
          "Load management systems",
          "Generator interlock installation",
          "Multi-circuit transfer switches",
          "Smart transfer switch systems",
        ],
      },
      {
        title: "Maintenance Services",
        items: [
          "Annual generator maintenance",
          "Load bank testing",
          "Oil and filter changes",
          "Battery replacement",
          "Fuel system maintenance",
          "Emergency repair services",
        ],
      },
    ],
    benefits: [
      "Automatic power restoration",
      "Protect refrigerated items and medications",
      "Maintain home security systems",
      "Keep business operations running",
      "Increase property value",
      "Peace of mind during storms",
    ],
    process: [
      {
        step: "1",
        title: "Power Assessment",
        description: "We calculate your power needs and recommend the right generator size.",
      },
      {
        step: "2",
        title: "Site Preparation",
        description: "Prepare the installation site including concrete pad and fuel connections.",
      },
      {
        step: "3",
        title: "Installation",
        description: "Professional installation of generator and automatic transfer switch.",
      },
      {
        step: "4",
        title: "Testing & Training",
        description: "System testing and training on operation and maintenance.",
      },
    ],
  },
}

export default async function ServiceDetailPage({ params }: { params: { id: string; locale: string } }) {
  const { id, locale } = params
  const service = await getService(id)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href={`/${locale}/services`}>
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Get title, description, and overview based on locale
  const title = locale === 'az' ? service.title_az : locale === 'ru' ? service.title_ru : service.title_en
  const description = locale === 'az' ? service.description_az : locale === 'ru' ? service.description_ru : service.description_en
  const overview = locale === 'az' ? (service.overview_az || description) : locale === 'ru' ? (service.overview_ru || description) : (service.overview_en || description)
  
  // Get image URL
  const imageUrl = service.image 
    ? (service.image.startsWith('http') ? service.image : `http://157.173.118.59${service.image}`)
    : "/placeholder.svg"

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <Link href={`/${locale}/services`} className="inline-flex items-center text-white/90 hover:text-white mb-6 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl text-balance">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed text-pretty">
            {description}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{overview}</p>
          </div>
        </div>
      </section>

      {/* Note: Services grid, benefits, and process sections require additional backend fields */}
      {/* For now, they are commented out. You'll need to add these fields to your Django backend */}
      
      {/*
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {service.services.map((category: any, index: number) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href={`/${locale}/contact`}>
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="tel:+1234567890">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}