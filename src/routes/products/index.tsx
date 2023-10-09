import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { products } from "~/product";
import { ProductCard } from "~/product/components";
import { categories } from "~/product/data";
import type { IProduct } from "~/product/interface";
import { PageTitle } from "~/shared";

interface IData {
    category: string;
    link: string;
    productList: IProduct[]
}


export const useData =  routeLoader$(async () => {
    const data: IData[] = [];

    categories.map((category) => {
        const productList = products.filter(product => product.category === category.link);
        data.push({
            category: category.title,
            link: category.link,
            productList
        })
    })

    return data;
});



export default component$( () => {

    const data = useData();

    
    return (<>
        {
            data.value.map(({ category, link, productList }) => (
                <section id={link} key={link} class="flex flex-col justify-center w-full py-4">
                    <PageTitle title={category} align="text-left"></PageTitle>            
                    
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