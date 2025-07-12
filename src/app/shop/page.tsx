import { ShoppingBag } from 'lucide-react';
import { NewsletterForm } from '@/components/newsletter-form';
import { Card, CardContent } from '@/components/ui/card';

export default function ShopComingSoonPage() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center py-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary md:text-6xl">
          Shop Coming Soon
        </h1>
        <p className="mt-6 text-lg text-foreground/80 md:text-xl">
          We're working hard behind the scenes to bring you a collection of apparel with a purpose. Our shop will feature designs that spark conversation and support our mission to end the stigma around mental health.
        </p>
        <p className="mt-4 text-lg text-foreground/80 md:text-xl">
          Stay tuned!
        </p>
      </div>
      <div className="w-full max-w-4xl mt-16">
        <Card className="bg-gradient-to-r from-accent/80 to-accent text-accent-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                  Join the Movement
                </h2>
                <p className="mt-4 text-lg text-accent-foreground/90">
                  Sign up for our newsletter to be the first to know when the shop goes live and to stay up-to-date on new resources.
                </p>
                <NewsletterForm />
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}