
import { getRandomProducts } from "@/components/RandomProducts";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const randomProducts = await getRandomProducts();
        return NextResponse.json(randomProducts);
    }
    catch (error) {
        console.log(error);
        return NextResponse.json([])
    }
    
}