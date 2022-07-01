import ProductRow from './ProductRow'

const ProductList = ({ products, checkedState, setCheckedState }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
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
          {products.map((product, index) => (
            <ProductRow
              key={product.id}
              index={index}
              product={product}
              checkedState={checkedState}
              setCheckedState={setCheckedState}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
