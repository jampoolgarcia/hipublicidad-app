import { $, component$, useOnDocument } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from '@unpic/qwik';

import { useShoppingCart } from "~/shopping-cart/hooks";


export const Navbar = component$(() => {

   const { cartTotalItems: totalItems } = useShoppingCart();

  useOnDocument('scroll', $(()=>{
    const navbar = document.querySelector("nav");
    navbar!.classList.toggle("sticky", window.scrollY > 0);
  }))

  return (<>
     <nav class="nav">

        <div class="flex justify-center items-center">
          <i class="fa fa-bars mr-2 "  id="menu-icon" aria-hidden="true"></i>

          <Link href="/" class="logo">
            <Image width={100} height={100} src="/img/logo.png" alt="" />
          </Link>
        </div>
       
        
        <div class="navbar-list-content">
            <ul class="navbar">
                <li><Link href="/#home">Inicio</Link></li>
                <li><Link href="/#product">Productos</Link></li>
                <li><Link href="/#galery">Galeria</Link></li>
                <li><Link href="/#quote">Contacto</Link></li>
            </ul>
        </div>

        <Link
            href="/cart"
            class="relative cart-icon"
            aria-label="cart">
              <i class="fa-solid fa-cart-shopping text-black w-6 m-auto text-2xl"></i>
              {
                totalItems.value === 0 ?
                  null
                  :
                  <div
                    class="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                  >
                    {totalItems.value}
                  </div>
              }
        </Link>
    </nav>
  </>)
}) 