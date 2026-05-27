
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

type CartStore = {

    cart: Product[];

    addToCart: (product: Product) => void;

    removeFromCart: (id: number) => void;

    increaseQuantity: (id: number) => void;

    decreaseQuantity: (id: number) => void;

    clearCart: () => void;
};

export const useCartStore = create<CartStore>()(persist((set) => ({
    cart: [],

    addToCart: (product) => set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] })),

    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

    increaseQuantity: (id) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? { ...item, quantity: (item.quantity + 1) } : item)
    })),

    decreaseQuantity: (id) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? { ...item, quantity: (item.quantity - 1) } : item).filter((item) => item.quantity > 0)
    })),

    clearCart: () => set((state) => ({ cart: [] })),

}),
  { name: 'cart-storage' }
));