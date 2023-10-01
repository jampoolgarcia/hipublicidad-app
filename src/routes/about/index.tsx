import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";

export default component$(() => {
    return (<>
        <section class="flex flex-col items-center mt-14">
        <PageTitle title="Sobre Nosotros" color="text-palette-primary"></PageTitle>
            <p class="text-sm xl:text-base my-4 text-gray-600 mx-auto text-center">
            La empresa HiPublicidad 3D tiene como principal enfoque proporcionar a nuestros clientes soluciones publicitarias excepcionales que reflejen 
            la esencia de sus marcas y mensajes, nuestra empresa se compromete a brindar productos 
            publicitarios de la más alta calidad. Nos enorgullece utilizar nuestra experiencia en 
            diseño y producción para superar expectativas y entregar proyectos que resalten en 
            el mercado. Trabajamos incansablemente para cumplir los plazos y presupuestos de nuestros clientes, 
            manteniendo su satisfacción en el corazón de todo lo que hacemos. Siempre en busca de la 
            innovación en diseño y técnicas de impresión, nuestro objetivo es ofrecer resultados 
            visuales impactantes que ayuden a nuestros clientes a destacar en un mercado altamente
             competitivo. Nos esforzamos por ser el socio de confianza de nuestros clientes en su 
             búsqueda constante de la excelencia publicitaria.
            </p>
        </section>
    </>)
})