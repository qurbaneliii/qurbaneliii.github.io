import {
  Activity,
  Bot,
  Braces,
  DatabaseZap,
  Dna,
  Layers3,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type FocusArea = {
  title: string;
  description: string;
  keywords: string[];
  icon: LucideIcon;
};

export const focusAreas: FocusArea[] = [
  {
    title: 'Machine Learning & Data Science',
    description: 'Feature engineering, validation, notebooks, model diagnostics, and practical evaluation.',
    keywords: ['pandas', 'scikit-learn', 'LightGBM'],
    icon: Activity,
  },
  {
    title: 'AI Engineering & LLM Workflows',
    description: 'AI assistants, provider routing, prompt workflows, local models, and fallback systems.',
    keywords: ['OpenAI', 'Ollama', 'LLM routing'],
    icon: Bot,
  },
  {
    title: 'Bioinformatics & Healthcare AI',
    description: 'Clinical genomics experiments with leakage-aware pipelines, explainability, and reports.',
    keywords: ['Genomics', 'SHAP', 'Validation'],
    icon: Dna,
  },
  {
    title: 'Full-stack AI Products',
    description: 'Product-style interfaces connected to backend services, APIs, and model workflows.',
    keywords: ['React', 'FastAPI', 'TypeScript'],
    icon: Layers3,
  },
  {
    title: 'Automation Systems',
    description: 'Structured workflows for content, spreadsheets, data, and repetitive technical tasks.',
    keywords: ['Workflows', 'Office.js', 'Scheduling'],
    icon: Workflow,
  },
  {
    title: 'Developer Tools',
    description: 'SQL, Excel, and dashboard tools designed to make technical work faster and safer.',
    keywords: ['SQL', 'Excel', 'APIs'],
    icon: Braces,
  },
  {
    title: 'API & Backend Architecture',
    description: 'FastAPI services, contracts, tests, provider layers, and backend-only secret handling.',
    keywords: ['FastAPI', 'REST', 'pytest'],
    icon: DatabaseZap,
  },
];
