import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface Props {
    name: string
}

export const NavItem = component$(({name}: Props) => {
    return (<>
      <li>
        <Link class="relative mt-0 mx-4 tracking-wide font-semibold transition duration-700">{ name }</Link>
      </li>
    </>)
}) 