import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
import { type IProductsState, productsContext } from "~/product/context/product.context";



export const ContextProvaider = component$(() => {

     // creamos el estado por defecto
     const productsState = useStore<IProductsState>({
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(productsContext, productsState);

    return (<Slot />)
})