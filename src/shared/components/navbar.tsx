import { $, component$, useOnDocument } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export const Navbar = component$(() => {

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
                <li><a href="#home">Inicio</a></li>
                <li><a href="#product">Productos</a></li>
                <li><a href="#galery">Galeria</a></li>
                <li><a href="#quote">Contacto</a></li>
            </ul>
        </div>
    </nav>
  </>)
}) 