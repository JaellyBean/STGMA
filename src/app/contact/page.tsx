import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary md:text-7xl">
          Get In Touch
        </h1>
        <p className="mt-6 text-xl text-foreground/80">
          Whether you have a question about our products, our mission, or just want to share your story, we're here to listen.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <Mail className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline">Email Us</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              For general inquiries and support, please send us an email. We aim to respond within 24-48 hours.
            </CardDescription>
            <Button asChild variant="link" className="p-0 h-auto mt-4 font-bold">
              <a href="mailto:support@stgma-apparel.com">support@stgma-apparel.com</a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <MessageCircle className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline">Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
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
            <CardTitle className="font-headline">FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Have a question about shipping, returns, or sizing? Check out our frequently asked questions.
            </CardDescription>
            <Button variant="link" className="p-0 h-auto mt-4 font-bold">
              Visit FAQ Page
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto mt-20 max-w-4xl">
        <h2 className="text-center font-headline text-4xl font-bold text-primary">
          Send Us a Message
        </h2>
        <Card className="mt-8">
          <CardContent className="p-6">
            <form action="mailto:contact@stgma-apparel.com" method="post" encType="text/plain" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input type="text" name="name" placeholder="Your Name" required />
                <Input type="email" name="email" placeholder="Your Email" required />
              </div>
              <Input type="text" name="subject" placeholder="Subject" required />
              <Textarea name="message" placeholder="Your message..." rows={6} required />
              <Button type="submit" size="lg" className="w-full font-bold">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
