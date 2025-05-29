import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../App"

export default function BottomNavbar() {

    const test = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div className="fixed bg-white  bottom-0 left-0 w-full shadow-[0_-4px_8px_rgba(0,0,0,0.25)] flex justify-between items-center p-4">
            <div className="relative">
                <img onClick={() => navigate("/cart")} className="w-8" src="cart.svg" alt="" />
                <span className="absolute top-0 right-0 bg-red-200 rounded-full">{test.cart.length}</span>
            </div>
            <img className="w-8" src="home.svg" alt="" />
            <img className="w-8" src="user.svg" alt="" />
        </div>
    )
}