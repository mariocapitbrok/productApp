import { useState, useEffect } from 'react'
import { Outlet, useMatch } from 'react-router-dom'
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

  const match = useMatch('products/:id')

  if (match) {
    return (
      <div>
        <Outlet
          context={{ products, setProducts, checkedState, setCheckedState }}
        />
      </div>
    )
  }

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
