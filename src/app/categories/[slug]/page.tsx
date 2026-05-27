
import { prisma } from "@/lib/prisma";
import Product from "@/components/Product";
import ShoppingCartView from "@/components/ShoppingCartView";
import BackButton from "@/components/BackButton";
import { categories } from "@/components/category";
import Navbar from "@/components/Navbar";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getProductsByCategory(categoryName: string) {

  // Implementation for fetching products by category
  try {
  
    const products = await prisma.product.findMany({
      where:{
        category: categoryName
      }
   })
   return products;
  }
  catch (error) {    
    console.error("Error fetching products by category:", error);
    return [];
  }

}

export default async function CategoryPage({params}: Props) {
    const { slug } = await params;

    const categoryName = categories.find((item) => item.slug === slug)?.name;
  
    const products = await getProductsByCategory(categoryName);
    console.log(products.length);

    return (
        <>
            <div className="flex flex-row justify-between items-center fixed top-0 left-0 w-full bg-gray-200 px-5 md:px-10 py-3 z-50">
              <BackButton />
              <h1 className="md:pl-10 text-xl font-bold text-amber-500">{categoryName}</h1>
              <ShoppingCartView />
            </div>
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-20">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="pt-20">No products found for this category.</p>
          )}
          <Navbar />
        </>
      )
}