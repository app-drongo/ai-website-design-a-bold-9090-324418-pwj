// Pricing Component
// Generated: 2025-08-27T00:08:43.970Z
// Template: pricing-c001
// Context: Services
// Position: pages.3.sections.3

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Palette, Rocket, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Brand Spark",
      description: "Perfect for startups and small businesses launching their brand",
      price: "$2,500",
      period: "/project",
      badge: null,
      icon: Palette,
      features: [
        "Logo design & brand identity",
        "Basic brand guidelines",
        "Business card design",
        "Social media templates (5)",
        "2 revision rounds",
        "Final files in all formats",
        "30-day support"
      ],
      cta: "Launch Your Brand",
      popular: false
    },
    {
      name: "Digital Ignition",
      description: "Complete digital presence for growing businesses",
      price: "$5,500",
      period: "/project",
      badge: "Most Popular",
      icon: Rocket,
      features: [
        "Everything in Brand Spark",
        "Custom website design & development",
        "SEO optimization",
        "Social media strategy & setup",
        "Content creation (first month)",
        "Google Analytics setup",
        "Mobile-responsive design",
        "3-month support & maintenance"
      ],
      cta: "Ignite Your Presence",
      popular: true
    },
    {
      name: "Creative Powerhouse",
      description: "Full-scale creative partnership for ambitious enterprises",
      price: "Custom",
      period: "",
      badge: "Premium",
      icon: Crown,
      features: [
        "Everything in Digital Ignition",
        "Ongoing creative partnership",
        "Advanced web applications",
        "Multi-platform campaigns",
        "Video & motion graphics",
        "Dedicated creative team",
        "Monthly strategy sessions",
        "Priority support & updates"
      ],
      cta: "Partner With Us",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium border-primary/20">
            <Zap className="size-4 mr-2" />
            Creative Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Transparent Pricing for
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Bold Creative Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            No hidden fees, no creative compromises. Choose the perfect package to transform 
            your brand and captivate your audience with cutting-edge design.
          </p>
          
          {/* Project Type Toggle */}
          <div className="inline-flex items-center p-1 bg-muted/50 backdrop-blur-sm rounded-xl border border-primary/10">
            <button className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg shadow-sm transition-all hover:bg-primary/90">
              Project-Based
            </button>
            <button className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Monthly Retainer
              <Badge variant="secondary" className="ml-2 text-xs bg-secondary/20 text-secondary">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card 
                key={index}
                className={cn(
                  "relative overflow-hidden transition-all duration-500 hover:shadow-2xl group",
                  plan.popular 
                    ? "border-primary/50 shadow-xl shadow-primary/20 scale-105 bg-gradient-to-br from-card via-card to-primary/5" 
                    : "border-border/30 hover:border-primary/30 bg-card/50 backdrop-blur-sm hover:scale-105"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 shadow-lg">
                      <Star className="size-4 mr-2" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative text-center pb-8 pt-8">
                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="mb-4 mx-auto w-fit border-secondary/30 text-secondary">
                      {plan.badge}
                    </Badge>
                  )}
                  
                  <div className="mb-4 mx-auto w-fit p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                    <IconComponent className="size-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-2xl mb-3 font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-8 leading-relaxed">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-2 text-lg">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-8">
                  {/* Features List */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="size-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={cn(
                      "w-full text-base py-6 font-semibold transition-all duration-300",
                      plan.popular 
                        ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl" 
                        : "border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    {plan.cta}
                  </Button>

                  {plan.name === "Digital Ignition" && (
                    <p className="text-center text-sm text-muted-foreground">
                      Free consultation • Custom proposal included
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-secondary/5 border border-primary/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ready to Create Something Extraordinary?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Every project is unique, just like your vision. Let's discuss your creative challenges 
              and craft a custom solution that sets your brand apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6">
                <Rocket className="size-5 mr-2" />
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6">
                Schedule Creative Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}