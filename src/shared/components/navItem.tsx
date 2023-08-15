import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface NavItem {
    name: string,
    icon: string,
    url: string
}

export const NavItem = component$(({name, icon, url}: NavItem) => {
    return (<>
      <li>
        <Link href={url} class="relative mt-0 mx-2 tracking-wide font-semibold transition-colors duration-700 hover:text-blue-500"><i class={`fa-solid fa-${icon} mr-1`}></i>{ name }</Link>
      </li>
    </>)
}) 