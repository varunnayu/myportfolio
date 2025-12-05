import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Varun K T | Developer",
  description:
    "Creative Full Stack Developer specializing in building exceptional digital experiences with modern technologies.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js", "typescript"],
}

export const viewport = {
  themeColor: "#0f172a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        
      </body>
    </html>
  )
}
