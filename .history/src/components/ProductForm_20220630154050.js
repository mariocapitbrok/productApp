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

  const productSchema = Joi.object({
    name: Joi.string().min(3).max(100),
    description: Joi.string().min(5).max(1000),
    price: Joi.number().min(1).max(20000).precision(2),
    id: Joi.string(),
  }).required()

  const allNamesSchema = Joi.array().items(productSchema).unique('name')

  const validate = () => {
    const objectResult = Joi.validate(newProduct, productSchema, {
      abortEarly: false,
    })

    let productsArray = []

    if (params.id === 'new') {
      productsArray = [newProduct, ...products]
    } else {
      productsArray = [newProduct, ...products]
    }

    console.log('productsArray', productsArray)
    const arrayResult = Joi.validate(productsArray, allNamesSchema, {
      abortEarly: false,
    })

    if (!objectResult.error && !arrayResult.error) return null

    let joiObjErrors = {}
    let joiArrErrors = {}

    if (objectResult.error !== null) {
      for (let i of objectResult.error.details) {
        joiObjErrors[i.path[0]] = i.message
      }
    }

    console.log('arrayResult', arrayResult)
    if (arrayResult.error) {
      const path = arrayResult.error.details[0].context.path
      const message = arrayResult.error.details[0].message
      console.log('message', message, 'path', path)

      if (path === 'name' && message.includes('duplicate')) {
        joiArrErrors = { name: `Type a different name, ${message}` }
      }
    }

    console.log('joiArrErrors', joiArrErrors)
    console.log('joiObjErrors', joiObjErrors)

    const joiErrors = { ...joiObjErrors, ...joiArrErrors }
    console.log('joiErrors', joiErrors)

    return joiErrors
  }

  useEffect(() => {
    setNewProduct({
      price: price ? price : 1,
    })

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
  }, [navigate, params.id, price])

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

    validate()
    if (errors) return

    if (params.id === 'new') {
      handleCreate()
    } else {
      handleUpdate()
    }

    navigate('/products', { replace: true })
  }

  //console.log(errors)
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