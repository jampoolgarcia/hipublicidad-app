import { component$ } from "@builder.io/qwik";

import { products } from '../json/products';
import { ProductCard } from "./productCard";

export const ProductSection =  component$(() => {

    return (<>
            <section id="product" class="flex flex-col gap-4 justify-center my-6  text-center w-full">
                <h2>Los mejores productos de publicidad en tendencia</h2>
                <p class="mt-2 text-gray-600">
                 En <strong>Roll Screen</strong>, encuentra las mejores opciones de publicidad para tu negocio. Visita nuestra tienda virtual o contáctanos para asesoría y cotizaciones.
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