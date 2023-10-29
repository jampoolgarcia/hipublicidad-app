import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


import { Headers, GalerySection, Quote, OurServices } from "~/shared";
import { ProductSection } from "~/product/pages/productSection";

import { CarouselImg } from "~/shared/components/carousel/carousel";





export default component$(() => {
  return (
    <>

    <CarouselImg />
    {/*  <Headers />
     <ProductSection />
     <GalerySection />
     <OurServices />
     <Quote /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
