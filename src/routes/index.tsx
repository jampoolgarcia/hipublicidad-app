import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


import { ProductSection } from "~/product/pages/productSection";
import { GalerySection } from "~/shared";
import { CarouselImg } from "~/shared/components/carousel";

export default component$(() => {
  return (
    <>
     <CarouselImg />
     <ProductSection />
     {/* <GalerySection /> */}
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
