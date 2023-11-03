import { useSignal } from "@builder.io/qwik";
import type { IProduct } from "../interface";

export const useProductRandom = (products: IProduct[], count: number) => {

    const randomProducts = useSignal<IProduct[]>([]);

    const length =  products.length;
        
    for(let i=0; i<count; i++){
        const random = Math.floor(Math.random() * length);
        const product = products[random];
            const res = randomProducts.value.find((p) => p.id === product.id);
            
            if(typeof res === 'undefined') randomProducts.value.push(product); else i--;
        }
        

    return randomProducts;
}