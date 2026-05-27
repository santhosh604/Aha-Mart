'use client';

import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from "@/store/cartStore";

export default function ShoppingCartView() {
  const { cart } = useCartStore();
  return (
    <>
    <Link href="/cartPage">
        <div className='border border-gray-300 rounded-full p-4 md:p-3 shadow-lg md:rounded-2xl flex items-center gap-2'>
            <ShoppingCart className='w-5 h-5 text-amber-400' />
            <h1 className='text-md hidden md:block'>My Cart</h1>
            <span className='bg-amber-400 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center'>
              {cart.length}
            </span>
        </div>
    </Link>
    </>
  );
}