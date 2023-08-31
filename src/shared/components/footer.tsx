import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
    return (<>
        <footer class="bg-[#1a242f] grid gap-14">
            <div class="footer-content">
                <img width={150} height={150} src="/img/logo.png" alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div class="icons flex">
                    <Link href="/"><i class="fa-brands fa-facebook"></i></Link>
                    <Link href="/"><i class="fa-brands fa-instagram"></i></Link>
                    <Link href="/"><i class="fa-brands fa-square-twitter"></i></Link>
                    <Link href="/"><i class="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>

            <div class="footer-content">
                <h4>Project</h4>
                <li><Link href="/">House</Link></li>
                <li><Link href="/">Rooms</Link></li>
                <li><Link href="/">Flats</Link></li>
                <li><Link href="/">Apparments</Link></li>
            </div>

            <div class="footer-content">
                <h4>Company</h4>
                <li><Link href="/">House</Link></li>
                <li><Link href="/">Rooms</Link></li>
                <li><Link href="/">Flats</Link></li>
                <li><Link href="/">Apparments</Link></li>
            </div>

            <div class="footer-content">
                <h4>Movement</h4>
                <li><Link href="/">House</Link></li>
                <li><Link href="/">Rooms</Link></li>
                <li><Link href="/">Flats</Link></li>
                <li><Link href="/">Apparments</Link></li>
            </div>

            <div class="footer-content">
                <h4>Help</h4>
                <li><Link href="/">House</Link></li>
                <li><Link href="/">Rooms</Link></li>
                <li><Link href="/">Flats</Link></li>
                <li><Link href="/">Apparments</Link></li>
            </div>
        </footer>
    </>)
});