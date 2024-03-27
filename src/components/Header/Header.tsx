import clsx from "clsx"
import { Nav } from "../Nav/Nav"

export const Header = () => {
    return (
        <header className={clsx("flex justify-between items-center w-screen h-20 bg-rose-300")}>
            <h1 className={clsx("flex justify-start items-center ml-2")}>
                <img
                    className={clsx("rounded-full w-11 h-11")} 
                    src="../src/assets/images/Mb-logo-noir-2.webp" 
                    alt="logo représentant les lettres 'm' et 'b' en majuscule avec une abeille"
                />
                <span className={clsx("text-neutral-700 font-bold font-plaifairDSC ml-2")}>MuslimahBee</span>
            </h1>
            <Nav/>
        </header>
    )
}