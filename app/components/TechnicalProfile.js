const profile = {
  languages: [
    "MATLAB", "Python", "R", "C++", "Bash / Shell", "JavaScript", "LaTeX"
  ],
  tools: [
    "Git / GitHub", "Linux", "Jupyter", "MRI reconstruction toolkits", "Siemens IDEA", "Bruker MRI systems", "Scientific computing environments"
  ],
  techniques: [
    "MRI physics", "MR spectroscopy", "CEST MRI", "Quantitative MRI", "Non-Cartesian reconstruction", "NUFFT", "Signal processing", "AI/ML for imaging", "Sequence development", "Modelling and simulation", "Scientific software development", "Data analysis pipelines"
  ],
  domains: [
    "Neuroimaging", "Neurodegeneration", "Molecular imaging", "Metabolic imaging", "Quantitative biomedical imaging"
  ]
};

function TagGrid({ title, items }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-cyan-300 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100 shadow hover:bg-cyan-400/20 transition">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function TechnicalProfile() {
  return (
    <section id="technical-profile" className="mt-32 max-w-4xl mx-auto fade-in-up opacity-0 translate-y-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">Technical Profile</h2>
      <TagGrid title="Programming Languages" items={profile.languages} />
      <TagGrid title="Tools and Platforms" items={profile.tools} />
      <TagGrid title="Techniques" items={profile.techniques} />
      <TagGrid title="Domain Areas" items={profile.domains} />
    </section>
  );
}
