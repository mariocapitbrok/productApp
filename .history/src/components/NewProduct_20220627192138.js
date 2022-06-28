import React, { useState } from 'react'

const NewProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(null)

  const handleNameChange = event => {
    event.preventDefault()
  }

  const handleDescriptionChange = event => {
    event.preventDefault()
  }

  const handlePriceChange = event => {
    event.preventDefault()
  }

  return (
    <div className="new-product">
      <form onSubmit="addProduct">
        <input type="text" name="name" />
        <input type="text" name="description" />
        <input type="number" name="price" />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NewProduct
