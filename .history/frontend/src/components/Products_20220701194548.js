import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import productService from '../services/products'

import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'
import ProductForm from './ProductForm'
import Child from './Child'

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
        path="/new"
        exact
        element={<ProductForm products={products} setProducts={setProducts} />}
      />
      <Route
        path="/"
        element={
          <div className="products">
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
          </div>
        }
      />
    </Routes>
  )
}

export default Products
