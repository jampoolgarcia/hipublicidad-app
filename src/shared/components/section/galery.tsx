import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";
import { Image } from '@unpic/qwik';

export const GalerySection = component$(() => {

    const imgs = [
        '/img/01.jpg',
        '/img/02.png',
        '/img/03.jpg',
        '/img/04.jpg'
    ]

    return (<>
        <section id="galery" class="bg-[#3d83ff] h-screen w-full flex flex-col lg:flex-col-reverse justify-around items-center gap-4 text-white">


            {/* <div id="custom-controls-gallery" class="relative w-full" data-carousel="slide">

                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

                    {
                        imgs.map((img, index) => (
                            <div class="hidden duration-700 ease-in-out" data-carousel-item={index == 0 ? 'active' : ''}>
                              <Image key={img} width={200} height={200} src={img} alt="images" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
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
            </div>  */}





            {/* <div class="flex lg:w-2/3 h-full lg:h-2/3 bg-red-500">
                <div class="grid grid-cols-2 gap-2 w-full h-full">
                    
                       { 
                            imgs.map(img => (
                             <div>
                                <Image key={img} width={278} height={222} 
                                class="h-auto max-w-full rounded-lg" 
                                src={img} alt="images" /> 
                            </div>
                            ))
                        }
                   
                </div>
            </div>     */}



            {/* {
                    imgs.map(img => (
                        <Image key={img} width={0} height={0} 
                        class="flex-grow object-cover opacity-80 transition-all ease-in-out duration-500 hover:cursor-crosshair hover:w-2/3 hover:opacity-100" 
                        src={img} alt="images" /> 
                    ))
                } */}


            <div>
                <PageTitle title="Galeria" color="text-white"></PageTitle>
                <p class="text-sm xl:text-base text-center my-4">
                    Sumérgete en un mar de creatividad y pasión plasmados en cada diseño.
                    <br />Te invitamos a disfrutar de nuestra galería de trabajos.
                </p>
            </div>

            <div class="grid grid-cols-2 gap-2">
                    {
                        imgs.map((img, index) => (
                            <div>
                              <Image key={img} width={200} height={200} src={img} alt="images" class="h-auto max-w-full rounded-lg" />
                            </div>
                        ))
                    }
                </div>

        </section>


    </>)
})