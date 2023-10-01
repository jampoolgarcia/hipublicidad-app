import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { phoneNumber } from "~/helpers/config";


export const WhatsApp = component$(() => {

    const whatsapp = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n+sobre&type=phone_number&app_absent=0`;

    return (<Link 
                href={whatsapp} 
                target="_blank"
                class=" bg-white fixed flex justify-center items-center z-[1001] bottom-3 right-3 md:bottom-12 md:right-12 w-16 h-16 rounded-full cursor-pointer transition-transform duration-500 hover:scale-105 custom-shadow">
                    <i class="fa-brands fa-whatsapp text-5xl" style="color: #25511f;"></i>
            </Link>)
})