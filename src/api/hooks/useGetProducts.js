import { useQuery } from "@tanstack/react-query";

export default function useGetProducts() {

    async function queryFn() {
        return await fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => data);
    }

    return useQuery({
        queryFn,
        queryKey: ["all-products"]
    })
}