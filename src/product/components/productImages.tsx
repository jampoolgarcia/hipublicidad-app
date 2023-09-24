import { $, component$, useSignal } from "@builder.io/qwik";
import { imgUrl } from "~/helpers/config";


interface Props {
    images: string[];
}

export const ProductImages = component$(({ images }: Props ) =>{

    const img = useSignal(images[0]);
    //const scrollRef = document.getElementById('scrollImg');

    const scroll = $((scrollOffset: number)  => {
        scrollOffset;
    })

    return (
        <div class="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
        <div class="relative h-96">
          <img
            src={`${imgUrl}${images[0]}`}
            width="410"
            height="384"
            // alt={mainImg.altText}
            alt="images not found"
            class="transform h-96 duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <div class="relative flex border-t border-palette-lighter">
          <button
            aria-label="left-scroll"
            class="h-32 bg-palette-lighter hover:bg-palette-light  absolute left-0 z-10 opacity-75"
            onClick$={() => scroll(-300)}
          >
            <i class="fa-solid fa-arrow-left w-3 mx-1 text-palette-primary"></i>
          </button>
          <div
            id="scrollImg"
            style={{ scrollBehavior: "smooth" }}
            class="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
          >
            {
              images.map((imgItem, index) => (
                <button
                  key={index}
                  class="relative w-40 h-32 flex-shrink-0 rounded-sm "
                  onClick$={() => img.value = imgItem }
                >
                  <img
                  width="160"
                  height="128"
                  class="h-32"
                    src={`${imgUrl}${imgItem}`}
                    alt="images not found"
                  />
                </button>
              ))
            }
          </div>
          <button
            aria-label="right-scroll"
            class="h-32 bg-palette-lighter hover:bg-palette-light  absolute right-0 z-10 opacity-75"
            onClick$={() => scroll(300)}
          >
            <i class="fa-solid fa-arrow-right w-3 mx-1 text-palette-primary"></i>
          </button>
        </div>
      </div>
    );
})