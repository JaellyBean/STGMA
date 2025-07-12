import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary md:text-6xl">
          Get In Touch
        </h1>
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
  );
}
