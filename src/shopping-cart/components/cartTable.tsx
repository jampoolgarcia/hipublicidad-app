import { type Signal, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { useShoppingCart } from "../hooks";
import type { ICartItem } from "../context";
import { Price } from "~/shared";

interface Props {
    products: Readonly<Signal<ICartItem[]>>,
}


export const CartTable = component$(({ products }: Props) =>{

    const { cartSubTotal, updateQuantity, removeCartItem } = useShoppingCart();

    return (<>   
      <div class="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table class="mx-auto">
        <thead>
          <tr class="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th class="font-primary font-normal px-6 py-4">Producto</th>
            <th class="font-primary font-normal px-6 py-4">Talla</th>
            <th class="font-primary font-normal px-6 py-4">Cantidad</th>
            <th class="font-primary font-normal px-6 py-4 hidden sm:table-cell">Precio</th>
            <th class="font-primary font-normal px-6 py-4">Operaciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-palette-lighter">
          {products.value.map(({ productId, title, image, quantity, size, price }) => (
            <tr key={productId} class="text-sm sm:text-base text-gray-600 text-center">
              <td class="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <img
                  src={image}
                  alt={size}
                  height={64}
                  width={64}
                  class={`hidden sm:inline-flex`}
                />
                <Link href={`/`}>
                  <a class="pt-1 hover:text-palette-dark">
                    {title}
                  </a>
                </Link>
              </td>
              <td class="font-primary font-medium px-4 sm:px-6 py-4">
                {size}
              </td>
              <td class="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={quantity}
                  onChange$={(e) => updateQuantity(Number(e.target.value), productId, size)}
                  class="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td class="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price
                  num={price}
                  numSize="text-lg"
                />
              </td>
              <td class="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  class="flex justify-center items-center"
                  onClick$={() => removeCartItem(productId, size)}
                >
                  <i class="fa-solid fa-trash-can w-8 h-8 my-auto text-palette-primary p-1 hover:scale-110 active:scale-0 transition-transform duration-500"></i>
                </button>
              </td>
            </tr>
          ))}
          {
            cartSubTotal.value === 0 ?
              null
              :
              <tr class="text-center">
                <td></td>
                <td class="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
                <td class="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <Price
                    num={cartSubTotal.value}
                    numSize="text-xl"
                  />
                </td>
                <td></td>
              </tr>
          }
        </tbody>
      </table>
    </div>
    </>)
})