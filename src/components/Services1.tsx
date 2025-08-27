// Services1 Component
// Generated: 2025-08-27T00:08:43.970Z
// Template: services-c001
// Context: Services
// Position: pages.3.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Palette,
  Globe,
  Share2,
  Megaphone,
  Camera,
  Zap,
  Sparkles,
  Rocket,
  ArrowRight
} from "lucide-react"

export default function Services1() {
  const services = [
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      description: "Bold, memorable brand identities that make your business impossible to ignore in the marketplace.",
      icon: Palette,
      badge: "Signature",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      link: "/services/branding"
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "Cutting-edge websites that blend stunning visuals with flawless functionality and user experience.",
      icon: Globe,
      features: ["Responsive Design", "E-commerce", "CMS Integration"],
      link: "/services/web-design"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Viral-worthy social campaigns that amplify your brand voice across all digital platforms.",
      icon: Share2,
      badge: "Trending",
      features: ["Content Strategy", "Community Management", "Paid Advertising"],
      link: "/services/social-media"
    },
    {
      id: "digital-campaigns",
      title: "Digital Campaigns",
      description: "High-impact marketing campaigns designed to disrupt markets and drive explosive growth.",
      icon: Megaphone,
      features: ["Campaign Strategy", "Multi-Channel", "Performance Tracking"],
      link: "/services/campaigns"
    },
    {
      id: "creative-content",
      title: "Creative Content Production",
      description: "Jaw-dropping visual content that stops scrollers in their tracks and converts viewers into customers.",
      icon: Camera,
      features: ["Video Production", "Photography", "Motion Graphics"],
      link: "/services/content"
    },
    {
      id: "brand-activation",
      title: "Brand Activation",
      description: "Experiential marketing that creates unforgettable brand moments and builds lasting connections.",
      icon: Sparkles,
      features: ["Event Marketing", "Experiential Design", "Influencer Partnerships"],
      link: "/services/activation"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            Creative Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Services That
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ignite Brands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experimental creative solutions that push boundaries and deliver results that matter
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="size-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary border-secondary/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-3 flex-shrink-0 group-hover:shadow-sm group-hover:shadow-primary/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Explore Service Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10 border border-transparent hover:border-primary/20"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Electric Border Effect */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none group-hover:shadow-inner" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to electrify your brand?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              <Zap className="mr-2 size-4 group-hover:animate-pulse" />
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-secondary/30 hover:border-secondary">
              View Portfolio
              <Rocket className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}