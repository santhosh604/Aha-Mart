import Product from "./Product";
import { useEffect, useState, useRef } from "react";

type Props = {
    products: {
        id: string,
        name: string
    }[],
    search: string
}

export default function SearchPageProducts({products, search}: Props) {

    const [randomProducts, setRandomProducts] = useState([])
    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            return;
        }
        ref.current = true;
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/random-products");
                console.log(response)
                if (!response.ok) {
                    throw new Error("Failed to fetch")
                }
                const data = await response.json();
                setRandomProducts(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchProducts();

    }, []);

    return (
        <>
          {search.trim() !== "" && products.length === 0 ?
             <h1>Products Not Found</h1> :
              products.length === 0 ? 
            <>
              <h1 className="text-2xl font-semibold mb-2 font-sans mt-2">Popular Products</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {randomProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
              </div>
            </>
          : <>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
               </div>
            </>
        }
        </>
    )
}