import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

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
    <div className="product-form">
      <form onSubmit={addProduct} class="row g-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <label htmlFor="number" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="number"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />
        <div class="col-12">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
