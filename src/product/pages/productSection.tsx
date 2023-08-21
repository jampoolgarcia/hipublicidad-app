import { component$ } from "@builder.io/qwik";

import { products } from '../json/products';
import { ProductCard } from "./productCard";

export const ProductSection =  component$(() => {

    return (<>
            <section id="product" class="container flex flex-col gap-4 justify-center my-6  text-center">
                <h1 class="text-3xl font-bold">Los mejores productos de publicidad en tendencia</h1>
                <p class="mt-2 text-gray-600">
                 En <strong>Roll Screen</strong>, encuentra las mejores opciones de publicidad para tu negocio. Visita nuestra tienda virtual o contáctanos para asesoría y cotizaciones.
                </p>

                <div class="flex flex-wrap content-start gap-4 my-5">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </section>
        </>)
})