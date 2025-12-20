"use client"

const skills = [
"C",
"Python",
"HTML",
"CSS",
"JavaScript",
"VsCode",
"Google cloud",
"Embedded Systems",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Technologies and programming tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border bg-background px-4 py-3 text-center font-medium shadow-sm transition hover:border-primary"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
