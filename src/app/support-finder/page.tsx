import { HeartHandshake } from 'lucide-react';
import { SupportForm } from './support-form';

export default function SupportFinderPage() {
  return (
    <div className="container max-w-3xl py-12">
      <div className="mb-12 text-center">
        <HeartHandshake className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 font-headline text-5xl font-bold tracking-tighter text-primary md:text-6xl">
          Find Your Support Tool
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Describe how you're feeling, and our AI assistant will suggest resources tailored to your needs. Your privacy is important; this is a safe and anonymous space.
        </p>
      </div>
      <SupportForm />
    </div>
  );
}
