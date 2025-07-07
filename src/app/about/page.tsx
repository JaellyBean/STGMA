import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary md:text-7xl">
            Our Mission: Destigmatize.
          </h1>
          <p className="mt-6 text-xl text-foreground/80">
            STGMA Apparel was born from a simple yet powerful idea: clothing can be a catalyst for conversation. We believe in the power of community and the importance of open dialogue to break down the barriers surrounding mental health.
          </p>
        </div>

        <div className="my-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary">
              Inspired by Kintsugi
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Our accent color, Muted Gold, is inspired by the Japanese art of Kintsugi. This practice involves repairing broken pottery by mending the areas of breakage with lacquer dusted or mixed with powdered gold.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              We see a parallel in the human experience. Our challenges and struggles do not diminish us; they are part of our story, and embracing them can make us stronger and more beautiful. This philosophy is woven into the fabric of our brand.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Golden lines on a dark background, representing Kintsugi"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint="kintsugi abstract"
            />
          </div>
        </div>

        <div className="my-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="A group of diverse people in a supportive conversation"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint="community support"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-4xl font-bold text-primary">
              More Than Apparel
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              We are a community-focused brand dedicated to creating a safe space for dialogue. Every purchase supports our mission and helps fund mental health initiatives and resources.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg text-foreground/80">
              <li><strong>Comfort:</strong> Our apparel is designed for physical and emotional comfort.</li>
              <li><strong>Conversation:</strong> Each piece is a subtle prompt to open up.</li>
              <li><strong>Community:</strong> We're building a network of support and understanding.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-headline text-4xl font-bold text-primary">Join the Movement</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Be part of a community that values vulnerability and strength. Wear the change, share your story, and help us end the stigma.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="font-bold">
              <Link href="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
