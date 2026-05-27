'use client';
import Image from "next/image";
import Link from "next/link";

const categories = [
    {id: 1, name: "Fruits", slug: "fruits", image: "https://images.pexels.com/photos/4451841/pexels-photo-4451841.jpeg?w=800&h=800&auto=compress&fit=crop"},
    {id: 2, name: "Vegetables", slug: "vegetables", image: "https://images.pexels.com/photos/31979013/pexels-photo-31979013.jpeg?w=800&h=800&auto=compress&fit=crop"},
    {id: 3, name: "Snacks", slug: "snacks", image: "https://images.pexels.com/photos/5112444/pexels-photo-5112444.jpeg?w-500&h-500&fit=crop"},
]

export default function CategoryProduct() {
    return (
        <div className="grid grid-cols-3 gap-3 mt-2">
            {categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.slug}`}>
                  <div className="relative w-full aspect-square" >
                    <Image src={category.image} alt={category.name} sizes="40vw" fill className="object-cover rounded-xl"/>
                  </div>
                  <h2 className="text-center text-lg text-gray-600 font-semibold">{category.name}</h2>
                </Link>
            ))}
        </div>
    )
}