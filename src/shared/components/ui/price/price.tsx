import { component$ } from "@builder.io/qwik";

interface Props {
    currency?: string,
    num: string | number,
    numSize: string
}

export const Price = component$((
    {currency = 'S/', num, numSize}: Props
) => {

    return (
        <>
            {currency}<span class={numSize}>{num}</span>
        </>
    )
})