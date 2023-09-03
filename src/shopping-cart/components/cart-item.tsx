import { component$ } from '@builder.io/qwik';

import type { ICartItem } from '../context';

export interface Props {
    cartItem: ICartItem,
}

export const CartItem = component$(({ 
    cartItem: { 
        image, 
        title, 
        size,
        price
    }}: Props) => {
  return (
    <>  
        <div class="card flex justify-between items-center my-3 mx-2 p-4">
            <img
                src={image}
                alt="imagen" 
                width="100"
                height="100"
                class="rounded shadow-sm"
            />
            <div class="mx-3">
                <h4 class="font-bold text-xl mb-2 truncate-text-2">{ title }</h4>
                <p class="text-gray-700 text-base break-words truncate-text-2">{ size }</p>
            </div>

            <span class="font-bold text-xl">{ price }$</span> 

            <button class="text-red-400 underline ml-3">
                <i class="fa-solid fa-trash-xmark text-2xl"></i>
            </button>
            
        </div>
    </>
  )
});