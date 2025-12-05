"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Available for work
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="text-gradient">Varun K T</span>
            </motion.h1>

            <motion.div
              className="mb-6 flex flex-wrap items-center justify-center gap-2 font-mono text-lg text-muted-foreground md:text-xl lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-primary">{">"}</span>
              <TypewriterText
                texts={["Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"]}
              />
            </motion.div>

            <motion.p
              className="mx-auto mb-8 max-w-xl text-muted-foreground lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I craft exceptional digital experiences with modern technologies. Passionate about building scalable
              applications and creating intuitive user interfaces that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                size="lg"
                className="group animate-pulse-glow bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#contact">
                  Let's Talk
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary/50 hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="/varun_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center justify-center gap-8 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                /*{ value: "5+", label: "Years Exp." },*/
                { value: "", label: "" },
               /* { value: "30+", label: "Clients" },*/
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/50">
                <img
                  src="./hero1.png"
                  alt="hero image"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -right-4 top-8 rounded-lg glass px-4 py-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="font-mono text-sm text-primary">React.js</span>
              </motion.div>
              <motion.div
                className="absolute -left-4 bottom-20 rounded-lg glass px-4 py-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="font-mono text-sm text-primary">UI/UX</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 right-12 rounded-lg glass px-4 py-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="font-mono text-sm text-primary">SQL</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.a>
    </section>
  )
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts])

  return (
    <span className="text-foreground">
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}

import { useState, useEffect } from "react"
