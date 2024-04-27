import { ComponentProps } from "react"

interface AlertWrapperProps extends ComponentProps<'div'> {
    AlertWarning: boolean
}

export function AlertWrapper({ children, AlertWarning = false }: AlertWrapperProps) {

    return (
        <div className={`
                absolute top-0 left-1/2
                -translate-x-1/2
                border
                rounded-md
                ${AlertWarning ? 'border-red-400' : 'border-green-400'}
            `}
        >
            <span>{children}</span>
        </div>
    )
}