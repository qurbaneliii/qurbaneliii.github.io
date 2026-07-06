import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-20 md:pb-28 md:pt-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
            Data Science & AI Engineering Builder
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Qurbanəli Feyzullayev
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I build practical AI products, machine learning workflows, bioinformatics experiments, automation systems,
            and full-stack AI tools with real frontend, backend, API, and deployment structure.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-teal-200"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/qurbaneliii"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gurbanalifeyzullayev/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Portfolio Signal</p>
                <p className="mt-1 text-lg font-semibold text-white">Practical AI builder</p>
              </div>
              <div className="rounded-full bg-teal-300/10 p-3 text-teal-200">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <dl className="mt-6 grid gap-4">
              {[
                ['AI Products', 'Frontend + backend + LLM workflows'],
                ['ML & Data', 'Pipelines, evaluation, feature engineering'],
                ['Bioinformatics', 'Healthcare AI and genomics experiments'],
                ['Automation', 'SQL, Excel, content, and workflow tools'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-sm font-medium text-teal-200">{label}</dt>
                  <dd className="mt-1 text-sm text-slate-300">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
