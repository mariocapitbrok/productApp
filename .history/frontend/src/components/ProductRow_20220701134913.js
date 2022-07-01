import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductRow = ({ index, product, checkedState, setCheckedState }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = indexB => {
    setIsChecked(!isChecked)

    const newCheckedState = checkedState.map((checkboxState, indexA) => {
      return indexA === indexB ? !checkboxState : checkboxState
    })

    setCheckedState(newCheckedState)
  }

  return (
    <tr>
      <th scope="row">
        <input
          type="checkbox"
          onChange={() => handleOnChange(index)}
          checked={isChecked}
        />
      </th>
      <td className=".id">{product.id}</td>
      <td className=".name">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </td>
      <td className=".description">{product.description}</td>
      <td className="price currency">{product.price.toFixed(2)}</td>
    </tr>
  )
}

export default ProductRow
