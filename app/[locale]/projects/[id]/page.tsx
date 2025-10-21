import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Eye, Calendar, Tag } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  is_active: boolean
  main_image: string | null
  main_video: string | null
  views_count: number
  media: Array<{
    id: number
    file: string
    media_type: string
  }>
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const res = await fetch(`${apiUrl}/api/projects/${id}/`, {
      cache: "no-store",
    })

    if (!res.ok) {
      return notFound()
    }

    const project: Project = await res.json()

    // Handle main video
    const videoSrc = project.main_video
      ? (project.main_video.startsWith("http") ? project.main_video : `${apiUrl}${project.main_video}`)
      : null

    // Handle main image as fallback if no video
    const mainImageSrc = project.main_image
      ? (project.main_image.startsWith("http") ? project.main_image : `${apiUrl}${project.main_image}`)
      : "/electricity-blog-1.jpg"

    // Filter images from media array
    const projectImages = project.media.filter(item => 
      item.media_type === 'image' || 
      item.file.match(/\.(jpg|jpeg|png|gif|webp)$/i)
    )

    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50">
          {/* Hero Section with Video */}
          <div className="bg-white">
            <div className="container mx-auto px-4 py-8">
              <Link 
                href="/projects" 
                className="text-sm text-muted-foreground hover:text-primary underline mb-6 inline-flex items-center gap-2"
              >
                ← Back to Projects
              </Link>

              {/* Video/Image Section */}
              <div className="mt-6 mb-8">
                {videoSrc ? (
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
                    <video 
                      controls 
                      className="w-full h-full object-contain"
                      poster={mainImageSrc}
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 shadow-2xl relative">
                    <Image 
                      src={mainImageSrc} 
                      alt={project.name} 
                      fill 
                      className="object-cover" 
                      sizes="100vw"
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {project.is_active && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <Tag className="h-3 w-3" />
                      Active
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                    <Eye className="h-4 w-4" />
                    {project.views_count} views
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Status</h3>
                    <p className="text-lg font-bold">
                      {project.is_active ? "Active" : "Completed"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Views</h3>
                    <p className="text-lg font-bold">{project.views_count.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Media Files</h3>
                    <p className="text-lg font-bold">{project.media.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Images Gallery */}
          {projectImages.length > 0 && (
            <div className="container mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((media) => {
                  const imageSrc = media.file.startsWith("http") 
                    ? media.file 
                    : `${apiUrl}${media.file}`
                  
                  return (
                    <div 
                      key={media.id} 
                      className="aspect-video relative overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
                    >
                      <Image 
                        src={imageSrc} 
                        alt={`${project.name} - Image ${media.id}`} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-primary/5 py-16">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Interested in Similar Projects?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore more of our completed projects and see how we can help bring your vision to life.
              </p>
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                View All Projects
                <span>→</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  } catch (err) {
    console.error("Error fetching project:", err)
    return notFound()
  }
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