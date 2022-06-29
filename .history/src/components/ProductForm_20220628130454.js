import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productService from '../services/products'

const ProductForm = () => {
  const [productId, setProductId] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    setProductId(params.id)

    if (productId === 'new') return

    if (productId) {
      productService.getOne(productId).then(product => {
        if (!product) return navigate('/not-found', { replace: true })

        setName(product.name)
        setDescription(product.description)
        setPrice(product.price)
      })
    }
  }, [navigate, params.id, productId])

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
    setPrice(Number(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()

    const newProduct = {
      id: (Math.random() * 1000).toFixed(0),
      name: name,
      description: description,
      price: price,
    }

    if (productId === 'new') {
      productService.create(newProduct)
    } else {
      productService.update(newProduct)
    }
    navigate('/products', { replace: true })
  }

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
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
          <textarea
            type="text"
            className="form-control"
            id="description"
            onChange={handleDescriptionChange}
            value={description}
          ></textarea>
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
