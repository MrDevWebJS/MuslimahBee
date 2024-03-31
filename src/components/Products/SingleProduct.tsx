import { clsx } from "clsx"
import { useParams } from "react-router-dom"
import { FunctionComponent } from "react"


export const SingleProduct: FunctionComponent = (): React.JSX.Element => {
    const { id } = useParams()

    return(
        <section className={clsx("w-full h-auto")}>
            { id }
        </section>
    )
}