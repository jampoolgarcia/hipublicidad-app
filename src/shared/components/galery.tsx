import { component$ } from "@builder.io/qwik";

export const GalerySection = component$(() => {

    const imgs = [
        '../public/img/01.jpg',
        '../public/img/02.jpg',
        '../public/img/03.jpg'
    ]

    return (<>
        <section id="galery" class="bg-[#3d83ff] h-screen w-full flex flex-col lg:flex-col-reverse justify-around items-center gap-4 text-white">

            <div  class="flex w-full lg:w-2/3 h-full lg:h-2/3 bg-red-500">
                {
                    imgs.map(img => (
                        <img width={0} height={0} 
                        class="flex-grow object-cover opacity-80 transition-all ease-in-out duration-500 hover:cursor-crosshair hover:w-2/3 hover:opacity-100" 
                        src={img} alt="images" /> 
                    ))
                }
            </div>  

            <div>
                <h2>Galery</h2>
                <p class="text-sm xl:text-base text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> 
                    Temporibus eligendi accusamus laboriosam vero voluptatibus,<br/> quos ut qui saepe delectus nam sed quaerat! 
                    Quidem et, <br/>quis rerum deserunt reprehenderit dignissimos fugit!
                </p>
            </div>

        </section>


    </>)
})