import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import ProductForm from './ProductForm'
import NotFound from './NotFound'

import Parent from './Parent'

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/parent" element={<Parent />}>
          <Route path=":child" />
        </Route>
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<ProductForm />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" exact={true} element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default Body
