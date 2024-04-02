import { clsx } from "clsx"
import { FunctionComponent } from "react";
import { Button } from "../Button"
import { NavLink } from "react-router-dom";

type ProductCardType = {
    product: {
      id: number;
      img300x200: string;
      productName: string;
      category: string;
      price: number;
    }
}

export const ProductCard: FunctionComponent<ProductCardType> = ({product}): React.JSX.Element => {

    return (
        <article className={clsx("m-4 p-1 bg-slate-50 rounded hover:shadow-[0_3px_3px_3px_rgba(0,0,0)] transition ease-in-out hover:-translate-y-5 hover:scale-105 duration-500")}>
            <img
                className={"w-[350px] h-[250px] rounded"}        
                key={product.id}
                src={product.img300x200}      
            />
            <div className={"flex justify-between items-center p-1"}>
                <h2 className={"font-tangerine text-4xl font-bold text-slate-900"}>
                    {product.productName}
                </h2>
                <span className={"font-cormorantGaramond font-bold text-xl text-slate-900"}>
                    Prix: {product.price}€
                </span>
            </div>

            <div className={"h-16 flex justify-between items-end p-1"}>
                <p className={clsx("flex justify-center items-center w-fit border-b-2 border-b-slate-700 text-slate-950 text-base font-cormorantGaramond px-2")}>
                    catégorie: {product.category}
                </p>

                <Button 
                    className={"block bg-slate-700 font-cormorantGaramond font-bold text-lg text-slate-50 rounded border-2 border-slate-700 hover:bg-gray-300 hover:text-slate-900 hover:border-slate-700"}
                    >
                    <NavLink
                        className={"w-full h-full px-2"} 
                        to={`/nosProduits/${product.id}`}
                    >
                    Voir l'article
                    </NavLink>  
                </Button>
            </div>
        </article>
    )
}