import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/resources/${article.slug}`} className="block">
          <div className="relative aspect-video w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint="wellness article"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <CardTitle className="font-headline text-2xl">
          <Link href={`/resources/${article.slug}`} className="hover:text-accent transition-colors">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="mt-2 text-sm text-muted-foreground">
          By {article.author} on {article.date}
        </CardDescription>
        <p className="mt-4 flex-1 text-base text-foreground/80">
          {article.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="px-0 font-bold">
          <Link href={`/resources/${article.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
