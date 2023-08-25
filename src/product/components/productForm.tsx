import { $, component$, useSignal } from "@builder.io/qwik";
import type { IProduct } from "~/product/interface";
import type { ICartItems } from "~/shopping-cart/context";
import { useShoppingCart } from "~/shopping-cart/hooks";


export const ProductForm = component$((props: { product: IProduct }) => {

    const { addProduct } = useShoppingCart();

    const itemCart = useSignal<ICartItems>({
        productId: props.product.id,
        quantity: 0,
        size: '',
        price: Number(props.product.price)
    });

    const updateQuantity = $((e: string) => {
        itemCart.value.quantity = Number(e);
    })

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
            value={itemCart.value.quantity}
            onChange$={(e) => updateQuantity(e.target.value)}
            class="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
    
        <div class="flex flex-col items-start space-y-1 flex-grow">
          <label class="text-gray-500 text-base">Talla</label>
          <select
            id="size-selector"
            name="size-selector"
            value="0"
            class="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
                <option
                  id="0"
                  value="0"
                >
                   2 x 2
                </option>
                <option
                  id="1"
                  value="1"
                >
                   3 x 3
                </option>
                <option
                  id="1"
                  value="1"
                >
                   4 x 4
                </option>
          </select>
        </div>
      </div>
      <button
        class="pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline  hover:bg-palette-dark"
        aria-label="cart-button"
        onClick$={() => addProduct(itemCart.value)}
      >
        Agregar al carrito
        <i class="fa-solid fa-cart-plus w-5 ml-2"></i>
      </button>
    </div>
    )
})