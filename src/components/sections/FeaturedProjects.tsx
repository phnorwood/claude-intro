import Link from 'next/link';
import type { Project } from '@/types/project';
import Container from '../ui/Container';
import Section from '../ui/Section';
import ProjectGrid from '../projects/ProjectGrid';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A selection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </div>
        <ProjectGrid projects={projects} />
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View all projects →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
