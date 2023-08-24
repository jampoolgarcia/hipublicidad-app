import { component$ } from "@builder.io/qwik";

export const Quote = component$(() => {
    return (<>
        <section id="quote" class="contact-section bg-[#26DBBC] h-screen w-full grid grid-cols-2 gap-24 items-center">
            <div class="max-w-[100%] w-full contact-form">
                <h2 class=" text-white">Cotizar</h2>
                <p class="text-white tracking-wide leading-6 text-sm mb-14 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                
                <form class="relative" action="">
                    <input class="input-contact" type="text" placeholder="Nombre" required/>
                    <input class="input-contact" type="phone" placeholder="Telefono" required />
                    <input class="input-contact" type="email" placeholder="Correo"  required/>
                    <textarea class="input-contact input-area" name="mensage" id="mensage"  placeholder="Mensaje"></textarea>
               
                    <input class="btn-contact rounded-lg w-56 inline-block bg-[#12917a] p-2 uppercase font-semibold text-base tracking-wide" type="submit" value="Enviar" />
                </form>

            </div>

            <div class="max-w-[100%] w-full h-auto rounded-lg">
                <img width='10' height='10' class="contact-img" src="../public/img/contact.svg" alt="" />
            </div>
        </section>
    </>)
})