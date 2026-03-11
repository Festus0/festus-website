"use client";
import { useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Profile", href: "#technical-profile" },
  { label: "Software", href: "#software" },
  { label: "Selected Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const EMAIL = "festus.slade@gmail.com";

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
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent backdrop-blur-lg border-b border-white/10 shadow-lg font-inter">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        {/* Left: Name only */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-cyan-300 drop-shadow-glow font-inter">Festus Slade</span>
        </div>
        {/* Right: Nav links and email */}
        <div className="flex items-center gap-2 md:gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            className="email-btn ml-2 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 animate-gradient-x transition shadow focus:outline-none focus:ring-2 focus:ring-cyan-400"
            style={{ letterSpacing: "0.01em", backgroundSize: "200% 200%" }}
            title="Email Festus Slade"
          >
            Email
          </a>
        </div>
      </div>
      <style jsx global>{`
        .nav-link {
          font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: #e0e7ef;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
          margin-left: 0.1rem;
          margin-right: 0.1rem;
        }
        .nav-link:hover, .nav-link:focus {
          background: rgba(255,255,255,0.07);
          color: #22d3ee;
        }
        .email-btn {
          font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
        }
      `}</style>
    </nav>
  );
}
