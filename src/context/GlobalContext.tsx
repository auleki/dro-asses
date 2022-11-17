import React, { useState, createContext } from 'react'
import { IGlobalContext } from '../types/context'

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchText, setSearchText] = useState<string>("")
    const [allBooks, setAllBooks] = useState<any[]>([])
    // const [searchContext, setSearchContext] = useState({})

    const context = { searchText, setSearchText, allBooks, setAllBooks }

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider