import { clsx } from "clsx"
import { navData } from "./dataNav"
import { navSvg } from "./svgNav"

export const Nav = () => {
    
    return (
        <nav className={clsx("w-1/2 h-full")}>
            {navSvg}
            <ul className={clsx("bg-rose-300 h-full hidden sm:flex")}>
                {
                    navData.map(tab => (
                        <li 
                            key={tab.id}
                            className={clsx("w-full h-full")}
                        >
                            <button className={clsx("w-full h-full text-neutral-700 font-playfair")}>
                                {tab.tab}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
} 