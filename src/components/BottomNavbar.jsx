export default function BottomNavbar() {

    return (
        <div className="fixed bg-white  bottom-0 left-0 w-full shadow-[0_-4px_8px_rgba(0,0,0,0.25)] flex justify-between items-center p-4">
            <img className="w-8" src="cart.svg" alt="" />
            <img className="w-8" src="home.svg" alt="" />
            <img className="w-8" src="user.svg" alt="" />
        </div>
    )
}