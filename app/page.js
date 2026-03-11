export default function FestusPersonalWebsite() {
  const publications = [
    {
      title: "Zero-valent iron nanoparticles as theranostic MRI contrast agents",
      venue: "Research chapter / manuscript",
      year: "2025",
      blurb:
        "Synthesis, characterization, relaxivity, and biomedical evaluation of Fe⁰ nanoparticles for imaging and therapy.",
    },
    {
      title: "Advanced non-Cartesian MRI and spectroscopy reconstruction workflows",
      venue: "Methods and reconstruction portfolio",
      year: "2025–2026",
      blurb:
        "PETALUTE, rosette, radial, NUFFT, and sequence-development work across Bruker and Siemens platforms.",
    },
    {
      title: "MRI physics for neuroscience and neurodegeneration",
      venue: "Ongoing Cambridge research",
      year: "2025–present",
      blurb:
        "Quantitative MRI, spectroscopy, and computational pipelines for robust signal interpretation in brain imaging.",
    },
  ];

  const projects = [
    {
      name: "PETALUTE Reconstruction Toolkit",
      description:
        "Custom reconstruction and diagnostics for non-Cartesian MRI, including density compensation, coil combination, QC, and report generation.",
      tags: ["MATLAB", "MRI", "NUFFT", "Reconstruction"],
    },
    {
      name: "SVS / MRS Analysis Pipelines",
      description:
        "Spectroscopy processing workflows with alignment, water handling, diagnostic plotting, and publication-ready reporting.",
      tags: ["MRS", "Signal Processing", "Quantification"],
    },
    {
      name: "Open Research Code & Tools",
      description:
        "A growing portfolio of GitHub-ready scientific software, research repositories, reproducible workflows, and technical documentation.",
      tags: ["GitHub", "Open Source", "Research Software"],
    },
  ];

  const links = {
    github: "https://github.com/Festus0",
    cv: "#",
    scholar: "#",
    email: "mailto:festus@example.com",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[25%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-wide text-cyan-200">
                MRI Physicist • Researcher • Scientific Builder
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Dr. Festus Slade
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Building MRI tools, research systems, and imaging ideas that move from signal to impact.
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                I am an MRI physicist and researcher working across neuroimaging, spectroscopy,
                reconstruction, quantitative imaging, and scientific software. My work combines
                physics, chemistry, biomedical imaging, and computation to create tools that are
                rigorous, reproducible, and clinically meaningful.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  View Projects
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="#publications"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  Publications
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Current Focus</p>
                <p className="mt-3 text-xl font-medium text-white">
                  MRI Physics for Neuroscience
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Quantitative MRI, spectroscopy, sequence development, and computational pipelines
                  for advanced brain imaging.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Strengths</p>
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
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Publications", "Research outputs, manuscripts, and scientific contributions."],
            ["GitHub", "Open-source code, tools, repositories, and reproducible workflows."],
            ["CV", "Experience, training, awards, technical strengths, and career trajectory."],
            ["Projects", "Selected MRI, MRS, imaging, and software development work."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
            </div>
          ))}
        </section>

        <section id="projects" className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Research Projects</p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Selected work</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="mt-16">
          <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Publications</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Outputs and manuscripts</h2>
          <div className="mt-6 space-y-4">
            {publications.map((pub) => (
              <div key={pub.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
                  <span className="text-sm text-slate-400">{pub.year}</span>
                </div>
                <p className="mt-1 text-sm text-cyan-200">{pub.venue}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{pub.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300">GitHub</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Code, tools, and reproducibility</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              My GitHub showcases MRI physics tools, reconstruction workflows, spectroscopy
              pipelines, scientific software, and research repositories built for clarity,
              reproducibility, and real-world scientific use.
            </p>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Visit GitHub Profile
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">CV & Contact</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Professional profile</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <a href={links.cv} className="block rounded-2xl border border-white/10 bg-black/10 px-4 py-3 hover:bg-black/20">
                Download CV
              </a>
              <a href={links.scholar} className="block rounded-2xl border border-white/10 bg-black/10 px-4 py-3 hover:bg-black/20">
                Google Scholar
              </a>
              <a href={links.email} className="block rounded-2xl border border-white/10 bg-black/10 px-4 py-3 hover:bg-black/20">
                Contact
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 py-8 text-sm text-slate-400">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dr. Festus Slade. Built for research, visibility, and impact.</p>
            <p>Cambridge • MRI Physics • Neuroimaging • Scientific Software</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
