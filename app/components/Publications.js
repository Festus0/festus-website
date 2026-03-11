const SCHOLAR_URL = "https://scholar.google.co.uk/citations?user=7xcAoowAAAAJ&hl=en&oi=ao";

function formatCitation(pub) {
  return (
    <div className="mb-6 fade-in-up opacity-0 translate-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-base text-white font-semibold">{pub.title}</span>
        <span className="text-sm text-slate-400 md:ml-4">{pub.year}</span>
      </div>
      <span className="text-sm text-cyan-200">{pub.venue}</span>
      <div className="text-sm text-slate-300 mt-1">{pub.blurb}</div>
    </div>
  );
}

export default function Publications({ publications }) {
  return (
    <section id="publications" className="mt-32 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">Selected Publications</h2>
      <div>
        {publications.slice(0, 6).map((pub, i) => formatCitation(pub))}
      </div>
      <div className="mt-8">
        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:from-cyan-200 hover:to-fuchsia-200"
        >
          View Full Publication List
        </a>
      </div>
    </section>
  );
}
