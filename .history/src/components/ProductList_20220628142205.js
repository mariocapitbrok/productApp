import ProductRow from './ProductRow'

const ProductList = ({ products, checkedState, setCheckedState }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow
            key={product.id}
            product={product}
            checkedState={checkedState}
            setCheckedState={setCheckedState}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ProductList
