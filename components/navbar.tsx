"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Baby, Users, User, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DaviviendaLogo } from "@/components/davivienda-logo"

const productosMenu = [
  {
    grupo: "Zona Familia",
    href: "#zona-familia",
    items: [
      { label: "Cuenta Niños",       href: "#cuenta-ninos",      icon: Baby,  desc: "Ahorro desde pequeños" },
      { label: "Portafolio Familia", href: "#portafolio-familia", icon: Users, desc: "Beneficios grupales" },
    ],
  },
  {
    grupo: "Otros productos",
    href: "#productos",
    items: [
      { label: "Portafolio Personal", href: "#portafolio-personal", icon: User,   desc: "Tu plan, tus reglas" },
      { label: "Zona Digital",        href: "#zona-digital",        icon: Laptop, desc: "Tu banco sin salir de casa" },
    ],
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [productosOpen, setProductosOpen]   = useState(false)
  const [mobileProductos, setMobileProductos] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductosOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <DaviviendaLogo className="h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>

          {/* Menú Productos con desplegable */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductosOpen(!productosOpen)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Productos
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productosOpen ? "rotate-180" : ""}`} />
            </button>

            {productosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] bg-card border border-border rounded-2xl shadow-xl overflow-hidden z-50">
                {/* Flecha indicadora */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-border rotate-45" />

                <div className="p-4 grid grid-cols-2 gap-2">
                  {productosMenu.map((grupo) => (
                    <div key={grupo.grupo}>
                      <Link
                        href={grupo.href}
                        onClick={() => setProductosOpen(false)}
                        className="block text-xs font-semibold uppercase tracking-widest text-primary px-3 pt-2 pb-1 hover:text-primary/80 transition-colors"
                      >
                        {grupo.grupo}
                      </Link>
                      {grupo.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setProductosOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-card-foreground leading-tight">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="border-t border-border px-4 py-3 bg-muted/30">
                  <Link
                    href="#productos"
                    onClick={() => setProductosOpen(false)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    Ver todos los productos →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" className="text-sm text-foreground" asChild>
            <a href="https://transacciones.davivienda.com/transaccional/personas/nuevo/login.jsf" target="_blank" rel="noopener noreferrer">
              Iniciar Sesión
            </a>
          </Button>
          <Button className="text-sm bg-primary text-primary-foreground hover:bg-accent" asChild>
            <a href="https://www.davivienda.com/personas/cuentas" target="_blank" rel="noopener noreferrer">
              Abrir Cuenta
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            <Link href="#inicio" className="text-sm font-medium text-foreground py-2.5 border-b border-border/50" onClick={() => setMobileOpen(false)}>
              Inicio
            </Link>

            {/* Productos accordion mobile */}
            <div className="border-b border-border/50">
              <button
                onClick={() => setMobileProductos(!mobileProductos)}
                className="w-full text-sm font-medium text-muted-foreground py-2.5 flex items-center justify-between"
              >
                Productos
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductos ? "rotate-180" : ""}`} />
              </button>
              {mobileProductos && (
                <div className="pb-3 space-y-3">
                  {productosMenu.map((grupo) => (
                    <div key={grupo.grupo}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary px-2 mb-1">{grupo.grupo}</p>
                      {grupo.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => { setMobileOpen(false); setMobileProductos(false) }}
                          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="#servicios" className="text-sm font-medium text-muted-foreground py-2.5 border-b border-border/50" onClick={() => setMobileOpen(false)}>
              Servicios
            </Link>
            <Link href="#nosotros" className="text-sm font-medium text-muted-foreground py-2.5 border-b border-border/50" onClick={() => setMobileOpen(false)}>
              Nosotros
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-muted-foreground py-2.5" onClick={() => setMobileOpen(false)}>
              Contacto
            </Link>

            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Button variant="outline" className="w-full text-foreground" asChild>
                <a href="https://transacciones.davivienda.com/transaccional/personas/nuevo/login.jsf" target="_blank" rel="noopener noreferrer">
                  Iniciar Sesión
                </a>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-accent" asChild>
                <a href="https://www.davivienda.com/personas/cuentas" target="_blank" rel="noopener noreferrer">
                  Abrir Cuenta
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
