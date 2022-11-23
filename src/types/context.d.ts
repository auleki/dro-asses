import React from "react"

export interface ContextProps {
    children: React.ReactNode
}

export interface ITheme {
    bg: string;
    textColor: string;
    buttonBg: string;
    buttonText: string;
    cardBg: string;
    cardText: string;
}

export interface IThemeContext {
    activeTheme: Object
    isDark: boolean
    toggleTheme: () => void
}

export interface IGlobalContext {
    searchText: string
    setSearchText: React.Dispatch<React.SetStateAction<string>>
    allBooks: any[]
    setAllBooks: React.Dispatch<SetStateAction<any[]>>
    fromDate: string
    tillDate: string
    setFromDate: React.Dispatch<React.SetStateAction<string>>
    setTillDate: React.Dispatch<React.SetStateAction<string>>
}