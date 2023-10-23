import { $, component$, useSignal } from "@builder.io/qwik";
import { ImageBlur, PageTitle } from "~/shared";


import { imgGaleryUrl } from '~/helpers/config';

export const GalerySection = component$(() => {

    const imgs = [
        'roolscream.jpg',
        'merchandaising.jpg',
        'letrero luminoso.jpg',
        'letras.jpg'
    ]

    const imagenSeleted = useSignal(imgs[0]);

    const changeImg = $((img: string) => {
       imagenSeleted.value = img;
    })

    return (<>
        <section id="galery" class="bg-[#3d83ff] h-auto w-full flex flex-col justify-around items-center gap-4 text-white">

            <div >
                <PageTitle title="Galeria" color="text-white"></PageTitle>
                <p class="text-sm xl:text-base text-center my-4">
                    Sumérgete en un mar de creatividad y pasión plasmados en cada diseño.
                    <br />Te invitamos a disfrutar de nuestra galería de trabajos.
                </p>
            </div>

            <div class="grid gap-4">
                <div>
                    <ImageBlur img={imagenSeleted.value} imgUrl={imgGaleryUrl} imgClass="h-auto max-w-full rounded-lg transform duration-500 ease-in-out" />
                </div>
                <div class="grid grid-cols-4 gap-4">
                    {
                        imgs.map((img) => (
                            <div key={img}>
                                <ImageBlur img={img} imgUrl={imgGaleryUrl} imgClass="h-auto cursor-pointer transform duration-500 ease-in-out max-w-full rounded-lg  hover:scale-105" click={$(() => changeImg(img))} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>


    </>)
})