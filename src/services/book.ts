import Axios from '../connection/axios'

export async function fetchBooks (pageNumber: number = 1) {
    try {
        const {data} = await Axios.get(`/books?page=${pageNumber}`)
        return data
    } catch (error) {
        console.log('error is ', error)
    }
}

export async function searchForBook (text: string, field: string = 'name') {
    try {
        const {data} = await Axios.get(`/books?${field}=${text}`)
        return data
    } catch (error) {
        console.log('Could not find book', error)
    }
}

export async function fetchAllBooks () {
    try {
        let currentPage = 1
        let results: any[] = []
        let stillFetching = true
        while (stillFetching) {
            const {data} = await Axios.get(`/books?page=${currentPage}`)
            if (data.length === 0) {
                console.log('no more data to fetch, current page is: ', currentPage)
                break
            }
            results.push(...data)
            currentPage++
            stillFetching = false
        }
        return results
    } catch (error) {
        console.log('error fetching all books', error)
    }
}