import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const SocialIcons = component$(() => {
    return (<div class="invisible lg:visible social-icons custom-shadow">
        <Link href="https://www.facebook.com/profile.php?id=100095559543966&mibextid=ZbWKwL" target="_blank"><i class="fab fa-facebook-f"></i></Link>
        <Link href="https://www.instagram.com/hi_publicidad3d/" target="_blank"><i class="fab fa-instagram"></i></Link>
        <Link href="https://www.tiktok.com/@hipublicidad3d" target="_blank"><i class="fa-brands fa-tiktok"></i></Link>
        <Link href="https://www.linkedin.com/in/hi-publicidad-3d/" target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
    </div>)
})