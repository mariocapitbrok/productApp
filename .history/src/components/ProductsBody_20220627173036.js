const Product = ({ data }) => {
  return (
    <tr>
      <th scope="row">
        <input type="checkbox" />
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
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
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Product key={product.id} data={product} />
          ))}
          <tr>
            <th scope="row">
              <input type="checkbox" />
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">
              <input type="checkbox" />
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">
              <input type="checkbox" />
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductsBody
