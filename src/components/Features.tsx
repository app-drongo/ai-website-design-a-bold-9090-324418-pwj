// Features Component
// Generated: 2025-08-27T00:08:43.969Z
// Template: features-c001
// Context: Portfolio
// Position: pages.2.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Zap,
  Users,
  Target,
  Sparkles,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const portfolioFeatures = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete visual identity systems that capture your brand's essence and resonate with your target audience.",
      badge: "Branding"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Cutting-edge websites that combine stunning visuals with seamless user experience and performance.",
      badge: "Web Design"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Every design optimized for mobile devices, ensuring your brand looks perfect on any screen size.",
      badge: "Mobile"
    },
    {
      icon: BarChart3,
      title: "Social Media Strategy",
      description: "Data-driven social media campaigns that amplify your brand voice and drive meaningful engagement.",
      badge: "Social Media"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description: "Rapid project turnaround without compromising quality, getting your brand to market faster.",
      badge: "Speed"
    },
    {
      icon: Users,
      title: "User Experience Focus",
      description: "Human-centered design that creates intuitive, memorable experiences for your customers.",
      badge: "UX Design"
    },
    {
      icon: Target,
      title: "Strategic Positioning",
      description: "Market research and competitive analysis to position your brand for maximum impact and growth.",
      badge: "Strategy"
    },
    {
      icon: Sparkles,
      title: "Creative Innovation",
      description: "Experimental design techniques and cutting-edge trends that make your brand stand out from the crowd.",
      badge: "Innovation"
    },
    {
      icon: TrendingUp,
      title: "Growth-Driven Results",
      description: "Measurable outcomes that drive business growth, from increased conversions to brand recognition.",
      badge: "Results"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 text-primary">
            Our Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Creative Solutions That
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Drive Real Impact
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From bold branding to cutting-edge digital experiences, we deliver creative solutions 
            that transform businesses and captivate audiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="size-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Neon Glow Effect */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/30 transition-all duration-300" />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to see these skills in action?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
              View Our Portfolio
            </button>
            <button className="px-8 py-4 border border-secondary/30 rounded-lg font-bold hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 text-secondary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}