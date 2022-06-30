import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import Joi from 'joi-browser'
import productService from '../services/products'

const ProductForm = () => {
  const [products, setProducts] = useOutletContext()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(1)
  const [newProduct, setNewProduct] = useState({})
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const params = useParams()

  const schemaA = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(3).max(100),
    description: Joi.string().min(5).max(1000),
    price: Joi.number().min(1).max(20000).precision(2),
  }).required()

  const schemaB = Joi.products.map(product => product.name).unique()
  console.log(schemaB)

  const validate = () => {
    const resultA = Joi.validate(newProduct, schemaA, {
      abortEarly: false,
    })

    const result = resultA

    console.log(result)

    if (!result.error) return null

    const joiErrors = {}
    for (let i of result.error.details) {
      joiErrors[i.path[0]] = i.message
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

  useEffect(() => {
    setErrors(validate())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, description, price])

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
    let value = Number(event.target.value)
    if (isNaN(value)) return 0
    if (typeof value === 'undefined') return 0
    if (value === null) value = 0
    setPrice(value)
    setNewProduct({
      ...newProduct,
      price: value,
    })
  }

  const handleCreate = () => {
    const product = {
      id: String((Math.random() * 1000).toFixed(0)),
      ...newProduct,
    }
    productService.create(product).then(response => {
      setProducts([...products, product])
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

    if (errors) return

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
          {errors && errors.name && (
            <div className="alert alert-danger">{errors.name}</div>
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
          {errors && errors.description && (
            <div className="alert alert-danger">{errors.description}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            //step="1"
            //ng-pattern="/^[0-9]{1,8}$|^$/"
            className="form-control"
            id="price"
            onChange={handlePriceChange}
            value={price}
          />
          {errors && errors.price && (
            <div className="alert alert-danger">{errors.price}</div>
          )}
        </div>
        <button type="submit" className="submit btn btn-primary">
          Save
        </button>
      </form>
    </div>
  )
}

export default ProductForm
