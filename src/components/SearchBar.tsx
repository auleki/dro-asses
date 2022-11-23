import React, { useContext, useEffect, useState } from 'react'
import { SearchBarSC, SearchInputSC, SelectInputSC } from '../styles/components.styled'
import Button from './common/Button'
import { IoSearch } from 'react-icons/io5'
import { RiRefreshLine } from 'react-icons/ri'
import { GlobalContext } from '../context/GlobalContext'
import { fetchBooks, searchForBook } from '../services/book'
import { placeholderText, SEARCH_CONTEXT, SEARCH_METHODS } from '../utils/enum'
import DateRange from './DateRange'
import { searchCharacter } from '../services/character'
import { loadListOfBooks } from '../helpers/helpers'

const SearchBar = () => {
    // return date string
    const API_FIELDS = ['name']
    const [loading, setLoading] = useState(false)
    const { searchText, setSearchText, setAllBooks, fromDate, tillDate } = useContext(GlobalContext)
    const [searchBy, setSearchBy] = useState<string>(SEARCH_METHODS.name)
    const [archive, setArcvhive] = useState<any[] | undefined>([])
    const [searchContext, setSearchContext] = useState(SEARCH_CONTEXT.API)

    async function getAllBooks() {
        setLoading(true)
        const books = await fetchBooks()
        setAllBooks(books)
        setArcvhive(books)
        setLoading(false)
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    async function findBook(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        let foundBooks;
        let foundCharacter;
        let apiOptions;

        switch (searchContext) {
            case SEARCH_CONTEXT.API:
                console.log('API search by::', searchBy, searchText)
                apiOptions = {
                    params: {
                        [searchBy]: searchText
                    }
                }
                const result = await searchForBook(apiOptions)
                setAllBooks(result)
                if (result?.length > 1) {
                    console.log('Could not find book')
                }
                console.log('Result Now', result)
                setLoading(false)
                break
            case SEARCH_CONTEXT.ARCHIVE:
                console.log('Entered into archive', searchBy, searchText);
                foundBooks = archive?.filter(book => book[searchBy].toLowerCase() === searchText)
                console.log('Found Books', foundBooks)
                setAllBooks(foundBooks)
                setLoading(false)
                break
            case SEARCH_CONTEXT.AUTHORS:
                console.log('Entered into authors', archive);
                foundBooks = archive?.filter(book => book[searchBy]?.includes(searchText))
                setAllBooks(foundBooks)
                setLoading(false)
                break
            case SEARCH_CONTEXT.DATE:
                apiOptions = {
                    params: {
                        fromReleaseDate: fromDate,
                        toReleaseDate: tillDate
                    }
                }
                foundBooks = await searchForBook(apiOptions)
                setAllBooks(foundBooks)
                setLoading(false)
                break
            case SEARCH_CONTEXT.CHARACTER:
                console.log('entered into characters search', searchBy)
                apiOptions = {
                    params: {
                        [searchBy === 'charactersName'
                            ? 'name'
                            : searchBy === 'charactersCulture'
                                ? 'culture'
                                : ''
                        ]: searchText
                    }
                }
                foundCharacter = await searchCharacter(apiOptions)
                foundBooks = await loadListOfBooks(foundCharacter?.[0]?.books)
                console.log('found-books', foundBooks)
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
        setSearchText('')
        setSearchBy(value)
        console.log('Selected Value:', value)
        if (API_FIELDS.includes(value)) {
            setSearchContext(SEARCH_CONTEXT.API)
        } else if (value === SEARCH_METHODS.date) {
            setSearchContext(SEARCH_CONTEXT.DATE)
        } else if (value === 'authors') {
            setSearchContext(SEARCH_CONTEXT.AUTHORS)
        } else if (value === SEARCH_METHODS.charactersName || value === SEARCH_METHODS.charactersCulture) {
            setSearchContext(SEARCH_CONTEXT.CHARACTER)
        } else {
            setSearchContext(SEARCH_CONTEXT.ARCHIVE)
        }
    }

    // (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)
    function onUserInput(e: React.ChangeEvent<HTMLInputElement>) {
        if (searchBy === 'date') {
            // nowDate === endDate
            const endDate = new Date(e.target.value).toISOString().split("T")[0]
            // console.log("compare", endDate)
            console.log("endDate", endDate)
            setSearchText(endDate)
        } else {
            setSearchText(e.target.value)
        }
    }

    return (
        <SearchBarSC id='searchBar' onSubmit={(e) => findBook(e)}>
            <SelectInputSC
                name="searchBook"
                id="searchBook"
                onChange={onFieldChange}
            >
                <option value="name">Name</option>
                <option value="publisher">Publisher</option>
                <option value="date">Date</option>
                <option value="isbn">ISBN</option>
                <option value="publisher">Publisher</option>
                <option value="charactersName">Character's Name</option>
                <option value="charactersCulture">Character's Culture</option>
                <option value="authors">Authors</option>
            </SelectInputSC>
            {searchBy === SEARCH_METHODS.date ? (
                <DateRange />
            ) : (
                <SearchInputSC
                    value={searchText}
                    type={searchBy === SEARCH_METHODS.date ? 'date' : 'text'}
                    data-testid='searchbar'
                    onChange={(e) => onUserInput(e)}
                    placeholder={placeholderText[searchBy as keyof object]}
                />
            )}
            <Button
                isLoading={loading}
                disabled={!searchText && !fromDate && !tillDate}
                icon={<IoSearch />}
                data-testid="search-button"
            />
            <Button
                // isLoading={loading}
                onClick={() => getAllBooks()}
                icon={<RiRefreshLine />}
            />
        </SearchBarSC>
    )
}

export default SearchBar