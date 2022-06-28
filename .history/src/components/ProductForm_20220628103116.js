import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productService from '../services/products'

const ProductForm = () => {
  const [product, setProduct] = useState({})
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      productService.getOne(params.id).then(product => setProduct(product))
    }
  }, [])

  console.log(product)

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
      <form onSubmit={addProduct}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            onChange={handlePriceChange}
            value={price}
          />
        </div>
        <button type="submit" className="submit btn btn-primary">
          Save
        </button>
      </form>
    </div>
  )
}

export default ProductForm
