const events = [
  {
    date: { day: "18", month: "Mai" },
    title: "Retiro de Casais",
    description: "Um final de semana especial para fortalecer o casamento e a fé em casal.",
    location: "Sítio Nova Esperança",
    category: "Retiro",
  },
  {
    date: { day: "01", month: "Jun" },
    title: "Congresso de Jovens",
    description: "Dois dias de pregação, louvor e comunhão voltados para a juventude.",
    location: "Igreja Batista Família",
    category: "Congresso",
  },
  {
    date: { day: "22", month: "Jun" },
    title: "Dia de Serviço Comunitário",
    description: "Juntos servindo nossa comunidade com amor prático e testemunho de fé.",
    location: "Praça Central",
    category: "Missões",
  },
];

export default function Events() {
  return (
    <section id="eventos" className="scroll-mt-16 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Agenda
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900">
              Próximos Eventos
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed">
            Fique por dentro de tudo que está acontecendo na nossa família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((e) => (
            <article
              key={e.title}
              className="group border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="bg-zinc-900 px-7 py-6 flex items-center gap-5">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white leading-none block">
                    {e.date.day}
                  </span>
                  <span className="text-amber-400 text-sm font-semibold uppercase">
                    {e.date.month}
                  </span>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                  {e.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{e.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">{e.description}</p>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {e.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
