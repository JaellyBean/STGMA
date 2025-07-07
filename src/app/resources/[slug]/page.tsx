import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/lib/articles';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          {article.title}
        </h1>
        <div className="mt-4 flex justify-center items-center gap-4 text-muted-foreground">
          <span>By {article.author}</span>
          <span>&bull;</span>
          <span>{article.date}</span>
        </div>
      </div>
      <div className="relative my-8 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          data-ai-hint="mental health concept"
          priority
        />
      </div>
      <div
        className="prose prose-lg max-w-none text-foreground/90 prose-headings:font-headline prose-headings:text-primary prose-a:text-accent prose-strong:text-primary"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <Separator className="my-12" />
      <div className="text-center">
        <h3 className="font-headline text-2xl font-semibold">Share this article</h3>
        {/* Add sharing buttons here in a real application */}
        <p className="mt-2 text-muted-foreground">Help spread awareness and support.</p>
      </div>
    </article>
  );
}
