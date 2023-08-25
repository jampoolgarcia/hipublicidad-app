import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
import { type IProductsState, productsContext } from "~/product/context/product.context";
import { CartContext, type ICartState } from "~/shopping-cart/context";


export const ContextProvaider = component$(() => {

     // creamos el estado por defecto
     const cart = useStore<ICartState>({
        id: 1,
        userId: 1,
        date: new Date('2020-03-02T00:00:00.000Z'),
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(CartContext, cart);

    // creamos el estado por defecto
    const productsState = useStore<IProductsState>({
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(productsContext, productsState);

    return (<Slot />)
})