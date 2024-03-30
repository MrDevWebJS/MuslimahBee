import { clsx } from "clsx"
import { FunctionComponent } from "react";
import { Button } from "../Button"

type ProductCardType = {
    product: {
      id: number;
      src: string;
      productName: string;
      category: string;
      price: number;
    }
}

export const ProductCard: FunctionComponent<ProductCardType> = ({product}): React.JSX.Element => {
    return (
        <article className={"m-10 p-1 bg-slate-50 rounded hover:shadow-[0_35px_60px_0px_rgba(0,0,0)] transition ease-in-out hover:-translate-y-5 hover:scale-105 duration-700"}>
            <img
                className={"w-[350px] h-[250px] rounded"}        
                key={product.id}
                src={product.src}      
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
                <p className={clsx("flex justify-center items-center w-fit border-2 border-slate-700 bg-gray-300 rounded-2xl text-slate-950 text-base font-cormorantGaramond px-2 cursor-pointer hover:bg-slate-700 hover:text-neutral-50 hover:border-slate-700 transition-colors transition-duration-300")}>
                    catégorie: {product.category}
                </p>

                <Button className={"block bg-slate-700 font-cormorantGaramond font-bold text-xl text-slate-50 px-2 rounded border-2 border-slate-700 hover:bg-gray-300 hover:text-slate-900 hover:border-slate-700"}>
                    Voir
                </Button>
            </div>
        </article>
    )
}