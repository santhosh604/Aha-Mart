'use client';

import { useCartStore } from "@/store/cartStore";
import { Minus, Plus } from "lucide-react";

type Props = {
    product: any;
    className?: string;
}

export default function AddToButton({product, className}: Props) {
    const { addToCart, cart, increaseQuantity, decreaseQuantity } = useCartStore();
    
    const handleAddToCart = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        addToCart(product);
    };
    const handleIncrease = () => {
        increaseQuantity(product.id);
    };

    const handleDecrease = () => {
        decreaseQuantity(product.id);
    };

    const isInCart = cart.some((item) => item.id === product.id);
    const cartItem = cart.find((item) => item.id === product.id);

    return (
        <>
          {isInCart ? (
                    <div 
                        className={className || "flex gap-4 absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-500 font-semibold text-white text-md px-4 py-2.5 whitespace-nowrap rounded-xl shadow-md"}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    >
                        <button className="" onClick={handleDecrease}><Minus /></button>
                        <span className="mx-2">{cartItem?.quantity}</span>
                        <button className="" onClick={handleIncrease}><Plus /></button>
                    </div>
                ) : (
                    <button 
                        className={className || "absolute bottom-2 left-1/2 -translate-x-1/2 bg-amber-400 font-semibold text-white text-md px-4 py-2.5 whitespace-nowrap rounded-xl shadow-md hover:bg-amber-600"}
                        onClick={handleAddToCart}
                    >
                        ADD TO CART
                    </button>
                )}
        </>
    )
}