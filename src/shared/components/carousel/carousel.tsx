import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik"

// core version + navigation, pagination modules:
import Swiper from 'swiper'
import { Navigation, Pagination, Controller, EffectCoverflow, Grid, A11y, Lazy, Autoplay, FreeMode } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Image } from '@unpic/qwik';

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

    <section>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-1.jpg" loading="lazy" />
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-2.jpg" loading="lazy" />
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-3.jpg"  loading="lazy" />
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-4.jpg"  loading="lazy" />
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-5.jpg"  loading="lazy"/>
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-6.jpg"  loading="lazy"  />
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-7.jpg"  loading="lazy"  />
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-8.jpg"  loading="lazy"/>
          </div>
          <div class="swiper-slide">
            <Image src="https://swiperjs.com/demos/images/nature-9.jpg" loading="lazy"  />
          </div>
        </div>
      </div>
    </section>


    {/* <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"> 
        <Image src="https://swiperjs.com/demos/images/nature-1.jpg" loading="lazy" />
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-2.jpg" loading="lazy" />
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-3.jpg"  loading="lazy" />
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-4.jpg"  loading="lazy" />
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-5.jpg"  loading="lazy"/>
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-6.jpg"  loading="lazy"  />
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-7.jpg"  loading="lazy"  />
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-8.jpg"  loading="lazy"/>
      </div>
      <div class="swiper-slide">
        <Image src="https://swiperjs.com/demos/images/nature-9.jpg" loading="lazy"  />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> */}

  </>)
})

