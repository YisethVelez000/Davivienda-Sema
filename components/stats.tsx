const stats = [
  {
    value: "$90B+",
    label: "Activos Totales",
    description: "Respaldando el patrimonio de millones de colombianos",
  },
  {
    value: "700+",
    label: "Oficinas",
    description: "Presencia en Colombia, Centroamerica y Miami",
  },
  {
    value: "18M+",
    label: "Clientes",
    description: "Familias y empresas confiando en nosotros",
  },
  {
    value: "6",
    label: "Países",
    description: "Colombia, Panamá, Costa Rica, Honduras, El Salvador y Miami",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-lg font-semibold text-primary-foreground/90">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
