'use client'

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const apiUrl = process.env.NEXT_PUBLIC_CONSTRUCTOR_API
      const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

      if (apiUrl && projectId) {
        await fetch(`${apiUrl}/v1/forms/${projectId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "newsletter",
            email,
          }),
        })
      }
      setSuccess(true)
    } catch {
      setError("Error al suscribirse. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-coffee">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-2">
              Únete a Nuestra Comunidad
            </h3>
            <p className="text-cream/80">
              Recibe actualizaciones de tuestes, ofertas exclusivas y consejos de barista.
            </p>
          </div>

          {success ? (
            <div className="flex items-center gap-2 text-cream bg-cream/10 px-6 py-3 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span>¡Gracias por suscribirte!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="pl-10 bg-cream border-0 h-12"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="bg-espresso hover:bg-espresso/90 h-12 px-6 whitespace-nowrap"
              >
                {loading ? "..." : "Suscribirse"}
              </Button>
            </form>
          )}
        </div>
        {error && <p className="text-red-300 text-sm text-center mt-2">{error}</p>}
      </div>
    </section>
  )
}
