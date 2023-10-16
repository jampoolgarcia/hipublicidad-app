import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { PageTitle } from "~/shared";
import { Image } from '@unpic/qwik';

import style from './quote.css?inline';

export const Quote = component$(() => {

    useStylesScoped$(style);

    return (<>
        <section id="quote" class="contact-section">
            <div class="contact-info">
                <span><i class="fa-solid fa-location-dot"></i>Address, City, Country</span>
                <span><i class="fas fa-envelope"></i>contact@email.com</span>
                <span><i class="fas fa-phone"></i>+00 0000 000 000</span>
                <span><i class="fas fa-clock"></i>Mon - Fri 8:00 Am to 5:00 PM</span>
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