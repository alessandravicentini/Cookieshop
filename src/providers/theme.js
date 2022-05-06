import { createContext, useState } from 'react'

export const ThemeTypeContext = createContext()

export const ThemeTypeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light')

    return (
        <ThemeTypeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</ThemeTypeContext.Provider>
    )
}