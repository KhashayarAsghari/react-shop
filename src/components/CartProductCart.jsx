import { useEffect, useState } from "react"

export default function CartProductCard({ id }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    if (!data) {
        return <h1>Loading</h1>
    }

    return (
        <div className="rounded-sm w-full p-4 my-4 flex justify-between shadow-md">
            <img className="w-1/3 object-contain" src={data.image} alt="" />
            <div className="text-right flex flex-col justify-between">
                <h3>{data.title}</h3>
                <div>
                    <span>${data.price}</span>
                </div>
            </div>
        </div>

    )
}