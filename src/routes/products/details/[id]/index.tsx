import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { IProduct } from "~/product/interface";
import { ProductImages, Products } from "~/product/components";
import { ProductDatails } from "~/product/components/productDetails/productDetails";

import { products } from '~/product';

export const useProduct = routeLoader$<IProduct>(async ({params}) => {
    const id = Number(params.id);
    const product = products.find(product => product.id === id);
    return product!;
  });
  

export default component$(() =>{
    const product = useProduct();

    return (
      <section class="relative flex flex-col mt-10 mb-6 p-5 justify-center items-center mx-auto">
        <div class="relative flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 w-11/12 mx-auto">
          <ProductImages images={product.value.images!} />
          <ProductDatails product={product.value} />
        </div>
        <div class="my-4">
           <Products category={product.value.category} prod={product.value} />
        </div>
      </section>
    )
    
    
})