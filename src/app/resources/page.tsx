import type { Resource } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Phone, Globe, AppWindow } from 'lucide-react';

const resources: Resource[] = [
  {
    name: '988 Suicide & Crisis Lifeline',
    description: 'Provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones.',
    phone: '988',
    website: 'https://988lifeline.org/',
    category: 'Emergency Support',
  },
  {
    name: 'Crisis Text Line',
    description: 'Text HOME to 741741 from anywhere in the US, anytime, about any type of crisis. A live, trained Crisis Counselor receives the text and responds, all from our secure online platform.',
    phone: 'Text HOME to 741741',
    website: 'https://www.crisistextline.org/',
    category: 'Emergency Support',
  },
  {
    name: 'The Trevor Project',
    description: 'The world’s largest suicide prevention and crisis intervention organization for LGBTQ young people.',
    phone: '1-866-488-7386',
    website: 'https://www.thetrevorproject.org/',
    category: 'Emergency Support',
  },
  {
    name: 'SAMHSA National Helpline',
    description: 'A confidential, free, 24-hour-a-day information service for individuals and family members facing mental and/or substance use disorders.',
    phone: '1-800-662-HELP (4357)',
    website: 'https://www.samhsa.gov/find-help/national-helpline',
    category: 'Emergency Support',
  },
  {
    name: 'NAMI (National Alliance on Mental Illness)',
    description: 'The nation’s largest grassroots mental health organization, providing advocacy, education, support and public awareness.',
    phone: '1-800-950-NAMI (6264)',
    website: 'https://www.nami.org/',
    category: 'Support Groups',
  },
   {
    name: 'Anxiety & Depression Association of America (ADAA)',
    description: 'ADAA provides free online support groups and educational resources for anxiety, depression, and co-occurring disorders.',
    website: 'https://adaa.org/finding-help/support-groups',
    category: 'Support Groups',
  },
  {
    name: 'Psychology Today Therapist Directory',
    description: 'A comprehensive directory of therapists, psychiatrists, and treatment facilities across the United States.',
    website: 'https://www.psychologytoday.com/us/therapists',
    category: 'Find a Therapist',
  },
   {
    name: 'Headspace',
    description: 'An app for meditation and mindfulness. Learn to manage feelings and thoughts with the lifelong skill of everyday mindfulness, any time of the day.',
    website: 'https://www.headspace.com/',
    category: 'Wellness + Self-Care',
  },
  {
    name: 'Calm',
    description: 'The #1 app for sleep and meditation. Join the millions experiencing better sleep, lower stress, and less anxiety.',
    website: 'https://www.calm.com/',
    category: 'Wellness + Self-Care',
  }
];

export default function ResourcesPage() {
  const categories: Resource['category'][] = ['Emergency Support', 'Support Groups', 'Find a Therapist', 'Wellness + Self-Care'];
  const groupedResources = resources.reduce((acc, resource) => {
    (acc[resource.category] = acc[resource.category] || []).push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary md:text-6xl">
          Resource Knowledge Bank
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          A community-curated list of mental health resources. If you are in immediate danger, please call 911.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map(category => (
          groupedResources[category] && (
            <section key={category}>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">{category}</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {groupedResources[category].map(resource => (
                  <Card key={resource.name} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription>{resource.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4 pt-4">
                      {resource.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-accent" />
                          <span className="text-sm font-semibold">{resource.phone}</span>
                        </div>
                      )}
                       <a href={resource.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-primary hover:underline">
                          <Globe className="h-4 w-4 mr-2" />
                          Visit Website
                        </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )
        ))}
      </div>
      
      <div className="mx-auto mt-20 max-w-4xl">
        <h2 className="text-center font-headline text-4xl font-bold text-primary">
          Suggest a Resource
        </h2>
        <p className="text-center mt-2 text-foreground/70">Help us grow our knowledge bank by sharing a resource you've found helpful.</p>
        <Card className="mt-8">
          <CardContent className="p-6">
            {/* To receive submissions, replace YOUR_FORM_ID with your Formspree endpoint ID */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
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
              <Button type="submit" size="lg" className="w-full font-bold">
                Submit Resource
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
