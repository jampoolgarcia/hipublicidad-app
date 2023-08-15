import { component$ } from "@builder.io/qwik";
import { NavItem } from "./navItem";
import { Link } from "@builder.io/qwik-city";



export const Navbar = component$(() => {

  const navItems: NavItem[] = [
    { name: "NOSOTROS", icon: "users", url: "/about" },
    { name: "GRÁFICA PUBLICITARIA", icon: "chart-area", url: "/" },
    { name: "GALERIA", icon: "images", url: "/" },
    { name: "CONTACTO", icon: "envelope", url: "/contact" }
  ]

  return (<>
    <nav class="h-16 flex justify-between items-center px-6">

      <div class="md:visible block lg:hidden">
        <button class="transition-colors duration-300 hover:text-blue-500">
          <i class="fa-solid fa-bars mr-2"></i>Menu
        </button>
      </div>


      <div class="max-xs:hidden">
        <a class="mx-2 my-1 flex items-center lg:justify-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="#">
          <img
            class="mr-2"
            src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
            style="height: 20px"
            alt="TE Logo"
            loading="lazy" />
          <span class="font-medium dark:text-neutral-200">Hi Publicidad</span>
        </a>
      </div>


      <ul class="relative flex justify-center items-center max-lg:hidden">
        {
          navItems.map(({ name, icon, url }) => (
            <NavItem key={name} name={name} icon={icon} url={url} />
          ))
        }
      </ul>
      <div>
        <Link class="transition-colors duration-300 hover:text-blue-500 max-lg:hidden" href=""><i class="fa-solid fa-magnifying-glass"></i></Link>
        <Link class="transition-colors duration-300 ml-4 hover:text-blue-500" href="cart">
          <i class="fa-solid fa-cart-shopping"></i>
          {/* <!-- Notification counter --> */}
          <span class="absolute -mt-1  rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">1</span>
        </Link>
      </div>
    </nav>

  </>)
}) 