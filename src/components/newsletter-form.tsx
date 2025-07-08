"use client";

import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function NewsletterForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // To receive submissions, replace this with your own Formspree endpoint ID for the newsletter
  const formspreeEndpoint = "https://formspree.io/f/mrbkwadb";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "You're signed up!",
          description: "Thank you for joining the movement. We'll keep you updated.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Submission failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Could not submit the form. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-lg space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="sr-only">Name</Label>
          <Input id="name" type="text" name="name" placeholder="Your Name" required className="bg-background/20 placeholder:text-accent-foreground/70 border-accent-foreground/50 text-accent-foreground" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="sr-only">Email</Label>
          <Input id="email" type="email" name="email" placeholder="Your Email" required className="bg-background/20 placeholder:text-accent-foreground/70 border-accent-foreground/50 text-accent-foreground" />
        </div>
      </div>
      <Button type="submit" size="lg" className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Stay Updated'}
      </Button>
    </form>
  );
}
