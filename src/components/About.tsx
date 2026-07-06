import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A practical AI and data science builder"
          description="I focus on turning ideas into working MVPs: interfaces people can use, APIs that connect the system, model workflows that can be evaluated, and documentation that makes the project understandable."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Product-minded',
              body: 'I prefer projects that become usable tools, not only isolated notebooks or experiments.',
            },
            {
              title: 'Cross-functional',
              body: 'My work moves across frontend, backend, APIs, LLM integrations, automation logic, and data workflows.',
            },
            {
              title: 'Learning in public',
              body: 'I am improving through practical repositories in AI engineering, ML, bioinformatics, and full-stack systems.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
