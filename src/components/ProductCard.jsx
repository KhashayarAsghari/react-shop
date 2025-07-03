import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducers/CartReducer";

export default function ProductCard({ id, image, title, price }) {
    const { cart, dispatch } = useContext(CartContext)
    const navigate = useNavigate()

    function handleAddToCart(event) {
        event.stopPropagation()

        // setCart(prev => {
        //     if (prev.includes(id)) {
        //         return prev;
        //     } else {
        //         return [...prev, id]
        //     }
        // })
        dispatch({
            type: actionTypes.add,
            payload: id
        })
    }

    function handleRemoveFromCart(event) {
        debugger
        event.stopPropagation();

        dispatch({
            type: actionTypes.remove,
            payload: id
        })
    }


    return (
        <div onClick={() => navigate(`/product/${id}`)} className="rounded-sm w-full p-4 my-4 flex justify-between shadow-md">
            <img className="w-1/3 object-contain" src={image} alt="" />
            <div className="text-right flex flex-col justify-between">
                <h3>{title}</h3>
                <div>
                    <span>${price}</span>
                    {!!(cart.find(item => item.id == id))
                        ? <button onClick={handleRemoveFromCart} className="border px-2 mx-4">remove from cart</button>
                        :
                        <button onClick={handleAddToCart} className="border px-2 mx-4">add to cart</button>
                    }
                </div>
            </div>

        </div>
    )
}