import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import socialIcons  from "./social-icons.css?inline";

import { facebook, instagram, tiktok, linkedin } from "~/helpers/config";

export const SocialIcons = component$(() => {

    useStyles$(socialIcons);

    return (
        <div class="invisible lg:visible social-icons custom-shadow">
            <Link href={facebook} target="_blank"><i class="fab fa-facebook-f"></i></Link>
            <Link href={instagram} target="_blank"><i class="fab fa-instagram"></i></Link>
            <Link href={tiktok} target="_blank"><i class="fa-brands fa-tiktok"></i></Link>
            <Link href={linkedin} target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
        </div>
    )
})