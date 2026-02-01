import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import WorkExperience from '@/components/resume/WorkExperience';
import Education from '@/components/resume/Education';
import Skills from '@/components/resume/Skills';
import { getResume } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my professional experience, skills, and education',
};

export default function AboutPage() {
  const resume = getResume();

  if (!resume) {
    return (
      <Container className="py-16">
        <p className="text-center text-gray-600">Resume data not found.</p>
      </Container>
    );
  }

  const { personalInfo, experience, education, skills } = resume;

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gray-50">
        <Container size="small">
          <div className="text-center">
            {personalInfo.avatar && (
              <div className="relative mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              {personalInfo.name}
            </h1>
            <p className="mb-6 text-xl text-primary-600">{personalInfo.title}</p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              {personalInfo.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-primary-600"
              >
                {personalInfo.email}
              </a>
              {personalInfo.phone && (
                <>
                  <span>•</span>
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-600">
                    {personalInfo.phone}
                  </a>
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Work Experience Section */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Work Experience</h2>
          <WorkExperience experience={experience} />
        </Container>
      </Section>

      {/* Skills Section */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          <Skills skills={skills} />
        </Container>
      </Section>

      {/* Education Section */}
      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Education</h2>
          <Education education={education} />
        </Container>
      </Section>
    </>
  );
}
