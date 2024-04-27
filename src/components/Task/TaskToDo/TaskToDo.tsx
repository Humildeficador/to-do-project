import { ChangeEvent, ComponentProps, useState } from "react";

export function TaskToDo({ children }: ComponentProps<'label'>) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target
        setIsChecked(() => checked)
    }

    return (
        <div>
            <label className='flex items-center gap-5' >
                <input
                    type="checkbox"
                    className={`
                        peer
                        custom-checkbox
                        size-6
                        !border-slate-600/50
                        rounded-[0.25rem]
                        focus-within:ring-2
                        focus-within:ring-offset-2
                        focus-within:ring-offset-white
                        dark:focus-within:ring-offset-slate-800
                        focus-within:ring-indigo-600
                        checked:bg-indigo-600
                        ease-in-out
                        checked:after:bg-[url('/check.svg')]`}
                    onChange={handleCheck} />
                <span className={`
                    text-xl 
                    ${isChecked && 'line-through'}
                    peer-checked:text-slate-900/50 dark:peer-checked:text-slate-400/50
                `}>{children}</span>
            </label>
        </div>

    )
}