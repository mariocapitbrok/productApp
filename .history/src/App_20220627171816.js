import { useState, useEffect } from 'react'
import productService from './services/products'

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
