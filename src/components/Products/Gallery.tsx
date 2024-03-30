import { clsx } from "clsx"
import { FunctionComponent } from "react"
import { productInfos } from "./productInfos"
import { ProductCard } from "./ProductCard"

export const Gallery: FunctionComponent = (): React.JSX.Element => {

  return (
    <>
      <section className={clsx("w-[100%] max-w-screen h-auto flex justify-center items-center flex-wrap pt-20 bg-pink-100")}>   
              { 
                productInfos.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                  />
                )) 
              }
      </section>
    </>   
  )
}