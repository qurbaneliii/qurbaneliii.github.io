import { featuredProjects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Practical systems, not just experiments"
          description="Selected public repositories that show AI engineering, machine learning, automation, APIs, frontend/backend structure, and healthcare-focused data science."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
