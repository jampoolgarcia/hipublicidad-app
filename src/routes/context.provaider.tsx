import { Slot, component$, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { type IProductsState, productsContext } from "~/product/context/product.context";
import { CartContext, type ICartState } from "~/shopping-cart/context";


export const ContextProvaider = component$(() => {

     // creamos el estado por defecto
     const productsState = useStore<IProductsState>({
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(productsContext, productsState);



     // creamos el estado por defecto
     const cart = useStore<ICartState>({
        id: 1,
        userId: 1,
        date: new Date('2020-03-02T00:00:00.000Z'),
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(CartContext, cart);

     // leer datos del localstorage y guardar en el context
    // nota: al no especificar el track solo se ejecuta una vez la tarea.
    useVisibleTask$(() => {
        if(localStorage.getItem('shopping-cart')){

            const {
                id,
                userId,
                date,
                products
            } = JSON.parse(localStorage.getItem('shopping-cart')!) as ICartState;
            
            cart.id = id;
            cart.userId = userId;
            cart.date = date;
            cart.products = products;
        }
    })


    // guardar los datos del contexto en el local storage
    useVisibleTask$(({track}) => {
        // ejecutar la tarea cada que cambie uno de los valores...
        track (()=> [cart.products.length, cart.date]);
        // guarda en el local stora el nuevo estado 
        localStorage.setItem('shopping-cart', JSON.stringify(cart));
    })


    return (<Slot />)
})