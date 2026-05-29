import { prisma } from "@/lib/prisma";
import CategoryProduct from "@/components/CategoryProduct";
import BannerSlider from "@/components/BannerSlider";
import Link from "next/link";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import RandomProducts from "@/components/RandomProducts";

export default function Home() {

  return (
    <>
      <Header />
      <div className="pt-28 md:pt-18">
        <BannerSlider />
        <div className="flex items-center justify-between mb-2 pt-2">
          <h1 className="text-2xl font-semibold mb-2 font-sans">Categories</h1>
          <Link href="/categoriesPage"><button className="text-sm text-amber-500">View All</button></Link>
        </div>
        <CategoryProduct />
        <RandomProducts />
      </div> 
      <Navbar />
    </>
  );
}