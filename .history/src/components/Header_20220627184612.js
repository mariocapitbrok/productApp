import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Header = () => {
  return (
    <Router>
      <Routes>
        <Route path="/new-product" element={<></>} />
        <Route path="/products" element={<></>} />
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  )
}

export default Header
