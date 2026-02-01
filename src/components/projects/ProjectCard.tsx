import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/types/project';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card hover className="group h-full">
        {/* Project Image */}
        {project.images.thumbnail && (
          <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
            <Image
              src={project.images.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}

        {/* Project Content */}
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600">{project.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="default">+{project.tags.length - 3}</Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
