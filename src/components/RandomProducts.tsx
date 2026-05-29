import {prisma} from "@/lib/prisma"
import Product from "./Product";
export const getRandomProducts = async () => {
    try {
        const products = await prisma.product.findMany();
        const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 6);
        return randomProducts;
    }
    catch (error) {
        console.log(error);
    }
}

export default async function RandomProducts() {

    const randomProducts = await getRandomProducts()

    return (
        <>
          <h1 className="text-2xl font-semibold mb-2 font-sans mt-2">Popular Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-2">
                {randomProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}