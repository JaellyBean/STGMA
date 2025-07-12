import type { Resource } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Phone, Globe } from 'lucide-react';
import { ResourceSuggestionForm } from './resource-suggestion-form';

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
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary md:text-6xl">
          Resources
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          A community-curated list of mental health resources.
        </p>
        <p className="mt-4 font-bold text-lg text-destructive">
          If you are in immediate danger, please call 911.
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
                      <CardTitle className="text-xl">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-base">{resource.description}</CardDescription>
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
        <h2 className="text-center font-headline text-3xl font-bold text-primary md:text-4xl">
          Suggest a Resource
        </h2>
        <p className="text-center mt-2 text-base text-foreground/70 md:text-lg">Help us grow our knowledge bank by sharing a resource you've found helpful.</p>
        <Card className="mt-8">
          <CardContent className="p-6">
            <ResourceSuggestionForm />
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
