import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export interface Slide {
    number: number,
    check: boolean,
    img: string,
    description: string,
    url: string
}

export const CarouselItem = component$(({ number, check, img, description }: Slide) => {
    return (<>
        {/* <!--Slide --> */}
        <input class="carousel-open" type="radio" id={`carousel-${number}`} name="carousel" aria-hidden="true" checked={check} hidden />
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={`background-image: url(${img});`}>

                <div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">{description}</p>
                        <Link class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="/">Ver Producto</Link>
                    </div>
                </div>

            </div>
        </div>
        <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

    </>)
})