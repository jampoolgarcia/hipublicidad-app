import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import type { ICategory } from "~/product/interface"

import { imgUrl } from '~/helpers/config';

interface Props {
    product: ICategory
}

export const ProductCategory = component$(({
    product: {
        image,
        title,
        link,
        description
    }
}: Props) => {
    return (<>
        <Link href={`/products/#${link}`} 
              class="w-full custom-shadow h-64 mx-auto rounded-md overflow-hidden bg-cover bg-center md:w-[48%] transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg" 
              style={`background-image: url('${imgUrl}${image}')`}>
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                    <h2 class="text-2xl text-white font-semibold">{ title }</h2>
                    <p class="mt-2 text-gray-200">{ description }</p>
                </div>
            </div>
        </Link>
    </>)
})