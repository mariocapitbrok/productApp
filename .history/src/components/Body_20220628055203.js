import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import ProductForm from './ProductForm'

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/new-product" element={<ProductForm />} />
        <Route path="/products" render={props => <Products {...props} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Body
