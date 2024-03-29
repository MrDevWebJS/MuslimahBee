import { clsx } from "clsx"
import { FunctionComponent } from "react"
import { Button } from "../Button"
import { Section } from "../Section"
import { NavLink } from "react-router-dom"

export const Home: FunctionComponent = (): React.JSX.Element => {

    return (
        <Section>
            <img 
                src="../src/assets/images/MB-logo-rouge.jpg"
                className={clsx("max-w-3/4 h-2/5 rounded-se-3xl rounded-es-3xl")}
            />
            <h1 
                className={clsx(`
                h-auto flex justify-center items-center text-center font-tangerine font-extrabold text-7xl text-neutral-700 my-5
                `)}
            >
                MuslimahBee
            </h1>
            <p className={clsx("font-cormorantGaramond font-medium text-center text-xl")}>Découvrez notre gamme de produits artisanaux confectionnés au crochet !!!</p>
            <Button 
                className={"font-cormorantGaramond font-semibold text-xl mt-4 w-44 h-16 rounded-2xl bg-stone-700 hover:shadow-[0_35px_60px_0px_rgba(0,0,0)] hover:bg-stone-900 transition-shadow transition-duration-700 "} 
                children={<NavLink 
                    className={"inline-flex justify-center items-center w-[166px] h-14 hover:border-2 hover:border-yellow-900 rounded-xl text-neutral-50"}
                    to="/nosProduits">
                        Nos Produits
                    </NavLink>}
                />
        </Section>
    )
}


// bg-gradient-to-tl from-pink-300 to-pink-100 shadow-md shadow-neutral-500 active:shadow-none transition-shadow transition-duration-300