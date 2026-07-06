export type SkillGroup = {
  name: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Bash'],
  },
  {
    name: 'AI / ML',
    items: ['pandas', 'NumPy', 'scikit-learn', 'LightGBM', 'XGBoost', 'Jupyter', 'Model evaluation'],
  },
  {
    name: 'AI Engineering',
    items: ['OpenAI API', 'Ollama', 'Prompt workflows', 'LLM routing', 'Fallback providers', 'Automation logic'],
  },
  {
    name: 'Backend',
    items: ['FastAPI', 'REST APIs', 'Pydantic', 'Node.js', 'Python virtual environments'],
  },
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'Supabase', 'SQLite', 'Prisma'],
  },
  {
    name: 'DevOps & Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'VS Code', 'Vercel', 'GitHub Pages'],
  },
];
