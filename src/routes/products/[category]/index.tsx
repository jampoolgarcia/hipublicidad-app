import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { IProduct } from "~/product/interface";
import { ProductCard } from "~/product/components";

import { products } from '~/product';
import { PageTitle } from "~/shared";

interface IData {
  category: string;
  productList: IProduct[]
}

export const useProduct = routeLoader$<IData[]>(async ({params}) => {
    const data: IData[] = [];

    const category = params.category.toLowerCase();
    const productList = products.filter(product => product.category === category);

    data.push({
      category,
      productList
    })

    return data!;
  });
  

export default component$(() =>{
    const data = useProduct();

    return (<>
        {
          data.value.map(({ category, productList }) => (
              <section key={category} class="flex flex-col justify-center w-full py-4">
                  <PageTitle title={category} align="text-left" uppercase="uppercase"></PageTitle>            
                  
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