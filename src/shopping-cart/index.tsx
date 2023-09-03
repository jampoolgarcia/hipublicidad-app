import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";


import { useShoppingCart } from "./hooks";
import { CartTable } from "./components/cartTable";
import { CheckOutButton } from "./components/checkOutButton";
import { BackToProductButton } from "~/product/components/backToProductButton";
import { PageTitle } from "~/shared";


export const ShoppingCart = component$(() => {

    const { cartItems } = useShoppingCart(); 

    return (
      <>
       <div class="container mx-auto mt-24 mb-16 min-h-screen">
          <PageTitle title="Tú Carrito" />
          <CartTable products={cartItems.value}
          />
          <div class="max-w-sm mx-auto space-y-4 px-2">
            <CheckOutButton />
            <BackToProductButton />
          </div>

        </div>
          
      </>
    )
  });
  
  export const head: DocumentHead = {
      title: "Shopping Cart",
      meta: [
        {
          name: "description",
          content: "Qwik shopping cart example",
        },
      ],
    };