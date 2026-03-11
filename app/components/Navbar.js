"use client";

export default function Navbar({ links }) {
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
          <a href={links.email} className="ml-2 rounded-full bg-gradient-to-r from-cyan-400/80 to-fuchsia-400/80 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:from-cyan-300 hover:to-fuchsia-300">Email</a>
          <a href={links.orcid} target="_blank" rel="noreferrer" className="nav-link">ORCID</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
          <a href={links.cambridge} target="_blank" rel="noreferrer" className="nav-link">Cambridge Profile</a>
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
