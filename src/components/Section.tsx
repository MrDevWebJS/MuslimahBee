import { clsx } from "clsx"
import { FunctionComponent, PropsWithChildren } from "react";

type SectionType = PropsWithChildren

export const Section: FunctionComponent<SectionType> = ({children}): React.JSX.Element => {
    return(
        <section className={clsx("flex flex-col justify-start items-center w-screen h-screen bg-pink-50 pt-24 p-4")}>
            {children}
        </section>
    )
}