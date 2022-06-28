import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import ProductForm from './ProductForm'

const Body = () => {
  return (
    <div className="body">
      <Route path="/new-product" element={<ProductForm />} />
      <Route path="/products" component={Products} />
      <Route path="/" element={<Home />} />
    </div>
  )
}

export default Body
