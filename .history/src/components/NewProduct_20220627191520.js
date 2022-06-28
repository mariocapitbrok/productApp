import React, { useState } from 'react'

const NewProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(null)

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
