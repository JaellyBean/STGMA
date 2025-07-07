import { articles } from '@/lib/articles';
import { ArticleCard } from '@/components/article-card';

export default function ResourcesPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary md:text-6xl">
          Mental Health Resources
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          A curated collection of articles and insights to support your well-being journey.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
