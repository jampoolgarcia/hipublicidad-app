import { component$ } from "@builder.io/qwik";

export const ProductSection =  component$(() => {

    

    return (<>
            <section class="flex flex-col justify-center mt-6 text-center w-4/5 mx-auto">
                <h1 class="text-3xl font-bold">Los mejores productos de publicidad en tendencia</h1>
                <p class="mt-2 text-gray-600">
                 En <strong>Roll Screen</strong>, encuentra las mejores opciones de publicidad para tu negocio. Visita nuestra tienda virtual o contáctanos para asesoría y cotizaciones.
                </p>

                <div class="flex flex-wrap content-start gap-6 my-5">
                    <div class="basis-32 h-32 grow bg-slate-800"></div>
                    <div class="basis-32 h-32 grow bg-slate-800"></div>
                    <div class="basis-32 h-32 grow bg-slate-800"></div>
                    <div class="basis-32 h-32 grow bg-slate-800"></div>

                    <div class="basis-32 h-32 grow bg-slate-800"></div>
                    <div class="basis-32 h-32 grow bg-slate-800"></div>
                    <div class="basis-32 h-32 grow bg-slate-800"></div>
                    <div class="basis-32 h-32 grow bg-slate-800"></div>
                </div>
            </section>
        </>)
})