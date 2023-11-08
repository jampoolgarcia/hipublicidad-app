import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { IProduct } from "~/product/interface";
import { ProductCard } from "~/product/components";

import { products } from '~/product';
import { categories } from "~/product";


import { PageTitle } from "~/shared";

interface IData {
  title: string,
  productList: IProduct[]
}

export const useProduct = routeLoader$<IData[]>(async ({ params }) => {
  const data: IData[] = [];

  const link = params.category.toLowerCase();
  const title = categories.find(c => c.link === link)?.title || link;
  const productList = products.filter(product => product.category === title);

  data.push({
    title,
    productList
  })

  return data!;
});


export default component$(() => {
  const data = useProduct();

  return (<>
    {

      data.value.map(({ title, productList }) => (
        <section key={title} class="flex flex-col justify-center w-full py-4 mt-14 mb-5">

          <PageTitle title={title} align="text-left" uppercase="uppercase"></PageTitle>

          <div class="flex flex-wrap content-start gap-6 w-full">
            {
              productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
        </section>
      ))
    }
  </>)


})