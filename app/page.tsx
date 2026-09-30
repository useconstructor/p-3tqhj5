import Image from "next/image"
import { Coffee, Users, Leaf, Award, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/Navigation"
import { MenuSection } from "@/components/MenuSection"
import { BeansSection } from "@/components/BeansSection"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { ReservationForm } from "@/components/ReservationForm"
import { NewsletterForm } from "@/components/NewsletterForm"

const stats = [
  { icon: Coffee, value: "8", label: "Años Tostando" },
  { icon: Leaf, value: "47", label: "Variedades de Origen Único" },
  { icon: Users, value: "12,000+", label: "Amantes del Café Mensuales" },
  { icon: Award, value: "100%", label: "Comercio Directo" },
]

const pricingTiers = [
  {
    name: "Café Casual",
    price: "Gratis",
    period: "",
    description: "Para visitantes ocasionales",
    features: [
      "Newsletter mensual con novedades de tueste",
      "Acceso al menú de temporada",
      "10% descuento en primera compra online",
    ],
    cta: "Unirse Gratis",
    featured: false,
  },
  {
    name: "Café Member",
    price: "$8",
    period: "/mes",
    description: "Para los verdaderos amantes del café",
    features: [
      "Todo lo de Café Casual",
      "Entrega gratuita de granos a domicilio",
      "Acceso anticipado a ediciones limitadas",
      "Sesión de cata mensual gratuita",
      "15% descuento en todas las compras",
    ],
    cta: "Ser Miembro",
    featured: true,
  },
  {
    name: "Café Connoisseur",
    price: "$20",
    period: "/mes",
    description: "La experiencia completa",
    features: [
      "Todo lo de Café Member",
      "Caja sorpresa mensual de granos selectos",
      "Clase privada de barista trimestral",
      "Reservaciones prioritarias",
      "25% descuento en todas las compras",
    ],
    cta: "Ser Connoisseur",
    featured: false,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="pt-16 min-h-screen flex items-center bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-coffee font-medium tracking-wide uppercase mb-4">Tostado Artesanal</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-espresso leading-tight mb-6">
                Specialty Coffee, Roasted Daily
              </h1>
              <p className="text-lg md:text-xl text-taupe mb-8 max-w-lg">
                Descubre granos de origen único y bebidas de espresso artesanales de nuestra tostaduría en Medellín.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-coffee hover:bg-coffee/90 h-14 px-8 text-lg">
                  <a href="#reservations">
                    Reservar Tu Mesa
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-espresso text-espresso hover:bg-espresso hover:text-cream">
                  <a href="#menu">Ver Menú</a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl lg:-mr-12">
                <Image
                  src="/images/hero.png"
                  alt="Granos de café recién tostados en luz dorada"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-coffee/10 rounded-full flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-coffee" />
                  </div>
                  <div>
                    <p className="font-semibold text-espresso">Tostado Diario</p>
                    <p className="text-sm text-taupe">Lotes pequeños</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-espresso py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-coffee mx-auto mb-3" />
                <p className="font-display text-3xl md:text-4xl font-semibold text-cream mb-1">{stat.value}</p>
                <p className="text-cream/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* About Section - Split Layout */}
      <section id="about" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/feature.png"
                  alt="Nuestra historia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-coffee text-cream p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <p className="font-display text-lg font-semibold mb-1">Desde 2016</p>
                <p className="text-cream/80 text-sm">Trabajando con 23 fincas familiares</p>
              </div>
            </div>
            <div className="lg:pl-8">
              <p className="text-coffee font-medium tracking-wide uppercase mb-4">Nuestra Historia</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso mb-6">
                Roasted in Medellín, Loved Worldwide
              </h2>
              <div className="space-y-4 text-taupe text-lg leading-relaxed">
                <p>
                  En 2016, nuestro fundador dejó el mundo corporativo para perseguir su pasión por el café. Trabajando directamente con 23 fincas familiares a través del triángulo cafetero de Colombia, Café Tostado tuesta lotes pequeños diariamente para maximizar la frescura.
                </p>
                <p>
                  Cada grano es seleccionado a mano, nunca producido en masa. Creemos que el gran café comienza con respeto—por el agricultor, la tierra y la taza.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-espresso">
                  <Check className="w-5 h-5 text-coffee" />
                  <span>Comercio Directo</span>
                </div>
                <div className="flex items-center gap-2 text-espresso">
                  <Check className="w-5 h-5 text-coffee" />
                  <span>Tueste Artesanal</span>
                </div>
                <div className="flex items-center gap-2 text-espresso">
                  <Check className="w-5 h-5 text-coffee" />
                  <span>Frescura Garantizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beans Section */}
      <BeansSection />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Club Tostado - Loyalty Program */}
      <section id="club" className="py-24 bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-coffee font-medium tracking-wide uppercase mb-4">Programa de Lealtad</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-4">
              Club Tostado
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Únete a nuestra comunidad exclusiva de amantes del café y disfruta de beneficios únicos cada vez que nos visitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-coffee/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-2">Puntos por Compra</h3>
              <p className="text-cream/70">Acumula 1 punto por cada $1,000 COP. Canjea tus puntos por bebidas, granos o merchandise exclusivo.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-coffee/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-2">Recompensas Exclusivas</h3>
              <p className="text-cream/70">Bebida gratis en tu cumpleaños, acceso anticipado a nuevos tuestes y descuentos especiales solo para miembros.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-coffee/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-2">Eventos VIP</h3>
              <p className="text-cream/70">Invitaciones a catas privadas, talleres de barista y lanzamientos de ediciones limitadas antes que nadie.</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-coffee hover:bg-coffee/90 h-14 px-10 text-lg">
              <a href="#pricing">
                Unirse al Club
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <ReservationForm />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso mb-4">
              Membresías
            </h2>
            <p className="text-taupe text-lg max-w-2xl mx-auto">
              Únete a nuestra comunidad y disfruta de beneficios exclusivos para amantes del café.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden border-0 ${
                  tier.featured
                    ? "bg-espresso text-cream shadow-2xl scale-105 z-10"
                    : "bg-cream-dark"
                }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-coffee text-cream text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <CardContent className="p-6 md:p-8">
                  <h3 className={`font-display text-2xl font-semibold mb-2 ${tier.featured ? "text-cream" : "text-espresso"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-4 ${tier.featured ? "text-cream/70" : "text-taupe"}`}>
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className={`font-display text-4xl font-semibold ${tier.featured ? "text-cream" : "text-espresso"}`}>
                      {tier.price}
                    </span>
                    <span className={tier.featured ? "text-cream/70" : "text-taupe"}>{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.featured ? "text-coffee" : "text-coffee"}`} />
                        <span className={`text-sm ${tier.featured ? "text-cream/90" : "text-espresso/80"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full h-12 ${
                      tier.featured
                        ? "bg-coffee hover:bg-coffee/90 text-cream"
                        : "bg-espresso hover:bg-espresso/90 text-cream"
                    }`}
                  >
                    <a href="#reservations">{tier.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />

      {/* Footer */}
      <footer className="bg-espresso py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-8 h-8 text-coffee" />
                <span className="font-display text-2xl font-semibold text-cream">Café Tostado</span>
              </div>
              <p className="text-cream/70 mb-6 max-w-sm">
                Specialty coffee roasted daily in Medellín. Discover single origin beans and handcrafted espresso drinks.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-coffee transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-coffee transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-coffee transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-cream mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-cream/70 hover:text-coffee transition-colors">Menú</a></li>
                <li><a href="#about" className="text-cream/70 hover:text-coffee transition-colors">Nuestra Historia</a></li>
                <li><a href="#beans" className="text-cream/70 hover:text-coffee transition-colors">Granos</a></li>
                <li><a href="#pricing" className="text-cream/70 hover:text-coffee transition-colors">Membresías</a></li>
                <li><a href="#reservations" className="text-cream/70 hover:text-coffee transition-colors">Reservaciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-cream mb-4">Horario</h4>
              <ul className="space-y-2 text-cream/70">
                <li>Lunes a Viernes</li>
                <li className="text-cream">7:00 AM — 7:00 PM</li>
                <li className="mt-4">Sábado y Domingo</li>
                <li className="text-cream">8:00 AM — 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Café Tostado. Todos los derechos reservados.
            </p>
            <p className="text-cream/50 text-sm">
              Medellín, Colombia
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
