import { component$ } from "@builder.io/qwik";
import { Navbar } from "./navbar";
import { ContactBar } from "./contactBar";

export const Headers = component$(() => {
    return (<>
      <header class="fixed z-10 top-0 left-0 w-full flex flex-col justify-around transition duration-300 px-5">
        <ContactBar />      
        <Navbar />
      </header>
    </>)
}) 