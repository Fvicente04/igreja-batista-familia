const services = [
  {
    day: "Domingo",
    time: "9h00",
    name: "Escola Bíblica",
    description: "Estudo aprofundado da Palavra para todas as idades, antes do culto da manhã.",
    tag: "Toda semana",
  },
  {
    day: "Domingo",
    time: "19h00",
    name: "Culto de Celebração",
    description: "Uma noite de adoração e pregação para encerrar o domingo glorificando a Deus.",
    tag: "Toda semana",
  },
  {
    day: "Segunda-feira",
    time: "19h30",
    name: "Culto One Way",
    description: "Um culto focado em jovens e novos na fé — apenas um caminho, Jesus.",
    tag: "Toda semana",
  },
  {
    day: "Terça-feira",
    time: "19h30",
    name: "Ministério de Homens e Mulheres",
    description: "Reunião de ministério separada por gênero para crescimento, comunhão e propósito.",
    tag: "Toda semana",
  },
  {
    day: "Quarta-feira",
    time: "19h30",
    name: "Culto de Libertação",
    description: "Uma noite de oração e intercessão poderosa, crendo na liberdade que só Cristo dá.",
    tag: "Toda semana",
  },
];

export default function Services() {
  return (
    <section id="cultos" className="scroll-mt-16 py-28 bg-zinc-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Programação
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nossos Cultos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-amber-400/30 rounded-2xl p-7 transition-all cursor-default"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <p className="text-zinc-500 text-sm font-medium mb-1">{s.day}</p>
              <p className="text-3xl font-bold text-white mb-1">{s.time}</p>
              <h3 className="text-base font-semibold text-white/80 mb-3">{s.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
