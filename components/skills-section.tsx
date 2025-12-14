"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 70 },
      { name: "Next.js", level: 40 },
      // { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      // { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 50 },
      // { name: "Express", level: 88 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
      { name: "MongoDB/PHP", level: 82 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 75 },
      { name: "Github", level: 95 },
      // { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      // { name: "GraphQL", level: 80 },
    ],
  },
]

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎨" }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">{"// SKILLS & EXPERTISE"}</span>
          <h2 className="text-3xl font-bold md:text-5xl">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Scrolling Tech Icons */}
        <motion.div
          className="relative mb-16 overflow-hidden py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex shrink-0 items-center gap-3 rounded-xl glass px-6 py-4"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="whitespace-nowrap font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h3 className="mb-6 text-xl font-bold text-foreground">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
