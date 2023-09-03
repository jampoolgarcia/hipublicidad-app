import { createContextId } from "@builder.io/qwik";

export interface ICartItem {
    productId: number;
    image:string;
    title: string;
    quantity: number;
    size: string;
    price: number;
}

export interface ICartState {
    id: number;
    userId: number;
    date: Date;
    products: ICartItem[];
}

export const CartContext = createContextId<ICartState>('cart.context');