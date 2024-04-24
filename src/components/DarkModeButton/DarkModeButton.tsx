import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function DarkModeButton() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedMode = localStorage.getItem("theme");

        if (!savedMode) {
            const systemPrefersColorScheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setDarkMode(systemPrefersColorScheme);
            localStorage.setItem("theme", systemPrefersColorScheme ? "dark" : "light")
            console.log('asdasda')
        } else {
            setDarkMode(savedMode === "dark")
        }

        document.documentElement.classList.toggle("dark", darkMode)
    }, [darkMode])

    const changeTheme = () => {
        setDarkMode(!darkMode)
        localStorage.setItem("theme", darkMode ? "dark" : "light")
    }

    return (
        <button onClick={changeTheme}>
            {darkMode ? <Sun /> : <Moon />}
        </button>
    )
}