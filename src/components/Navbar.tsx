import { Github } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Focus', href: '#focus' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-200">
            QF
          </span>
          <span className="hidden sm:block">Qurbanəli Feyzullayev</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/qurbaneliii"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-teal-300/50 hover:bg-teal-300/10 hover:text-white"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      </nav>
    </header>
  );
}
