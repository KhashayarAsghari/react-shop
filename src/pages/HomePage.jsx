import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../App";

export default function HomePage() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setIsLoading(false)
                setProducts(data)
            });
    }, [])

    return (
        <>
            <Header />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
                {isLoading ? <h1>LOADING</h1>
                    :
                    products.map(product => <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} />)
                }
            </div>
            <BottomNavbar />
        </>
    )
}