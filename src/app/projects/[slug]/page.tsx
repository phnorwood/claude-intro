import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import ProjectGallery from '@/components/projects/ProjectGallery';
import VideoEmbed from '@/components/projects/VideoEmbed';
import { getProjectBySlug, getProjectSlugs } from '@/lib/content';
import { formatDate } from '@/lib/utils';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: project.images.thumbnail ? [project.images.thumbnail] : [],
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section>
        <Container size="small">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              ← Back to Projects
            </Link>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              {project.title}
            </h1>
            <p className="mb-6 text-xl text-gray-600">{project.description}</p>

            {/* Metadata */}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <time dateTime={project.date}>{formatDate(project.date)}</time>
              <span>•</span>
              <span className="capitalize">{project.status.replace('-', ' ')}</span>
            </div>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Links */}
            {(project.links.live || project.links.github) && (
              <div className="flex flex-wrap gap-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
                  >
                    View Live Site
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    View on GitHub
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          {/* Gallery */}
          {project.images.gallery && project.images.gallery.length > 0 && (
            <ProjectGallery images={project.images.gallery} alt={project.title} />
          )}

          {/* Videos */}
          {project.videos &&
            project.videos.map((video, index) => (
              <VideoEmbed key={index} url={video.url} title={video.title} />
            ))}
        </Container>
      </Section>
    </>
  );
}
