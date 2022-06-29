import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import Joi from 'joi-browser'
import productService from '../services/products'

const ProductForm = () => {
  const [products, setProducts] = useOutletContext()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const navigate = useNavigate()
  const params = useParams()

  /* const schema = Joi.object({
    name: Joi.string().min(3).max(100).unique(),
    description: Joi.string().min(5).max(1000),
    price: Joi.Number().min(1).max(20000).precision(2),
  })

  schema.validate({
    name: name,
    description: description,
    price: price,
  }) */

  const schema = Joi.object({
    name: Joi.string().min(3).max(100),
    description: Joi.string().min(5).max(1000),
    price: Joi.number().min(1).max(20000).precision(2),
  })

  schema.validate({
    name: name,
    description: description,
    price: price,
  })

  useEffect(() => {
    if (params.id === 'new') return

    productService.getOne(params.id).then(product => {
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
    })
  }, [navigate, params.id])

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
      price: Number(price),
    }

    /* if (params.id === 'new') {
      productService.create(newProduct)
    } else {
      //productService.update(params.id, newProduct)
    }
    setProducts()
    console.log(products)
    //navigate('/products', { replace: true }) */

    console.log(newProduct)
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
            type="text"
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
