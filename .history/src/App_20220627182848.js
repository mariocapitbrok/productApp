import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
