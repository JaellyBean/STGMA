export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  shopifyUrl: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}
