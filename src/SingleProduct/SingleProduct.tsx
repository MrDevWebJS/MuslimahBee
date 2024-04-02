import clsx from "clsx"
import { FunctionComponent } from "react"
import { NavLink, useParams } from "react-router-dom"
import { productInfos } from "../productInfos"

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
                    product.id == convertIdToNumber ? 
                    <section
                        className={clsx(`w-full h-full p-2 grid grid-cols-1 grid-rows-6
                        md:grid-cols-2 lg:gap-2
                        `)}
                        key={product.id} 
                    >
                        <p className={"w-full h-full col-start-1 row-start-1 row-span-3 sm:flex sm:justify-center sm:items-center md:row-span-4 lg:row-span-6 lg:justify-start"}>
                            <img 
                                className={"w-full h-full sm:max-w-screen-sm lg:max-w-screen-lg"}
                                src={product.img1080} 
                                alt={product.productName} 
                            />
                        </p>
                        <div className={`col-start-1 row-start-4 row-span-1 flex flex-col justify-between p-1
                        md:col-start-2 md:row-start-1 md:row-span-2 md:justify-between
                        `}>
                            <h1 className={clsx(`font-tangerine font-bold text-5xl
                                md:text-7xl md:py-5 md:px-2
                            `)}>
                                {product.productName}
                            </h1>
                            <p className={clsx("font-cormorantGaramond flex justify-between items-center")}>
                                <span className={clsx("w-full text-center border-b-2 border-b-slate-700 text-slate-950 text-xl md:text-xl")}>
                                    Catégorie: {product.category}
                                </span>
                                
                                <span className={clsx("w-full text-end font-semibold text-2xl md:text-4xl")}>
                                    Prix: {product.price}€
                                </span>
                            </p>
                        </div>
                        <div className={clsx("row-start-5 row-span-1 md:col-start-2 md:row-start-3 md:row-span-2 md:flex md:flex-col md:justify-end")}>

                            <button className={clsx("w-full h-1/2 font-cormorantGaramond text-lg text-neutral-50 rounded-md border-2 border-b-stone-50 bg-stone-900 hover:bg-stone-700 transition-colors transition-duration-700 md:h-20 md:text-xl")}>
                                Ajouter au panier
                            </button>
                            
                            <button 
                                className={clsx("w-full h-1/2 font-cormorantGaramond text-lg text-neutral-50 rounded-md border-2 border-b-stone-50 bg-stone-900 hover:bg-stone-700 transition-colors transition-duration-700 md:h-20 md:text-xl")}
                                >
                                <NavLink
                                    className={"w-full h-full flex justify-center items-center"} 
                                    to="/nosProduits">
                                    Revenir à la galerie        
                                </NavLink> 
                            </button>
                        </div>
                        <div className={clsx("col-start-1 row-start-6 row-span-1 p-1 md:col-start-2 md:row-start-5 md:row-span-2 flex justify-between")}>
                            
                            <ul>
                                <h3 className={clsx("w-1/2 font-tangerine font-bold text-3xl md:text-4xl")}>
                                    Entretien:
                                </h3>
                                { 
                                    product.entretien.map((el, index) => (
                                        <li
                                            className={"font-cormorantGaramond text-lg"} 
                                            key={index}
                                        >
                                            {el}
                                        </li>
                                        ))
                                }
                            </ul>  

                            <ul className={clsx("w-1/2 flex flex-col justify-start items-start")}>

                                <h3 className={clsx("font-tangerine font-bold text-3xl md:text-4xl")}>Composition:</h3>
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
                        </div>
                    </section>
                    :
                    null
                ))
            }
        </>
    )
}