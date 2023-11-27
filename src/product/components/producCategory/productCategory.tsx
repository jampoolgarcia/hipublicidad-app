import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"


import type { ICategory } from "~/product/interface"

import { imgCategoryUrl } from '~/helpers/config';

import { ImageBlur } from "~/shared";

interface Props {
    product: ICategory
}

export const ProductCategory = component$(({
    product: {
        image,
        link
    }
}: Props) => {

    return (<>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Link href={`/products/${link}`}>
                <ImageBlur  img={image} imgUrl={imgCategoryUrl} imgClass="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </Link>
        </div>
    </>)
})