import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";

import { imgServices } from "~/helpers/config";

import { Image } from '@unpic/qwik';

export const OurServices = component$(() => {

    const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'];

    return (<>
        <section id="services" class="my-5 text-center w-full">

            {/* title and description section */}
            <div class="text">
                <PageTitle title="Nuestros Servicios"></PageTitle>
                <h2></h2>
                <p class="text-sm xl:text-base my-4 text-gray-600">
                    Échale un vistazo a estos ejemplos seleccionados que
                    <br />reflejan la esencia y la calidad de nuestro trabajo.
                    <br />Tu visión se convertirá en realidad con nosotros.
                </p>
            </div>

            {/* card sections */}
            {/* <div class="w-full flex flex-wrap content-start gap-2">

                {
                    services.map((service) => (

                        <Link
                            key={service.img}
                            href={service.url}
                            class="flex flex-col content-between h-140 w-140 rounded mx-auto my-4">
                            <div class="border-b-2 border-palette-lighter relative">
                                <img
                                    width="400"
                                    height="320"
                                    src={`${imgUrl}${service.img}`}
                                    alt="nuestro servicios"
                                    class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg" />
                            </div>
                        </Link>
                    ))
                }

            </div> */}

            <div class="flex justify-center">


                <div id="controls-carousel" class="relative w-1/2" data-carousel="static">
                    {/* <!-- Carousel wrapper --> */}
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-[32rem]">
                        {/* <!-- ItemS 1 --> */}
                        {
                            imgs.map((service) => (
                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                    <Image
                                            width="300"
                                            height="300"
                                            src={`${imgServices}${service}`}
                                            class="absolute block w-full -translate-x-1/2 left-1/2"
                                            alt="nuestro servicios" />
                                </div>
                                 ))
                                }
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

        </section>
    </>)
})