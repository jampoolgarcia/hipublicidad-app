import { component$ } from "@builder.io/qwik";

import { products } from '../json/products';
import { PageTitle } from "~/shared";

import { ProductCard } from "../components";

export const ProductSection =  component$(() => {

    return (<>
            <section id="product" class="flex flex-col justify-center my-6  text-center w-full">

                <PageTitle title="Nuestros Productos"></PageTitle>
                <p class="text-sm xl:text-base mt-2 mb-4 text-gray-600">
                 Transforma tus diseños con la calidad de nuestros productos. <br /> Contáctanos para realizar tu <a href="#quote" class="text-bold">cotización</a>.
                </p>

                <div class="flex flex-wrap content-start gap-2 my-5 w-full">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </section>
        </>)
})