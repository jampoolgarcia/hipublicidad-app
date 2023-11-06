import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const ContactBar = component$(() =>{
    return (
        <div class="bg-[#fafafb] flex justify-between items-center max-lg:hidden px-6">
            <div>
                <Link href="/contact" class="text-xs transition-colors duration-300 hover:text-red-600"><i class="fa-solid fa-phone"></i> (01) 406 6521</Link>
                <Link href="/contact" class="text-xs transition-colors duration-300 ml-4 hover:text-blue-500 "><i class="fa-solid fa-envelope"></i> test@gmail.com</Link>
            </div>
            <div>
                <Link href="/contact" class="text-xs font-bold transition-colors duration-300 hover:text-green-700">+51 123 456 789 <span class="text-sm text-green-700">WhatsApp</span></Link>
            </div>
        </div>
    )
})