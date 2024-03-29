import { clsx } from "clsx"
import { productInfos } from "./productInfos"
import { Button } from "../Button"

export const Gallery = () => {
  return (
    <article className={clsx("w-[90%] max-w-screen-xl flex justify-center items-center flex-wrap mt-12")}>   
            {
                productInfos.map(product => (
                  <article className={clsx("m-1 p-1 border-2 border-stone-700")}>
                    <img
                        className={clsx("w-[300px] h-[200px]")}        
                        key={product.id}
                        src={product.src}      
                    />
                    <div>
                      <h2 className={clsx("font-tangerine font-bold text-4xl")}>{product.productName}</h2>
                      <p className={clsx("flex justify-center items-center w-fit border-2 border-stone-700 bg-green-300 px-1 rounded-2xl text-stone-900 text-xs font-robotoCondensed")}>
                        catégorie: {product.category}
                      </p>
                      <span className={clsx("font-robotoCondensed")}>Prix: {product.price}€</span>
                    </div>
                    <Button className={"border-2 border-stone-500 p-2 rounded-2xl"}>Ajouter</Button>
                  </article>
                ))
            }
    </article>
  )
}