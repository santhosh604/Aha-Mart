'use client';

import { useCartStore } from "@/store/cartStore";
import { Minus, Plus, BadgeMinus } from "lucide-react";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";

export default function CartPage() {

    const {cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = useCartStore();
    return (
        <div>
            <div className="flex flex-row items-center justify-between fixed top-0 left-0 w-full bg-gray-200 px-5 md:px-10 py-3 z-50">
              <BackButton />
              <h1 className="pr-7 text-2xl font-bold text-amber-500">My Cart</h1>
              <p></p>
            </div>
        {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 h-screen">
                <h1 className="text-2xl font-semibold">Your cart is empty</h1>
                <p className="text-gray-600">Looks like you haven't added anything to your cart yet.</p>
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center gap-2 pt-20">
                <h3 className="flex self-center pl-75 md:pl-94 cursor-pointer text-red-400" onClick={clearCart}>
                    Clear All
                </h3>
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 border p-4 rounded-lg w-full max-w-md border-gray-300">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-600">₹{item.price * item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-3 ml-4 border border-gray-300 rounded-lg p-2">
                            <button className="bg-amber-400 text-white p-0.5 rounded-full cursor-pointer" onClick={() => decreaseQuantity(item.id)}>
                                <Minus />
                            </button>
                            <span className="font-semibold">{item.quantity}</span>
                            <button className="bg-amber-400 text-white p-0.5 rounded-full cursor-pointer" onClick={() => increaseQuantity(item.id)}>
                                <Plus />
                            </button>
                        </div>
                        <button className=" cursor-pointer ml-auto text-red-500" onClick={() => removeFromCart(item.id)}>
                            <BadgeMinus />
                        </button>
                    </div>
                ))}
                <div className="flex flex-col gap-3 border dotted p-4 rounded-lg w-full max-w-md border-gray-400 mt-6">
                    <h1 className="font-semibold text-xl">Bill Details</h1>
                    <div className="flex flex-col">
                        <p className="text-gray-600">Total Items: <span className="font-semibold">{cart.reduce((total, item) => total + item.quantity, 0)}</span></p>
                        <p className="text-gray-600">Total Price: ₹<span className="font-semibold">{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</span></p>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};