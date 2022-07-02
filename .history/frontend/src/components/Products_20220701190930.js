import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import productService from '../services/products'

import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = () => {
  const [products, setProducts] = useState([])
  const [checkedState, setCheckedState] = useState([])

  useEffect(() => {
    productService.getAll().then(products => {
      setProducts(products)
    })
  }, [])

  useEffect(() => {
    const newCheckedState = new Array(products.length).fill(false)
    setCheckedState(newCheckedState)
  }, [products])

  return (
    <Routes>
      <Route
        path="/"
        element={{
          header: <h1>Header</h1>,
          body: <h2>Body</h2>,
          footer: <h1>Footer</h1>,
        }}
      />
    </Routes>
  )
}

export default Products
