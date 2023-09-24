import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const BackToProductButton = component$(() =>{


    return (
        <>
            <Link href="/products"  aria-aria-label="back-to-products" class="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
                justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
                >
                    <i class="fa-solid fa-arrow-left w-4 mr-2 inline-flex"></i>
                    Volver               
            </Link>
        </>
    )
})