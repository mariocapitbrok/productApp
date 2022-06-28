import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Products from './Products'

const Body = () => {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/new-product" element={<></>} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Body
