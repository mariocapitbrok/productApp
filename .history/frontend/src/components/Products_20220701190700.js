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
      <Route path="/" element={<h1>Testing Route</h1>} />
      <ProductsHeader
        products={products}
        setProducts={setProducts}
        checkedState={checkedState}
      />
      <ProductsBody
        checkedState={checkedState}
        setCheckedState={setCheckedState}
        products={products}
      />
      <ProductsFooter />
    </Routes>
  )
}

export default Products
