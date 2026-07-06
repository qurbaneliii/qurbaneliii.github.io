import { focusAreas } from '../data/focus';
import { SectionHeading } from './SectionHeading';

export function FocusAreas() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Focus"
          title="Where the work is concentrated"
          description="The portfolio is intentionally centered on applied AI, product architecture, and data-heavy problem solving."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-slate-900"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-teal-300/20 bg-teal-300/10 p-3 text-teal-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{area.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
