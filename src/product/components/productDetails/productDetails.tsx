import { component$, useComputed$, useSignal, useStyles$ } from "@builder.io/qwik";

import type { IProduct } from "~/product/interface";
import { ProductInfo } from "../productInfo";
import { ProductForm } from "../productForm/productForm";

import style from './productDetails.css?inline';


export const ProductDatails = component$((props: { product: IProduct }) =>{

  useStyles$(style);

  const quatity = useSignal<number>(1);
  const selectedSize = useSignal<number>(0);
  const price = useComputed$(() => (props.product.prices[selectedSize.value] * quatity.value).toFixed(2) ); 

    return (
      <div class="flex flex-col justify-between h-full w-full md:w-1/2-auto space-y-4 min-h-128">
      <ProductInfo 
        title={props.product.title}
        description={props.product.description}
        price={price.value} />
      <ProductForm quatity={quatity} selectedSize={selectedSize} product={props.product} price={price} /> 
    </div>
    )
}) 