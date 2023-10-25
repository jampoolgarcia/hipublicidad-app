import { component$, useStylesScoped$ } from "@builder.io/qwik";

import headercss from './header.css?inline'

export const Headers = component$(() => {
    useStylesScoped$(headercss);

    return (<>
      <header class="header" id="home">
        <div class="home-text">
            <h1>Creatividad en <br /> Diseño</h1>
            {/* <p> ¡Destaca tu marca con productos personalizados 
               <br/> 
               únicos que capturarán la atención de tus clientes!
            </p> */}
            <a href="#quote" class="home-btn">Cotizar</a>
        </div>
      </header>
    </>)
}) 