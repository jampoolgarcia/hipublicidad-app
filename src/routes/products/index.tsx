import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { products } from "~/product";
import { ProductCard } from "~/product/components";
import { categories } from "~/product/data";
import type { IProduct } from "~/product/interface";
import { PageTitle } from "~/shared";

interface IData {
    category: string;
    productList: IProduct[]
}

export const useData =  routeLoader$(async () => {
    const data: IData[] = [];

    categories.map((category) => {
        const productList = products.filter(product => product.category === category.title);
        data.push({
            category: category.title,
            productList
        })
    })

    return data;
});



export default component$( () => {

    const data = useData();

    
    return (<>
        {
            data.value.map(({ category, productList }) => (
                <section id={category} key={category} class="flex flex-col justify-center my-3 w-full">
                    <PageTitle title={category} align="text-left"></PageTitle>            
                    
                    <div class="flex flex-wrap content-start gap-2 my-5 w-full">
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