import { useEffect, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { repoStatsFallback } from '../data/projects';
import { fetchPublicRepos, type GitHubRepo } from '../lib/github';
import { SectionHeading } from './SectionHeading';

export function GitHubStats() {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);

  useEffect(() => {
    fetchPublicRepos()
      .then((data) => setRepos(data))
      .catch(() => setRepos(null));
  }, []);

  const visibleRepos = repos?.filter((repo) => repo.size !== 0).slice(0, 4) ?? [];
  const repoCount = repos?.length ?? repoStatsFallback.publicRepoCount;

  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Public work and repository signal"
          description="Featured projects are curated locally; this section lightly uses the public GitHub API with a graceful fallback."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <Github className="h-8 w-8 text-teal-300" aria-hidden="true" />
            <p className="mt-6 text-5xl font-semibold text-white">{repoCount}</p>
            <p className="mt-2 text-slate-300">public repositories visible on GitHub</p>
            <a
              href={repoStatsFallback.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 hover:text-teal-100"
            >
              View GitHub profile
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h3 className="text-lg font-semibold text-white">Recently active public repositories</h3>
            <div className="mt-5 grid gap-3">
              {(visibleRepos.length ? visibleRepos : []).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-teal-300/40 hover:bg-white/[0.06]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-medium text-white">{repo.name}</span>
                    {repo.language ? <span className="text-xs text-teal-200">{repo.language}</span> : null}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
                    {repo.description ?? 'Public repository on GitHub.'}
                  </p>
                </a>
              ))}
              {!visibleRepos.length ? (
                <p className="text-slate-400">Repository data will appear here when the public GitHub API is available.</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
