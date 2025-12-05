"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/varunnayu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/varun-k-t-a8312927b", label: "LinkedIn" },
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:varunsantu2002@gmail.com", label: "Email" },
]

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  // { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-2xl font-bold text-gradient">
              {"<VK/>"}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              {/* Full Stack Developer crafting exceptional digital experiences with modern technologies. */}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-wrap gap-4 md:justify-center">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h4 className="mb-4 font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ y: -3 }}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Varun K T. All rights reserved.</p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" />
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
