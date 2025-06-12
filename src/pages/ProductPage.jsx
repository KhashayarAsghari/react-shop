import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchApi } from "../api/axiosConfig"

export default function ProductPage() {

    const { productId } = useParams()

    useEffect(() => {
        async function request() {
            const test = await fetchApi.get("products/1")
            console.log("axios value:", test)
        }

        request()

    }, [])



    return (
        <h1>single product page</h1>
    )
}