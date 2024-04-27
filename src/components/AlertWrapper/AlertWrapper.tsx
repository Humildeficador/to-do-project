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
                rounded-lg
                mt-4
                px-4
                py-2
                dark:text-white
                ${AlertWarning ? 'bg-red-400' : 'bg-green-400'}
                ${AlertWarning ? 'border-red-600' : 'border-green-600'}
            `}
        >
            <span>{children}</span>
        </div>
    )
}