import { useContext } from "react";
import { CartContext } from "../App";

export default function ProductCard({ id, image, title, price }) {
    const { cart, setCart } = useContext(CartContext)

    function handleAddToCart() {
        setCart(prev => {
            if (prev.includes(id)) {
                return prev;
            } else {
                return [...prev, id]
            }
        })
    }

    function handleRemoveFromCart() {
        setCart(cart.filter(item => item != id))
    }

    return (
        <div className="rounded-sm w-full p-4 my-4 flex justify-between shadow-md">
            <img className="w-1/3 object-contain" src={image} alt="" />
            <div className="text-right flex flex-col justify-between">
                <h3>{title}</h3>
                <div>
                    <span>${price}</span>
                    {cart.includes(id)
                        ? <button onClick={handleRemoveFromCart} className="border px-2 mx-4">remove from cart</button>
                        :
                        <button onClick={handleAddToCart} className="border px-2 mx-4">add to cart</button>
                    }
                </div>
            </div>

        </div>
    )
}