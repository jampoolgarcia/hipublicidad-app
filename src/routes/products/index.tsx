import { component$ } from "@builder.io/qwik";

import { products } from "~/product";
import { ProductCard } from "~/product/components";

export default component$( () => {
    return (<>
          <section class="flex flex-wrap content-start gap-2 mt-14 mb-6 w-full">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
         </section>
    </>)
})