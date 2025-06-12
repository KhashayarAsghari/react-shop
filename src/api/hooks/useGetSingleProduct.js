import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../axiosConfig";

export default function useGetSingleProduct(productId) {

    async function queryFn() {
        return await fetchApi.get(`products/${productId}`)
    }

    return useQuery({
        queryFn,
        queryKey: [`product-${productId}`]
    })
}