import { clsx } from "clsx"
import { NavLink } from "react-router-dom";

type navLinkType = {
    id: number
    link: React.JSX.Element
}

export const navLinks: navLinkType[] = [
    {
        id: 11,
        link: 
            <NavLink 
                className={clsx("w-full h-full flex justify-center items-center text-neutral-700 text-xl hover:text-yellow-600 transition-colors transition-duration-300 font-cormorantGaramond font-medium")} 
                to="/">
                    Acceuil
            </NavLink>
    },

    {
        id: 12,
        link: 
            <NavLink 
                className={clsx("w-full h-full flex justify-center items-center text-neutral-700 text-xl hover:text-yellow-600 transition-colors transition-duration-300 font-cormorantGaramond font-medium")}
                to="/nosProduits">
                    Nos produits
            </NavLink>
    },

    {
        id: 13,
        link: 
            <NavLink
                className={clsx("w-full h-full flex justify-center items-center text-neutral-700 text-xl hover:text-yellow-600 transition-colors transition-duration-300 font-cormorantGaramond font-medium")} 
                to="/contact">
                    Contact
            </NavLink>
    }
]