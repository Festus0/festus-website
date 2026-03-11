export default function Projects({ projects }) {
  return (
    <section id="projects" className="mt-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 font-semibold">Research Projects</p>
          <h2 className="mt-2 text-4xl font-extrabold text-white md:text-5xl tracking-tight drop-shadow-glow">Selected work</h2>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-slate-900/80 p-8 shadow-2xl group transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/30 fade-in-up opacity-0 translate-y-8"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">{project.name}</h3>
            <p className="text-base leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 shadow group-hover:bg-cyan-400/20 transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
