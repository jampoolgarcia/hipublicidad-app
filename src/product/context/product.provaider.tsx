import { useContextProvider, useStore } from "@builder.io/qwik";
import { productsContext } from "./product.context";
import type {  IProductsState } from "./product.context";


export const productProvaider = () => {

    // creamos el estado por defecto
    const productsState = useStore<IProductsState>({
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(productsContext, productsState);

}