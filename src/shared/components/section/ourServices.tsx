import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PageTitle } from "~/shared";

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
                <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            Ejemplo 1
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea ipsam eaque possimus nemo ab cum dolorum ex repellat.
                        </p>
                        <Link href="/" class="transition-transform duration-500 hover:scale-110">Ver mas</Link>
                    </div>
                </div>

                <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                        Ejemplo 2
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea ipsam eaque possimus nemo ab cum dolorum ex repellat.
                        </p>
                        <Link href="/" class="">Ver mas</Link>
                    </div>
                </div>

                <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            ejemplo 3
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Link href="/" class="">Ver mas</Link>
                    </div>
                </div>

                {/* <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            Banners de edificio y proyectos inmoviliarios
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea ipsam eaque possimus nemo ab cum dolorum ex repellat.
                        </p>
                        <Link class="">Ver mas</Link>
                    </div>
                </div> */}
            </div>
        </section>
    </>)
})