import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HeartHandshake, Mic, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary md:text-7xl">
            Our Mission: To End the Stigma
          </h1>
          <p className="mt-6 text-xl text-foreground/80">
            STGMA Apparel was founded on the belief that clothing can be a quiet statement and a powerful catalyst for conversation. We're dedicated to breaking down the walls around mental health through community, connection, and conscious apparel.
          </p>
        </div>
      </div>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-foreground/70">
              These principles guide everything we do, from our designs to our community initiatives.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4">Empathy</CardTitle>
                <CardDescription className="mt-2 text-foreground/80">
                  We lead with compassion, seeking to understand and support every individual's journey.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mic className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4">Authenticity</CardTitle>
                <CardDescription className="mt-2 text-foreground/80">
                  We encourage honest conversations and the courage to be vulnerable and true to oneself.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4">Community</CardTitle>
                <CardDescription className="mt-2 text-foreground/80">
                  We are building a safe and inclusive space where everyone feels a sense of belonging.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4">Courage</CardTitle>
                <CardDescription className="mt-2 text-foreground/80">
                  We celebrate the strength it takes to face challenges and to share one's story.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary">
              Inspired by Kintsugi
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Our accent color, Muted Gold, is inspired by the Japanese art of Kintsugi. This practice involves repairing broken pottery by mending the areas of breakage with lacquer dusted or mixed with powdered gold.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              We see a parallel in the human experience. Our challenges and struggles do not diminish us; they are part of our story. Embracing our "cracks" and healing from them can make us stronger, more resilient, and uniquely beautiful. This philosophy is woven into the fabric of our brand.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="An abstract image representing serenity and clarity, inspired by the Kintsugi philosophy."
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint="serene clarity"
            />
          </div>
        </div>
      </div>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 flex justify-center">
              <Image
                src="https://placehold.co/500x500.png"
                alt="A group of diverse people in a supportive conversation"
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint="diverse friends"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-4xl font-bold text-primary">
                More Than Just Apparel
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                We are a community-focused brand dedicated to creating a safe space for dialogue. A portion of every purchase supports our mission and helps fund mental health initiatives and resources, providing tangible support to those in need.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-lg text-foreground/80">
                <li><strong>Designed for Comfort:</strong> Our apparel is made for physical and emotional comfort.</li>
                <li><strong>Sparking Conversation:</strong> Each piece is a subtle prompt to open up a dialogue.</li>
                <li><strong>Building Community:</strong> We're creating a network of support and understanding.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="text-center">
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
