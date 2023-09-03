import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { useShoppingCart } from "../hooks";
import type { ICartItem } from "../context";
import { Price } from "~/shared";

interface Props {
    products: ICartItem[],
}


export const CartTable = component$(({ products }: Props) =>{

    const { subTotal } = useShoppingCart();

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
          {products.map(({ productId, title, image, quantity, size, price }) => (
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
                  //onChange={(e) => updateItem(item.variantId, e.target.value)}
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
                  class=""
                  //onClick={() => updateItem(item.variantId, 0)}
                >
                  <i class="fa-solid fa-trash-can w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter"></i>
                </button>
              </td>
            </tr>
          ))}
          {
            subTotal.value === 0 ?
              null
              :
              <tr class="text-center">
                <td></td>
                <td class="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
                <td class="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <Price
                    num={subTotal.value}
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