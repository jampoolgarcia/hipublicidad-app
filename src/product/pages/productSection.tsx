import { component$ } from "@builder.io/qwik";

import { PageTitle } from "~/shared";

import { products } from "../data";

import { ProductCard } from "../components";
import { Link } from "@builder.io/qwik-city";

import { useProductRandom } from "../hooks/useProductsRandom";

export const ProductSection =  component$(() => {

    const randomProducts = useProductRandom(products, 9);

    return (<>
            <section id="product" class="flex flex-col gap-4 justify-center my-6 rt  text-center w-full">
                <PageTitle title="Nuestros Productos"></PageTitle>
                <p class="text-sm xl:text-base mt-2 mb-4 text-gray-600">
                 Transforma tus diseños con la calidad de nuestros productos. <br /> Contáctanos para realizar tu <a href="#quote" class="text-bold">cotización</a>.
                 <Link class="font-primary font-bold pulse" href="/products">     Ver todo</Link>
                </p>

                <div class="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-4 mt-4">
                {
                    randomProducts.value.map((product) => (
                        <ProductCard key={product.id} product={product} /> 
                    ))
                }
                </div>
           

            </section>
        </>)
})