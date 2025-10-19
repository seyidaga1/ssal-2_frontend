"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section
      className="py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/placeholder.svg?height=800&width=1600&query=electrical+contact+background)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h5 className="text-yellow-400 text-lg font-semibold mb-4">Contact Us</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Illuminate Your Message Get in Contact</h2>
            <p className="text-gray-200 mb-12">
              Have questions or ready to get started with our electricity services? Our team is here to help! Whether
              you're seeking.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Phone</p>
                    <a href="tel:994125260230" className="text-white hover:text-yellow-400 transition-colors">
                      +994 12 526 02 30
                    </a>
                  </div>
                </div>
                

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Ünvan</p>
                    <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                      Xəlil Rza Ulutürk küç. 2005, Bakı. (Həştərxan İş Mərkəzi)
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Phone</p>
                    <a href="tel:994552027182" className="text-white hover:text-yellow-400 transition-colors">
                      +994 55 202 71 82
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Email</p>
                    <a
                      href="mailto:sales@ssal-2.com"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      sales@ssal-2.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-6">Request A Quote</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name (required)</label>
                  <Input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number (required)</label>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email (required)</label>
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Details (Optional)</label>
                <Textarea
                  placeholder="Describe your inquiry"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="agree"
                  required
                  checked={formData.agree}
                  onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                />
                <label htmlFor="agree" className="text-sm">
                  I agree with the site privacy policy
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Now <span className="ml-2">→</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
