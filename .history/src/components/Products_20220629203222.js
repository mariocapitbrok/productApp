import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
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
      const newCheckedState = new Array(products.length).fill(false)
      setCheckedState(newCheckedState)
    })
  }, [])

  useEffect(() => {
    const newCheckedState = new Array(products.length).fill(false)
    setCheckedState(newCheckedState)
  }, [products])

  return (
    <div className="products">
      <Outlet
        context={[products, setProducts, checkedState, setCheckedState]}
      />
      <ProductsHeader
        products={products}
        setProducts={setProducts}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
      <ProductsBody
        products={products}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
      <ProductsFooter />
    </div>
  )
}

export default Products
