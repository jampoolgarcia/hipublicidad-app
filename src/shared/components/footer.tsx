import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from '@unpic/qwik';


import { facebook, instagram, linkedin, tiktok } from "~/helpers/config";

export const Footer = component$(() => {
    return (<>
        <footer class="bg-[#1a242f] grid gap-14">
            <div class="footer-content">
                <Image width={150} height={150} src="/img/logo.png" alt="logo" />
                <p>Innova tus diseños con nuestros servicios <br />y transforma tus ideas</p>

                <div class="icons flex">
                    <Link href={facebook} target="_blank"><i class="fa-brands fa-facebook"></i></Link>
                    <Link href={instagram} target="_blank"><i class="fa-brands fa-instagram"></i></Link>
                    <Link href={tiktok} target="_blank"><i class="fa-brands fa-square-twitter"></i></Link>
                    <Link href={linkedin} target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>

            

            <div class="footer-content">
                <h4>Sobre Nosotros</h4>
                <li><Link href="/about">¿Quiénes somos?</Link></li>
                <li><Link href="/mission">Misión</Link></li>
                <li><Link href="/vision">Visión</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
            </div>

            <div class="footer-content text-white">
                <h4>Contacto</h4>
                
                <li><i class="fa-solid fa-phone"></i> +51 986771821</li>
                <li class="truncate"><i class="fa-solid fa-envelope"></i> gerentedeventas@hipublicidad.com</li>
                <li><i class="fa-solid fa-location-dot"></i> Av Bolivia 148, 3er Piso Local 3398 C.C. Centro de Lima.</li>
            </div>

        </footer>
    </>)
});