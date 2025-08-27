// Navigation Component
// Generated: 2025-08-27T00:08:43.969Z
// Template: navigation-c001
// Context: layout
// Position: layout.header.0

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/25">
                <Zap className="size-6 text-background animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  NEON
                </span>
                <span className="text-xs font-bold text-muted-foreground tracking-widest -mt-1">
                  CREATIVE STUDIO
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-foreground hover:text-primary px-4 py-3 text-sm font-bold transition-all duration-300 hover:bg-primary/10 rounded-lg group overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-bold hover:bg-secondary/20 hover:text-secondary border border-transparent hover:border-secondary/30"
            >
              View Portfolio
            </Button>
            <Button 
              size="sm" 
              className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-bold px-6 shadow-lg shadow-primary/25 transform hover:scale-105 transition-all duration-300"
            >
              Contact
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="hover:bg-primary/20 hover:text-primary"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-500 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="px-2 pt-4 pb-3 space-y-2 border-t border-primary/20 bg-gradient-to-b from-primary/5 to-secondary/5 rounded-b-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-4 py-3 text-base font-bold transition-all duration-300 hover:bg-primary/10 rounded-lg border border-transparent hover:border-primary/20"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button 
                variant="ghost" 
                className="justify-start font-bold hover:bg-secondary/20 hover:text-secondary"
              >
                View Portfolio
              </Button>
              <Button className="justify-start group bg-gradient-to-r from-primary to-secondary font-bold">
                Contact
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}