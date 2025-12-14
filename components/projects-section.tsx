"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Login Form",
    description:
      "A full-featured login page with basic UI/UX, and responsive design.",
    image: "./login.png",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    // github: "https://github.com/varunnayu/login-page",
    live: "https://varunnayu.github.io/login-page/",
    featured: true,
  },
  {
    title: "Personal Password Manager",
    description: "Real-time personal password manager with a master password and firebase authentication.",
    image: "./password-manager.png",
    tags: [ "React", "Firebase", "Tailwind css","Authentication"],
    // github: "https://github.com/varunnayu/classy",
    live: "https://classy-phi.vercel.app/login.html",
    featured: true,
  },
  {
    title: "Decentralised academic certificate issued and verification system",
    description: "A blockchain-based system for issuing and verifying academic certificates securely and transparently.",
    image: "./certifiy.png",
    tags: ["React", "Ethereum", "Solidity", "blockchain"],
    // github: "https://github.com",
    live: "https://certify-chain-jet.vercel.app/",
    featured: true,
  },
  // {
  //   title: "Social Media Dashboard",
  //   description: "Analytics dashboard for social media management with real-time metrics and scheduling.",
  //   image: "/social-media-analytics-dashboard-dark.png",
  //   tags: ["React", "D3.js", "Python", "FastAPI"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: false,
  // },
  // {
  //   title: "Fitness Tracking App",
  //   description: "Mobile-first fitness tracking application with workout plans and progress visualization.",
  //   image: "/fitness-app-mobile-interface-dark-theme.jpg",
  //   tags: ["React Native", "Firebase", "Redux", "Charts"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: false,
  // },
  // {
  //   title: "Real Estate Platform",
  //   description: "Property listing platform with virtual tours, mortgage calculator, and agent matching.",
  //   image: "/real-estate-website-property-listing-dark-theme.jpg",
  //   tags: ["Next.js", "Three.js", "Prisma", "AWS"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: false,
  // },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="relative py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">{"// SELECTED WORK"}</span>
          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group glass overflow-hidden rounded-2xl transition-all hover:border-primary/50"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-foreground/20 bg-background/80 hover:bg-background"
                    asChild
                  >
                    {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a> */}
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="group border-primary/50 hover:bg-primary/10"
            >
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
