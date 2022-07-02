import { Routes, Route, Navigate } from 'react-router-dom'

import Parent from './Parent'
import Home from './Home'
import Products from './Products'
import NotFound from './NotFound'
import ProductForm from './ProductForm'
import Child from './Child'

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/parent" element={<Parent />}>
          <Route path=":id" element=""></Route>
        </Route>
        <Route path="/products" element={<Products />}>
          <Route exact path="child" element={<Child />}></Route>
          <Route path=":id" element={<ProductForm />}></Route>
        </Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="*"
          exact={true}
          element={<Navigate to="/not-found" />}
        ></Route>
      </Routes>
    </div>
  )
}

export default Body
