import { component$, useComputed$, useSignal } from "@builder.io/qwik";

import { BackToProductButton } from "./backToProductButton";
import type { IProduct } from "~/product/interface";
import { ProductInfo } from "./productInfo";
import { ProductForm } from "./productForm";


export const ProductDatails = component$((props: { product: IProduct }) =>{

  const quatity = useSignal<number>(1);
  const selectedSize = useSignal<number>(0);
  const price = useComputed$(() => (props.product.prices[selectedSize.value] * quatity.value).toFixed(2) ); 

    return (
      <div class="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={props.product.title}
        description={props.product.description}
        price={price.value} />
      <ProductForm quatity={quatity} selectedSize={selectedSize} product={props.product} /> 
    </div>
    )
}) 