import { Moon, Sun } from 'lucide-react';
import { ComponentProps, useEffect, useState } from 'react';

interface DarkModeButtonProps extends ComponentProps<'button'> {

}

export function DarkModeButton(props: DarkModeButtonProps) {
    const localStorageTheme = localStorage.getItem('theme');
    const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialState = localStorageTheme ? localStorageTheme === 'dark' : isDarkPreferred;
    const [isDarkModeOn, setIsDarkModeOn] = useState(initialState);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkModeOn);
    }, [isDarkModeOn]);

    const changeTheme = () => {
        localStorage.setItem('theme', !isDarkModeOn ? 'dark' : 'light');
        setIsDarkModeOn((prevState) => !prevState);
    };

    return (
        <button onClick={changeTheme} className='flex justify-center items-center absolute top-0 right-0 m-3 size-9' {...props}>
            {isDarkModeOn ? <Sun className='size-full'/> : <Moon className='size-full'/>}
        </button>
    );
}