import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom' // test
import productService from '../services/products'

import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'
import ProductChild from './ProductChild'

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
    <div className="products">
      <Outlet context={[products, setProducts]} />
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
      <Routes>
        <Route path="/product-child" element={<ProductChild />} />
      </Routes>
    </div>
  )
}

export default Products
