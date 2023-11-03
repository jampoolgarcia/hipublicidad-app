import { component$, useComputed$, useSignal, useStyles$ } from "@builder.io/qwik";

import type { IProduct } from "~/product/interface";
import { ProductInfo } from "../productInfo/productInfo";
import { ProductForm } from "../productForm/productForm";

import style from './productDetails.css?inline';



export const ProductDatails = component$(({ product }: { product: IProduct }) => {

  useStyles$(style);

  const quatity = useSignal<number>(1);
  const selectedSize = useSignal<number>(0);
  const price = useComputed$(() => (product.prices[selectedSize.value] * quatity.value).toFixed(2));

  return (<>
    <div class="flex flex-col justify-between h-full w-full md:w-1/2-auto space-y-4 min-h-128">
      <ProductInfo
        product={product}
        price={price.value} />
      <ProductForm quatity={quatity} selectedSize={selectedSize} product={product} price={price} />
    </div>
  </>)
}) 