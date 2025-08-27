// Pageheader1 Component
// Generated: 2025-08-27T00:08:43.969Z
// Template: page-header-c001
// Context: Portfolio
// Position: pages.2.sections.0

import { Badge } from "@/components/ui/badge"

export default function Pageheader1() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl">
          {/* Optional Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Work
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Bold Projects That
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Defy Expectations
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Explore our portfolio of groundbreaking creative work. From disruptive brand identities to 
            viral social campaigns and cutting-edge web experiences - see how we've helped innovative 
            businesses make their mark in the digital world.
          </p>
        </div>
      </div>
    </section>
  )
}