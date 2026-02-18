import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Empresaria",
    quote:
      "Davivienda transformo la gestion financiera de mi empresa. Su credito empresarial me permitio expandir el negocio con tasas muy competitivas.",
    rating: 5,
  },
  {
    name: "Carlos Rodriguez",
    role: "Ingeniero de Software",
    quote:
      "La app movil es increible. Puedo hacer transferencias, pagar servicios y controlar mis gastos desde cualquier lugar. Muy intuitiva.",
    rating: 5,
  },
  {
    name: "Ana Martinez",
    role: "Medica",
    quote:
      "Abri mi CDT Premium y los rendimientos superaron mis expectativas. La asesoria personalizada marco la diferencia en mis inversiones.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Miles de personas y empresas confian en Davivienda para gestionar 
            sus finanzas. Estas son sus historias.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border border-border bg-card"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="text-foreground leading-relaxed text-sm">
                  {`"${testimonial.quote}"`}
                </blockquote>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
