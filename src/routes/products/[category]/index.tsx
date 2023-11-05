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
        <section key={title} class="flex flex-col justify-center w-full py-4 mb-10">
          <div class="flex items-center justify-center md:py-8 flex-wrap">
            <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">Todos</button>
            {
              categories.map(({ id, title }) => (
                <button key={id} type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">{title}</button>
              ))
            }
          </div>

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