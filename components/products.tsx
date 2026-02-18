import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, Baby, Users, User, Laptop,
  ShieldCheck, ShoppingBag, BookOpen, DollarSign, FileText, AlertCircle,
  QrCode, RefreshCw, CreditCard, Zap, Settings, Clock, Lock, CheckCircle,
  Percent, Star, Gift, MapPin, Home,
} from "lucide-react"

// ── Cuenta Niños ─────────────────────────────────────────────────────────────
const ninos = {
  beneficios: [
    { icon: DollarSign, titulo: "Sin monto mínimo",      desc: "Enséñeles a ahorrar y manejar su dinero con una cuenta que puede abrir desde $0." },
    { icon: ShieldCheck, titulo: "Control parental",     desc: "Tenga la tranquilidad de manejar y controlar la cuenta de sus hijos." },
    { icon: ShoppingBag, titulo: "Beneficios en compras",desc: "Disfrute los beneficios y ofertas para realizar compras en tiendas físicas y en línea." },
    { icon: BookOpen,    titulo: "Educación financiera", desc: "Invite a sus pequeños a explorar, jugar y aprender sobre finanzas desde la infancia." },
  ],
  tasas: {
    cuota: "$0",
    notas: [
      "Cobros transaccionales: para más información, consulte tasas y tarifas vigentes del producto.",
      "Rendimientos: conozca el VTUP (Valor Total Unificado del Pasivo). Este valor representa los ingresos y cobros asociados al producto durante su tiempo de uso.",
    ],
  },
  requisitos: [
    {
      rango: "de 0 a 6 años",
      items: [
        "Cédula de ciudadanía original y una copia.",
        "Copia del registro civil de nacimiento.",
        "Para solicitar este producto, acérquese a cualquiera de nuestras oficinas en todo el país.",
      ],
    },
    {
      rango: "de 7 a 17 años",
      items: [
        "Cédula de ciudadanía original y una copia.",
        "Tarjeta de identidad original y una copia.",
        "Copia del registro civil de nacimiento.",
        "Para solicitar este producto, acérquese a cualquiera de nuestras oficinas en todo el país.",
      ],
    },
  ],
}

// ── Portafolio Familia ────────────────────────────────────────────────────────
const familia = {
  descripcion:
    "Portafolio Familia permite a clientes con Portafolio Davivienda extender y compartir beneficios bancarios con familiares o seres queridos. Al agruparse, todos los miembros obtienen mejores condiciones en sus productos financieros.",
  composicion: [
    { label: "Mínimo", valor: "2 miembros", nota: "Líder + 1 integrante" },
    { label: "Máximo", valor: "9 miembros", nota: "Líder + 8 integrantes" },
  ],
  caracteristicas: [
    { icon: Users,   titulo: "Flexibilidad",      desc: "Grupo desde 2 hasta 9 personas. Los integrantes pueden ser familiares, personas cercanas o empleadas del hogar." },
    { icon: Laptop,  titulo: "Gestión Digital",   desc: "Cree, modifique o elimine integrantes 100% en línea desde la página web de Davivienda, sin ir a una oficina." },
    { icon: Gift,    titulo: "Subsidios",         desc: "El líder puede subsidiar la cuota de manejo de un producto por cada integrante; el cobro se hace directamente al líder." },
  ],
  beneficios: [
    { icon: Percent,   titulo: "20% descuento en cuota de manejo",  desc: "El líder obtiene 20% de descuento en su portafolio; los integrantes, 20% en cuentas corrientes, de ahorros o portafolio." },
    { icon: Star,      titulo: "Traslado de DaviPuntos",            desc: "Transfiere puntos entre miembros. Quien traslada necesita mínimo 5.000 puntos y quien recibe, mínimo 12.000 puntos." },
    { icon: Gift,      titulo: "Subsidio de cuotas",                desc: "El líder puede subsidiar la cuota de un producto por cada integrante, debitado de la cuenta que él defina." },
    { icon: Baby,      titulo: "Cuenta Niños sin costo",            desc: "Abra Cuentas Niños para hijos menores de 12 años sin cobro de cuota de manejo." },
    { icon: MapPin,    titulo: "Transacciones sin costo",           desc: "Transacciones viajeras sin costo a nivel nacional en todo el país." },
    { icon: Home,      titulo: "Tasas preferenciales",              desc: "Acceso a tasas preferenciales para créditos de vivienda." },
  ],
  requisitosLider: [
    "Portafolio Davivienda vigente con: Cuenta de Ahorros, Cuenta Corriente con sobregiro, Crediexpress Rotativo y Tarjeta de crédito y/o débito Portafolio.",
    "Ingresos mínimos de $2.5 millones de pesos mensuales.",
  ],
  requisitosIntegrante: [
    "Ser cliente Davivienda con al menos un producto activo en el banco.",
  ],
  pasos: [
    "Ingresa a www.davivienda.com con tu tipo y número de documento.",
    "Haz clic en la opción Más Servicios.",
    "Selecciona Active y Configure su Portafolio Familia.",
    "Agrega a tus familiares usando sus números de identificación.",
  ],
  nota: "Los beneficios están sujetos a que el líder mantenga su Portafolio activo. Si el líder cancela su portafolio, el grupo y sus descuentos se disuelven automáticamente.",
}

