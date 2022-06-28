import ProductList from './ProductList'

import { useState, useEffect } from 'react'
import productService from '../services/products'

const ProductsBody = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productService
      .getAll()
      .then(initialProducts => setProducts(initialProducts))
  }, [])

  return (
    <div className="products-body">
      <ProductList products={products} />
    </div>
  )
}

export default ProductsBody
