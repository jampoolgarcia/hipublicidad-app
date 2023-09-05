import { $, useComputed$, useContext } from "@builder.io/qwik";
import { CartContext, type ICartItem } from "../context";



export const useShoppingCart = () => {

    const cartContext = useContext(CartContext);

    const cartSubTotal = useComputed$(() => 
        (cartContext.products.reduce(
            (prev: any, curr) => Number((prev + (curr.price * curr.quantity)).toFixed(2)), 0)));
            
    const cartTotalItems = useComputed$(() => 
        cartContext.products.reduce(
            (prev: any, curr) => prev + curr.quantity, 0));


    const updateQuantity = $(
        (quatity: number, productId: number, size: string) => {
            const index = cartContext.products.findIndex(prod => prod.productId === productId && prod.size === size);
            if(index >= 0) cartContext.products[index].quantity = quatity;
        }
    ) 

    const addCartItem = $(
        (p: ICartItem) => {

            const indexItem = cartContext.products.findIndex(cartItem => 
                cartItem.productId === p.productId &&
                cartItem.size === p.size
            )
           if(indexItem >= 0) {
                cartContext.products[indexItem].quantity = p.quantity;
            } else { 
              cartContext.products.push(p)
            }
        });

    const removeCartItem = $(
        (id: number, size: string) => {
            console.log('id', id, 'size', size);
          cartContext.products = cartContext.products.filter(product => !(product.productId === id && product.size === size))
        })
            

    return {
        cartItems: useComputed$(() => cartContext.products),
        cartSubTotal: cartSubTotal,
        cartTotalItems: cartTotalItems,
        updateQuantity,
        addCartItem: addCartItem,
        removeCartItem
    }
}


