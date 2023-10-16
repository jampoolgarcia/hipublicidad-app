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

            <div>
                <PageTitle title="Galeria" color="text-white"></PageTitle>
                <p class="text-sm xl:text-base text-center my-4">
                    Sumérgete en un mar de creatividad y pasión plasmados en cada diseño.
                    <br />Te invitamos a disfrutar de nuestra galería de trabajos.
                </p>
            </div>

            <div class="grid grid-cols-4 gap-2">
                    {
                        imgs.map((img) => (
                            <div key={img}> 
                              <Image width={300} height={300} src={img} alt="images" class="h-auto max-w-full rounded-lg" />
                            </div>
                        ))
                    }
                </div>

        </section>


    </>)
})