// ── Zona Digital ──────────────────────────────────────────────────────────────
const digital = [
  {
    icon: QrCode,
    titulo: "Vender con Código QR",
    subtitulo: "QR Interoperable",
    descripcion: "Reciba pagos digitales en su negocio sin datáfonos costosos. Compatible con clientes de otros bancos y billeteras digitales vía Redeban.",
    caracteristicas: [
      { icon: Zap,      texto: "Interoperabilidad: reciba pagos de otros bancos y billeteras digitales." },
      { icon: Clock,    texto: "Inmediatez: el dinero llega a su cuenta de forma instantánea." },
      { icon: Settings, texto: "Versatilidad: genere un QR para valor fijo o déjelo abierto para que el cliente digite el monto." },
    ],
    beneficios: [
      "Cero costo de manejo: la cuenta asociada tiene cuota de manejo $0.",
      "Seguridad: reduce el manejo de efectivo y evita errores al dar cambio.",
      "Control: historial de ventas claro en la App Davivienda.",
    ],
    requisitos: [
      "Tener una cuenta activa en Davivienda (Ahorros o Corriente) que no sea de nómina, pensión o AFC.",
      "Tener instalada y activa la App Davivienda (Perfil Empresario).",
    ],
  },
  {
    icon: RefreshCw,
    titulo: "Transferencias Automáticas",
    subtitulo: "Programadas",
    descripcion: "Programe el pago de facturas o envíos de dinero recurrentes para que nunca olvide cumplir sus obligaciones financieras.",
    caracteristicas: [
      { icon: Settings, texto: "Personalización: elija el monto, la fecha exacta y la periodicidad (mensual, quincenal, etc.)." },
      { icon: Zap,      texto: "Flexibilidad: cancele o modifique la programación en cualquier momento desde la App." },
      { icon: Clock,    texto: "Reintentos: si no hay saldo el día programado, el banco reintenta el débito los días siguientes." },
    ],
    beneficios: [
      "Ahorro de tiempo: no repita el mismo proceso cada mes.",
      "Gratuidad: programar transferencias no tiene costo adicional.",
      "Puntualidad: mantenga sus obligaciones al día sin retrasos.",
    ],
    requisitos: [
      "Cuenta de ahorros o corriente con saldo suficiente el día programado.",
      "Contar con la Clave Virtual para la configuración inicial en la App o el portal web.",
    ],
  },
  {
    icon: CreditCard,
    titulo: "Compras Virtuales",
    subtitulo: "eCard y Tarjeta Móvil",
    descripcion: "Compre por internet de forma segura con la tarjeta virtual eCard recargable de franquicia Visa o Mastercard, válida en Netflix, Amazon, Shein y más.",
    caracteristicas: [
      { icon: DollarSign,  texto: "Recargable: transfiera hasta $7.000.000 al mes desde su cuenta de ahorros." },
      { icon: ShoppingBag, texto: "Uso Global: franquicia Visa o Mastercard válida en miles de tiendas en línea." },
      { icon: Lock,        texto: "Seguridad Dinámica: préndale o apáguela desde la App para evitar fraudes." },
    ],
    beneficios: [
      "Sin cuota de manejo para la eCard recargable.",
      "Control total: solo gasta lo que tiene presupuestado.",
      "Inmediatez: solicítela por la App y queda activa en minutos.",
    ],
    requisitos: [
      "Ser cliente Davivienda con cuenta de ahorros o corriente activa.",
      "Tener la App Davivienda instalada.",
      "Para la Tarjeta de Crédito Móvil: ingreso mínimo desde 1 SMLV y estudio de crédito.",
    ],
  },
]

// ── Otros productos (grid) ────────────────────────────────────────────────────
const otrosProductos = [
  {
    title: "Portafolio Personal",
    subtitle: "Tu plan, tus reglas",
    description: "Cuenta de ahorros, tarjeta débito, tarjeta de crédito y acceso a nuestra plataforma digital. Todo en un solo portafolio pensado para ti y tu estilo de vida.",
    image: "/images/img-portafolio-personal.png",
    icon: User,
    cta: "Solicitar",
  },
  {
    title: "Zona Digital",
    subtitle: "Tu banco sin salir de casa",
    description: "Realiza todas tus operaciones bancarias 100% en línea. Transferencias, pagos, inversiones y más desde la App Davivienda o nuestro portal web.",
    image: "/images/img-zona-digital.png",
    icon: Laptop,
    cta: "Explorar",
  },
]

