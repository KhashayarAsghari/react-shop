import { createContext, useCallback, useEffect } from "react"
import { useState } from "react"
import Header from "./components/Header"
import BottomNavbar from "./components/BottomNavbar"
import ProductCard from "./components/ProductCard"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartPage from "./pages/CartPage"
import useCart from "./hooks/useCart"

export const CartContext = createContext()

function App() {
  const [cart, setCart] = useCart()

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{
          cart,
          setCart
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
