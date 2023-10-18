import { component$, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { Image } from '@unpic/qwik';

import type { ICategory } from "~/product/interface"

import { imgCategoryUrl } from '~/helpers/config';

import styles from './productCategory.css?inline';

interface Props {
    product: ICategory
}

export const ProductCategory = component$(({
    product: {
        image,
        smallImg,
        link,
        description
    }
}: Props) => {

    useStylesScoped$(styles);

    useVisibleTask$(() => {
        const blurDivs = document.querySelectorAll('.blur-load')!;

        blurDivs.forEach((div) => {
            const img = div.querySelector("img");

            function loaded () {
                div.classList.add('loaded')
            }

            if(img?.complete){
                loaded();
            } else {
                img?.addEventListener("load", loaded);
            }
        });
    })

    return (<>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Link href={`/products/${link}`}>
                <div class="blur-load" style={`background-image: url('${imgCategoryUrl}${smallImg}')`}>
                    <Image width="1366" height="768" loading="lazy" src={`${imgCategoryUrl}${image}`} alt={description} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
            </Link>
        </div>

        {/* <li class="card">
            <Link href={`/products/${link}`} class="flex flex-col items-center">
                <div class="img">
                    <img class="image" width={140} height={140} src={`${imgUrl}${image}`} alt="img" draggable={false} />
                </div>
                <h2>{title}</h2>
                <span>{description}</span>
            </Link>
        </li> */}
    </>)
})