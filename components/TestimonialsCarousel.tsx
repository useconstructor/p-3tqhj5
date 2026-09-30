'use client'

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "He probado café en todas partes. Los orígenes únicos de Jorge son los únicos que compro ahora.",
    name: "María G.",
    role: "Diseñadora Gráfica",
    location: "Medellín",
    initials: "MG",
    color: "bg-amber-200",
  },
  {
    quote: "El ritual de visitar Café Tostado es parte de mi domingo. La calidad nunca falla.",
    name: "Carlos M.",
    role: "Escritor",
    location: "Bogotá",
    initials: "CM",
    color: "bg-rose-200",
  },
  {
    quote: "Cambiar a su café de filtro cambió cómo saboreo el café en casa. Valor excepcional.",
    name: "Priya C.",
    role: "Ingeniera de Software",
    location: "Remoto",
    initials: "PC",
    color: "bg-teal-200",
  },
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream text-center mb-12">
          Lo Que Dicen Nuestros Clientes
        </h2>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-espresso/50 border-cream/20">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-cream/90 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-espresso font-bold`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-cream font-medium">{t.name}</p>
                    <p className="text-cream/60 text-sm">
                      {t.role}, {t.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:hidden">
          <Card className="bg-espresso/50 border-cream/20">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-cream/90 mb-6 leading-relaxed">&ldquo;{testimonials[activeIndex].quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full ${testimonials[activeIndex].color} flex items-center justify-center text-espresso font-bold`}
                >
                  {testimonials[activeIndex].initials}
                </div>
                <div>
                  <p className="text-cream font-medium">{testimonials[activeIndex].name}</p>
                  <p className="text-cream/60 text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === activeIndex ? "bg-cream" : "bg-cream/30"
                  }`}
                  aria-label={`Ir a testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
