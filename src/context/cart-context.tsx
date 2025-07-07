"use client";

import { createContext, useState, type ReactNode } from 'react';
import type { CartItem } from '@/lib/types';
import { useToast } from "@/hooks/use-toast"

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem['id']) => void;
  removeFromCart: (item: CartItem['id']) => void;
  updateQuantity: (item: CartItem['id'], quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

import { products } from '@/lib/products';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (itemId: CartItem['id']) => {
    const productToAdd = products.find(p => p.id === itemId);
    if (!productToAdd) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemId);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
    
    toast({
      title: "Added to Cart",
      description: `${productToAdd.name} has been added to your cart.`,
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: CartItem['id']) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    const removedProduct = products.find(p => p.id === itemId);
    if (removedProduct) {
      toast({
        title: "Removed from Cart",
        description: `${removedProduct.name} has been removed from your cart.`,
        variant: "destructive",
      });
    }
  };

  const updateQuantity = (itemId: CartItem['id'], quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
