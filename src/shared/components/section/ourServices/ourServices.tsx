import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PageTitle } from "~/shared";

import { services } from "./services"; 
import { imgUrl } from "~/helpers/config";

export const OurServices = component$(() => {

    return (<>
        <section class="my-5 text-center w-full">

            {/* title and description section */}
            <div class="text">
                <PageTitle title="Nuestros Servicios"></PageTitle>
                <h2></h2>
                <p class="text-sm xl:text-base my-4 text-gray-600">
                    Échale un vistazo a estos ejemplos seleccionados que
                    <br />reflejan la esencia y la calidad de nuestro trabajo. 
                    <br/>Tu visión se convertirá en realidad con nosotros."
                </p>
            </div>

            {/* card sections */}
            <div class="w-full flex flex-wrap content-start gap-2">

            {
                services.map((service) => (
                    
                    <div class="flex flex-col content-between h-140 w-140 rounded mx-auto my-4">
                        <div class="border-b-2 border-palette-lighter relative">
                            <img
                                width="400"
                                height="320"
                                src={`${imgUrl}${service}`}
                                alt="nuestro servicios"
                                class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"/>
                        </div>
                    </div>
                ))
            }

            </div>
        </section>
    </>)
})