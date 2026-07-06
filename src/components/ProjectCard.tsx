import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-teal-300/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-100">
            {project.status}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
        </div>
      </div>

      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
      <p className="mt-4 leading-7 text-slate-400">
        <span className="font-medium text-slate-200">Problem solved:</span> {project.problem}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-400">Tech stack</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Repository
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
