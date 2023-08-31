import { component$ } from "@builder.io/qwik";

interface Props {
    title: string,
    color?: 'text-palette-primary' | 'text-white'
}

export const PageTitle = component$(({ title, color = 'text-palette-primary' }: Props) =>{
    return <h1 class={`leading-relaxed font-primary font-extrabold text-4xl text-center ${color} mt-4 py-1 sm:py-2`}>
            {title}
        </h1>
})