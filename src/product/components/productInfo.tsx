import { component$ } from "@builder.io/qwik";
import { Price } from "~/shared";

interface Props {
    title: string;
    description: string;
    price: string | number;
}

export const ProductInfo = component$(({ title, description, price }: Props) =>{
    return (
        <div class=" font-primary">
        <h1 class="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
          {title}
        </h1>
        <p class="font-medium text-lg truncate-text-3">
          {description}
        </p>
        <div class="text-xl text-palette-primary font-medium py-4 px-1">
          <Price
            currency="$"
            num={price}
            numSize="text-2xl"
          />
        </div>
      </div>
    )
})