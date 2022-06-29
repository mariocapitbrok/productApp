import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import Joi from 'joi-browser'
import productService from '../services/products'

const ProductForm = () => {
  const [products, setProducts] = useOutletContext()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [newProduct, setNewProduct] = useState({})
  //const [errors, setErrors] = useState([])

  const navigate = useNavigate()
  const params = useParams()

  const schema = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(1).max(100),
    description: Joi.string().min(1).max(1000),
    price: Joi.number().min(0).max(20000).precision(2),
  })

  const validate = () => {
    const result = Joi.validate(newProduct, schema, {
      abortEarly: false,
    })
    if (!result.error) return null

    const errors = {}
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
    }
    // console.log(errors)
    return errors
  }

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
    setNewProduct({
      ...newProduct,
      name: event.target.value,
    })
  }

  const handleDescriptionChange = event => {
    event.preventDefault()
    setDescription(event.target.value)
    setNewProduct({
      ...newProduct,
      description: event.target.value,
    })
  }

  const handlePriceChange = event => {
    event.preventDefault()
    setPrice(Number(event.target.value))
    setNewProduct({
      ...newProduct,
      price: Number(event.target.value),
    })
  }

  const generateId = () => {
    // will be removed when connected to database
    setNewProduct({
      id: (Math.random() * 1000).toFixed(0),
      ...newProduct,
    })
    console.log(newProduct)
  }

  const handleCreate = () => {
    productService
      .create(newProduct)
      .then(setProducts([...products, newProduct]))
  }

  const handleSubmit = event => {
    event.preventDefault()

    /* if (params.id === 'new') {
      productService.create(newProduct)
    } else {
      //productService.update(params.id, newProduct)
    }
    setProducts()
    console.log(products)
    //navigate('/products', { replace: true }) */

    generateId() // will be removed when connected to database
    //handleCreate()
    //generateId() // will be removed when connected to database
  }

  validate()
  //console.log(newProduct)

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
