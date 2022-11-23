import { fetchSingleBook } from "../services/book";
import { searchCharacter } from "../services/character";

export function debounce (cb: any, delay = 1550) {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}   

export async function loadListOfBooks (urls: string[]) {
    let list: string[] = []
    try {
        for (let i = 0; i < urls?.length; i++) {
            const id = extractField(urls[i])
            const response = await fetchSingleBook(id)
            list.push(response)
         }
        return list
    } catch (error) {
        console.log('could not load list of books', error)
    }
}

export function extractField (field: string): number {
    const start = field.lastIndexOf("/")
    const value = field.slice(start + 1, field.length)
    return Number(value)
}