import React, { useState, useEffect } from 'react'
import { useNavigate, useMatch, useOutletContext } from 'react-router-dom'
import Joi from 'joi-browser'
import productService from '../services/products'

const ProductForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(1)
  const [newProduct, setNewProduct] = useState({})
  const [errors, setErrors] = useState({})

  const { products, setProducts } = useOutletContext()
  const { checkedState, setCheckedState } = useOutletContext()
  const navigate = useNavigate()
  const match = useMatch('/products/:id')
  const params = match ? match.params : { id: 'new' }

  const productSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(3).max(100),
    description: Joi.string().min(5).max(1000),
    price: Joi.number().min(1).max(20000).precision(2),
  }).required()

  const allNamesSchema = Joi.array().items(productSchema).unique('name')

  const validate = () => {
    let joiObjErrors = {}
    let joiArrErrors = {}
    let productsArray = [newProduct, ...products]

    const objectResult = Joi.validate(newProduct, productSchema, {
      abortEarly: false,
    })

    const arrayResult = Joi.validate(productsArray, allNamesSchema, {
      abortEarly: false,
    })

    if (!objectResult.error && !arrayResult.error) return null

    if (objectResult.error !== null) {
      for (let i of objectResult.error.details) {
        joiObjErrors[i.path[0]] = i.message
      }
    }

    if (arrayResult.error) {
      const path = arrayResult.error.details[0].context.path
      const message = arrayResult.error.details[0].message
      const currentName = products
        .filter(product => product.id === params.id)
        .map(product => product.name)[0]

      if (
        path === 'name' &&
        message.includes('duplicate') &&
        params.id !== 'bulkedit'
      ) {
        if (name !== currentName)
          joiArrErrors = { name: `Type a different name, ${message}` }
      } else {
        joiArrErrors = {}
      }
    }

    const joiErrors = { ...joiObjErrors, ...joiArrErrors }

    return joiErrors
  }

  const validateRequired = () => {
    const customErrors = {}

    if (!name && params.id !== 'bulkedit')
      customErrors.name = '"name" field is missing'
    if (!description && params.id !== 'bulkedit')
      customErrors.description = '"description" field is missing'
    if (!price && params.id !== 'bulkedit')
      customErrors.price = '"price" field is missing'

    return customErrors
  }

  useEffect(() => {
    //handleCleanUp()

    setNewProduct({
      price: price ? price : 1,
    })

    if (params.id === 'new' || params.id === 'bulkedit') return

    productService
      .getOne(params.id)
      .then(product => {
        setName(product.name)
        setDescription(product.description)
        setPrice(product.price)
        setNewProduct({
          name: product.name,
          description: product.description,
          price: product.price,
        })
      })
      .then(setErrors(validate()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  /* const generateId = () => {
    const maxId =
      products.length > 0 ? Math.max(...products.map(product => product.id)) : 0
    return String(maxId + 1)
  } */

  const handleCreate = () => {
    const product = {
      //id: generateId(),
      ...newProduct,
    }

    productService.create(product).then(createdProduct => {
      setProducts([...products, createdProduct])
      return
    })
    //.then(handleCleanUp())
  }

  const handleUpdate = () => {
    const id = params.id
    const updatedProducts = products.map(product =>
      product.id === id ? { id, ...newProduct } : product
    )

    productService.update(id, newProduct).then(setProducts(updatedProducts))
    //.then(handleCleanUp())
  }

  const handleBulkEdit = () => {
    const selectedIds = checkedState.reduce((ids, state, index) => {
      if (state === true) ids = [...ids, products[index].id]
      return ids
    }, [])

    console.log(newProduct)

    /* let updatedProducts = products

    selectedIds.forEach(id => {
      updatedProducts = updatedProducts.map(product =>
        product.id === id ? newProduct : product
      )
    })

    setProducts(updatedProducts)

    let resolvePromise = Promise.resolve()

    selectedIds.forEach(id => {
      resolvePromise = resolvePromise.then(response =>
        productService.update(id, newProduct)
      )
    }) */
  }

  const handleCleanUp = () => {
    setName('')
    setDescription('')
    setPrice(1)
    setNewProduct({})
    setErrors({})
  }

  const handleSubmit = event => {
    event.preventDefault()

    const submitErrors = { ...validate(), ...validateRequired() }
    setErrors(submitErrors)
    console.log('submitErrors', submitErrors)
    console.log('errors', errors)
    if (Object.values(submitErrors ? submitErrors : {}).length > 0) {
      console.log('there are errors before submit')
      return
    }

    if (params.id === 'new') {
      console.log('before create')
      handleCreate()
      console.log('created')
    } else if (params.id === 'bulkedit') {
      handleBulkEdit()
    } else {
      handleUpdate()
    }

    navigate('/products', { replace: true })
  }

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        {params.id !== 'bulkedit' && (
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
        )}

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
            type="number"
            className="form-control"
            id="price"
            onChange={handlePriceChange}
            value={price.toString()}
          />
          {errors && errors.price && (
            <div className="alert alert-danger">{errors.price}</div>
          )}
        </div>
        <button type="submit" className="submit btn btn-primary">
          Save
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => navigate('/products', { replace: true })}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default ProductForm
