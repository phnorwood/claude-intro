import type { Education as EducationType } from '@/types/resume';
import { formatDate } from '@/lib/utils';
import Card from '../ui/Card';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <Card key={edu.id}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
              {edu.field && <p className="text-gray-600">{edu.field}</p>}
              <p className="text-lg text-primary-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.location}</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
              {edu.gpa && <p className="text-gray-500">GPA: {edu.gpa}</p>}
            </div>
          </div>

          {edu.honors && edu.honors.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 font-medium text-gray-900">Honors</h4>
              <ul className="space-y-1">
                {edu.honors.map((honor, index) => (
                  <li key={index} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-primary-600">•</span>
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {edu.relevant && edu.relevant.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 font-medium text-gray-900">Relevant Coursework</h4>
              <p className="text-sm text-gray-600">{edu.relevant.join(', ')}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
