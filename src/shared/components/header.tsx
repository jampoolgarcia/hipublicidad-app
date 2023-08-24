import { component$ } from "@builder.io/qwik";
import { Navbar } from "./navbar";
import { ContactBar } from "./contactBar";

export const Headers = component$(() => {
    return (<>
      <header class="header" id="home">
        <div class="home-text">
            <h1>Creatividad en <br /> Diseño</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> 
            Necessitatibus dolorum nam ration</p>
            <a href="#quote" class="home-btn">Cotizar</a>
        </div>
      </header>
    </>)
}) 