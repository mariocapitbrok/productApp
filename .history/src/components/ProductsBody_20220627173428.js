const ProductRow = ({ data: product }) => {
  return (
    <tr>
      <th scope="row">
        <input type="checkbox" />
      </th>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const ProductsBody = ({ products }) => {
  return (
    <div className="products-body">
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
            <ProductRow key={product.id} data={product} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsBody
