import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";
import { Image } from '@unpic/qwik';

export const GalerySection = component$(() => {

    const imgs = [
        '/img/01.jpg',
        '/img/02.jpg',
        '/img/03.jpg'
    ]

    return (<>
        <section id="galery" class="bg-[#3d83ff] h-screen w-full flex flex-col lg:flex-col-reverse justify-around items-center gap-4 text-white">

            <div  class="flex w-full lg:w-2/3 h-full lg:h-2/3 bg-red-500">
                {
                    imgs.map(img => (
                        <Image key={img} width={0} height={0} 
                        class="flex-grow object-cover opacity-80 transition-all ease-in-out duration-500 hover:cursor-crosshair hover:w-2/3 hover:opacity-100" 
                        src={img} alt="images" /> 
                    ))
                }
            </div>  

            <div>
                <PageTitle title="Galeria" color="text-white"></PageTitle>
                <p class="text-sm xl:text-base text-center my-4">
                    Sumérgete en un mar de creatividad y pasión plasmados en cada diseño. 
                    <br/>Te invitamos a disfrutar de nuestra galería de trabajos.
                </p>
            </div>

        </section>


    </>)
})