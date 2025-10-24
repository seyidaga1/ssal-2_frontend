"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const projectsData: Record<number, any> = {
  1: {
    title: "Commercial Office Building Electrical Installation",
    category: "commercial",
    location: "Baku City Center",
    date: "2024",
    duration: "6 months",
    client: "Tech Corp Azerbaijan",
    heroImage: "/electrical-grid-infrastructure.jpg",
    description:
      "Complete electrical system installation for a 15-story modern office building including power distribution, lighting systems, and backup generators.",
    overview:
      "This landmark project involved the complete electrical infrastructure for a state-of-the-art office building in the heart of Baku. Our team designed and installed a comprehensive electrical system capable of supporting modern office technology, energy-efficient lighting, and reliable backup power systems.",
    gallery: [
      "/electrical-grid-infrastructure.jpg",
      "/electrical-work-process.jpg",
      "/electricity-power-lines.jpg",
      "/electrical-team-1.jpg",
      "/electrical-team-2.jpg",
      "/power-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "The team delivered exceptional work on our office building. Their attention to detail and commitment to quality was evident throughout the project.",
      author: "Rashad Mammadov",
      position: "Facilities Director, Tech Corp Azerbaijan",
    },
  },
  2: {
    title: "Residential Complex Solar Panel Installation",
    category: "solar",
    location: "Yasamal District",
    date: "2024",
    duration: "4 months",
    client: "Green Living Residences",
    heroImage: "/solar-panels-energy.jpg",
    description:
      "Installation of 500kW solar panel system for a residential complex, providing sustainable energy solutions for 200+ apartments.",
    overview:
      "This innovative project brought clean, renewable energy to a modern residential complex housing over 200 families. We designed and installed a comprehensive solar energy system that significantly reduces the building's reliance on grid power while providing residents with lower energy costs.",
    gallery: [
      "/solar-panels-energy.jpg",
      "/electrical-grid-infrastructure.jpg",
      "/electrical-work-process.jpg",
      "/electricity-power-lines.jpg",
      "/power-icon.jpg",
      "/flow-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "Our residents are thrilled with the solar installation. Not only are they saving money on electricity, but they also feel good about contributing to a cleaner environment.",
      author: "Leyla Hasanova",
      position: "Property Manager, Green Living Residences",
    },
  },
  3: {
    title: "Industrial Factory Power Infrastructure",
    category: "industrial",
    location: "Sumgayit Industrial Zone",
    date: "2023",
    duration: "8 months",
    client: "Manufacturing Solutions LLC",
    heroImage: "/electricity-power-lines.jpg",
    description:
      "High-voltage power infrastructure setup for a large manufacturing facility with specialized equipment requirements.",
    overview:
      "This major industrial project involved designing and installing a complete high-voltage electrical infrastructure for a new manufacturing facility. The system needed to support heavy machinery, automated production lines, and maintain 24/7 operational reliability.",
    gallery: [
      "/electricity-power-lines.jpg",
      "/electrical-grid-infrastructure.jpg",
      "/electrical-work-process.jpg",
      "/engine-icon.png",
      "/watt-icon.jpg",
      "/power-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "The electrical infrastructure they built for our factory is world-class. The reliability and redundancy built into the system gives us complete confidence in our operations.",
      author: "Elvin Aliyev",
      position: "Plant Manager, Manufacturing Solutions LLC",
    },
  },
  4: {
    title: "Shopping Mall Electrical Renovation",
    category: "commercial",
    location: "Ganjlik Mall",
    date: "2023",
    duration: "5 months",
    client: "Retail Group Azerbaijan",
    heroImage: "/electrical-work-process.jpg",
    description:
      "Complete electrical system upgrade for a major shopping center including modern lighting, HVAC controls, and security systems.",
    overview:
      "This comprehensive renovation project modernized the electrical infrastructure of a busy shopping mall while maintaining normal business operations. We upgraded outdated systems with energy-efficient technology and improved lighting quality.",
    gallery: [
      "/electrical-work-process.jpg",
      "/electrical-grid-infrastructure.jpg",
      "/electrical-team-1.jpg",
      "/electrical-team-2.jpg",
      "/power-icon.jpg",
      "/flow-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "They managed to completely upgrade our electrical systems without disrupting our business. The new lighting has transformed the shopping experience.",
      author: "Nigar Ismayilova",
      position: "Operations Director, Retail Group Azerbaijan",
    },
  },
  5: {
    title: "Luxury Villa Smart Home System",
    category: "residential",
    location: "Bilgah Beach",
    date: "2023",
    duration: "3 months",
    client: "Private Client",
    heroImage: "/electrical-team-1.jpg",
    description:
      "Premium smart home electrical installation with automated lighting, climate control, and integrated security systems.",
    overview:
      "This luxury villa project showcased the pinnacle of smart home technology integration. We designed and installed a comprehensive automated system that provides the homeowners with complete control over lighting, climate, entertainment, and security.",
    gallery: [
      "/electrical-team-1.jpg",
      "/electrical-work-process.jpg",
      "/electrical-grid-infrastructure.jpg",
      "/power-icon.jpg",
      "/flow-icon.jpg",
      "/watt-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "Our home is now a technological masterpiece. Everything works perfectly together, and controlling our entire home from our phones is incredibly convenient.",
      author: "Private Homeowner",
      position: "Bilgah Beach Residence",
    },
  },
  6: {
    title: "Hospital Emergency Power System",
    category: "commercial",
    location: "Central Hospital Baku",
    date: "2022",
    duration: "7 months",
    client: "Healthcare Ministry",
    heroImage: "/electrical-team-2.jpg",
    description:
      "Critical infrastructure installation including backup generators, UPS systems, and redundant power distribution for hospital operations.",
    overview:
      "This critical healthcare project involved installing a comprehensive emergency power system for a major hospital. The system ensures uninterrupted power supply to life-saving medical equipment, operating rooms, and critical care units.",
    gallery: [
      "/electrical-team-2.jpg",
      "/electrical-grid-infrastructure.jpg",
      "/electricity-power-lines.jpg",
      "/engine-icon.png",
      "/power-icon.jpg",
      "/watt-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "The emergency power system they installed gives us complete confidence in our ability to provide uninterrupted patient care. This system literally saves lives.",
      author: "Dr. Kamran Huseynov",
      position: "Chief of Operations, Central Hospital Baku",
    },
  },
  7: {
    title: "Agricultural Solar Farm Project",
    category: "solar",
    location: "Shamakhi Region",
    date: "2022",
    duration: "6 months",
    client: "AgriTech Solutions",
    heroImage: "/solar-panels-energy.jpg",
    description:
      "Large-scale solar farm installation providing clean energy for agricultural operations and feeding excess power back to the grid.",
    overview:
      "This groundbreaking agrivoltaic project combined solar energy generation with agricultural land use. We installed a 2MW solar farm that provides power for irrigation systems, processing facilities, and farm operations.",
    gallery: [
      "/solar-panels-energy.jpg",
      "/electricity-power-lines.jpg",
      "/electrical-grid-infrastructure.jpg",
      "/power-icon.jpg",
      "/flow-icon.jpg",
      "/watt-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "This solar farm has transformed our operations. We're now energy independent and actually generating income from excess power.",
      author: "Tural Mammadov",
      position: "Owner, AgriTech Solutions",
    },
  },
  8: {
    title: "Residential Neighborhood Upgrade",
    category: "residential",
    location: "Nasimi District",
    date: "2022",
    duration: "10 months",
    client: "Municipal Government",
    heroImage: "/electrical-grid-infrastructure.jpg",
    description:
      "Infrastructure upgrade for an entire residential neighborhood including underground cabling, street lighting, and distribution systems.",
    overview:
      "This large-scale municipal project modernized the electrical infrastructure for an entire residential neighborhood serving over 5,000 residents. We replaced aging overhead power lines with underground cabling and upgraded distribution systems.",
    gallery: [
      "/electrical-grid-infrastructure.jpg",
      "/electricity-power-lines.jpg",
      "/electrical-work-process.jpg",
      "/electrical-team-1.jpg",
      "/electrical-team-2.jpg",
      "/power-icon.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      text: "This infrastructure upgrade has made a tremendous difference in our neighborhood. Power outages are now rare and the streets are beautifully lit.",
      author: "Aysel Mammadova",
      position: "Neighborhood Association President",
    },
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={project.heroImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <Link href="/projects" className="inline-flex items-center text-white hover:text-white/80 mb-8 group w-fit">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Bütün İşlərə Qayıt
          </Link>
          <Badge className="bg-primary text-primary-foreground capitalize w-fit mb-4 text-sm px-4 py-1">
            {project.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl text-balance">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Info */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Yer:</span>
              <span className="font-medium">{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Tarix:</span>
              <span className="font-medium">{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Müddət:</span>
              <span className="font-medium">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Müştəri:</span>
              <span className="font-medium">{project.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-muted-foreground">{project.overview}</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {project.videoUrl && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={project.videoUrl}
                  title="Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.gallery?.map((image: string, index: number) => (
            <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <Image
            src={image}
            alt={`${project.title} - ${index + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[90vh]">
            <div className="relative h-[80vh] w-full">
              <Image
            src={image}
            alt={`${project.title} - ${index + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
              />
            </div>
          </DialogContent>
            </Dialog>
          ))}
        </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl text-primary mb-6">"</div>
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground">
                {project.testimonial.text}
              </blockquote>
              <div>
                <div className="font-bold text-lg">{project.testimonial.author}</div>
                <div className="text-muted-foreground">{project.testimonial.position}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}






// import Image from "next/image"
// import Link from "next/link"
// import { notFound } from "next/navigation"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { Eye, Calendar, Tag } from "lucide-react"

// interface Project {
//   id: number
//   name: string
//   description: string
//   is_active: boolean
//   main_image: string | null
//   main_video: string | null
//   views_count: number
//   media: Array<{
//     id: number
//     file: string
//     media_type: string
//   }>
// }

// export default async function ProjectPage({ params }: { params: { id: string } }) {
//   const { id } = params
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL

//   try {
//     const res = await fetch(`${apiUrl}/api/projects/${id}/`, {
//       cache: "no-store",
//     })

//     if (!res.ok) {
//       return notFound()
//     }

//     const project: Project = await res.json()

//     // Handle main video
//     const videoSrc = project.main_video
//       ? (project.main_video.startsWith("http") ? project.main_video : `${apiUrl}${project.main_video}`)
//       : null

//     // Handle main image as fallback if no video
//     const mainImageSrc = project.main_image
//       ? (project.main_image.startsWith("http") ? project.main_image : `${apiUrl}${project.main_image}`)
//       : "/electricity-blog-1.jpg"

//     // Filter images from media array
//     const projectImages = project.media.filter(item => 
//       item.media_type === 'image' || 
//       item.file.match(/\.(jpg|jpeg|png|gif|webp)$/i)
//     )

//     return (
//       <>
//         <Header />
//         <main className="min-h-screen bg-gray-50">
//           {/* Hero Section with Video */}
//           <div className="bg-white">
//             <div className="container mx-auto px-4 py-8">
//               <Link 
//                 href="/projects" 
//                 className="text-sm text-muted-foreground hover:text-primary underline mb-6 inline-flex items-center gap-2"
//               >
//                 ← Back to Projects
//               </Link>

//               {/* Video/Image Section */}
//               <div className="mt-6 mb-8">
//                 {videoSrc ? (
//                   <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
//                     <video 
//                       controls 
//                       className="w-full h-full object-contain"
//                       poster={mainImageSrc}
//                     >
//                       <source src={videoSrc} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 ) : (
//                   <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 shadow-2xl relative">
//                     <Image 
//                       src={mainImageSrc} 
//                       alt={project.name} 
//                       fill 
//                       className="object-cover" 
//                       sizes="100vw"
//                       priority
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Project Info */}
//               <div className="max-w-4xl mx-auto">
//                 <div className="flex flex-wrap items-center gap-4 mb-4">
//                   {project.is_active && (
//                     <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
//                       <Tag className="h-3 w-3" />
//                       Active
//                     </span>
//                   )}
//                   <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
//                     <Eye className="h-4 w-4" />
//                     {project.views_count} views
//                   </span>
//                 </div>

//                 <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>
//                 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//                   {project.description}
//                 </p>

//                 {/* Project Details */}
//                 <div className="grid md:grid-cols-3 gap-6 mb-12">
//                   <div className="bg-gray-50 p-6 rounded-lg">
//                     <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Status</h3>
//                     <p className="text-lg font-bold">
//                       {project.is_active ? "Active" : "Completed"}
//                     </p>
//                   </div>
//                   <div className="bg-gray-50 p-6 rounded-lg">
//                     <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Views</h3>
//                     <p className="text-lg font-bold">{project.views_count.toLocaleString()}</p>
//                   </div>
//                   <div className="bg-gray-50 p-6 rounded-lg">
//                     <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Media Files</h3>
//                     <p className="text-lg font-bold">{project.media.length}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project Images Gallery */}
//           {projectImages.length > 0 && (
//             <div className="container mx-auto px-4 py-12">
//               <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projectImages.map((media) => {
//                   const imageSrc = media.file.startsWith("http") 
//                     ? media.file 
//                     : `${apiUrl}${media.file}`
                  
//                   return (
//                     <div 
//                       key={media.id} 
//                       className="aspect-video relative overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
//                     >
//                       <Image 
//                         src={imageSrc} 
//                         alt={`${project.name} - Image ${media.id}`} 
//                         fill 
//                         className="object-cover group-hover:scale-110 transition-transform duration-300" 
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           )}

//           {/* CTA Section */}
//           <div className="bg-primary/5 py-16">
//             <div className="container mx-auto px-4 text-center">
//               <h3 className="text-2xl md:text-3xl font-bold mb-4">
//                 Interested in Similar Projects?
//               </h3>
//               <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//                 Explore more of our completed projects and see how we can help bring your vision to life.
//               </p>
//               <Link 
//                 href="/projects" 
//                 className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
//               >
//                 View All Projects
//                 <span>→</span>
//               </Link>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </>
//     )
//   } catch (err) {
//     console.error("Error fetching project:", err)
//     return notFound()
//   }
// }