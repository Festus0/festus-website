const links = {
  github: "https://github.com/Festus0",
  linkedin: "https://www.linkedin.com/in/festus-slade-ph-d-480b55120/",
  orcid: "https://orcid.org/0009-0002-3701-6252",
  scholar: "https://scholar.google.co.uk/citations?user=7xcAoowAAAAJ&hl=en&oi=ao",
  cambridge: "https://neuroscience.cam.ac.uk/member/fs628cam-ac-uk/",
  email: "mailto:fs628@cam.ac.uk",
};

export default function Contact() {
  return (
    <section id="contact" className="mt-32 max-w-3xl mx-auto fade-in-up opacity-0 translate-y-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Contact</h2>
      <div className="flex flex-wrap gap-4">
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href={links.orcid} target="_blank" rel="noopener noreferrer" className="contact-link">ORCID</a>
        <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="contact-link">Google Scholar</a>
        <a href={links.cambridge} target="_blank" rel="noopener noreferrer" className="contact-link">Cambridge Profile</a>
        <a href={links.email} className="contact-link">Email</a>
      </div>
      <style jsx>{`
        .contact-link {
          @apply text-base font-medium text-cyan-200 px-4 py-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 transition hover:bg-cyan-400/10 hover:text-white;
        }
      `}</style>
    </section>
  );
}
