import { component$ } from "@builder.io/qwik";



export const CheckOutButton = component$(() =>{
    return (<>
        <a 
        href="/" 
        aria-label="checkoutproducts"
        class="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
        justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
        >
            Pagar
            <i class="fa-solid fa-money-bill-wave w-4 ml-2 inline-flex"></i>
        </a>
    </>)
})