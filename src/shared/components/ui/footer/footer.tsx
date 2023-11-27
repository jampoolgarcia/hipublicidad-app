import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from '@unpic/qwik';


import { facebook, instagram, linkedin, tiktok } from "~/helpers/config";

export const Footer = component$(() => {
    return (<>

        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <Link href="/" class="flex items-center">
                            <Image src="/img/logo.png" width="300" height="112" class="h-28 mr-3" alt="HiPublicidad Logo" />
                        </Link>
                        <br />
                        {/* <p>Innova tus diseños con nuestros servicios <br />y transforma tus ideas</p> */}
                    </div>
                    <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre Nosotros</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <Link href="/about" class="hover:underline">¿Quiénes somos?</Link>
                                </li>
                                <li class="mb-4">
                                    <Link href="/mission" class="hover:underline">Misión</Link>
                                </li>
                                <li class="mb-4">
                                    <Link href="/vision" class="hover:underline">Visión</Link>
                                </li>
                                <li>
                                    <Link href="/contact" class="hover:underline">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <i class="fa-solid fa-phone hover:underline"></i> +51 986771821
                                </li>
                                <li class="mb-4">
                                    <i class="fa-solid fa-envelope hover:underline"></i> gerentedeventas@hipublicidad.com
                                </li>
                                <li>
                                    <i class="fa-solid fa-location-dot hover:underline"></i> Av Bolivia 148, 3er Piso Local 3398 C.C. Centro de Lima.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://www.hipublicidad.com/" class="hover:underline">Hipublicidad</Link>. Todos los derechos reservados.
                    </span>
                    <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link href={facebook} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Facebook page</span>
                        </Link>
                        <Link href={instagram} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4 hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="rgb(107 114 128)" fill-rule="evenodd" clip-rule="evenodd" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                            <span class="sr-only">instagram community</span>
                        </Link>
                        <Link href={tiktok} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path  fill="rgb(107 114 128)" fill-rule="evenodd" clip-rule="evenodd" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                            </svg>
                            <span class="sr-only">tiktok page</span>
                        </Link>
                        <Link href={linkedin} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                <path d="M3 5.012H0V15h3V5.012Z" />
                            </svg>
                            <span class="sr-only">Linkedin page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>


        {/* <footer class="bg-[#1a242f] grid gap-14">
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

        </footer> */}
    </>)
});