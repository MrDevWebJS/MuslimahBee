import { clsx } from "clsx"
import { navLinks } from "./data/navLink"
import { open, closed } from "./data/navSvg"
import { FunctionComponent, useState } from "react"
import { Button } from "../Button"

export const Nav: FunctionComponent = (): React.JSX.Element => {

    const [show, setShow] = useState<boolean>(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <nav 
            className={clsx("w-screen h-20 flex justify-center items-center bg-stone-800")}
        >

            <Button
                className={`
                w-11 h-11 flex justify-center items-center rounded-full hover:bg-stone-700 transition-colors transition-duration-300 mr-2 cursor-pointer
                sm:hidden
                `}
                onClick={handleClick}
            >
                {show ? closed.svg : open.svg}
            </Button>

            <ul 
                className={clsx(`
                bg-stone-800 absolute top-20 right-0 w-full h-auto shadow-md
                sm:w-full sm:h-20 sm:top-0 sm:flex sm:shadow-none
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