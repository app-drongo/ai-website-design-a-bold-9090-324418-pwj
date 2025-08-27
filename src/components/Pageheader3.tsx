// Pageheader3 Component
// Generated: 2025-08-27T00:08:43.970Z
// Template: page-header-c001
// Context: Contact
// Position: pages.4.sections.0

import { Badge } from "@/components/ui/badge"

export default function Pageheader3() {
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
            Let's Connect
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Ready to Create Something
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Extraordinary?
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Let's bring your boldest creative visions to life. Whether you need cutting-edge branding, 
            innovative web design, or explosive social media campaigns, Neon Creative Studio is ready 
            to amplify your brand's impact. Drop us a line and let's start the conversation.
          </p>
          
          {/* Contact Methods Preview */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full animate-pulse" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-secondary rounded-full animate-pulse delay-500" />
              <span>Free creative consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse delay-1000" />
              <span>Custom project proposals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}