import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img-hero.png"
          alt="Skyline financiero moderno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Vigilado por la Superfinanciera de Colombia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance" style={{ color: "white" }}>
            Aquí estamos{" "}
            <span className="text-primary">para ti</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            En Davivienda te acompañamos en cada paso. Cuentas, créditos, 
            inversiones y banca digital con la seguridad y confianza que mereces.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent text-base px-8 py-6"
              asChild
            >
              <a href="https://www.davivienda.com/personas/cuentas" target="_blank" rel="noopener noreferrer">
                Abrir Tu Cuenta
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-card/30 bg-card/10 backdrop-blur-sm"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
              asChild
            >
              <a href="#productos">Conocer Productos</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Años de trayectoria</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ color: "white" }}>18M+</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Clientes activos</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ color: "white" }}>6</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}> Países </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
