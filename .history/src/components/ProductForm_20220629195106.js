import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import Joi from 'joi-browser'
import productService from '../services/products'

const ProductForm = () => {
  const [products, setProducts, checkedState, setCheckedState] =
    useOutletContext()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [newProduct, setNewProduct] = useState({})

  const navigate = useNavigate()
  const params = useParams()

  const schema = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(3).max(100),
    description: Joi.string().min(5).max(1000),
    price: Joi.number().min(1).max(20000).precision(2),
  })

  const validate = () => {
    const result = Joi.validate(newProduct, schema, {
      abortEarly: false,
    })
    if (!result.error) return null

    const joiErrors = {}
    for (let item of result.error.details) {
      joiErrors[item.path[0]] = item.message
    }

    return joiErrors
  }

  useEffect(() => {
    if (params.id === 'new') return

    productService.getOne(params.id).then(product => {
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
      setNewProduct({
        name: product.name,
        description: product.description,
        price: product.price,
      })
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
    const value = event.target.value
    setPrice(Number(value))
    setNewProduct({
      ...newProduct,
      price: Number(value),
    })
  }

  const handleCreate = () => {
    const product = {
      id: String((Math.random() * 1000).toFixed(0)),
      ...newProduct,
    }
    productService.create(product).then(response => {
      setProducts([...products, product])
      setCheckedState([...checkedState, false])
      return
    })
  }

  const handleUpdate = () => {
    const id = params.id
    const updatedProducts = products.map(product =>
      product.id === id ? { id, ...newProduct } : product
    )

    productService.update(id, newProduct).then(setProducts(updatedProducts))
  }

  const handleSubmit = event => {
    event.preventDefault()

    const validationErrors = validate()
    //console.log(validationErrors)
    if (validationErrors) return

    if (params.id === 'new') {
      handleCreate()
    } else {
      handleUpdate()
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
          {validate() && (
            <div className="alert alert-danger">{validate().name}</div>
          )}
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
          {validate() && (
            <div className="alert alert-danger">{validate().description}</div>
          )}{' '}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            step="1"
            ng-pattern="/^[0-9]{1,8}$|^$/"
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
