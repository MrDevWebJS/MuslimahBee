import { clsx } from "clsx"
import { navLinks } from "./data/navLink"
import { open, closed } from "./data/navSvg"
import { FunctionComponent, useState } from "react"

export const Nav: FunctionComponent = (): React.JSX.Element => {

    const [show, setShow] = useState<boolean>(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <nav 
            className={clsx("w-1/2 h-full flex justify-end items-center")}
        >

            <button
                className={clsx(`
                mr-2 cursor-pointer
                sm:hidden
                `)}
                onClick={handleClick}
            >
                {show ? closed.svg : open.svg}
            </button>

            <ul 
                className={clsx(`
                bg-pink-200 w-screen h-auto absolute top-20 right-0 shadow-md
                sm:w-1/2 sm:h-full sm:flex sm:top-0 sm:right-0 sm:shadow-none
                `)}
                hidden={!show}
            >
                {
                    navLinks.map(link => (
                        <li 
                            key={link.id}
                            className={clsx("w-full h-full")}
                        >
                            {link.link}
                        
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
} 