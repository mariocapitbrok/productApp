import { useState, useEffect } from 'react'
import productService from '../services/products'

import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'
import ProductForm from './ProductForm'

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
  )
}

export default Products
