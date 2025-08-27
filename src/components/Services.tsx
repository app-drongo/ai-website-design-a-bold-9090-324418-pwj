// Services Component
// Generated: 2025-08-27T00:08:43.969Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Palette,
  Globe,
  Share2,
  Zap,
  Camera,
  Megaphone,
  Sparkles,
  Target,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      description: "Bold, memorable brand identities that cut through the noise and make your startup unforgettable.",
      icon: Palette,
      badge: "Signature",
      features: ["Logo & Visual Identity", "Brand Guidelines", "Creative Direction"],
      link: "/services/branding"
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "Cutting-edge websites that push boundaries and deliver jaw-dropping user experiences.",
      icon: Globe,
      features: ["Experimental UI/UX", "Interactive Animations", "Mobile-First Design"],
      link: "/services/web-design"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Viral-worthy content strategies that amplify your brand across all digital platforms.",
      icon: Share2,
      badge: "Trending",
      features: ["Content Creation", "Community Management", "Influencer Campaigns"],
      link: "/services/social-media"
    },
    {
      id: "digital-campaigns",
      title: "Digital Campaigns",
      description: "High-impact marketing campaigns that generate buzz and drive explosive growth.",
      icon: Zap,
      features: ["Campaign Strategy", "Multi-Channel Execution", "Performance Tracking"],
      link: "/services/campaigns"
    },
    {
      id: "creative-content",
      title: "Creative Content Production",
      description: "Stunning visual content that stops scrollers and converts viewers into customers.",
      icon: Camera,
      features: ["Photography & Video", "Motion Graphics", "Creative Concepts"],
      link: "/services/content"
    },
    {
      id: "growth-marketing",
      title: "Growth Marketing",
      description: "Data-driven growth strategies that scale innovative businesses from startup to success.",
      icon: Target,
      features: ["Growth Hacking", "Conversion Optimization", "Analytics & Insights"],
      link: "/services/growth"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Neon Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-sm font-bold border-primary/30 bg-primary/5">
            <Sparkles className="w-4 h-4 mr-2" />
            CREATIVE SERVICES
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            We Create
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Digital Magic
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Bold creative solutions that transform innovative businesses into unforgettable brands
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-2 border-muted/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" />
                
                {/* Neon Border Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-sm -z-10" />
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                      <Icon className="size-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    {service.badge && (
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white font-bold px-3 py-1 animate-bounce">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-black group-hover:text-primary transition-colors duration-300 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <CardDescription className="text-base leading-relaxed font-medium text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm font-medium">
                        <div className="size-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-3 flex-shrink-0 group-hover:animate-pulse" />
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Explore Service Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 font-bold text-base py-6 border border-transparent hover:border-primary/20"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="size-5 transition-transform group-hover/btn:translate-x-2 group-hover/btn:text-primary" />
                    </a>
                  </Button>
                </CardContent>

                {/* Glowing Hover Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-muted/20 via-card/50 to-muted/20 rounded-3xl p-12 border border-primary/10">
          <Megaphone className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce" />
          <h3 className="text-2xl font-black mb-4">Ready to Go Viral?</h3>
          <p className="text-muted-foreground mb-8 text-lg font-medium max-w-2xl mx-auto">
            Let's create something extraordinary that makes your competitors jealous and your customers obsessed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-8 py-4 text-lg">
              Start Your Project
              <Zap className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 font-bold px-8 py-4 text-lg">
              View Our Portfolio
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}