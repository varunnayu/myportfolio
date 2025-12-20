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
  // {
  //   icon: Palette,
  //   title: "UI/UX Focus",
  //   description: "Creating beautiful and intuitive user experiences",
  // },
  // {
  //   icon: Rocket,
  //   title: "Performance",
  //   description: "Optimizing for speed and seamless interactions",
  // },
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
                  src="./profile-pic2.jpg"
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
                I am a motivated Electronics and Communication Engineering graduate with a strong academic background (CGPA 8.18) and hands-on experience in building real-world, impact-driven projects. 
                My interests lie at the intersection of embedded systems, computer vision, mobile applications, and cloud-enabled solutions, where I enjoy transforming ideas into practical implementations.
              </p>
              <p>
                I have worked on diverse projects such as a wireless surveillance rover, a facial recognition attendance system, and an Android-based medical screening solution 
                for cervical cancer, showcasing my ability to integrate hardware, software, and cloud technologies effectively. My technical skill set includes C,
                 Python, embedded systems basics, OpenCV, Arduino, Firebase, and React Native, supported by strong problem-solving and communication skills.
              </p>
              <p>
                I am a quick learner and collaborative team player, recognized through multiple national and state-level project awards, publications in an international journal, and certifications from NPTEL, Cisco, and Google Cloud. I am eager to contribute to a growth-oriented 
                organization where I can apply my technical knowledge, continuously learn, and create meaningful technological solutions.
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
