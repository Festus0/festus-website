export default function Publications({ publications }) {
  return (
    <section id="publications" className="mt-24">
      <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300 font-semibold">Publications</p>
      <h2 className="mt-2 text-4xl font-extrabold text-white md:text-5xl tracking-tight drop-shadow-glow">Outputs and manuscripts</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {publications.map((pub, i) => (
          <div
            key={pub.title}
            className="rounded-[1.75rem] border border-fuchsia-400/10 bg-gradient-to-br from-white/10 to-fuchsia-400/5 p-7 shadow-xl group transition-all duration-300 hover:scale-[1.03] hover:border-fuchsia-400/30 fade-in-up opacity-0 translate-y-8"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-300 transition">{pub.title}</h3>
              <span className="text-sm text-slate-400">{pub.year}</span>
            </div>
            <p className="mt-1 text-sm text-cyan-200 font-medium">{pub.venue}</p>
            <p className="mt-3 text-base leading-7 text-slate-300">{pub.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
