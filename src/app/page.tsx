import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NewsletterForm } from '@/components/newsletter-form';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-secondary/50 py-12 text-center md:min-h-[70vh]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"
        ></div>
        <div className="container z-10 px-4 md:px-6">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            Wear The Change.
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            STGMA is a movement to destigmatize mental health, one conversation at a time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/about">Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              A Hub for Support
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              We're committed to creating a community-driven hub for mental health resources.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Explore our knowledge bank for hotlines, support groups, and other tools to support your well-being journey.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="font-bold">
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Card className="bg-gradient-to-r from-accent/80 to-accent text-accent-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                  Join the Movement
                </h2>
                <p className="mt-4 text-lg text-accent-foreground/90">
                  Sign up for our newsletter to stay up-to-date on new resources and our mission to end the stigma.
                </p>
                <NewsletterForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
