const ProductRow = ({ product }) => {
  return (
    <tr>
      <th scope="row">
        <input type="checkbox" />
      </th>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td className="currency">{product.price.toFixed(2)}</td>
    </tr>
  )
}

export default ProductRow
