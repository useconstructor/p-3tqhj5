'use client'

import { useState } from "react"
import { Coffee, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Nuestra Historia", href: "#about" },
  { label: "Granos", href: "#beans" },
  { label: "Membresías", href: "#pricing" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-coffee" />
            <span className="font-display text-xl font-semibold text-espresso">Café Tostado</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-espresso/80 hover:text-coffee transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-coffee hover:bg-coffee/90">
              <a href="#reservations">Reservar Mesa</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-espresso"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-cream border-b border-border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 text-espresso hover:bg-cream-dark rounded-lg transition-all duration-300"
              style={{ transitionDelay: open ? `${index * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="pt-2 transition-all duration-300"
            style={{ transitionDelay: open ? `${navLinks.length * 60}ms` : "0ms" }}
          >
            <Button asChild className="w-full bg-coffee hover:bg-coffee/90">
              <a href="#reservations" onClick={() => setOpen(false)}>Reservar Mesa</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
