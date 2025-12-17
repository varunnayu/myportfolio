"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Palette, Rocket, Heart } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful and intuitive user experiences",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and seamless interactions",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to continuous learning and growth",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">{"// ABOUT ME"}</span>
          <h2 className="text-3xl font-bold md:text-5xl">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:mx-0">
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src="./profile1.jpg"
                  alt="Profile Picture"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                      <span className="text-sm text-foreground">Currently building amazing things</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-6 text-2xl font-bold md:text-3xl">A passionate developer crafting digital experiences</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Full Stack Developer with an experience of building web applications. My journey in
                tech started with a curiosity about how things work on the internet, and it has evolved into a passion
                for creating impactful digital solutions.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, particularly React and Next.js for frontend development,
                and Node.js for backend services. I believe in writing clean, maintainable code and creating intuitive
                user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community through blog posts and talks.
              </p>
              <p>
                I am currently pursuing a Data Science course, where I am building a strong foundation in Python,
                data analysis, statistics, and machine learning. I am focused on developing practical skills to analyze data, derive insights, 
                and solve real-world problems using modern data-driven techniques.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass rounded-xl p-4 transition-all hover:border-primary/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <item.icon className="mb-2 h-6 w-6 text-primary" />
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
