import { useParams } from "react-router-dom"
import useGetSingleProduct from "../api/hooks/useGetSingleProduct"

export default function ProductPage() {
    const { productId } = useParams()
    const { data, isLoading, isError } = useGetSingleProduct(productId)

    if (isLoading) {
        return <h1>LOADING</h1>
    }

    return (
        <>
            {isError
                ? <h1>error</h1>
                : <>
                    <h1>{data.title}</h1>
                    <img src={data.image} />
                </>
            }
        </>
    )
}