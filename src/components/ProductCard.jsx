export default function ProductCard({ image, title, price }) {

    return (
        <div className="rounded-sm w-full p-4 my-4 flex justify-between shadow-md">
            <img className="w-1/3 object-contain" src={image} alt="" />
            <div className="text-right flex flex-col justify-between">
                <h3>{title}</h3>
                <span>${price}</span>
            </div>
        </div>
    )
}