import { component$ } from "@builder.io/qwik";


import { PageTitle } from "~/shared";


export const GalerySection = component$(() => {

  




    return (<>
        <section id="galery" class="bg-[#3d83ff] h-auto w-full flex flex-col justify-around items-center gap-4 text-white">

            <div >
                <PageTitle title="Galeria" color="text-white"></PageTitle>
                <p class="text-sm xl:text-base text-center my-4">
                    Sumérgete en un mar de creatividad y pasión plasmados en cada diseño.
                    <br />Te invitamos a disfrutar de nuestra galería de trabajos.
                </p>
            </div>


        </section>


    </>)
})