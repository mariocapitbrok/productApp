import { useState, useEffect } from 'react'
import productService from '../services/products'

import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = () => {
  let initialCheckedArray = new Array(products.length).fill(false)

  const [products, setProducts] = useState([])
  const [checkedState, setCheckedState] = useState(initialCheckedArray)

  useEffect(() => {
    productService.getAll().then(products => setProducts(products))
  }, [])

  return (
    <div className="products">
      <ProductsHeader />
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
