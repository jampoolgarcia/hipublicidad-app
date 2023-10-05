import { component$, useStyles$ } from "@builder.io/qwik";

import header from './header.css?inline'

export const Headers = component$(() => {
    useStyles$(header);

    return (<>
      <header class="header" id="home">
        <div class="home-text">
            <h1>Creatividad en <br /> Diseño</h1>
            <p> ¡Destaca tu marca con productos personalizados 
               <br/> 
               únicos que capturarán la atención de tus clientes!
            </p>
            <a href="#quote" class="home-btn">Cotizar</a>
        </div>
      </header>
    </>)
}) 