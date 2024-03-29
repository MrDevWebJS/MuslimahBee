import clsx from "clsx"
import { Nav } from "../Nav/Nav"
import { FunctionComponent } from "react"

export const Header: FunctionComponent = (): React.JSX.Element => {

    return (
        <header className={clsx(`
            relative flex justify-between items-center w-screen h-20 bg-pink-200 shadow-md
            sm:justify-between
        `)}>
                <a
                    className={clsx("w-12 h-12 rounded-full ml-2")}
                    href="/" 
                >
                    <img
                        className={clsx("rounded-full w-full h-full")} 
                        src="../src/assets/images/Mb-logo-noir-2.webp" 
                        alt="logo représentant les lettres 'm' et 'b' en majuscule avec une abeille"
                    />
                </a>
            <Nav />
        </header>
    )
}