import { clsx } from "clsx"
import { FunctionComponent } from "react"
import { Gallery } from "./Gallery"

export const Home: FunctionComponent = (): React.JSX.Element => {

    return (
        <section className={clsx("flex flex-col justify-start items-center w-full h-auto bg-pink-50 p-4")}>
            <h1 
                className={clsx(`
                h-36 flex justify-center items-center text-center font-montserrat font-bold text-3xl text-neutral-700
                `)}
            >
                Découvrez notre gamme de produits artisanaux confectionnés au crochet !!!
            </h1>
            <Gallery/>
        </section>
    )
}