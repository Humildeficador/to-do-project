import { ChangeEvent, ComponentProps, useState } from "react";

const icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGVjayI+PHBhdGggZD0iTTIwIDYgOSAxN2wtNS01Ii8+PC9zdmc+'

export function TaskToDo({ children }: ComponentProps<'label'>) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target
        setIsChecked(() => checked)
    }

    return (
        <div>
            <label className='flex items-center gap-2' >
                <input
                    type="checkbox"
                    className={`
                        custom-checkbox
                        size-4
                        !border-slate-600/50
                        rounded-[0.25rem]
                        focus-within:ring-2
                        focus-within:ring-offset-2
                        focus-within:ring-offset-white
                        dark:focus-within:ring-offset-slate-800
                        focus-within:ring-indigo-600
                        checked:bg-indigo-600
                        ease-in-out
                        checked:after:bg-[url('${icon}')]`}
                    onChange={handleCheck} />
                <span className={`text-sm ${isChecked && 'line-through'}`}>{children}</span>
            </label>
        </div>
    )
}