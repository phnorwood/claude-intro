import Link from 'next/link';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <Container size="small">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Hi, I&apos;m{' '}
            <span className="text-primary-600">Your Name</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Full-stack developer crafting elegant solutions to complex problems.
            Passionate about building exceptional digital experiences.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/projects">
              <Button size="lg">View My Work</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
