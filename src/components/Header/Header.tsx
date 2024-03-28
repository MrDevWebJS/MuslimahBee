import clsx from "clsx"
import { Nav } from "../Nav/Nav"
import { FunctionComponent } from "react"

export const Header: FunctionComponent = (): React.JSX.Element => {

    return (
        <header className={clsx(`
            relative flex justify-between items-center w-screen h-20 bg-pink-200 shadow-md
            sm:justify-between
        `)}>
            <h1 
                className={clsx("flex justify-start items-center p-1")}
            >
                <img
                    className={clsx("rounded-full w-11 h-11")} 
                    src="../src/assets/images/Mb-logo-noir-2.webp" 
                    alt="logo représentant les lettres 'm' et 'b' en majuscule avec une abeille"
                />
                <span className={clsx("text-neutral-700 font-montserrat font-bold text-2xl ml-2")}>MuslimahBee</span>
            </h1>
            <Nav />
        </header>
    )
}