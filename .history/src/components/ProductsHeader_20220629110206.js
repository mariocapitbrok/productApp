import { Link } from 'react-router-dom'
import productService from '../services/products'

const ProductsHeader = ({ products, setProducts, checkedState }) => {
  const handleRemove = () => {
    const selectedIds = checkedState.reduce((ids, state, index) => {
      if (state === true) ids = [...ids, products[index].id]
      return ids
    }, [])

    console.log(selectedIds)

    const remainingProducts = selectedIds.map(id => {
      console.log(products[id])
      return products[id]
    })
    //console.log(remainingProducts)
  }

  return (
    <div className="product-header">
      <div className="module-title">
        <h5>Products</h5>
      </div>
      <div className="module-menu-a">
        <Link to="/products/new">
          <button>
            <i className="fa-solid fa-plus"></i> Add product
          </button>
        </Link>
      </div>
      <div className="module-menu-b">
        <button>
          <i className="fa-solid fa-pencil"></i>
        </button>
        <button onClick={handleRemove}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  )
}

export default ProductsHeader
