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

    categories.map(({ title, link }) => {
        const productList = products.filter(product => product.category === title);

        data.push({
            category: title,
            link,
            productList
        })
    })

    

    return data!;

});



export default component$( () => {

    const data = useData();

    
    return (<>
        {
            data.value.map(({ category, link, productList }) => (
                <section id={link} key={link} class="flex flex-col justify-center w-full py-4 mt-14 mb-5">
                    <PageTitle title={category} align="text-left"></PageTitle>            
                    
                    <div class="flex flex-wrap content-start gap-8 w-full">
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