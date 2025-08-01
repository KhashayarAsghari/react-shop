import { createContext, useCallback, useEffect, useReducer } from "react"
import { useState } from "react"
import Header from "./components/Header"
import BottomNavbar from "./components/BottomNavbar"
import ProductCard from "./components/ProductCard"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartPage from "./pages/CartPage"
import useCart from "./hooks/useCart"
import ProductPage from "./pages/ProductPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import cartReducer from "./reducers/CartReducer"

export const CartContext = createContext()
const queryClient = new QueryClient()

function App() {
  // const [cart, setCart] = useCart()

  const [cart, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem("cart")) ?? [])


  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <CartContext.Provider value={{
            cart,
            dispatch
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="*" element={<h1>not found</h1>} />
            </Routes>
          </CartContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>

    </>
  )
}

export default App
