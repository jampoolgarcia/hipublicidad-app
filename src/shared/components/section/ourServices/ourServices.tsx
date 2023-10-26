import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";

import { imgServices } from "~/helpers/config";

import { Image } from '@unpic/qwik';

import style from './ourServices.css?inline';

export const OurServices = component$(() => {

    useStylesScoped$(style);

    const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'];


    const next = $((index: number) =>{
        const length = document.querySelectorAll('.slides-div').length;
        const media = Math.trunc(length/2);

        const btn = document.querySelector(`#button-${index}`)!;
        const img = document.querySelector(`img${index}`)!;

        btn.classList.add('active');
        img.classList.add('active');

    })

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

            <div class="slide-container">
                    <span class="slider-span" id="slider-span1"></span>
                    <span class="slider-span" id="slider-span2"></span>
                    <span class="slider-span" id="slider-span3"></span>

                    <div class="image-slider">
                        <div class="slides-div" id="slide-1">
                            <img src="img/services/1.jpg" alt="" class="img" id="img1" />
                            <a onClick$={() => next(1)} href="#slider-span1" class="button" id="button-1"></a>
                        </div>
                        <div class="slides-div" id="slide-2">
                            <img src="img/services/2.jpg" alt="" class="img" id="img2" />
                            <a href="#slider-span2" class="button" id="button-2"></a>
                        </div>
                        <div class="slides-div" id="slide-3">
                            <img src="img/services/3.jpg" alt="" class="img" id="img3" />
                            <a href="#slider-span3" class="button" id="button-3"></a>
                        </div>
                    </div>
                </div>



            <div class="flex justify-center">


                <div id="controls-carousel" class="relative w-1/2" data-carousel="static">
                    {/* <!-- Carousel wrapper --> */}
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-[32rem]">
                        {/* <!-- ItemS 1 --> */}
                        {
                            imgs.map((service) => (
                                <div key={service} class="hidden duration-700 ease-in-out" data-carousel-item>
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