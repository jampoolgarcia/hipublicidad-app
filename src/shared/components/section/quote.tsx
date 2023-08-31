import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";
import { Image } from '@unpic/qwik';

export const Quote = component$(() => {
    return (<>
        <section id="quote" class="contact-section bg-[#26DBBC] h-screen w-full grid grid-cols-2 gap-24 items-center">
            <div class="max-w-[100%] w-full contact-form">
                <PageTitle title="Cotiza" color="text-white"></PageTitle>
                <p class="text-white tracking-wide leading-6 text-sm mb-14 text-center">
                    ¿Listo para llevar tus proyectos al siguiente nivel? 
                    <br /> Solicita ahora tu cotización y déjanos convertir tus ideas en resultados excepcionales
                </p>
                
                <form class="relative" action="">
                    <input class="input-contact" type="text" placeholder="Nombre" required/>
                    <input class="input-contact" type="phone" placeholder="Telefono" required />
                    <input class="input-contact" type="email" placeholder="Correo"  required/>
                    <textarea class="input-contact input-area" name="mensage" id="mensage"  placeholder="Mensaje"></textarea>
               
                    <input class="btn-contact rounded-lg w-56 inline-block bg-[#12917a] p-2 uppercase font-semibold text-base tracking-wide" type="submit" value="Enviar" />
                </form>

            </div>

            <div class="max-w-[100%] w-full h-auto rounded-lg">
                <Image width='10' height='10' class="contact-img" src="/img/contact.svg" alt="" />
            </div>
        </section>
    </>)
})