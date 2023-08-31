import { component$ } from "@builder.io/qwik";

export const Paragraph = component$((text: string) => {
    return (<>
         <p class="text-sm xl:text-base my-4 text-gray-600">
            { text }
        </p>
    </>)
})