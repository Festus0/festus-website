"use client";
import { useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Profile", href: "#technical-profile" },
  { label: "Software", href: "#software" },
  { label: "Selected Publications", href: "#publications" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.matches(".nav-link")) {
        e.preventDefault();
        const id = e.target.getAttribute("href").replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold tracking-tight text-cyan-300 drop-shadow-glow">Dr. Festus Slade</span>
          <span className="hidden md:inline-block text-xs font-medium text-slate-400 ml-3 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">MRI Physicist | Imaging Scientist</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .nav-link {
          @apply text-sm font-medium text-slate-200 px-3 py-2 rounded-lg transition hover:bg-white/10 hover:text-cyan-300;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
}
