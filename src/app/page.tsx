import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

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
            STGMA Apparel is more than a brand. It's a movement to destigmatize mental health, one conversation at a time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/shop">Shop Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/about">Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Each piece is designed with comfort and purpose in mind.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-lg font-bold text-accent-foreground">
              <Link href="/shop">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
                Resources for Your Well-being
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                We're committed to providing more than just clothing. Explore our curated collection of articles and tools to support your mental health journey.
              </p>
              <p className="mt-4 text-lg text-foreground/80">
                From understanding anxiety to practicing mindfulness, find resources that resonate with you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/resources">Read Articles</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Person reading an article"
                width={600}
                height={400}
                className="w-full rounded-lg object-cover shadow-lg"
                data-ai-hint="wellness reading"
              />
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
                  Become a part of a community that's breaking the silence. Follow our journey and share your story.
                </p>
                <div className="mt-6">
                  <p className="font-bold">#STGMA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
