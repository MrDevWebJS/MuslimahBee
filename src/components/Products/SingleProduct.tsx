import clsx from "clsx"
import { FunctionComponent } from "react"
import { NavLink, useParams } from "react-router-dom"
import { productInfos } from "./productInfos"

type ProductCardType = {
    product: {
        id: number;
        img1080: string;
        productName: string;
        category: string;
        corps?: string
        vetement?: string
        accessoire?: string
        entretien: [string] 
        price: number;
    }
}

export const SingleProduct: FunctionComponent<ProductCardType> = (): React.JSX.Element => {

    const {id} = useParams<string>()
    const convertIdToNumber: number = Number(id)

    return (
        <>
            {
                productInfos.map(product => (
                    product.id === convertIdToNumber ? 
                    <section
                        className={clsx("w-full h-full p-2 grid grid-cols-1 grid-rows-6")}
                        key={product.id} 
                    >
                        <img 
                            className={"max-w-full max-h-full col-start-1 row-start-1 row-span-3"}
                            src={product.img1080} 
                            alt={product.productName} 
                            width={500} 
                            height={500}
                        />
                        <div className={"col-start-1 row-start-4 row-span-1 p-2"}>
                            <h1 className={clsx("font-tangerine font-bold text-6xl")}>{product.productName}</h1>
                            <p className={clsx("w-full font-cormorantGaramond flex justify-between items-center")}>
                                <span className={clsx("w-full text-center border-b-2 border-b-slate-700 text-slate-950")}>Catégorie: {product.category}</span>
                                <span className={clsx("w-full text-end font-semibold text-2xl")}>Prix: {product.price}€</span>
                            </p>
                        </div>
                        <div className={clsx("row-start-5 row-span-1")}>
                            <button className={clsx("w-full h-1/2 font-cormorantGaramond text-lg text-neutral-50 rounded-md border-2 border-b-stone-50 bg-stone-900 hover:bg-stone-700 transition-colors transition-duration-700")}>
                                Ajouter au panier
                            </button>
                            <button 
                                className={clsx("w-full h-1/2 font-cormorantGaramond text-lg text-neutral-50 rounded-md border-2 border-b-stone-50 bg-stone-900 hover:bg-stone-700 transition-colors transition-duration-700")}
                                >
                                <NavLink
                                    className={"w-full h-full flex justify-center items-center"} 
                                    to="/nosProduits">
                                    Revenir à la galerie        
                                </NavLink> 
                            </button>
                        </div>
                        <ul className={clsx("col-start-1 row-start-6 row-span-1 p-1 flex flex-col justify-center items-start")}>
                            <h3 className={clsx("font-tangerine font-bold text-3xl")}>Composition:</h3>
                            
                            {
                                product.corps !== "" && product.vetement !== "" && 
                                <>
                                    <li className={"font-cormorantGaramond text-lg"}>
                                        <span className={"font-bold mr-1"}>Corps:</span>
                                        {product.corps}
                                    </li>

                                    <li className={"font-cormorantGaramond text-lg"}>
                                    <span className={"font-bold mr-1"}>Vêtements:</span>
                                    {product.vetement}
                                    </li>
                                </>
                            }

                            {   
                                product.vetement == "" && product.accessoire == "" &&
                                <li className={"font-cormorantGaramond text-lg"}>
                                    {product.corps}
                                </li>
                            }
                            
                            {
                                product.accessoire == "" && product.corps == "" &&
                                <li className={"font-cormorantGaramond text-lg"}>
                                    {product.vetement}
                                </li>
                            }

                            {
                                product.accessoire !== "" && 
                                <li className={"font-cormorantGaramond text-lg"}>
                                    {product.accessoire}
                                </li>
                            }
                        </ul>   
                    </section>
                    : null
                ))
            }
        </>
    )
}