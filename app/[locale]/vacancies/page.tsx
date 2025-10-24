"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Briefcase, DollarSign } from "lucide-react"
import { ApplicationDialog } from "@/components/application-dialog"
import { useState } from "react"
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function VacanciesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<string>("")

  const jobListings = [
    {
      id: 1,
      title: "Senior Electrician",
      department: "Residential Services",
      location: "Baku, Azerbaijan",
      type: "Full-time",
      salary: "Competitive",
      description:
        "We are seeking an experienced Senior Electrician to join our residential services team. The ideal candidate will have extensive experience in residential electrical installations, repairs, and maintenance.",
      requirements: [
        "5+ years of experience as a licensed electrician",
        "Valid electrical license",
        "Strong knowledge of electrical codes and safety standards",
        "Excellent problem-solving skills",
        "Ability to work independently and in a team",
      ],
    },
    {
      id: 2,
      title: "Commercial Electrical Engineer",
      department: "Commercial Projects",
      location: "Baku, Azerbaijan",
      type: "Full-time",
      salary: "Competitive",
      description:
        "Join our commercial projects team as an Electrical Engineer. You will be responsible for designing, planning, and overseeing electrical systems for commercial buildings and facilities.",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "3+ years of experience in commercial electrical projects",
        "Proficiency in AutoCAD and electrical design software",
        "Strong project management skills",
        "Professional Engineer (PE) license preferred",
      ],
    },
    {
      id: 3,
      title: "Solar Installation Technician",
      department: "Renewable Energy",
      location: "Baku, Azerbaijan",
      type: "Full-time",
      salary: "Competitive",
      description:
        "We are looking for a skilled Solar Installation Technician to join our growing renewable energy division. You will install, maintain, and repair solar panel systems for residential and commercial clients.",
      requirements: [
        "2+ years of experience in solar panel installation",
        "Knowledge of photovoltaic systems and components",
        "Electrical license or certification",
        "Comfortable working at heights",
        "Strong attention to detail and safety",
      ],
    },
    {
      id: 4,
      title: "Apprentice Electrician",
      department: "Training Program",
      location: "Baku, Azerbaijan",
      type: "Full-time",
      salary: "Entry Level",
      description:
        "Start your career in the electrical industry with our comprehensive apprenticeship program. You will receive hands-on training and mentorship from experienced electricians while earning your license.",
      requirements: [
        "High school diploma or equivalent",
        "Enrolled in or willing to enroll in an electrical apprenticeship program",
        "Basic understanding of electrical systems",
        "Strong work ethic and willingness to learn",
        "Valid driver's license",
      ],
    },
    {
      id: 5,
      title: "Electrical Project Manager",
      department: "Project Management",
      location: "Baku, Azerbaijan",
      type: "Full-time",
      salary: "Competitive",
      description:
        "We are seeking an experienced Electrical Project Manager to oversee multiple electrical projects from planning to completion. You will coordinate teams, manage budgets, and ensure projects are delivered on time and within scope.",
      requirements: [
        "7+ years of experience in electrical project management",
        "Strong leadership and communication skills",
        "PMP certification preferred",
        "Experience with project management software",
        "Proven track record of successful project delivery",
      ],
    },
    {
      id: 6,
      title: "Maintenance Electrician",
      department: "Maintenance Services",
      location: "Baku, Azerbaijan",
      type: "Full-time",
      salary: "Competitive",
      description:
        "Join our maintenance team to provide ongoing electrical maintenance and repair services for commercial and industrial clients. You will troubleshoot issues, perform preventive maintenance, and ensure electrical systems operate efficiently.",
      requirements: [
        "3+ years of experience in electrical maintenance",
        "Valid electrical license",
        "Experience with industrial electrical systems",
        "Strong diagnostic and troubleshooting skills",
        "Ability to respond to emergency calls",
      ],
    },
  ]

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <Image src="/electrical-team-1.jpg" alt="Join our team" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl text-balance">
            Career Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed text-pretty">
            Join our team of skilled professionals and power your career forward
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Open Positions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our current job openings and find the perfect role for your skills and career goals
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-balance">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{job.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:flex-shrink-0">
                      <Button size="lg" onClick={() => handleApplyClick(job.title)}>
                        Apply Now <span className="ml-2">→</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Application Dialog */}
      <ApplicationDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} jobTitle={selectedJob} />
    </div>
  )
}
