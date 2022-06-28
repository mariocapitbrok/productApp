import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import ProductForm from './ProductForm'

const Body = () => {
  return (
    <div className="body">
      <Switch>
        <Route path="/new-product" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Switch>
    </div>
  )
}

export default Body
