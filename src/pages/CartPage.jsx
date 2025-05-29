import { useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";
import CartProductCard from "../components/CartProductCart";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import { CartContext } from "../App";

export default function CartPage() {

    const { cart } = useContext(CartContext)

    return (
        <>
            <Header />
            <div>
                {cart.map(item => (
                    <CartProductCard key={item} id={item} />)
                )}
            </div>
            <BottomNavbar />
        </>
    )
}