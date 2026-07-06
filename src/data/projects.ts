export type ProjectStatus = 'Active MVP' | 'In progress' | 'Prototype' | 'Research project' | 'Data science project';

export type Project = {
  name: string;
  repo: string;
  demo?: string;
  description: string;
  problem: string;
  tech: string[];
  status: ProjectStatus;
  tags: string[];
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    name: 'AI Social Media Manager / ARIA',
    repo: 'https://github.com/qurbaneliii/AI-Social-Media-Manager',
    demo: 'https://qurbaneliii.github.io/AI-Social-Media-Manager/',
    description:
      'AI-powered social media workspace for planning, generating, reviewing, scheduling, and optimizing multi-platform content.',
    problem:
      'Turns brand rules, posting goals, approval flows, and platform requirements into structured AI-assisted workflows.',
    tech: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'OpenAI', 'Prisma', 'Docker'],
    status: 'Active MVP',
    tags: ['AI product', 'Automation', 'LLM', 'Full-stack'],
    featured: true,
  },
  {
    name: 'SQL AI Copilot',
    repo: 'https://github.com/qurbaneliii/SQL-ai-plugin',
    description:
      'PostgreSQL-focused AI sidecar for SQL generation, explanation, fixes, optimization, schema help, and result summaries.',
    problem:
      'Helps developers work with SQL more safely through schema context, provider routing, read-only execution, and validation.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite', 'PostgreSQL', 'OpenAI', 'Ollama', 'sqlglot'],
    status: 'In progress',
    tags: ['Developer tool', 'SQL', 'LLM', 'FastAPI'],
    featured: true,
  },
  {
    name: 'Excel AI Assistant',
    repo: 'https://github.com/qurbaneliii/excel-plugin',
    demo: 'https://excel-plugin-inky.vercel.app',
    description:
      'Microsoft Excel Office Add-in MVP with an AI-assisted task pane for formulas, range analysis, cleaning plans, and reports.',
    problem:
      'Sends safe spreadsheet context to a backend and writes results back through deterministic Office.js actions.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Office.js', 'OpenAI', 'Ollama'],
    status: 'Prototype',
    tags: ['Excel', 'AI assistant', 'Office Add-in', 'Automation'],
    featured: true,
  },
  {
    name: 'TEKNOFEST Genetic Variant Classifier',
    repo: 'https://github.com/qurbaneliii/Teknofest',
    description:
      'Healthcare AI and clinical genomics pipeline for missense variant pathogenicity prediction.',
    problem:
      'Builds a reproducible ML workflow with leakage-aware data prep, validation, LightGBM modeling, explainability, and reports.',
    tech: ['Python', 'pandas', 'scikit-learn', 'LightGBM', 'XGBoost', 'CatBoost', 'Optuna', 'SHAP', 'Jupyter'],
    status: 'Research project',
    tags: ['Healthcare AI', 'Bioinformatics', 'ML', 'Explainability'],
    featured: true,
  },
  {
    name: 'Kinetix Flow',
    repo: 'https://github.com/qurbaneliii/kinetix-flow',
    description:
      'Machine learning project for forecasting Baku metro passenger flow and transit load patterns.',
    problem:
      'Explores how transport data can support passenger-flow forecasting and operational planning using temporal and station-level features.',
    tech: ['Python', 'Jupyter Notebook', 'XGBoost', 'Feature engineering'],
    status: 'Data science project',
    tags: ['Forecasting', 'Urban analytics', 'ML', 'Data science'],
    featured: true,
  },
];

export const repoStatsFallback = {
  profileUrl: 'https://github.com/qurbaneliii',
  publicRepoCount: 20,
};
