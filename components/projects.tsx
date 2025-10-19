"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag, Eye } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  is_active: boolean
  main_image: string | null
  main_video: string | null
  views_count: number
  media: any[]
}

interface ProjectsProps {
  limit?: number // Optional prop to limit projects shown
}

export default function Projects({ limit }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/projects/`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        // Filter only active projects
        const activeProjects = data.filter((project: Project) => project.is_active)
        setProjects(activeProjects)
        setError(null)
      } catch (err) {
        setError('Error loading projects. Please try again later.')
        console.error('Error fetching projects:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [apiUrl])

  // Determine which projects to display
  const displayedProjects = limit && limit > 0 ? projects.slice(0, limit) : projects
  const hasMoreProjects = limit && limit > 0 && projects.length > limit

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h5 className="text-primary text-lg font-semibold mb-4">Our Projects</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Projects & Case Studies</h2>
          <p className="text-muted-foreground">
            From residential households to commercial enterprises, we provide reliable, efficient, and sustainable
            energy solutions.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            <p className="mt-4 text-muted-foreground">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">
            {error}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No projects available at the moment.
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={
                        project.main_image 
                          ? (project.main_image.startsWith('http') 
                              ? project.main_image 
                              : `${apiUrl}${project.main_image}`)
                          : "/electricity-blog-1.jpg"
                      }
                      alt={project.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="p-6">
                    <Link href={`/projects/${project.id}`} className="block">
                      <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {project.views_count} views
                      </span>
                      {project.is_active && (
                        <span className="flex items-center gap-1">
                          <Tag className="h-4 w-4" />
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                    >
                      Learn more <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Show "View All Projects" button if there are more projects */}
            {limit && hasMoreProjects && (
              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  View All Projects ({projects.length})
                  <span>→</span>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}