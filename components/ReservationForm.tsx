'use client'

import { useState } from "react"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
]

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    party_size: "2",
    special_requests: "",
  })
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
            type: "reservation",
            ...formData,
          }),
        })
      }

      await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setSuccess(true)
    } catch {
      setError("Error al enviar la reserva. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split("T")[0]

  if (success) {
    return (
      <section id="reservations" className="py-24 bg-cream-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-cream border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-espresso mb-2">¡Reserva Confirmada!</h3>
              <p className="text-taupe">
                Gracias, {formData.name}. Te confirmaremos dentro de 2 horas por correo electrónico.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="reservations" className="py-24 bg-cream-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso mb-4">
            Reserva Tu Mesa
          </h2>
          <p className="text-taupe text-lg">
            Únete a nosotros para una sesión de cata o simplemente tu bebida favorita. Reserva con anticipación.
          </p>
        </div>

        <Card className="bg-cream border-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-espresso mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-espresso mb-2">
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-espresso mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Fecha
                  </label>
                  <Input
                    id="date"
                    type="date"
                    required
                    min={today}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-espresso mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Hora
                  </label>
                  <select
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full h-10 px-3 py-2 rounded-md border border-input bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Seleccionar</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="party_size" className="block text-sm font-medium text-espresso mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Personas
                  </label>
                  <select
                    id="party_size"
                    value={formData.party_size}
                    onChange={(e) => setFormData({ ...formData, party_size: e.target.value })}
                    className="w-full h-10 px-3 py-2 rounded-md border border-input bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="special_requests" className="block text-sm font-medium text-espresso mb-2">
                  Solicitudes Especiales (opcional)
                </label>
                <Textarea
                  id="special_requests"
                  value={formData.special_requests}
                  onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
                  className="bg-white"
                  placeholder="Alergias, celebraciones, preferencias..."
                  rows={3}
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-coffee hover:bg-coffee/90 h-12 text-lg"
              >
                {loading ? "Enviando..." : "Confirmar Reserva"}
              </Button>

              <p className="text-center text-sm text-taupe">
                Te confirmaremos dentro de 2 horas.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
