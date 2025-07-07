import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function ShopPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary md:text-6xl">
          Our Collection
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Apparel designed with comfort, purpose, and conversation in mind. Each piece is a step towards ending the stigma.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
