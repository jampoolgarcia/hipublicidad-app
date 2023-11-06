import {  component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from '@unpic/qwik';

import styles from './navbar.css?inline'; 

interface ILinks {
  link: string,
  title: string
}

export const Navbar = component$(() => {

  const links: ILinks[] = [
    { link: '/#home', title: 'Inicio'},
    { link: '/products', title: 'Productos'},
    { link: '/#galery', title: 'Galería'},
    { link: '/#services', title: 'Servicios'},
    { link: '/#quote', title: 'Contacto'}
  ];


  useStyles$(styles);

  // const { cartTotalItems: totalItems } = useShoppingCart();
  

  // useOnDocument('scroll', $(()=>{
  //   const navbar = document.querySelector("nav");
  //   navbar!.classList.toggle("sticky", window.scrollY > 0);
  // }))

  // const openMenu = $(() =>{
  //   const menu = document.querySelector('#menu-icon')!;
  //   const navlist = document.querySelector('.navbar-list-content')!;

  //   menu.classList.toggle('fa-close');
	//   navlist.classList.toggle('open');
  // })

  return (<>
    
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" class="flex items-center .throb">
            <Image width={100} height={100} src="/img/logo.png" class="h-8 mr-3" alt="publicidad logo" />
        </Link>
        <div class="flex md:order-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
              links.map(({link, title}) => (
                <li key={title}>
                  <Link href={link} class="block py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{ title }</Link>
                </li>
              ))
            }
            {/* <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>       */}
          </ul>
        </div>
        </div>
      </nav>

    
     {/* <nav class="nav">
        <div class="reverse w-full flex justify-between items-center">
          <i class="fa fa-bars mr-2 " onClick$={() => openMenu()}  id="menu-icon" aria-hidden="true"></i>

          <Link href="/" class="logo">
            <Image width={100} height={100} src="/img/logo.png" alt="" />
          </Link>
        </div>
    
        <div class="navbar-list-content">
            <ul class="navbar">
                <li><Link href="/#home">Inicio</Link></li>
                <li><Link href="/#product">Productos</Link></li>
                <li><Link href="/#galery">Galería</Link></li>
                <li><Link href="/#services">Servicios</Link></li>
                <li><Link href="/#quote">Contacto</Link></li>
            </ul>
        </div>
    </nav> */}
  </>)
}) 