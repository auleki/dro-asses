import React, { useContext, useEffect, useState } from 'react'
import { SearchBarSC, SearchInputSC, SelectInputSC } from '../styles/components.styled'
import Button from './common/Button'
import { IoSearch } from 'react-icons/io5'
import { GlobalContext } from '../context/GlobalContext'
import { fetchAllBooks, searchForBook } from '../services/book'
import { placeholderText, SEARCH_CONTEXT, SEARCH_METHODS } from '../utils/enum'

const SearchBar = () => {
    const API_FIELDS = ['name', 'date', 'charactersName', 'charactersCulture']
    const [loading, setLoading] = useState(false)
    const { searchText, setSearchText, setAllBooks } = useContext(GlobalContext)
    const [searchBy, setSearchBy] = useState<string>(SEARCH_METHODS.name)
    const [archive, setArcvhive] = useState<any[] | undefined>([])
    const [searchContext, setSearchContext] = useState(SEARCH_CONTEXT.API)

    async function getAllBooks() {
        const books = await fetchAllBooks()
        setArcvhive(books)
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    async function findBook(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        let foundBooks;

        switch (searchContext) {
            case SEARCH_CONTEXT.API:
                const result = await searchForBook(searchText)
                setAllBooks(result)
                if (result?.length > 1) {
                    console.log('Could not find book')
                }
                console.log('Result Now', result)
                setLoading(false)
                break
            case SEARCH_CONTEXT.ARCHIVE:
                console.log('Entered into archive');
                foundBooks = archive?.filter(book => book)
                setAllBooks(foundBooks)
                setLoading(false)
                break
            case SEARCH_CONTEXT.AUTHORS:
                console.log('Entered into author');
                foundBooks = archive?.filter(book => book[searchBy]?.includes(searchText))
                setAllBooks(foundBooks)
                setLoading(false)
                break
            default:
                console.log('Entered into default');
                return "No such search method, pick an option from the dropdown"
        }

        setSearchText('')
    }

    function onFieldChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value
        setSearchBy(value)
        if (API_FIELDS.includes(value)) {
            setSearchContext(SEARCH_CONTEXT.API)
        } else {
            setSearchContext(SEARCH_CONTEXT.ARCHIVE)
        }
    }

    return (
        <SearchBarSC id='searchBar' onSubmit={(e) => findBook(e)}>
            <SelectInputSC name="searchBook" id="searchBook" onChange={onFieldChange}>
                <option value="name">Name</option>
                <option value="publisher">Publisher</option>
                <option value="date">Date</option>
                <option value="isbn">ISBN</option>
                <option value="publisher">Publisher</option>
                <option value="charactersName">Character's Name</option>
                <option value="charactersCulture">Character's Culture</option>
                <option value="authors">Authors</option>
            </SelectInputSC>
            <SearchInputSC
                value={searchText}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                placeholder={placeholderText[searchBy as keyof object]}
            />
            <Button
                isLoading={loading}
                disabled={!searchText}
                icon={<IoSearch />}
            />
            <Button
                isLoading={loading}
                onClick={() => getAllBooks()}
                text="Reload"
            />
        </SearchBarSC>
    )
}

export default SearchBar