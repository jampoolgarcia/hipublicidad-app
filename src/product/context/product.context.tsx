import { createContextId } from "@builder.io/qwik";
import type{ IProduct } from "../interface";

export interface IProductsState {
    products: IProduct[]
}

export const productsContext = createContextId<IProductsState>('products.context');