import Axios from "../connection/axios";

export async function fetchCharacters (pageNumber: number = 1) {
    try {
        const {data} = await Axios.get(`/characters?page${pageNumber}`)
        return data
    } catch (error) {
        
    }
}

export async function searchCharacters (field: string = "name", text: string) {
    try {
        const {data} = await Axios.get(`/characters/?${field}=${text}`)
        return data
    } catch (error) {
        console.log('Error finding characters', error)
    }
}
