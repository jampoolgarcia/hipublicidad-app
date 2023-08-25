import { $, useComputed$, useContext } from "@builder.io/qwik";

import { productsContext } from "../context/product.context";

// export const useProductList = routeLoader$<IProduct[]>(async() =>{
//     const products = await getProducts();
//     return products;
//   })

export const useProductList = () => {
    const productsState = useContext(productsContext);

    const getOneProductId = $((productId: number) => {
        return productsState.products.filter(prod => prod.id === productId)
    })

    const getProductsForIds = $((ids: number[]) => {
        return ids.map(id => productsState.products.filter(prod => prod.id === id));
    })


    return {
        produts: useComputed$(() => productsState.products),

        getOneProductId,
        getProductsForIds 
    }
    
}