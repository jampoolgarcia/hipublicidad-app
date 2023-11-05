import { component$, useSignal } from "@builder.io/qwik";


import { PageTitle } from "~/shared";

import { CarouselImg } from "../../carousel/carousel";
import { Image } from '@unpic/qwik';
import { imgGaleryUrl } from "~/helpers/config";


export const GalerySection = component$(() => {

    const imgs = useSignal<string[]>([
        '00.jpg',
        '01.jpg',
        '02.jpg',
        '03.jpg',
        '04.jpg',
        '05.jpg',
        // '06.jpg',
        // '07.jpg',
        // '08.jpg',
        // '09.jpg',
        '10.jpg'
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

            

            <CarouselImg>
                {
                    imgs.value.map((img) => (
                        <div key={img} class="swiper-slide">
                            <Image width="400" height="400" src={`${imgGaleryUrl}${img}`} loading="lazy" alt={img} />
                        </div>
                    ))
                }
            </CarouselImg>


        </section>


    </>)
})