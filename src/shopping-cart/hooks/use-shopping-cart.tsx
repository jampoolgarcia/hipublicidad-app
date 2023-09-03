import { $, useComputed$, useContext } from "@builder.io/qwik";
import { CartContext, type ICartItem } from "../context";



export const useShoppingCart = () => {

    const cartContext = useContext(CartContext);

    const subTotal = useComputed$(() => 
        (cartContext.products.reduce(
            (prev: any, curr) => prev + curr.price, 0)));
            
    const totalItems = useComputed$(() => 
        cartContext.products.length);


    const addProduct = $(
        (p: ICartItem) => {
            console.log(p),
            cartContext.products.push(p)});

    const removeProduct = $(
        (id: number) => 
            cartContext.products.filter(product => product.productId === id));

    return {
        cartItems: useComputed$(() => cartContext.products),
        subTotal,
        totalItems,

        addProduct,
        removeProduct
    }
}


