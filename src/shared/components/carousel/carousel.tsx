import { Slot, component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik"

// core version + navigation, pagination modules:
import Swiper from 'swiper'
import { Navigation, Controller, EffectCoverflow, Grid, A11y, FreeMode } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import style from './carousel.css?inline';


export const CarouselImg = component$(() => {

  useStyles$(style);

  useVisibleTask$(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      modules: [Navigation, EffectCoverflow, Grid, FreeMode, A11y, Controller ],
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }
    });
  })

  return (<>

    <div class="section">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <Slot />
        </div>
      </div>
    </div>

  </>)
})

