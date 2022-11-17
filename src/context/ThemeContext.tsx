import React, { useState, createContext } from 'react'
import { ContextProps, ITheme, IThemeContext } from '../types/context'
import { appTheme } from '../utils/constant.utils'

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeContextProvider: React.FunctionComponent<ContextProps> = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    const activeTheme: ITheme = isDark ? appTheme.dark : appTheme.light

    const toggleTheme = () => {
        setIsDark(dark => !dark)
    }

    const contextValues = {
        toggleTheme,
        isDark,
        activeTheme
    }

    return (
        <ThemeContext.Provider value={contextValues}>
            {children}
        </ThemeContext.Provider >
    )
}

export default ThemeContextProvider