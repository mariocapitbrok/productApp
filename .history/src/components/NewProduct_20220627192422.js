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
      <form onSubmit="addProduct">
        <input type="text" name="name" value={handleNameChange} />
        <input type="text" name="description" value={handleDescriptionChange} />
        <input type="number" name="price" value={handlePriceChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NewProduct
