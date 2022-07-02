import { Routes, Route, Navigate } from 'react-router-dom'

import Display from './components/Display'
import Parent from './components/Parent'
import Child from './components/Child'
import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/parent" element={<Parent />}>
          <Route path=":id" element=""></Route>
        </Route>
        <Route path="products" element={<Products />}>
          <Route exact path="new" element={<Parent />}></Route>
          <Route path=":id" element={<Child />}></Route>
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" exact={true} element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default App
