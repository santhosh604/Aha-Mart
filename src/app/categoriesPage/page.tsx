
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/components/category";
import Navbar from "@/components/Navbar";

export default function CategoriesPage() {
    return (
        <>
          <Header />
          <div className="text-center pt-28 md:pt-18">
            <h1 className="text-2xl font-semibold mt-5 md:mt-3">All Categories</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <div className="relative w-full aspect-square">
                  <Image src={category.image} alt={category.name} sizes="40vw" fill className="object-cover rounded-xl"/>
                </div>
                <h2 className="text-center text-lg text-gray-600 font-semibold">{category.name}</h2>
              </Link>
            ))}
          </div>
          <Navbar />
        </>
    );
} 