import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import Joi from 'joi-browser'
import productService from '../services/products'

const ProductForm = () => {
  const [products, setProducts] = useOutletContext()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [product, setProduct] = useState({})
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
    const result = Joi.validate(product, schema, {
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
    setProduct({
      ...product,
      name: event.target.value,
    })
  }

  const handleDescriptionChange = event => {
    event.preventDefault()
    setDescription(event.target.value)
    setProduct({
      ...product,
      description: event.target.value,
    })
  }

  const handlePriceChange = event => {
    event.preventDefault()
    setPrice(Number(event.target.value))
    setProduct({
      ...product,
      price: Number(event.target.value),
    })
  }

  const handleCreate = () => {

    const 

    productService
      .create(product)
      .then(setProducts([...products, product]))
  }

  const handleSubmit = event => {
    event.preventDefault()

    /* if (params.id === 'new') {
      productService.create(product)
    } else {
      //productService.update(params.id, product)
    }
    setProducts()
    console.log(products)
    //navigate('/products', { replace: true }) */

    console.log(product)
    //handleCreate()
  }

  validate()
  //console.log(product)

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
