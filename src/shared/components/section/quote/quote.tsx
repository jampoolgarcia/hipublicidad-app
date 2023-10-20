import { component$, useStylesScoped$ } from "@builder.io/qwik";

import style from './quote.css?inline';

export const Quote = component$(() => {

    useStylesScoped$(style);

    return (<>
        <section id="quote" class={`contact-section bg-[url('/img/contact.jpg')]`}>
            <div class="contact-info">
                <span><i class="fa-solid fa-location-dot"></i>Av Bolivia 148, 3er Piso Local 3398 C.C.</span>
                <span><i class="fas fa-envelope"></i>gerentedeventas@hipublicidad.com</span>
                <span><i class="fas fa-phone"></i>+51 986771821</span>
                <span><i class="fa-brands fa-whatsapp"></i>+51 986771821</span>
            </div>
            <div class="contact-form">
                <h2>Contact Us</h2>
                <form class="contact" action="" method="post">
                    <input type="text" name="name" class="text-box" placeholder="Enter Your Name" required />
                    <input type="email" name="email" class="text-box" placeholder="Enter Your Email" required />
                    <textarea name="menssage" id="menssage" rows={5} class="" placeholder="Enter Your Menssage" required></textarea>
                    <input type="submit" name="submit" class="send-btn" value="send" />
                </form>
            </div>
        </section> 
   
    </>)
})