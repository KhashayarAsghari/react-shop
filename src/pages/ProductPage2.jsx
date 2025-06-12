import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchApi } from "../api/axiosConfig"
import { useQuery } from "@tanstack/react-query"
import useGetProducts from "../api/hooks/useGetProducts"

export default function ProductPage() {
    const { productId } = useParams()

    const { data, isLoading, isError } = useGetProducts()

    // const { data, isLoading, isError } = useQuery({
    //     queryFn: async () => {
    //         return await fetch('https://fakestoreapi.com/producsdfts/2')
    //             .then(response => response.json())
    //             .then(data => data);
    //     },
    //     retry: 2,
    //     queryKey: [`product-${productId}`]
    // })

    return (
        <>
            {isLoading
                ? <h1>LOADING...</h1>
                : isError
                    ? <h1>error</h1>
                    : <h1>{data.title}</h1>

            }
        </>
    )





















    // const [data, setData] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)




    // useEffect(() => {
    //     async function request() {
    //         setIsLoading(true)
    //         const test = await fetchApi.get(`products/${productId}`)

    //         setData(test)
    //         setIsLoading(false)
    //     }

    //     request()

    // }, [])



    return (
        <h1>product page</h1>
    )
}