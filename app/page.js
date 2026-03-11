"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
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

export default function FestusPersonalWebsite() {
  useFadeInOnScroll();

  const links = {
    github: "https://github.com/Festus0",
    cv: "https://example.com/cv.pdf",
    orcid: "https://orcid.org/0009-0002-3701-6252",
    linkedin: "https://www.linkedin.com/in/festus-slade-ph-d-480b55120/",
    cambridge: "https://neuroscience.cam.ac.uk/member/fs628cam-ac-uk/",
    email: "mailto:fs628@cam.ac.uk",
  };

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
      name: "Molecular and Metabolic Imaging",
      description:
        "Research in molecular imaging agents and nanoparticles, focusing on neurodegeneration and quantitative imaging.",
      tags: ["MRI", "MRS", "Neurodegeneration", "Molecular Imaging"],
    },
    {
      name: "AI/ML in MRI",
      description:
        "Developing AI and machine learning models for enhanced MRI sequence design and signal processing.",
      tags: ["AI/ML", "Signal Processing", "MRI Sequence Design"],
    },
    {
      name: "Ultrahigh-field MRI and MRS",
      description:
        "Exploring the capabilities of ultrahigh-field MRI and MRS for advanced imaging techniques.",
      tags: ["Ultrahigh-field MRI", "MRS", "Advanced Imaging"],
    },
  ];

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
        <Hero links={links} />
        <Projects projects={projects} />
        <Publications publications={publications} />
        <Footer links={links} />
      </main>
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
