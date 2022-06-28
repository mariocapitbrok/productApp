import { useState, useEffect } from 'react'
import productService from '../services/products'

import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = props => {
  return (
    <div className="products">
      <ProductsHeader />
      <ProductsBody />
      <ProductsFooter />
    </div>
  )
}

export default Products
