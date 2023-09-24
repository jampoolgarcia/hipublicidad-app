import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export const WhatsApp = component$(() => {

    return (<Link 
                href="https://api.whatsapp.com/send?phone=51986771821" 
                class=" bg-white fixed flex justify-center items-center z-[1001] bottom-3 right-3 md:bottom-12 md:right-12 w-16 h-16 rounded-full cursor-pointer transition-transform duration-500 hover:scale-105 custom-shadow">
                    <i class="fa-brands fa-whatsapp text-5xl" style="color: #25511f;"></i>
            </Link>)
})