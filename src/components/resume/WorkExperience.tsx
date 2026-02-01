import type { WorkExperience as WorkExperienceType } from '@/types/resume';
import { formatDate, calculateDateRange } from '@/lib/utils';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

interface WorkExperienceProps {
  experience: WorkExperienceType[];
}

export default function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <div className="space-y-6">
      {experience.map((job) => (
        <Card key={job.id}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
              <p className="text-lg text-primary-600">
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </p>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                {formatDate(job.startDate)} - {job.endDate === 'present' ? 'Present' : formatDate(job.endDate)}
              </p>
              <p className="text-gray-500">{calculateDateRange(job.startDate, job.endDate)}</p>
            </div>
          </div>

          <p className="mt-4 text-gray-700">{job.description}</p>

          <ul className="mt-4 space-y-2">
            {job.achievements.map((achievement, index) => (
              <li key={index} className="flex gap-2 text-sm text-gray-600">
                <span className="text-primary-600">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.technologies.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
