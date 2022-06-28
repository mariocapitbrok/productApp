import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import NewProduct from './NewProduct'

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Body
