import { useState, useEffect } from 'react'
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
      setCheckedState(new Array(products.length).fill(false))
    })
  }, [checkedState])

  console.log(checkedState)

  return (
    <div className="products">
      <ProductsHeader
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
