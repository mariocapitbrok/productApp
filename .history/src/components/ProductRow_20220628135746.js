import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductRow = ({ product }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }
  console.log(isChecked)

  return (
    <tr>
      <th scope="row">
        <input type="checkbox" onChange={handleOnChange} checked={isChecked} />
      </th>
      <td>{product.id}</td>
      <td>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </td>
      <td>{product.description}</td>
      <td className="currency">{product.price.toFixed(2)}</td>
    </tr>
  )
}

export default ProductRow
