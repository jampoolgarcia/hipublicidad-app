import { createContextId } from "@builder.io/qwik";

export interface ICartItems {
    productId: number;
    quantity: number;
    size: string;
    price: number;
}

export interface ICartState {
    id: number;
    userId: number;
    date: Date;
    products: ICartItems[];
}

export const CartContext = createContextId<ICartState>('cart.context');