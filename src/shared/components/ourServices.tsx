import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const OurServices = component$(() => {

    const services = [
        {

        }
    ]

    return (<>
        <section class="container my-5 text-center p-4">

            {/* title and description section */}
            <div class="text">
                <h1 class="text-4xl font-semibold sm:pr-8 xl:pr-12">Nuestros Servicios</h1>
                <p class="text-sm xl:text-base my-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br/>Temporibus eligendi accusamus laboriosam vero voluptatibus,<br /> quos ut qui saepe delectus nam sed quaerat! 
                    Quidem et, <br />quis rerum deserunt reprehenderit dignissimos fugit!
                </p>
            </div>

            {/* card sections */}
            <div class="grid grid-cols-4 gap-2">
                <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            Banners de edificio y proyectos inmoviliarios
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea ipsam eaque possimus nemo ab cum dolorum ex repellat.
                        </p>
                        <Link class="">Ver mas</Link>
                    </div>
                </div>

                <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            Banners de edificio y proyectos inmoviliarios
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea ipsam eaque possimus nemo ab cum dolorum ex repellat.
                        </p>
                        <Link class="">Ver mas</Link>
                    </div>
                </div>

                <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            Banners de edificio y proyectos inmoviliarios
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea ipsam eaque possimus nemo ab cum dolorum ex repellat.
                        </p>
                        <Link class="">Ver mas</Link>
                    </div>
                </div>

                <div class="flex flex-col content-between h-140 w-64 rounded mx-auto my-4">
                    <div class="h-64 border-b-2 border-palette-lighter relative">
                        <img
                        width="320"
                        height="288"
                        src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        alt="nuestro servicios"
                        class="transform  h-full duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                    <div class="h-full relative">
                        <h3 class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            Banners de edificio y proyectos inmoviliarios
                        </h3>
                        <p class="text-lg text-gray-600 p-4 font-primary font-light truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea ipsam eaque possimus nemo ab cum dolorum ex repellat.
                        </p>
                        <Link class="">Ver mas</Link>
                    </div>
                </div>
            </div>
        </section>
    </>)
})