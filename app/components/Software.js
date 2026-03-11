"use client";
import { useEffect, useState } from "react";

const GITHUB_USER = "Festus0";
const GITHUB_API = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

function LanguageSummary({ repos }) {
  const langCount = {};
  repos.forEach(repo => {
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  });
  const sorted = Object.entries(langCount).sort((a, b) => b[1] - a[1]);
  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-cyan-300 mb-1">Languages</h3>
      <div className="flex flex-wrap gap-2">
        {sorted.map(([lang, count]) => (
          <span key={lang} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100">{lang} <span className="text-slate-400">({count})</span></span>
        ))}
      </div>
    </div>
  );
}

function RepoCard({ repo }) {
  return (
    <div className="rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-slate-900/80 p-6 shadow-xl group transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/30">
      <div className="flex items-center justify-between mb-2">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white group-hover:text-cyan-300 transition">{repo.name}</a>
        {repo.language && (
          <span className="text-xs rounded-full bg-cyan-400/10 px-2 py-1 text-cyan-200 border border-cyan-400/20">{repo.language}</span>
        )}
      </div>
      <p className="text-sm text-slate-300 mb-2">{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 hover:underline">View on GitHub</a>
    </div>
  );
}

export default function Software() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GITHUB_API)
      .then(res => res.json())
      .then(data => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <section id="software" className="mt-32 fade-in-up opacity-0 translate-y-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">Software &amp; Open Source</h2>
      {loading ? (
        <p className="text-slate-400">Loading repositories…</p>
      ) : (
        <>
          <LanguageSummary repos={repos} />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {repos.map(repo => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
