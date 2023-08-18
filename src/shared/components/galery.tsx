import { component$ } from "@builder.io/qwik";

export const GalerySection = component$(() => {
    return (<>
        <section class="bg-[#3d83ff] h-screen w-full flex flex-col justify-around items-center gap-4 p-4 text-white">

            <section  class="flex w-full h-full bg-red-500">
                <img width={0} height={0} class="flex-grow object-cover opacity-80 transition-all ease-in-out duration-500 hover:cursor-crosshair hover:w-2/3 hover:opacity-100" src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" alt="" /> 
                <img width={0} height={0} class="flex-grow object-cover opacity-80 transition-all  ease-in-out duration-500 hover:cursor-crosshair hover:w-2/3 hover:opacity-100" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80" alt="" /> 
                <img width={0} height={0} class="flex-grow object-cover opacity-80 transition-all  ease-in-out duration-500 hover:cursor-crosshair hover:w-2/3 hover:opacity-100" src="https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" alt="" /> 
            </section>  

            <div>
                <h1 class="text-4xl text-center font-semibold sm:pr-8 xl:pr-12">Galery</h1>
                <p class="text-sm xl:text-base text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus eligendi accusamus laboriosam vero voluptatibus, quos ut qui saepe delectus nam sed quaerat! 
                    Quidem et, quis rerum deserunt reprehenderit dignissimos fugit!
                </p>
            </div>

        </section>


    </>)
})