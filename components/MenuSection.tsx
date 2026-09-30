'use client'

import { useState, useEffect } from "react"
import { Coffee, Leaf, Snowflake, IceCream } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  volume: string
  category: string
}

const categoryIcons: Record<string, React.ReactNode> = {
  espresso: <Coffee className="w-5 h-5" />,
  filter: <Leaf className="w-5 h-5" />,
  cold: <Snowflake className="w-5 h-5" />,
  dessert: <IceCream className="w-5 h-5" />,
}

const categoryLabels: Record<string, string> = {
  espresso: "Espresso",
  filter: "Filtro",
  cold: "Frío",
  dessert: "Postres",
}

export function MenuSection() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/menu-items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const categories = ["all", ...new Set(items.map((item) => item.category))]
  const filteredItems = activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso mb-4">Nuestro Menú</h2>
          <p className="text-taupe text-lg max-w-2xl mx-auto">
            Todas las bebidas a base de espresso usan nuestra mezcla de tueste medio; el café de filtro rota según temporada.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-coffee text-cream"
                  : "bg-cream text-espresso hover:bg-coffee/10"
              }`}
            >
              {cat === "all" ? "Todos" : categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="bg-cream animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-cream-dark rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-cream-dark rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-cream border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-coffee">
                      {categoryIcons[item.category] || <Coffee className="w-5 h-5" />}
                      <span className="text-xs uppercase tracking-wide font-medium">
                        {categoryLabels[item.category] || item.category}
                      </span>
                    </div>
                    <span className="text-sm text-taupe">{item.volume}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-espresso mb-2">{item.name}</h3>
                  <p className="text-taupe text-sm mb-4">{item.description}</p>
                  <p className="font-semibold text-coffee text-lg">${item.price?.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
