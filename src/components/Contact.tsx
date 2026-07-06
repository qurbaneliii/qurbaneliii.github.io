import { Github, Linkedin, Mail, PenLine } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/qurbaneliii',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gurbanalifeyzullayev/',
    icon: Linkedin,
  },
  {
    label: 'Medium',
    href: 'https://gurbanali.medium.com/',
    icon: PenLine,
  },
  {
    label: 'Email',
    href: 'mailto:qurbanelifeyzullayev@gmail.com',
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center shadow-2xl md:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="Open to collaboration and learning opportunities"
          description="I am interested in AI products, data science, automation, bioinformatics, and developer tools with practical technical depth."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-300/40 hover:bg-teal-300/10"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
