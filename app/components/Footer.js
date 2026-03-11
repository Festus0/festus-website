export default function Footer({ links }) {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-base text-slate-400 fade-in-up opacity-0 translate-y-8 transition-all duration-1000 delay-300">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Dr. Festus Slade. Built for research, visibility, and impact.</p>
        <div className="flex gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a>
          <a href={links.orcid} target="_blank" rel="noreferrer" className="hover:text-cyan-300">ORCID</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn</a>
          <a href={links.email} className="hover:text-cyan-300">Email</a>
          <a href={links.cambridge} target="_blank" rel="noreferrer" className="hover:text-cyan-300">Cambridge Profile</a>
        </div>
      </div>
    </footer>
  );
}
