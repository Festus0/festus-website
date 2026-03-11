export default function Hero({ links }) {
  return (
    <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 p-10 shadow-2xl backdrop-blur-2xl md:p-16 mb-12 relative overflow-hidden">
      <div className="absolute right-[-5%] top-[-10%] h-64 w-64 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />
      <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div className="fade-in-up opacity-0 translate-y-8 transition-all duration-1000">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-base tracking-wide text-cyan-200 font-semibold shadow-cyan-400/10 shadow-lg animate-fade-in">
            <span className="animate-glow">MRI Physicist</span>
            <span className="text-slate-400">•</span>
            <span>Researcher</span>
            <span className="text-slate-400">•</span>
            <span>Scientific Builder</span>
          </div>
          <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-glow">
            Dr. Festus Slade
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent mt-2 animate-gradient-x">
              Building MRI tools, research systems, and imaging ideas that move from signal to impact.
            </span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl font-medium">
            Dr. Festus Slade is a Postdoctoral Research Associate in MRI Physics for Neuroscience at the University of Cambridge. His research focuses on molecular and metabolic imaging, neurodegeneration, AI/ML, and MRI sequence design. He is committed to advancing the field of MRI through innovative research and collaboration.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:from-cyan-200 hover:to-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              View Projects
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-base font-semibold text-slate-100 shadow transition hover:bg-white/20 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href="#publications"
              className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-base font-semibold text-slate-100 shadow transition hover:bg-white/20 hover:text-fuchsia-200"
            >
              Publications
            </a>
          </div>
        </div>

        <div className="grid gap-6 fade-in-up opacity-0 translate-y-8 transition-all duration-1000 delay-200">
          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/80 p-7 shadow-lg hover:shadow-cyan-400/10 transition-shadow duration-300">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-semibold">Current Focus</p>
            <p className="mt-3 text-2xl font-bold text-white drop-shadow-glow">
              MRI Physics for Neuroscience
            </p>
            <p className="mt-2 text-base leading-7 text-slate-300">
              Quantitative MRI, spectroscopy, sequence development, and computational pipelines
              for advanced brain imaging.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-fuchsia-400/20 bg-slate-900/80 p-7 shadow-lg hover:shadow-fuchsia-400/10 transition-shadow duration-300">
            <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300 font-semibold">Strengths</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
              {[
                "MRI Physics",
                "MRS",
                "Non-Cartesian Reconstruction",
                "MATLAB",
                "Scientific Computing",
                "Sequence Development",
                "Neuroimaging",
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-medium shadow hover:bg-cyan-400/10 hover:text-cyan-200 transition">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
