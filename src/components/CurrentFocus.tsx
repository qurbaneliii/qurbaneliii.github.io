import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const focusItems = [
  'Building real AI-powered products with frontend, backend, API, and deployment structure.',
  'Improving ML pipelines, validation strategies, and model evaluation habits.',
  'Learning bioinformatics and healthcare AI workflows through reproducible projects.',
  'Developing full-stack AI tools for SQL, Excel, content, and automation use cases.',
  'Working with LLM integrations, local model routing, and safer fallback logic.',
  'Improving GitHub Actions, deployment workflows, and product architecture.',
];

export function CurrentFocus() {
  return (
    <section id="focus" className="border-y border-white/10 bg-white/[0.02] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Current Focus"
          title="What I am improving next"
          description="The direction is practical: better systems, clearer architecture, stronger evaluation, and more useful AI products."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {focusItems.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-ink/80 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-300" aria-hidden="true" />
              <p className="leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
