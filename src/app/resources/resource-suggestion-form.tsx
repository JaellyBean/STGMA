"use client";

import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { Resource } from '@/lib/types';

const categories: Resource['category'][] = ['Emergency Support', 'Support Groups', 'Find a Therapist', 'Wellness + Self-Care'];

export function ResourceSuggestionForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // To receive submissions, replace this with your own Formspree endpoint ID
  const formspreeEndpoint = "https://formspree.io/f/xyzjqekz"; 

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
          title: "Thank you for your submission!",
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="resource-name">Resource Name</Label>
        <Input id="resource-name" type="text" name="resource-name" placeholder="e.g., National Suicide Prevention Lifeline" required />
      </div>
       <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="url" name="website" placeholder="https://example.com" required />
      </div>
       <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input id="phone" type="text" name="phone" placeholder="e.g., 1-800-273-8255" />
      </div>
       <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" placeholder="Briefly describe the resource..." rows={4} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
         <Select name="category" required>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" size="lg" className="w-full font-bold" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Resource'}
      </Button>
    </form>
  );
}
