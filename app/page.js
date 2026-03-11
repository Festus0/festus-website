import { useEffect } from "react";

function Navbar({ links }) {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold tracking-tight text-cyan-300 drop-shadow-glow">Dr. Festus Slade</span>
          <span className="hidden md:inline-block text-xs font-medium text-slate-400 ml-3 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">MRI Physicist</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#publications" className="nav-link">Publications</a>
          <a href={links.github} target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          <a href={links.cv} className="nav-link">CV</a>
          <a href={links.email} className="ml-2 rounded-full bg-gradient-to-r from-cyan-400/80 to-fuchsia-400/80 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:from-cyan-300 hover:to-fuchsia-300">Contact</a>
        </div>
      </div>
      <style jsx global>{`
        .nav-link {
          @apply text-sm font-medium text-slate-200 px-3 py-2 rounded-lg transition hover:bg-white/10 hover:text-cyan-300;
        }
      `}</style>
    </nav>
  );
}

function useFadeInOnScroll() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".fade-in-up").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);
}

export default function FestusPersonalWebsite() {
  useFadeInOnScroll();

  // Ensure 'links' is defined before use in JSX
  // const links = {
  //   github: "https://github.com/Festus0",
  //   cv: "#",
  //   scholar: "#",
  //   email: "mailto:festus@example.com",
  // };

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative">
      <Navbar links={links} />
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow" />
        <div className="absolute right-[-5%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/20 blur-3xl animate-pulse-slower" />
        <div className="absolute bottom-[-10%] left-[25%] h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-900/80" />
      </div>

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-10 md:px-10 lg:px-12">
        {/* HERO SECTION */}
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
                I am an MRI physicist and researcher working across neuroimaging, spectroscopy,
                reconstruction, quantitative imaging, and scientific software. My work combines
                physics, chemistry, biomedical imaging, and computation to create tools that are
                rigorous, reproducible, and clinically meaningful.
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

        {/* QUICK LINKS */}
        <section className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Publications", "Research outputs, manuscripts, and scientific contributions."],
            ["GitHub", "Open-source code, tools, repositories, and reproducible workflows."],
            ["CV", "Experience, training, awards, technical strengths, and career trajectory."],
            ["Projects", "Selected MRI, MRS, imaging, and software development work."],
          ].map(([title, desc], i) => (
            <div
              key={title}
              className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-slate-900/40 p-7 backdrop-blur shadow-xl group transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/30 fade-in-up opacity-0 translate-y-8`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h2 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition">{title}</h2>
              <p className="text-base leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
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

        {/* PUBLICATIONS */}
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

        {/* GITHUB & CONTACT */}
        <section className="mt-24 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-slate-900/40 p-10 shadow-xl fade-in-up opacity-0 translate-y-8 transition-all duration-1000">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300 font-semibold">GitHub</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Code, tools, and reproducibility</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              My GitHub showcases MRI physics tools, reconstruction workflows, spectroscopy
              pipelines, scientific software, and research repositories built for clarity,
              reproducibility, and real-world scientific use.
            </p>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:from-cyan-200 hover:to-fuchsia-200"
            >
              Visit GitHub Profile
            </a>
          </div>

          <div className="rounded-[2rem] border border-fuchsia-400/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 p-10 shadow-xl fade-in-up opacity-0 translate-y-8 transition-all duration-1000 delay-200">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300 font-semibold">CV & Contact</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Professional profile</h2>
            <div className="mt-8 space-y-4 text-base text-slate-200">
              <a href={links.cv} className="block rounded-2xl border border-white/10 bg-black/10 px-5 py-3 font-semibold hover:bg-cyan-400/10 hover:text-cyan-200 transition">
                Download CV
              </a>
              <a href={links.scholar} className="block rounded-2xl border border-white/10 bg-black/10 px-5 py-3 font-semibold hover:bg-fuchsia-400/10 hover:text-fuchsia-200 transition">
                Google Scholar
              </a>
              <a href={links.email} className="block rounded-2xl border border-white/10 bg-black/10 px-5 py-3 font-semibold hover:bg-cyan-400/10 hover:text-cyan-200 transition">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-white/10 py-10 text-base text-slate-400 fade-in-up opacity-0 translate-y-8 transition-all duration-1000 delay-300">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dr. Festus Slade. Built for research, visibility, and impact.</p>
            <p>Cambridge • MRI Physics • Neuroimaging • Scientific Software</p>
          </div>
        </footer>
      </main>
      {/* Animations */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 16px #67e8f9cc) drop-shadow(0 0 8px #a21caf55);
        }
        .shadow-cyan-400\\/10 {
          box-shadow: 0 4px 32px 0 #22d3ee1a;
        }
        .shadow-fuchsia-400\\/10 {
          box-shadow: 0 4px 32px 0 #e879f91a;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(.4,0,.6,1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slow 14s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(32px);
        }
        .fade-in-up.opacity-100 {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .translate-y-0 {
          transform: translateY(0) !important;
        }
        .opacity-100 {
          opacity: 1 !important;
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0% { text-shadow: 0 0 8px #67e8f9, 0 0 2px #fff; }
          100% { text-shadow: 0 0 16px #a21caf, 0 0 4px #fff; }
        }
      `}</style>
    </div>
  );
}
