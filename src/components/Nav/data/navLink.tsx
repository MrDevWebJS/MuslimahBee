import { NavLink } from "react-router-dom";
import { clsx } from "clsx"

export const navLinks = [
    {
        id: 11,
        link: 
            <NavLink 
                className={clsx("w-full h-full flex justify-center items-center text-neutral-700 hover:text-yellow-600 transition-colors transition-duration-300 font-robotoCondensed")} 
                to="/">
                    Acceuil
            </NavLink>
    },

    {
        id: 12,
        link: 
            <NavLink 
                className={clsx("w-full h-full flex justify-center items-center text-neutral-700 hover:text-yellow-600 transition-colors transition-duration-300 font-robotoCondensed")}
                to="/nosProduits">
                    Nos produits
            </NavLink>
    },

    {
        id: 13,
        link: 
            <NavLink
                className={clsx("w-full h-full flex justify-center items-center text-neutral-700 hover:text-yellow-600 transition-colors transition-duration-300 font-robotoCondensed")} 
                to="/contact">
                    Contact
            </NavLink>
    }
]