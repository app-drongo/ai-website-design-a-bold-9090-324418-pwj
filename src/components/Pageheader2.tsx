// Pageheader2 Component
// Generated: 2025-08-27T00:08:43.969Z
// Template: page-header-c001
// Context: Services
// Position: pages.3.sections.0

import { Badge } from "@/components/ui/badge"

export default function Pageheader2() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 size-32 bg-accent/5 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 px-6 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors">
            Creative Services Portfolio
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-foreground mb-8 leading-none">
            Bold Creative Solutions
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-2">
              That Break Boundaries
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            From cutting-edge branding to explosive social media campaigns and revolutionary web design—
            we craft digital experiences that make your competition jealous and your audience obsessed.
          </p>
          
          {/* Service Highlights */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              Brand Identity Design
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold border border-secondary/20">
              Web Development
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
              Social Media Strategy
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}