import { component$ } from "@builder.io/qwik";
import { useProductRandom } from "~/product/hooks/useProductsRandom";

import { ProductCard } from "../productCard/productCard";
import { products } from "~/product/data";
import type { IProduct } from "~/product/interface";


export const Products = component$(({ category, prod }: { category: string, prod: IProduct}) => {
    
    const productList = products.filter(p => (p.category === category && p.id !== prod.id));

    const length = productList.length > 4 ? 4 : productList.length;

    const randomProducts = useProductRandom(productList, length);

    return (<>
        <div class="grid grid-cols-1  sm:grid-cols-2  xl:grid-cols-4 gap-4 mt-4">
            {
                randomProducts.value.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </>)
})  