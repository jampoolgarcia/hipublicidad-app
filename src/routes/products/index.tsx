import { component$ } from "@builder.io/qwik";

import { products } from "~/product";
import { ProductCard } from "~/product/components";

export default component$( () => {
    return (<>
          <div class="flex flex-wrap content-start gap-2 my-5 w-full">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
    </>)
})