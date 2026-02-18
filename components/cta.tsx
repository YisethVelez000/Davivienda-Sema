import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"

export function CTA() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground text-balance">
              Comienza a Construir Tu Futuro Financiero Hoy
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Abre tu cuenta Davivienda en minutos, sin papeleos. 
              Nuestros asesores estan listos para acompanarte.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 text-base px-8 py-6"
                asChild
              >
                <a href="https://www.davivienda.com/personas/cuentas" target="_blank" rel="noopener noreferrer">
                  Abrir Cuenta Ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8 py-6"
                asChild
              >
                <a href="https://transacciones.davivienda.com/transaccional/personas/nuevo/login.jsf" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Hablar con un Asesor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
