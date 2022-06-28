import React, { useState } from 'react'

const NewProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(null)

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

  const addProduct = () => {
    console.log('Product should be added now')
  }

  return (
    <div className="new-product">
      <form onSubmit={addProduct}>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <input
          type="number"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NewProduct