// ─────────────────────────────────────────────────────────────────────────────

export function Products() {
  return (
    <section id="productos" className="py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 space-y-16">

        {/* ── Encabezado de sección ── */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Productos Destacados
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            Soluciones Para Cada Etapa de Tu Vida
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Davivienda tiene el producto ideal para ti, tu familia y tus metas.
            Descubre lo que hemos diseñado pensando en ti.
          </p>
        </div>

        {/* ════════════════════════════════════════════════
            ZONA FAMILIA
        ════════════════════════════════════════════════ */}
        <div id="zona-familia" className="rounded-2xl border-2 border-primary/20 bg-card overflow-hidden">

          {/* Cabecera de zona con imagen */}
          <div className="relative overflow-hidden">
            <div className="aspect-[21/6] relative">
              <Image src="/images/zona-familia.png" alt="Zona Familia" fill className="object-cover object-center" />
              {/* Capa oscura uniforme + gradiente lateral para el texto */}
              <div className="absolute inset-0 bg-foreground/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-foreground/10" />
            </div>
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest drop-shadow" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Sección
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold drop-shadow-md" style={{ color: "white" }}>
                    Zona Familia
                  </h3>
                </div>
              </div>
              <p className="ml-auto hidden md:block text-sm max-w-xs text-right leading-relaxed drop-shadow" style={{ color: "rgba(255,255,255,0.9)" }}>
                Productos diseñados para crecer juntos: ahorro desde pequeños y beneficios grupales para toda la familia.
              </p>
            </div>
          </div>

          <div className="p-8 space-y-12">

            {/* Tarjetas resumen de los dos productos */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card Cuenta Niños */}
              <div className="rounded-xl border border-border overflow-hidden group hover:border-primary/40 hover:shadow-md transition-all">
                <div className="aspect-[16/7] relative overflow-hidden">
                  <Image src="/images/img-cuenta-ninos.png" alt="Cuenta Niños" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <Baby className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Ahorro desde pequeños</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-serif font-bold text-card-foreground">Cuenta Niños</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Abra una cuenta para su hija o hijo, y enséñele a manejar su dinero. Sin cuota de manejo, con control parental y educación financiera.
                  </p>
                  <Button variant="ghost" className="mt-3 px-0 text-primary hover:text-primary/80 hover:bg-transparent" asChild>
                    <a href="https://www.davivienda.com/personas/cuentas/cuenta-de-ahorro-para-ninos" target="_blank" rel="noopener noreferrer">
                      Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Card Portafolio Familia */}
              <div className="rounded-xl border border-border overflow-hidden group hover:border-primary/40 hover:shadow-md transition-all">
                <div className="aspect-[16/7] relative overflow-hidden">
                  <Image src="/images/portafolio-familia.png" alt="Portafolio Familia" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Beneficios grupales</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-serif font-bold text-card-foreground">Portafolio Familia</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {familia.descripcion}
                  </p>
                  <Button variant="ghost" className="mt-3 px-0 text-primary hover:text-primary/80 hover:bg-transparent" asChild>
                    <a href="https://portafoliofamiliadavivienda.com/" target="_blank" rel="noopener noreferrer">
                      Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* ── Cuenta Niños – Detalle ── */}
            <div id="cuenta-ninos" className="rounded-2xl border border-border bg-muted/20 overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-5 border-b border-border">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Baby className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Ahorro desde pequeños</p>
                  <h4 className="text-xl font-serif font-bold text-card-foreground">Cuenta Niños</h4>
                </div>
              </div>
              <div className="p-6 space-y-8">
                {/* Beneficios */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">Beneficios</h5>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {ninos.beneficios.map((b) => (
                      <div key={b.titulo} className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <b.icon className="w-4 h-4 text-primary" />
                        </div>
                        <p className="font-semibold text-card-foreground text-sm mb-1">{b.titulo}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Tasas */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">Tasas y tarifas</h5>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="rounded-xl border border-border bg-card p-5 flex flex-col items-center justify-center min-w-[130px]">
                      <span className="text-4xl font-serif font-bold text-primary">{ninos.tasas.cuota}</span>
                      <span className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wide">Cuota de manejo</span>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4 flex flex-col gap-3 flex-1">
                      {ninos.tasas.notas.map((nota, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-xs text-muted-foreground leading-relaxed">{nota}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Requisitos */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">Requisitos</h5>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {ninos.requisitos.map((grupo) => (
                      <div key={grupo.rango} className="rounded-xl border border-border bg-card p-4">
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                          {grupo.rango}
                        </span>
                        <ul className="space-y-2">
                          {grupo.items.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <FileText className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-fit" asChild>
                  <a href="https://www.davivienda.com/personas/cuentas/cuenta-de-ahorro-para-ninos" target="_blank" rel="noopener noreferrer">
                    Abrir Cuenta Niños <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>

            {/* ── Portafolio Familia – Detalle ── */}
            <div id="portafolio-familia" className="rounded-2xl border border-border bg-muted/20 overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-5 border-b border-border">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Beneficios grupales</p>
                  <h4 className="text-xl font-serif font-bold text-card-foreground">Portafolio Familia</h4>
                </div>
              </div>
              <div className="p-6 space-y-8">

                {/* Composición del grupo */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">Composición del grupo</h5>
                  <div className="flex flex-wrap gap-4">
                    {familia.composicion.map((c) => (
                      <div key={c.label} className="rounded-xl border border-border bg-card px-6 py-4 flex flex-col items-center">
                        <span className="text-3xl font-serif font-bold text-primary">{c.valor}</span>
                        <span className="text-xs font-semibold text-card-foreground mt-1">{c.label}</span>
                        <span className="text-xs text-muted-foreground">{c.nota}</span>
                      </div>
                    ))}
                    <div className="rounded-xl border border-border bg-card px-6 py-4 flex flex-col justify-center flex-1 min-w-[200px]">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Los integrantes pueden ser familiares, personas cercanas o empleadas del hogar con al menos un producto activo en Davivienda.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Características */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">Características principales</h5>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {familia.caracteristicas.map((c) => (
                      <div key={c.titulo} className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <c.icon className="w-4 h-4 text-primary" />
                        </div>
                        <p className="font-semibold text-card-foreground text-sm mb-1">{c.titulo}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">Beneficios principales</h5>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {familia.beneficios.map((b, i) => (
                      <div key={b.titulo} className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <b.icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                            {i + 1}. {b.titulo}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requisitos */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">Requisitos</h5>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border bg-card p-4">
                      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                        Para ser Líder
                      </span>
                      <ul className="space-y-2">
                        {familia.requisitosLider.map((r, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <FileText className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4">
                      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                        Para ser Integrante
                      </span>
                      <ul className="space-y-2">
                        {familia.requisitosIntegrante.map((r, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <FileText className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cómo gestionarlo */}
                <div>
                  <h5 className="text-sm font-semibold text-card-foreground mb-4">¿Cómo gestionarlo?</h5>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <ol className="space-y-3">
                      {familia.pasos.map((paso, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-sm text-muted-foreground leading-relaxed">{paso}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Nota importante */}
                <div className="rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4 flex gap-3 items-start">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    <span className="font-semibold">Importante: </span>{familia.nota}
                  </p>
                </div>

                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-fit" asChild>
                  <a href="https://portafoliofamiliadavivienda.com/" target="_blank" rel="noopener noreferrer">
                    Conocer Portafolio Familia <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Grid otros productos ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {otrosProductos.map((product) => (
            <div
              key={product.title}
              id={product.title === "Portafolio Personal" ? "portafolio-personal" : "zona-digital"}
              className="rounded-2xl overflow-hidden bg-card border border-border group hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/7] relative overflow-hidden">
                <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                    <product.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{product.subtitle}</span>
                <h3 className="mt-2 text-xl font-serif font-bold text-card-foreground">{product.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <Button variant="ghost" className="mt-4 px-0 text-primary hover:text-primary/80 hover:bg-transparent">
                  {product.cta} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Zona Digital – Detalle expandido ── */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-4 px-8 py-6 border-b border-border bg-primary/5">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <Laptop className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Tu banco sin salir de casa</p>
              <h3 className="text-2xl font-serif font-bold text-card-foreground">Zona Digital</h3>
            </div>
            <p className="ml-auto hidden md:block text-sm text-muted-foreground max-w-xs text-right leading-relaxed">
              Realiza todas tus operaciones 100% en línea desde la App Davivienda o el portal web.
            </p>
          </div>
          <div className="p-8 space-y-8">
            {digital.map((servicio) => (
              <div key={servicio.titulo} className="rounded-xl border border-border overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 bg-muted/30 border-b border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <servicio.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{servicio.subtitulo}</p>
                    <h4 className="font-serif font-bold text-card-foreground text-lg leading-tight">{servicio.titulo}</h4>
                  </div>
                </div>
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{servicio.descripcion}</p>
                    <ul className="space-y-2">
                      {servicio.caracteristicas.map((c, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <c.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground leading-relaxed">{c.texto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-card-foreground mb-3">Beneficios</p>
                    <ul className="space-y-2">
                      {servicio.beneficios.map((b, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-card-foreground mb-3">Requisitos</p>
                    <ul className="space-y-2">
                      {servicio.requisitos.map((r, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <FileText className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-fit">
              Explorar Zona Digital <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
