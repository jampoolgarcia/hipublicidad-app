import { component$ } from "@builder.io/qwik";

export const Headers = component$(() => {
    return (<>
      <header class="header" id="home">
        <div class="home-text">
            <h1>Creatividad en <br /> Diseño</h1>
            <p> Descubre un mundo de posibilidades con nuestro servicios, 
               <br/> 
               donde cada idea es una semilla que cultivamos con innovación.
            </p>
            <a href="#quote" class="home-btn">Cotizar</a>
        </div>
      </header>
    </>)
}) 