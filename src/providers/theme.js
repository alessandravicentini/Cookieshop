import { createContext, useState } from 'react'

export const ThemeTypeContext = createContext()

export const ThemeTypeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light')

    return (
        <ThemeTypeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</ThemeTypeContext.Provider>
    )
}