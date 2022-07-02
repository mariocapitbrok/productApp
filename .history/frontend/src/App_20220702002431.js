import { Routes, Route, Navigate } from 'react-router-dom'

import Parent from './Parent'
import Home from './Home'
import Products from './Products'
import NotFound from './NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/products/*" element={<Products />}></Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" exact={true} element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default App
