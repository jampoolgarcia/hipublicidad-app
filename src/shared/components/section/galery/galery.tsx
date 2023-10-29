import { component$, useSignal } from "@builder.io/qwik";


import { PageTitle } from "~/shared";

import { Image } from '@unpic/qwik';
import { imgGaleryUrl } from "~/helpers/config";


export const GalerySection = component$(() => {

    const imgs = useSignal<string[]>([
        'letras.jpg',
        'letrero luminoso.jpg',
        'merchandaising.jpg',
        'roolscream.jpg'
    ])

    return (<>
        <section id="galery" class="bg-[#3d83ff] h-auto w-full flex flex-col justify-around items-center gap-4 text-white">

            <div >
                <PageTitle title="Galeria" color="text-white"></PageTitle>
                <p class="text-sm xl:text-base text-center my-4">
                    Sumérgete en un mar de creatividad y pasión plasmados en cada diseño.
                    <br />Te invitamos a disfrutar de nuestra galería de trabajos.
                </p>
            </div>


            <div id="custom-controls-gallery" class="relative w-full" data-carousel="slide">
              
                <div class="relative h-56 overflow-hidden rounded-lg md:h-120">

                    {
                        imgs.value.map((img) => (
                            <div  key={img}  class="hidden duration-700 ease-in-out" data-carousel-item>
                                <Image width="1280" height="1040" src={`${imgGaleryUrl}${img}`} loading="lazy" alt={img}  class="absolute block w-full max-w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                            </div>
                        ))
                    }
                    
                </div>
                <div class="flex justify-center items-center pt-4">
                    <button type="button" class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>


        </section>


    </>)
})