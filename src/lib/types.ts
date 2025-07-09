export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  shopifyUrl: string;
}

export interface Resource {
  name: string;
  description: string;
  phone?: string;
  website: string;
  category: 'Emergency Support' | 'Support Groups' | 'Find a Therapist' | 'Wellness + Self-Care';
}

export interface CartItem extends Product {
  quantity: number;
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
