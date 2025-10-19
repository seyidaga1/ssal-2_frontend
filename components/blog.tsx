import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    image: "/electricity-blog-1.jpg",
    title: "Electrifying Reads Explore Our Electricity",
    date: "April 2, 2024",
    category: "Electricity Corner",
    excerpt: "Are you considering studying abroad and embarking on an visa to",
  },
  {
    id: 2,
    image: "/electricity-blog-2.jpg",
    title: "Empowering Energy Dive into Our Electricity",
    date: "April 2, 2024",
    category: "Electricity Corner",
    excerpt: "From understanding our pricing plans to learning about our renewable",
  },
  {
    id: 3,
    image: "/electricity-blog-3.jpg",
    title: "Electricity Explained: Bloggin Power of Tomorrow",
    date: "April 2, 2024",
    category: "Electricity Corner",
    excerpt: "We're committed to ensuring that you have all the information you need.",
  },
]

export default function Blog() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h5 className="text-primary text-lg font-semibold mb-4">Our Blog</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Electricity News & Updates</h2>
          <p className="text-muted-foreground">
            From residential households to commercial enterprises, we provide reliable, efficient, and sustainable
            energy solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <Link href={`/blog/${post.id}`} className="block">
                  <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors">{post.title}</h3>
                </Link>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                >
                  Learn more <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
