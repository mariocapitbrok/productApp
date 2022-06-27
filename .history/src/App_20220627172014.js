import { useState, useEffect } from 'react'
import productService from './services/products'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productService
      .getAll()
      .then(initialProducts => setProducts(initialProducts))
  }, [])

  console.log(products)

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
