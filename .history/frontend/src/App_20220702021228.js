import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import ProductForm from './components/ProductForm'
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path="products" element={<Products />}>
          <Route exact path="new" element={<ProductForm />}></Route>
          <Route path=":id" element={<ProductForm />}></Route>
        </Route>
        <Route path="not-found" element={<NotFound />} />
        <Route path="/" element={<Navigate replace to="products" />} />
        <Route path="*" exact={true} element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default App
