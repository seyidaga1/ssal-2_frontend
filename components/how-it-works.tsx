"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const workSteps = [ 
  {
    id: "work1",
    icon: "/power-icon.jpg",
    title: "Power Path Unveiling Our Process", 
    description: 
      "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.", 
  },
  {
    id: "work2",
    icon: "/flow-icon.jpg",
    title: "Electro Flow Decoding Our Method", 
    description: 
      "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.", 
  },
  {
    id: "work3",
    icon: "/engine-icon.png",
    title: "Energetic Engine Behind Scenes", 
    description: 
      "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.", 
  },
  {
    id: "work4",
    icon: "/watt-icon.jpg",
    title: "Watt Works Discover Operations", 
    description: 
      "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.", 
  },
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("work1")

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h5 className="text-primary text-lg font-semibold mb-4">How it work</h5> 
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How to Work Our Electricity Service</h2> 
              <p className="text-muted-foreground"> 
                Throughout the process, transparency & communication, keeping you informed. 
              </p> 
            </div>

            <div className="space-y-4">
              {workSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`w-full flex items-start gap-4 p-4 rounded-lg text-left transition-colors ${
                    activeTab === step.id ? "bg-primary text-primary-foreground" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={step.icon || "/placeholder.svg"}
                      alt=""
                      width={40}
                      height={40}
                      className={activeTab === step.id ? "brightness-0 invert" : ""}
                    />
                  </div>
                  <span className="font-medium">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            {workSteps.map((step) => (
              <div key={step.id} className={`${activeTab === step.id ? "block" : "hidden"}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64 md:h-96">
                    <Image src="/electrical-work-process.jpg" alt={step.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <Button asChild>
                      <Link href="/contact">
                        Book A Consultation <span className="ml-2">→</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
