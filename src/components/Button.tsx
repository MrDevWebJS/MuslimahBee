import { FunctionComponent } from "react"
import { clsx } from "clsx"

type  ButtonType = {
    onClick?: () => void
    className: string
    children?: React.JSX.Element
}

export const Button: FunctionComponent<ButtonType> = ({onClick, className, children}): React.JSX.Element => {
    return (
        <button
            onClick={onClick} 
            className={clsx(className)}
        >
            {children}
        </button>
    )
}
