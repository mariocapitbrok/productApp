import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductRow = ({ product }) => {
  return (
    <tr>
      <th scope="row">
        <input type="checkbox" />
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
