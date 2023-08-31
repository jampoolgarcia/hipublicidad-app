import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const SocialIcons = component$(() => {
    return (<div class="invisible lg:visible social-icons custom-shadow">
        <Link href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></Link>
        <Link href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></Link>
        <Link href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></Link>
    </div>)
})