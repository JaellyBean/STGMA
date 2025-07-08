import { notFound } from 'next/navigation';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  notFound();
  return null;
}
