import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Header = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/new-product">New product</Link>
      </div>
    </Router>
  )
}

export default Header
