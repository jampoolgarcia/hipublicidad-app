import { $, component$, useOnDocument } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { useShoppingCart } from "~/shopping-cart/hooks";


export const Navbar = component$(() => {

   const { totalItems } = useShoppingCart();

  useOnDocument('scroll', $(()=>{
    const navbar = document.querySelector("nav");
    navbar!.classList.toggle("sticky", window.scrollY > 0);
  }))

  return (<>
     <nav class="nav">
        <a href="#" class="logo">HiPublicidad</a>
        <button id="menu-icon"><i  class="fa-solid fa-bars"></i></button>
        
        <div class="navbar-list-content">
            <ul class="navbar">
                <li><a href="/#home">Inicio</a></li>
                <li><a href="/#product">Productos</a></li>
                <li><a href="/#galery">Galeria</a></li>
                <li><a href="/#quote">Contacto</a></li>
            </ul>
        </div>

        <Link
            href="/cart"
            class="relative"
            aria-label="cart">
              <i class="fa-solid fa-cart-shopping text-black w-6 m-auto text-2xl"></i>
              {
                totalItems.value === 0 ?
                  null
                  :
                  <div
                    class="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                  >
                    {totalItems}
                  </div>
              }
        </Link>
    </nav>
  </>)
}) 