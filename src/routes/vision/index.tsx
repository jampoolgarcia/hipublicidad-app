import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";

export default component$(() => {
    return (<>
        <section class="flex flex-col items-center mt-14">
            <PageTitle title="Visión" color="text-palette-primary"></PageTitle>
            <p class="text-sm xl:text-base my-4 text-gray-600 mx-auto text-center">
                Nuestra visión es ser uno de los líderes indiscutibles en la industria de la publicidad de Perú, reconocidos por nuestra creatividad excepcional, calidad insuperable y compromiso inquebrantable con la satisfacción del cliente. Nos esforzamos por ser la elección preferida de empresas y organizaciones que buscan destacar en un mundo visualmente saturado. Buscamos constantemente la innovación y la excelencia en la entrega de soluciones publicitarias que superen las expectativas, impulsando el éxito y el crecimiento de nuestros clientes. Nos visualizamos como un faro de inspiración y creatividad en el campo de la publicidad, dejando una huella duradera en la industria y en la mente de quienes confían en nosotros para dar vida a sus visiones.
            </p>
        </section>
    </>)
})