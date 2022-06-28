import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import ProductForm from './ProductForm'

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/products/:id" element={<ProductForm />} />
        <Route path="/products/new" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        {/* <NotFound to="/not-found" /> */}
      </Routes>
    </div>
  )
}

export default Body
