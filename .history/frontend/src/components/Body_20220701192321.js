import { Routes, Route, Navigate } from 'react-router-dom'

import Parent from './Parent'
import Home from './Home'
import Products from './Products'
import NotFound from './NotFound'

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/parent" element={<Parent />}>
          <Route path=":pathName" />
        </Route>
        <Route path="/products/*" element={<Products />}>
          <Route path=":pathName" />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" exact={true} element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default Body
