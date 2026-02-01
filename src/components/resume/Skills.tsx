import type { SkillCategory } from '@/types/resume';
import Card from '../ui/Card';

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  const levelColors = {
    beginner: 'bg-gray-300',
    intermediate: 'bg-blue-400',
    advanced: 'bg-primary-500',
    expert: 'bg-primary-600',
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((category) => (
        <Card key={category.category}>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">{category.category}</h3>
          <div className="space-y-3">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  {skill.years && (
                    <span className="text-xs text-gray-500">{skill.years}y</span>
                  )}
                </div>
                {skill.level && (
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-full ${levelColors[skill.level]}`}
                      style={{
                        width:
                          skill.level === 'beginner'
                            ? '25%'
                            : skill.level === 'intermediate'
                            ? '50%'
                            : skill.level === 'advanced'
                            ? '75%'
                            : '100%',
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
