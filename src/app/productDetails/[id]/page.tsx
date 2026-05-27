
import AddToButton from "@/components/AddToButton";
import BackButton from "@/components/BackButton";
import ShoppingCartView from "@/components/ShoppingCartView";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

type Props = {
    params: Promise<{
        id: string;
    }>
   
}

const getProductById = async (id: string) => {
    // Implementation for fetching product by ID
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id
            }
        })
        return product;

    } catch (error) {
        console.error("Error fetching product:", error);
        return [];
    }
}

export default async function ProductDetailsPage({ params }: Props) {
    const {id} = await params;
    console.log(id)

    const product = await getProductById(id);
    const className = "flex justify-center items-center gap-6 text-2xl text-white font-semibold w-full fixed bottom-0 left-0 bg-amber-500 px-5 md:px-10 py-5 z-50 rounded-t-2xl";
    console.log(product)
    return (
        <div className="relative">
             <div className="flex flex-row justify-between items-center fixed top-0 left-0 w-full bg-gray-200 px-5 md:px-10 py-3 z-50">
                <BackButton />
                <ShoppingCartView />
            </div>
            <div className="flex flex-col justify-center gap-4 pt-20 ">
                <div className="relative aspect-square">
                  <Image src={product?.image} alt={product?.name} fill className="object-cover rounded-xl" />
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                   <h1 className="text-2xl font-semibold">{product?.name}</h1>
                   <p className="text-gray-600 text-lg">₹{product?.price}</p>
                </div>
            </div>
            <AddToButton product={product} className={className} />
        </div>
    )
}