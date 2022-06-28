import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewProduct = ({ router, location }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

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

  const addProduct = event => {
    event.preventDefault()
    console.log(name, description, price)
    //router.replace(location.state)
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
