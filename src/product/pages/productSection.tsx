import { component$ } from "@builder.io/qwik";

import { products } from '../json/products';
import { ProductCard } from "./productCard";

export const ProductSection =  component$(() => {

    return (<>
            <section class="container flex flex-col justify-center my-6 text-center mx-auto">
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

                {/* <div class="flex flex-wrap content-start gap-6 my-5">
                   <div class="basis-32 h-32 grow bg-slate-800"></div>
                   <div class="basis-32 h-32 grow bg-slate-800"></div>
                   <div class="basis-32 h-32 grow bg-slate-800"></div>
                   <div class="basis-32 h-32 grow bg-slate-800"></div>

                   <div class="basis-32 h-32 grow bg-slate-800"></div>
                   <div class="basis-32 h-32 grow bg-slate-800"></div>
                   <div class="basis-32 h-32 grow bg-slate-800"></div>
                   <div class="basis-32 h-32 grow bg-slate-800"></div>
                </div> */}
            </section>
        </>)
})