import { clsx } from "clsx"
import { navData } from "./dataNav"
import { navSvg } from "./svgNav"
import { FunctionComponent, useState } from "react"

export const Nav: FunctionComponent = (): React.JSX.Element => {

    const [show, setShow] = useState<boolean>(false)
    
    const svgOpen = navSvg[0]
    const svgClose = navSvg[1]

    const handleClick = (): void => {
        setShow(!show)
    }

    return (
        <nav className={clsx("w-1/2 h-full")}>
            <button
                className={clsx(`
                    flex fixed right-2 top-[calc(40px-15px)] cursor-pointer
                    sm:hidden
                `)}
                onClick={handleClick}
            >
                {show ? svgOpen.open : svgClose.close}
            </button>

            <ul 
                className={clsx(`
                bg-pink-200 h-auto absolute top-20 right-0 w-screen shadow-md
                sm:w-1/2 sm:h-full sm:flex sm:top-0 sm:right-0 sm:shadow-none
                `)}
                hidden={show}
            >
                {
                    navData.map(tab => (
                        <li 
                            key={tab.id}
                            className={clsx("w-full h-full")}
                        >
                            <button className={clsx("w-full h-full text-neutral-700 hover:text-yellow-600 transition-colors transition-duration-300 font-robotoCondensed")}>
                                {tab.tab}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
} 