import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { imgUrl } from '~/helpers/config';
import type { IProduct } from '~/product/interface';
import { Image } from '@unpic/qwik';

interface Props {
    product: IProduct
}

export const ProductCard = component$(({ 
    product: {
        id,
        images,
        title,
        description
    }
}: Props) => {

  return (
    <Link
      class="w-72 mx-auto border transform duration-500 ease-in-out border-palette-lighter hover:scale-105"
      href={`/products/details/${id}`}>
      <div class="border-b-2 border-palette-lighter relative">
        <Image
          width="320"
          height="288"
          src={`${imgUrl}${images[0]}`}
          alt={title}
          class="rounded h-72"
        />
      </div>
      <div class="relative">
        <div class="font-primar text-2xl pt-4 px-4 font-semibold truncate">
          {title}
        </div>
        <div class="text-lg text-gray-600 px-4 font-primary font-light truncate-text-2">
          {description}
        </div>
      </div>
  </Link>
  )
});