"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechnicalProfile from "./components/TechnicalProfile";
import Software from "./components/Software";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

export default function FestusProfessionalPortfolio() {
  useFadeInOnScroll();

  const publications = [
    {
      title: "Transition metal Parashift and ParaCEST MRI agents: Current progress and challenges",
      venue: "Coordination Chemistry Reviews",
      year: "2024",
      blurb: "F Slade, JF Collingwood, NJ Rogers",
    },
    {
      title: "Enabling Characterisation of the NAD+ Biosynthesis Pathway via in vitro CEST MRI",
      venue: "Alzheimer's & Dementia",
      year: "2022",
      blurb: "F Slade, D Villano, J Luo, D Longo, JF Collingwood",
    },
    {
      title: "Adenosine-Linked CEST MRI Signatures of NAD⁺ Biosynthesis Precursors for Neurodegenerative Disease Detection",
      venue: "Alzheimer's & Dementia",
      year: "2025",
      blurb: "FM Slade, WW Lam, JF Collingwood, G Stanisz",
    },
    {
      title: "Insights from the Characterisation of the NAD+ Biosynthesis Pathway via in-vitro CEST MRI",
      venue: "ISMRM 2025 Proceedings",
      year: "2025",
      blurb: "F Slade, W Lam, JF Collingwood, G Stanisz",
    },
    {
      title: "The impact of amyloid-β and ferritin on ultra-high-field R2* and quantitative susceptibility mapping",
      venue: "ISMRM Proceedings",
      year: "2023",
      blurb: "J Luo, J Everett, J Donnelly, F Slade, N Telling, JF Collingwood",
    },
    {
      title: "DNNKit: A Lightweight Framework for Reproducible Deep Learning Experiments",
      venue: "Zenodo",
      year: "2026",
      blurb: "F Slade",
    },
  ];

  const projects = [
    {
      name: "MRI Reconstruction Pipelines",
      description:
        "Development of robust pipelines for quantitative MRI and advanced image reconstruction, including non-Cartesian and NUFFT methods.",
      tags: ["MRI", "Reconstruction", "Python", "MATLAB", "NUFFT"],
      github: "",
    },
    {
      name: "PETALUTE Trajectory Work",
      description:
        "Technical work on PETALUTE trajectories for efficient k-space sampling and improved image quality in MRI.",
      tags: ["MRI", "Trajectory Design", "Signal Processing"],
      github: "",
    },
    {
      name: "MR Spectroscopy Analysis Tools",
      description:
        "Building analysis tools for MR spectroscopy data, including quantification and spectral fitting workflows.",
      tags: ["MRS", "Spectroscopy", "Python", "MATLAB"],
      github: "",
    },
    {
      name: "CEST MRI Research",
      description:
        "Research and software for CEST MRI, including sequence development, data analysis, and quantitative modelling.",
      tags: ["CEST MRI", "Sequence Development", "Quantitative Imaging"],
      github: "",
    },
    {
      name: "Scientific Computing Workflows",
      description:
        "Design and implementation of scientific computing workflows for imaging data, including reproducible pipelines and automation.",
      tags: ["Scientific Computing", "Pipelines", "Automation"],
      github: "",
    },
    {
      name: "Data Pipelines and Modelling",
      description:
        "Development of data pipelines and modelling tools for quantitative biomedical imaging and translational research.",
      tags: ["Data Analysis", "Modelling", "Biomedical Imaging"],
      github: "",
    },
    {
      name: "DNNKit Framework",
      description:
        "A lightweight PyTorch framework for building, training, and documenting deep neural network experiments.",
      tags: ["Python", "PyTorch", "Deep Learning", "Reproducibility"],
      github: "https://github.com/Festus0/dnnkit",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-10 md:px-10 lg:px-12">
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} />
        <TechnicalProfile />
        <Software />
        <Publications publications={publications} />
        <section id="cv" className="mt-32 max-w-3xl mx-auto fade-in-up opacity-0 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">CV</h2>
          <a
            href="/Festus_Slade_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:from-cyan-200 hover:to-fuchsia-200"
          >
            Download CV
          </a>
        </section>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
