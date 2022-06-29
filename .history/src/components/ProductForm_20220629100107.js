import React, { useState, useEffect } from 'react'
import { useOutletContext, useNavigate, useParams } from 'react-router-dom'
//import Joi from 'joi-browser'
import productService from '../services/products'

const ProductForm = () => {
  const [products, setProducts] = useOutletContext()
  const navigate = useNavigate()
  const params = useParams()
  const [productId, setProductId] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [newProduct, setNewProduct] = useState({
    id: Number((Math.random() * 1000).toFixed(0)),
  })

  /* const schema = {
    name: Joi.string().min(100).max(100).unique(),
    description: Joi.string().min(5).max(1000),
    price: Joi.min(1).max(20000).precision(2),
  }

  const validate = () => {
    const result = Joi.validate(newProduct, schema)
    console.log(result)
  } */

  setProductId(params.id)

  useEffect(() => {
    setProductId(params.id)

    if (productId === 'new') return

    if (productId) {
      productService.getOne(productId).then(product => {
        if (!product) return navigate('/not-found', { replace: true })

        setName(product.name)
        setDescription(product.description)
        setPrice(product.price)

        setNewProduct({
          ...newProduct,
          name: product.name,
          description: product.description,
          price: product.price,
        })
      })
    }
  }, [navigate, params.id, productId])

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

  const handleSubmit = event => {
    event.preventDefault()

    if (productId === 'new') {
      productService
        .create(newProduct)
        .then(setProducts([...products, newProduct]))
        .then(navigate('/products', { replace: true }))
    } else {
      const id = Number(productId)
      productService
        .update(id, newProduct)
        .then(updatedProduct => {
          setProducts(
            products.map(product =>
              product.id !== id ? product : updatedProduct
            )
          )
        })
        .then(navigate('/products', { replace: true }))
    }
  }

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
