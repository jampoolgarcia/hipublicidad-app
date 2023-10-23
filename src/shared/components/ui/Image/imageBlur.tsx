import { $, component$, useVisibleTask$, type QRL } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';

interface Props {
    img: string,
    imgUrl: string,
    imgClass: string,
    click?: QRL<() => void>,
}

export const ImageBlur = component$((
    { img, imgUrl, imgClass, click = $(() => { return; }) }: Props) => {

    useVisibleTask$(() => {
        const blurDivs = document.querySelectorAll('.blur-load')!;

        blurDivs.forEach((div) => {
            const img = div.querySelector("img");

            function loaded() {
                div.classList.add('loaded')
            }

            if (img?.complete) {
                loaded();
            } else {
                img?.addEventListener("load", loaded);
            }
        });

    })

    return (<>
        <div class="blur-load">
            <Image width="1366" height="768" loading="lazy" src={`${imgUrl}${img}`} alt={img} class={imgClass}  onClick$={click} />
        </div>
    </>)
})