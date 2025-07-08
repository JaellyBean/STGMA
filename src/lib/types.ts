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
  category: 'Immediate Help' | 'Support Hotlines' | 'Therapy & Counseling' | 'Community Support';
}

export interface CartItem extends Product {
  quantity: number;
}
