import { $, type Signal, component$ } from "@builder.io/qwik";

import { useShoppingCart } from "~/shopping-cart/hooks";
import type { IProduct } from "../interface";
import type { ICartItem } from "~/shopping-cart/context";


export const ProductForm = component$((props: { quatity: Signal<number>, selectedSize: Signal<number>, product: IProduct }) => {

    const { addCartItem } = useShoppingCart();

    const { quatity, selectedSize, product }  = props;


    const addProductShoppingCart = $(() =>{
      const itemCart: ICartItem = {
        productId: product.id,
        title: product.title,
        image: product.images[0],
        quantity: quatity.value,
        size: product.sizes[selectedSize.value],
        price: product.prices[selectedSize.value]
      }

      addCartItem(itemCart);
    })

    const updateQuantity = $((e: string) => quatity.value = Number(e));
    const upsateSize = $((e:string) => selectedSize.value = Number(e));

    return (
      <div class="w-full">
        <div class="flex justify-start space-x-2 w-full">
          <div class="flex flex-col items-start space-y-1 flex-grow-0">
            <label class="text-gray-500 text-base">Cant.</label>
            <input
              type="number"
              inputMode="numeric"
              id="quantity"
              name="quantity"
              min="1"
              step="1"
              value='1'
              onChange$={(e) => updateQuantity(e.target.value)}
              class="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
            />
          </div>
    
        <div class="flex flex-col items-start space-y-1 flex-grow">
          <label class="text-gray-500 text-base">Talla</label>
          <select
            id="size-selector"
            name="size-selector"
            onChange$={(e) => upsateSize(e.target.value)}
            class="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            {
              product.sizes.map((size, index) => (
                <option
                key={index}
                value={index}>
                  {size}
                </option>
              ))
            }
          </select>
        </div>
      </div>
     
      <button
        class="pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline  hover:bg-blue-700 transition-transform duration-500 active:scale-110"
        aria-label="cart-button"
        onClick$={() => addProductShoppingCart()}
      >
        Agregar al carrito
        <i class="fa-solid fa-cart-plus w-5 ml-2"></i>
      </button>
    </div>
    )
})