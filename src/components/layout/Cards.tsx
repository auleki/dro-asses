import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
// import useFetch from '../../hooks/useFetch'
import { CardsSC } from '../../styles/common.styled'
import Card from '../common/card/Card'
// import InfiniteScroll from 'react-infinite-scroller'
import { fetchBooks } from '../../services/book'
import { CardsContainer, ContainerSC } from '../../styles/components.styled'
import HomeLoader from '../loaders/HomeLoader'

const Cards = () => {
    const { setAllBooks, allBooks } = useContext(GlobalContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    // const [isEmpty, setIsEmpty] = useState(false)

    // const { data, loading, errors } = useFetch("/books")
    // async function loadAllPages() {
    //     // let notDoneFetching = true
    //     let lastResult = []
    //     let newBooks: any[] = []
    //     let pageNumber = 1
    //     let limit = 0

    //     do {
    //         setIsLoading(true)
    //         try {
    //             lastResult = await fetchBooks(currentPage)
    //             console.log('Latest Result', lastResult)
    //             console.log('Current page', currentPage)
    //             console.log('threshold', limit)
    //             pageNumber++
    //             // setCurrentPage(page => page + 1)
    //             if (lastResult.length === 0) {
    //                 console.log('newBooks - no more', lastResult)
    //                 // notDoneFetching = false
    //             } else {
    //                 newBooks = [...allBooks, ...lastResult]
    //                 console.log('newBooks - not done', newBooks)
    //             }
    //             console.log('newBooks - final', newBooks)
    //             lastResult = []
    //             setAllBooks(newBooks)
    //             setIsLoading(false)
    //         } catch (error) {
    //             setIsLoading(false)
    //             console.log('error', error)
    //         } finally {
    //             setIsLoading(false)
    //             limit++
    //         }
    //     } while (limit < 3);
    // }

    async function loadBooks(page = 1, paginate = false) {
        setIsLoading(true)
        try {
            const result = await fetchBooks(page)
            setAllBooks(result)
            if (paginate) {
                setCurrentPage(pageNum => pageNum + 1)
            }
        } catch (error) {
            console.log('error while fetching books:|:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        // loadsBooks()
        loadBooks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <CardsSC>
            {/* <InfiniteScroll
                pageStart={0}
                loadMore={() => loadBooks(currentPage, true)}
                hasMore={false}
                loader={ }
            > */}

            <ContainerSC>
                {isLoading ? (
                    <HomeLoader
                        empty={allBooks?.length === 0 && !isLoading}
                        loading={isLoading}
                    />
                ) : (
                    <CardsContainer>
                        {allBooks?.map(book => <Card book={book} key={book?.name} />)}
                    </CardsContainer>
                )}
            </ContainerSC>
            {/* </InfiniteScroll> */}
        </CardsSC>
    )
}

export default Cards