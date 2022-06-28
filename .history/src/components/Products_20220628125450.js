import { useState, useEffect } from 'react'

import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productService.getAll().then(products => setProducts(products))
  }, [])

  return (
    <div className="products">
      <ProductsHeader />
      <ProductsBody products={products} />
      <ProductsFooter />
    </div>
  )
}

export default Products
