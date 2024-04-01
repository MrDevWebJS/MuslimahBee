import { FunctionComponent } from "react"
import { Home } from "./Home"

export const Header: FunctionComponent = (): React.JSX.Element => {

    return (
        <header className={"w-sreen h-[calc(100%-80px)]"}>
            <Home/>
        </header>
    )
}