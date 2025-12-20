"use client"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prakruthi R. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
