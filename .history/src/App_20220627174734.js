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

  return (
    <div>
      <Header />
      <Body data={products} />
      <Footer />
    </div>
  )
}

export default App
