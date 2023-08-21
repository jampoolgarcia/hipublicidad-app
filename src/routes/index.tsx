import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


import { Headers, GalerySection, Quote, OurServices } from "~/shared";
import { ProductSection } from "~/product/pages/productSection";



export default component$(() => {
  return (
    <>
     <Headers />
     <ProductSection />
     <GalerySection />
     <OurServices />
     <Quote />
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
