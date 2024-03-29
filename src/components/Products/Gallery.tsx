import { clsx } from "clsx"
import { images } from "./images"

export const Gallery = () => {
  return (
    <article className={clsx("w-[90%] max-w-screen-xl flex justify-center items-center flex-wrap mt-12")}>   
            {
                images.map(image => (
                    <img
                        className={clsx("w-[350px] h-[200px] shrink-0 m-1")}        
                        key={image.id}
                        src={image.src}      
                    />
                ))
            }
    </article>
  )
}
