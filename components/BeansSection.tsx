'use client'

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Bean {
  id: number
  name: string
  region: string
  roast_level: string
  tasting_notes: string
  price: number
  weight: string
}

const roastColors: Record<string, { bar: string; label: string }> = {
  light: { bar: "bg-amber-300", label: "Tueste Claro" },
  medium: { bar: "bg-amber-600", label: "Tueste Medio" },
  dark: { bar: "bg-amber-900", label: "Tueste Oscuro" },
}

export function BeansSection() {
  const [beans, setBeans] = useState<Bean[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/beans")
      .then((res) => res.json())
      .then((data) => {
        setBeans(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="beans" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso mb-4">Destacados del Mes</h2>
          <p className="text-taupe text-lg">Cantidades limitadas. Pre ordena en línea.</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gradient-to-br from-cream-dark to-cream animate-pulse">
                <CardContent className="p-6">
                  <div className="h-8 bg-cream rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-cream rounded w-1/2 mb-6"></div>
                  <div className="h-20 bg-cream rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beans.map((bean) => {
              const roast = roastColors[bean.roast_level] || roastColors.medium
              return (
                <Card key={bean.id} className="bg-gradient-to-br from-espresso/5 to-coffee/5 border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-taupe mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{bean.region}</span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-espresso mb-3">{bean.name}</h3>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex-1 h-2 bg-cream rounded-full overflow-hidden">
                          <div
                            className={`h-full ${roast.bar} rounded-full`}
                            style={{
                              width: bean.roast_level === "light" ? "33%" : bean.roast_level === "medium" ? "66%" : "100%",
                            }}
                          />
                        </div>
                        <span className="text-xs text-taupe">{roast.label}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-taupe mb-2">Notas de cata:</p>
                      <div className="flex flex-wrap gap-2">
                        {bean.tasting_notes.split(", ").map((note) => (
                          <Badge key={note} variant="secondary" className="bg-cream text-espresso">
                            {note}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-semibold text-coffee">${bean.price?.toFixed(2)}</p>
                        <p className="text-sm text-taupe">{bean.weight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
