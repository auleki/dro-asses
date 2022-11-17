import { useState, useEffect, SetStateAction } from "react"
import Axios from "../connection/axios"

const useFetch = (url: string) => {
    const [data, setData] = useState<any[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<SetStateAction<any | null> | null>(null)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const { data } = await Axios.get(url)
                    setData(data)
                } catch (error) {
                    setErrors(error)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return {
        data,
        errors,
        loading
    }

}

export default useFetch