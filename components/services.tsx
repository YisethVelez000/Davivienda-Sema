import {
  CreditCard,
  TrendingUp,
  Smartphone,
  Building2,
  PiggyBank,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: CreditCard,
    title: "Tarjetas de Crédito",
    description:
      "Visa y Mastercard con beneficios exclusivos, millas, cashback y sin cuota de manejo el primer año.",
  },
  {
    icon: TrendingUp,
    title: "Inversiones y CDTs",
    description:
      "CDTs, fondos de inversion y portafolios diversificados con rendimientos competitivos para tu patrimonio.",
  },
  {
    icon: Smartphone,
    title: "DaviPlata",
    description:
      "La billetera digital de Davivienda. Envia y recibe dinero, paga servicios y compra recargas desde tu celular.",
  },
  {
    icon: Building2,
    title: "Credito de Vivienda",
    description:
      "Creditos hipotecarios y leasing habitacional para comprar la casa o apartamento que siempre soñaste.",
  },
  {
    icon: PiggyBank,
    title: "Cuentas de Ahorro",
    description:
      "Cuentas de ahorro y corrientes con tasas preferenciales, sin cuota de manejo y beneficios exclusivos.",
  },
  {
    icon: Shield,
    title: "Seguros Bolsa",
    description:
      "Proteccion integral para tu familia, vehiculo, vivienda y patrimonio con Seguros Bolivar.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            Soluciones Financieras a Tu Medida
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            En Davivienda ofrecemos productos y servicios bancarios diseñados 
            para acompanar cada etapa de tu vida financiera.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
