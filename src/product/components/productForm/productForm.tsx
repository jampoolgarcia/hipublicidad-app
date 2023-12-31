import { $, type Signal, component$, useStyles$ } from "@builder.io/qwik";
import type { IProduct } from "../../interface";
import { phoneNumber } from "~/helpers/config";

import style from './productForm.css?inline';


export const ProductForm = component$((props: { quatity: Signal<number>, selectedSize: Signal<number>, product: IProduct, price: Signal<string> }) => {

  useStyles$(style);

  const { quatity, selectedSize, product, price } = props;

  const getText = () => {
    const text = `Hola, buen día. Estoy interesado en la compra del producto: Porta Folletos, Por la cantidad de ${quatity.value}, con las medidas de ${product.sizes[selectedSize.value]}, el cual tendría un valor de ${price.value} Soles.`
    return text;
  }

  const updateQuantity = $((e: string) => quatity.value = Number(e));
  const updateSize = $((e: string) => selectedSize.value = Number(e));

  return (
    <div class="w-full">
      <div class="radio-button flex items-start gap-2 mb-3">
        {
          product.sizes.map((size, index) => (
            <div key={index}>
              <input type="radio" id={size} onClick$={() => updateSize(`${index}`)} name="sizes" value={index} checked={index === 0} />
              <label for={size}>{size}</label>
            </div>
          ))
        }
      </div>

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

        <div class="flex flex-col items-start justify-end space-y-1 flex-grow">
          <a
            class="pt-3 max-w-xs pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline  hover:bg-blue-700 transition-transform duration-500 active:scale-110"
            aria-label="cart-button"
            href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${getText()}&type=phone_number&app_absent=0`}
            target="_blank"
          >

            <i class="fa-brands fa-whatsapp mr-2"></i>
            Enviar Mensaje
          </a>
        </div>
      </div>
    </div>
  )
})