import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request
) {

  try {

    const { searchParams } =
      new URL(request.url);

    const query =
      searchParams.get("q");

    if (!query) {

      return NextResponse.json([]);

    }

    const products =
      await prisma.product.findMany({

        where: {

          name: {

            contains: query,
            mode: 'insensitive'
          }

        }

      });

    return NextResponse.json(products);

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      error: "something went wrong"
    });

  }

}