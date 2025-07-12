import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { HeartHandshake, Mic, Users, Shield, Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary md:text-6xl">
            Our Mission: To End the Stigma
          </h1>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">
            STGMA was founded in 2022 on the belief that clothing can be a quiet statement and a powerful catalyst for conversation. We exist to rewrite the stigma around mental health through fashion, culture, and connection.
          </p>
        </div>
      </div>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-5xl">Our Core Values</h2>
            <p className="mt-4 text-base text-foreground/70 md:text-lg">
              These principles guide everything we do, from our designs to our community initiatives.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4 text-xl">Empathy</CardTitle>
                <CardDescription className="mt-2 text-base text-foreground/80">
                  We lead with compassion, seeking to understand and support every individual's journey.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mic className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4 text-xl">Authenticity</CardTitle>
                <CardDescription className="mt-2 text-base text-foreground/80">
                  We encourage honest conversations and the courage to be vulnerable and true to oneself.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4 text-xl">Community</CardTitle>
                <CardDescription className="mt-2 text-base text-foreground/80">
                  We are building a safe and inclusive space where everyone feels a sense of belonging.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4 text-xl">Courage</CardTitle>
                <CardDescription className="mt-2 text-base text-foreground/80">
                  We celebrate the strength it takes to face challenges and to share one's story.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                More Than Just Apparel
              </h2>
              <p className="mt-4 text-base text-foreground/80 md:text-lg">
                We are a community-focused brand dedicated to creating a safe space for dialogue. A portion of every purchase supports our mission and helps fund mental health initiatives and resources, providing tangible support to those in need.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-base text-foreground/80 md:text-lg">
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
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Get In Touch</h2>
           <p className="mt-6 text-lg text-foreground/80 md:text-xl">
          Whether you have a question about our products, our mission, or just want to share your story, we're here to listen.
        </p>
        </div>
         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <Mail className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline text-xl">Email Us</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              For general inquiries and support, please send us an email. We aim to respond within 24-48 hours.
            </CardDescription>
            <Button asChild variant="link" className="p-0 h-auto mt-4 font-bold text-base">
              <a href="mailto:support@stgma.online">support@stgma.online</a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <MessageCircle className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline text-xl">Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Follow our journey and join the conversation on our social media channels.
            </CardDescription>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <HelpCircle className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline text-xl">FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Have a question about shipping, returns, or sizing? Check out our frequently asked questions.
            </CardDescription>
            <Button variant="link" className="p-0 h-auto mt-4 font-bold text-base">
              Visit FAQ Page
            </Button>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}