import { component$ } from "@builder.io/qwik";
import { NavItem } from "./navItem";

export const Navbar = component$(() => {
    return (<>
      <nav class="flex justify-center items-center">
        <ul class="relative flex justify-center items-center">
            <NavItem name={"NOSOTROS"} />
            <NavItem name={"ROLL SCREEN"} />
            <NavItem name={"DISPLAYS"} />
            <NavItem name={"GRÁFICA PUBLICITARIA"} />
            <NavItem name={"GALERIA"} />
            <NavItem name={"CONTACTO"} />
        </ul>
      </nav>
    </>)
}) 