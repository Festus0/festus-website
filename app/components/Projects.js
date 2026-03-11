export default function Projects({ projects }) {
  return (
    <section id="projects" className="mt-32 fade-in-up opacity-0 translate-y-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">Projects &amp; Technical Work</h2>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-slate-900/80 p-7 shadow-xl group transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/30"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">{project.name}</h3>
            <p className="text-base text-slate-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 shadow group-hover:bg-cyan-400/20 transition">
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 hover:underline">GitHub</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
