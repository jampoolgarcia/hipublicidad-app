import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { IProduct } from "~/product/interface";
import { ProductImages } from "~/product/components";
import { ProductDatails } from "~/product/components/productDetails";

import { products } from '~/product';

export const useProduct = routeLoader$<IProduct>(async ({params}) => {
    const id = Number(params.id);
    const product = products.find(product => product.id === id);
    return product!;
  });
  

export default component$(() =>{
    const product = useProduct();

    return (
      <section class="relative flex flex-col mt-14 mb-6 justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <ProductImages images={product.value.images!} />
        <ProductDatails product={product.value} />
      </section>
    )
    
    
})