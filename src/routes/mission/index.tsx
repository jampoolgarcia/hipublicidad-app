import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";

export default component$(() => {
    return (<>
        <section class="flex flex-col items-center mt-14">
        <PageTitle title="Misión" color="text-palette-primary"></PageTitle>
            <p class="text-sm xl:text-base my-4 text-gray-600 mx-auto text-center">
                Proporcionar a nuestros clientes soluciones publicitarias excepcionales 
                que capturen la esencia de sus marcas y mensajes. Comprometiéndonos a utilizar nuestra experiencia en diseño 
                y producción para crear productos publicitarios de la más alta calidad. Trabajando incansablemente para cumplir los 
                plazos y presupuestos de nuestros clientes, manteniendo la satisfacción del cliente en el centro 
                de todo lo que hacemos. Buscando constantemente la innovación en diseño y técnicas de impresión 
                para ofrecer resultados visuales impactantes que ayuden a nuestros clientes a destacar en un mercado competitivo. 
                Ser el socio de confianza de nuestros clientes en su búsqueda de la excelencia publicitaria.
            </p>
        </section>
    </>)
})