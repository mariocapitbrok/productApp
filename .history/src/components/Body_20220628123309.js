import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import productService from '../services/products'

import Home from './Home'
import Products from './Products'
import ProductForm from './ProductForm'
import NotFound from './NotFound'

const Body = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productService
      .getAll()
      .then(initialProducts => setProducts(initialProducts))
  }, [])

  return (
    <div className="body">
      <Routes>
        <Route
          path="/products/:id"
          element={<ProductForm setProducts={setProducts} />}
        />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default Body
