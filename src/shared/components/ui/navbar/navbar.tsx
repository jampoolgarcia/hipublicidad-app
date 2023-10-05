import { $, component$, useOnDocument, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from '@unpic/qwik';

import styles from './navbar.css?inline'; 


export const Navbar = component$(() => {

  useStyles$(styles);

  // const { cartTotalItems: totalItems } = useShoppingCart();
  

  useOnDocument('scroll', $(()=>{
    const navbar = document.querySelector("nav");
    navbar!.classList.toggle("sticky", window.scrollY > 0);
  }))

  const openMenu = $(() =>{
    const menu = document.querySelector('#menu-icon')!;
    const navlist = document.querySelector('.navbar-list-content')!;

    menu.classList.toggle('fa-close');
	  navlist.classList.toggle('open');
  })

  return (<>
     <nav class="nav">
        <div class="flex justify-center items-center">
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
    </nav>
  </>)
}) 