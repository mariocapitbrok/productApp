import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Header = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/new-product">New product</Link>
      </div>
      <Routes>
        <Route path="/new-product" element={<></>} />
        <Route path="/products" element={<></>} />
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  )
}

export default Header
