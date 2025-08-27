// Herohomepage Component
// Generated: 2025-08-27T00:08:43.969Z
// Template: hero-c001
// Context: Homepage
// Position: pages.0.sections.0

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Zap, Sparkles, Palette } from "lucide-react"

export default function Herohomepage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 size-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-sm font-bold text-primary backdrop-blur-sm">
              <Sparkles className="size-4 mr-2 animate-pulse" />
              Award-Winning Creative Studio 2024
              <ArrowRight className="ml-2 size-4" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-8 leading-none">
              We Create
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
                BOLD
              </span>
              Digital Experiences
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              Neon Creative Studio transforms innovative businesses with cutting-edge branding, 
              web design, and digital marketing that breaks boundaries and drives results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="group text-lg px-10 py-4 font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                Start Your Project
                <ArrowRight className="ml-2 size-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group text-lg px-10 py-4 font-bold border-2 border-secondary text-secondary hover:bg-secondary/10">
                <Play className="mr-2 size-6 transition-transform group-hover:scale-110" />
                View Our Work
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-base text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary to-primary/60 border-3 border-background shadow-lg" />
                  <div className="size-10 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-3 border-background shadow-lg" />
                  <div className="size-10 rounded-full bg-gradient-to-br from-accent to-accent/60 border-3 border-background shadow-lg" />
                </div>
                <span className="ml-2 font-semibold">
                  <Users className="inline size-5 mr-1" />
                  500+ Creative Projects
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 font-semibold">Clutch Top Agency</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-3xl border-2 border-primary/20 bg-card p-3 shadow-2xl shadow-primary/10 backdrop-blur-sm">
                <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-muted/50 to-secondary/20 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse" />
                  <div className="text-center z-10">
                    <div className="size-20 mx-auto mb-6 rounded-full bg-primary/30 flex items-center justify-center backdrop-blur-sm border border-primary/40">
                      <Palette className="size-10 text-primary" />
                    </div>
                    <p className="text-xl font-bold text-foreground">Creative Portfolio Showcase</p>
                    <p className="text-muted-foreground mt-2">Bold designs that convert</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 size-12 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/30" />
              <div className="absolute -bottom-6 -right-6 size-8 bg-secondary rounded-full animate-bounce delay-1000 shadow-lg shadow-secondary/30" />
              <div className="absolute top-1/3 -right-12 size-6 bg-accent rounded-full animate-bounce delay-500 shadow-lg shadow-accent/30" />
              <div className="absolute bottom-1/3 -left-8 size-4 bg-primary rounded-full animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}