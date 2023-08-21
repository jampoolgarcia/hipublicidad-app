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
        
        <div>
            <ul class="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#package">Package</a></li>
                <li><a href="#destination">Destination</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    </nav>
  </>)
}) 