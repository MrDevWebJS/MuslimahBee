import { clsx } from "clsx"
import { productInfos } from "./productInfos"
import { Button } from "../Button"
import { FunctionComponent } from "react"

type productInfos = {
  id: number
  src: string
  productName: string
  category: string
  price: number
}

export const Gallery: FunctionComponent = (): React.JSX.Element => {

  return (
    <section className={clsx("w-[100%] max-w-screen h-auto flex justify-center items-center flex-wrap pt-20 bg-pink-100")}>   
            {
                productInfos.map(product => (
                  <article 
                    key={product.id}
                    className={"m-10 p-1 bg-slate-50 rounded cursor-pointer hover:shadow-[0_35px_60px_0px_rgba(0,0,0)] transition ease-in-out hover:-translate-y-5 hover:scale-105 duration-700"}
                  >
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
                      <p className={clsx("flex justify-center items-center w-fit border-2 border-gray-300 bg-gray-300 rounded-2xl text-slate-950 text-base font-cormorantGaramond px-2")}>
                        catégorie: {product.category}
                      </p>

                      <Button className={"block bg-slate-800 font-cormorantGaramond font-bold text-xl text-slate-50 px-2 py-1 rounded"}>
                          Ajouter
                      </Button>
                    </div>
                  </article>
                ))
            }
    </section>
  )
}