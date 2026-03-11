export default function Hero() {
  return (
    <section className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 p-10 shadow-2xl backdrop-blur-2xl md:p-16 mb-16 overflow-hidden fade-in-up opacity-0 translate-y-8">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow" />
        <div className="absolute left-[-10%] bottom-[-10%] h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl animate-pulse-slower" />
        <div className="absolute left-[30%] top-[20%] h-40 w-40 rounded-full bg-blue-400/10 blur-2xl animate-pulse-slow" />
      </div>
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-glow">
            Dr. Festus Slade
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent mt-2 animate-gradient-x">
              MRI Physicist | Imaging Scientist | Scientific Software Developer
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl font-medium">
            MRI physics · quantitative imaging · signal processing · computational imaging · AI/ML in imaging · scientific software development · translational science
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:from-cyan-200 hover:to-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              View Projects
            </a>
            <a
              href="/Festus_Slade_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-7 py-3 text-base font-semibold text-cyan-200 shadow transition hover:bg-cyan-400/20 hover:text-white"
            >
              Download CV
            </a>
            <a
              href="https://github.com/Festus0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-base font-semibold text-slate-100 shadow transition hover:bg-white/20 hover:text-cyan-200"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/80 p-7 shadow-lg hover:shadow-cyan-400/10 transition-shadow duration-300">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-semibold">Professional Focus</p>
            <p className="mt-3 text-2xl font-bold text-white drop-shadow-glow">
              Imaging Science &amp; Technical Innovation
            </p>
            <p className="mt-2 text-base leading-7 text-slate-300">
              MRI, quantitative imaging, computational pipelines, and scientific software for advanced imaging and data analysis.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-fuchsia-400/20 bg-slate-900/80 p-7 shadow-lg hover:shadow-fuchsia-400/10 transition-shadow duration-300">
            <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300 font-semibold">Core Strengths</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
              {[
                "MRI Physics",
                "Quantitative Imaging",
                "Signal Processing",
                "Scientific Computing",
                "Software Development",
                "AI/ML for Imaging",
                "Data Pipelines",
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
