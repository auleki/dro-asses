import React from 'react'
import { SearchSectionSC } from '../styles/components.styled'
import SearchBar from './SearchBar'

const SearchSection = () => {
    return (
        <SearchSectionSC>
            <div>
                <h1>Search for the books you need</h1>
            </div>
            <SearchBar />
        </SearchSectionSC>
    )
}

export default SearchSection