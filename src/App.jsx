import { useCallback, useEffect } from "react"
import { useState } from "react"
import Header from "./components/Header"
import BottomNavbar from "./components/BottomNavbar"
import ProductCard from "./components/ProductCard"


function App() {
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
      <div className="mt-8">
        {isLoading ? <h1>LOADING</h1>
          :
          products.map(product => <ProductCard title={product.title} image={product.image} price={product.price} />)
        }
      </div>
      <BottomNavbar />
    </>
  )
}

export default App
