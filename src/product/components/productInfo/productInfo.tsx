import { component$ } from "@builder.io/qwik";

import type { IProduct } from "~/product/interface";

import { Price } from "~/shared";

interface Props {
    product: IProduct,
    price: string | number;
}

export const ProductInfo = component$(({ product, price }: Props) =>{
    return (
        <div class=" font-primary">
        <h1 class="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
          {product.title}
        </h1>
        <p class="text-sm xl:text-base mt-2 mb-4 text-gray-600 lowercase">
          {product.description}
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20">Categoria</span>
              </td>
              <td>
                <span class="lowercase">{product.category}</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">Material</span>
              </td>
              <td>
                <span class="lowercase">{product.material}</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">Color</span>
              </td>
              <td>
                <span class="lowercase">{product.color}</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">Tamaño</span>
              </td>
              <td>
                <span class="lowercase">{product.measures}</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">Espesor</span>
              </td>
              <td>
                <span class="lowercase">{product.thickness}</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">Acabado</span>
              </td>
              <td>
                <span class="lowercase">{product.finish}</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">Estilo</span>
              </td>
              <td>
                <span class="capitalize">{product.style}</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">Detalles</span>
              </td>
              <td>
                <span class="capitalize">{product.details}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-xl text-palette-primary font-medium py-4 px-1">
          <Price
            num={price}
            numSize="text-2xl"
          />
        </div>
      </div>
    )
})