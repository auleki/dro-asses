import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
// import useFetch from '../../hooks/useFetch'
import { CardsSC } from '../../styles/common.styled'
import Card from '../common/card/Card'
import InfiniteScroll from 'react-infinite-scroller'
import { fetchBooks } from '../../services/book'
import { FullPageContainer } from '../../styles/components.styled'

const Cards = () => {
    const { setAllBooks, allBooks } = useContext(GlobalContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    // const { data, loading, errors } = useFetch("/books")

    async function loadsBooks() {
        // let notDoneFetching = true
        let lastResult = []
        let newBooks: any[] = []
        let pageNumber = 1
        let limit = 0

        do {
            setIsLoading(true)
            try {
                lastResult = await fetchBooks(currentPage)
                console.log('Latest Result', lastResult)
                console.log('Current page', currentPage)
                console.log('threshold', limit)
                pageNumber++
                // setCurrentPage(page => page + 1)
                if (lastResult.length === 0) {
                    console.log('newBooks - no more', lastResult)
                    // notDoneFetching = false
                } else {
                    newBooks = [...allBooks, ...lastResult]
                    console.log('newBooks - not done', newBooks)
                }
                console.log('newBooks - final', newBooks)
                lastResult = []
                setAllBooks(newBooks)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log('error', error)
            } finally {
                setIsLoading(false)
                limit++
            }
        } while (limit < 3);
    }

    useEffect(() => {
        loadsBooks()
    }, [])

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadsBooks}
            hasMore={false}
        // loader={ }
        >
            <CardsSC>
                {allBooks?.length === 0 && !isLoading ? (
                    <FullPageContainer>
                        <h2>No Books Found</h2>
                    </FullPageContainer>
                ) : isLoading || isEmpty ? (
                    <FullPageContainer>
                        <h2>loading books...</h2>
                    </FullPageContainer>
                ) : (allBooks?.map(book => <Card book={book} key={book?.name} />))}
            </CardsSC>
        </InfiniteScroll>
    )
}

export default Cards