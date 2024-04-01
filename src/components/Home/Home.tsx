import { clsx } from "clsx"
import { FunctionComponent } from "react"
import { Button } from "../Button"
import { Section } from "../Section"
import { NavLink } from "react-router-dom"

export const Home: FunctionComponent = (): React.JSX.Element => {

    return (
        <Section>
            <img 
                src="../src/assets/images/logo/MB-logo-rouge.webp"
                className={clsx("max-w-3/4 h-2/5 rounded-se-3xl rounded-es-3xl")}
            />
            <h1 
                className={clsx(`
                h-auto flex justify-center items-center text-center font-tangerine font-extrabold text-7xl text-neutral-700 my-5
                `)}
            >
                MuslimahBee
            </h1>
            <p className={clsx("h-14 font-cormorantGaramond font-medium text-center text-xl")}>Découvrez notre gamme de produits artisanaux confectionnés au crochet !!!</p>
            <Button 
                className={"font-cormorantGaramond font-semibold text-xl mt-4 w-44 h-16 rounded-2xl bg-stone-900 hover:bg-stone-700 transition-colors transition-duration-700 sm:hidden "} 
                children={<NavLink 
                    className={"inline-flex justify-center items-center w-full h-full rounded-xl text-neutral-50"}
                    to="/nosProduits">
                        Boutique
                    </NavLink>}
                />
        </Section>
    )
}
