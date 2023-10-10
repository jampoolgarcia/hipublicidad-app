import { component$ } from "@builder.io/qwik";
import { Price } from "~/shared";

interface Props {
    title: string;
    description: string;
    price: string | number;
}

export const ProductInfo = component$(({ title, description, price }: Props) =>{
    return (
        <div class=" font-primary">
        <h1 class="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
          {title}
        </h1>
        <p class="text-sm xl:text-base mt-2 mb-4 text-gray-600 lowercase">
          {description}
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20">Categoria</span>
              </td>
              <td>
                <span class="lowercase">LETREROS LUMINOSOS</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">material</span>
              </td>
              <td>
                <span class="lowercase">Acrílico</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">color</span>
              </td>
              <td>
                <span class="lowercase">Opalino</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">tamaño</span>
              </td>
              <td>
                <span class="lowercase">20 cm a 30 cm</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">espesor</span>
              </td>
              <td>
                <span class="lowercase">3 mm</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">acabado</span>
              </td>
              <td>
                <span class="lowercase">Moderno</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="mx-3 font-bold text-md w-20 capitalize">estilo</span>
              </td>
              <td>
                <span class="capitalize">3D</span>
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