import React from 'react'
import { SearchSectionSC } from '../styles/components.styled'
import { PageTitle } from '../styles/layout.styled'
import SearchBar from './SearchBar'

const SearchSection = () => {
    return (
        <SearchSectionSC>
            <div>
                <PageTitle>Search for the books you need</PageTitle>
            </div>
            <SearchBar />
        </SearchSectionSC>
    )
}

export default SearchSection