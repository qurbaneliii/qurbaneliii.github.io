import { skillGroups } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 bg-white/[0.02] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A stack for AI-powered products"
          description="Grouped skills based on visible repository work and the tools used across AI assistants, ML pipelines, and full-stack MVPs."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.name} className="rounded-3xl border border-white/10 bg-ink/80 p-6">
              <h3 className="text-lg font-semibold text-white">{group.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
