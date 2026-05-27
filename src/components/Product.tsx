'use client';

import Link from "next/link";
import AddToButton from "./AddToButton";

export default function Product({ product }: { product: any }) {


    return (
        <Link href={`/productDetails/${product.id}`} className="p-2 rounded-2xl">
            <div className="relative w-full aspect-square">
                <img src={product.image} alt={product.name}  className="w-full h-full object-cover rounded-lg" />
                <AddToButton product={product} />
            </div>
            <div className="flex flex-row items-center justify-between mt-2 ">
                <h1 className=" text-lg font-semibold">{product.name}</h1>
                <p className="text-gray-600">₹{product.price}</p>
            </div>
        </Link>
    )
}