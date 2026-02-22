import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { DaviviendaLogo } from "@/components/davivienda-logo"

const footerLinks = {
  Productos: [
    "Cuentas de Ahorro",
    "Tarjetas de Crédito",
    "Créditos",
    "Inversiones",
    "Seguros",
  ],
  Empresa: [
    "Quiénes Somos",
    "Equipo Directivo",
    "Responsabilidad Social",
    "Sala de Prensa",
    "Trabaja con Nosotros",
  ],
  Soporte: [
    "Centro de Ayuda",
    "Sucursales",
    "Tarifas y Comisiones",
    "Seguridad",
    "Preguntas Frecuentes",
  ],
  Legal: [
    "Términos y Condiciones",
    "Política de Privacidad",
    "Defensor del Consumidor",
    "Superintendencia Financiera",
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <DaviviendaLogo className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-sm text-background/50 leading-relaxed">
              Aquí estamos para ti. Innovación, seguridad y compromiso 
              con tu futuro financiero.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-background mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-background/50 hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-background/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            {"2026 Banco Davivienda S.A. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-background/30">
            Entidad vigilada por la Superintendencia Financiera
          </p>
        </div>
      </div>
    </footer>
  )
}
