import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ProductForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const navigate = useNavigate()
  const location = useLocation()
  console.log(navigate, location)

  const handleNameChange = event => {
    event.preventDefault()
    setName(event.target.value)
  }

  const handleDescriptionChange = event => {
    event.preventDefault()
    setDescription(event.target.value)
  }

  const handlePriceChange = event => {
    event.preventDefault()
    setPrice(event.target.value)
  }

  const addProduct = event => {
    event.preventDefault()
    console.log(name, description, price)
    navigate('/products', { replace: true })
  }

  return (
    <div className="new-product">
      <form onSubmit={addProduct}>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <input
          type="number"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default ProductForm
