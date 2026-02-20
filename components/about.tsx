import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Mas de 50 años liderando el sector bancario en Colombia",
  "Presencia internacional en 6 paises de la region",
  "Banca digital de vanguardia con DaviPlata",
  "Red de mas de 700 oficinas y 2.500 cajeros automaticos",
]

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/team-bank.png"
                alt="Equipo profesional de Davivienda"
                fill
                className="object-cover "
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-6 hidden md:block max-w-[220px] border border-border">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground mt-1">
                Tasa de satisfaccion de nuestros clientes
              </p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quienes Somos
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
              Una Trayectoria de Confianza y Solidez
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              En Davivienda creemos que el progreso de las personas y las empresas es nuestro 
              progreso. Con mas de 50 años de experiencia, somos uno de los bancos mas grandes 
              y solidos de Colombia, con presencia en toda la region.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nuestra plataforma digital DaviPlata ha revolucionado la inclusion financiera 
              en el pais, llevando servicios bancarios a millones de colombianos. Innovamos 
              constantemente para estar mas cerca de ti.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
