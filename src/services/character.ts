import Axios from "../connection/axios";

export async function fetchCharacters (pageNumber: number = 1) {
    try {
        const {data} = await Axios.get(`/characters?page=${pageNumber}`)
        return data
    } catch (error) {
        
    }
}

export async function searchCharacter (config?: object) {
    try {
        const {data} = await Axios.get("/characters", config)
        console.log('characters here:', data)
        return data
    } catch (error) {
        console.log('Error finding characters', error)
    }
}
