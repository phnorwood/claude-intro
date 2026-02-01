import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse my portfolio of web development projects and technical work',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <Section>
      <Container>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A collection of projects showcasing my skills in web development,
            from concept to deployment
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </Container>
    </Section>
  );
}
