export default function Experience() {
  const roles = [
    {
      title: "Founder",
      org: "CognitoDx",
      period: "2024 – Present",
      description: "Founded CognitoDx, a venture focused on innovative approaches in neurotechnology and data-driven healthcare. (Details confidential / in progress.)",
    },
    {
      title: "Postdoctoral Research Associate",
      org: "University of Cambridge",
      period: "2023 – Present",
      description: "Developing advanced MRI and MRS methods, quantitative imaging pipelines, and computational tools for neuroscience and translational imaging. Collaborating with multidisciplinary teams to solve technical challenges in imaging and data analysis.",
    },
    {
      title: "Postdoctoral Researcher",
      org: "University of Birmingham",
      period: "2021 – 2023",
      description: "Led technical development of molecular imaging and CEST MRI research. Built data analysis workflows and contributed to collaborative projects with industry and academic partners.",
    },
    {
      title: "BASF Collaboration (NMR Methods)",
      org: "BASF / University of Birmingham",
      period: "2022",
      description: "Worked with BASF on NMR method development, focusing on technical problem-solving and cross-sector collaboration.",
    },
    {
      title: "Research Exchange",
      org: "Sunnybrook Research Institute, Toronto",
      period: "2019",
      description: "Contributed to MRI sequence development and computational imaging research as part of an international research exchange.",
    },
    {
      title: "ISMRM Leadership Roles",
      org: "International Society for Magnetic Resonance in Medicine",
      period: "2018 – Present",
      description: "Active in technical leadership and community roles, supporting scientific exchange and technical advancement in MRI.",
    },
  ];
  return (
    <section id="experience" className="mt-32 max-w-4xl mx-auto fade-in-up opacity-0 translate-y-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">Experience</h2>
      <ol className="relative border-l border-cyan-400/20">
        {roles.map((role, idx) => (
          <li key={role.title + role.org} className="mb-12 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 ring-4 ring-slate-950">
              <span className="h-3 w-3 rounded-full bg-cyan-300"></span>
            </span>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-bold text-white">{role.title} <span className="text-cyan-300 font-semibold">— {role.org}</span></h3>
              <span className="text-sm text-slate-400 mt-1 md:mt-0">{role.period}</span>
            </div>
            <p className="mt-2 text-base text-slate-300">{role.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
