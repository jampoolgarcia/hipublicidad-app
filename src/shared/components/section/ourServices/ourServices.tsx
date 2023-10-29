import { component$, useStylesScoped$ } from "@builder.io/qwik";

import { CarouselGalery, PageTitle } from "~/shared";

import style from './ourServices.css?inline';

import { categories } from "~/product";
import { ProductCategory } from "~/product/components";

export const OurServices = component$(() => {

    useStylesScoped$(style);

    return (<>
        <section id="services" class="my-5 text-center w-full">

            {/* title and description section */}
            <div class="text">
                <PageTitle title="Nuestros Servicios"></PageTitle>
                <h2></h2>
                <p class="text-sm xl:text-base my-4 text-gray-600">
                    Échale un vistazo a estos ejemplos seleccionados que
                    <br />reflejan la esencia y la calidad de nuestro trabajo.
                    <br />Tu visión se convertirá en realidad con nosotros.
                </p>
            </div>

            <CarouselGalery>
                    {
                        categories.map((product) => (
                            <ProductCategory key={product.id} product={product} />
                        ))
                    }
            </CarouselGalery>

        </section>
    </>)
})