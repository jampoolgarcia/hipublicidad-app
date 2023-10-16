import { component$ } from "@builder.io/qwik";

import { CarouselMulti, PageTitle } from "~/shared";

import { ProductCategory } from "../components";
import { categories } from "../data";




export const ProductSection =  component$(() => {


    return (<>
            <section id="product" class="flex flex-col justify-center my-6 rt  text-center w-full">
                <PageTitle title="Nuestros Productos"></PageTitle>
                <p class="text-sm xl:text-base mt-2 mb-4 text-gray-600">
                 Transforma tus diseños con la calidad de nuestros productos. <br /> Contáctanos para realizar tu <a href="#quote" class="text-bold">cotización</a>.
                </p>
                
                <CarouselMulti>
                    {
                        categories.map((product) => (
                            <ProductCategory key={product.id} product={product} />
                        ))
                    }
                </CarouselMulti>
            </section>
        </>)
})