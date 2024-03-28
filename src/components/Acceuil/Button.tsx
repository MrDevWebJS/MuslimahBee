import { FunctionComponent } from "react"

type  ButtonType = {
    onClick?: () => void
    className: string
    children?: React.JSX.Element
}

export const Button: FunctionComponent<ButtonType> = ({onClick, className, children}): React.JSX.Element => {
    return (
        <button
            onClick={onClick} 
            className={className}
        >
            {children}
        </button>
    )
}
