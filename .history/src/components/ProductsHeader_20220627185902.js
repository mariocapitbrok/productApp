import { Link } from 'react-router-dom'

const ProductsHeader = () => {
  return (
    <div className="product-header">
      <div className="module-title">
        <h5>Products</h5>
      </div>
      <div className="module-menu-a">
        <Link to="/products">
          <button>
            <i className="fa-solid fa-plus"></i> Add product
          </button>
        </Link>
      </div>
      <div className="module-menu-b">
        <button>
          <i className="fa-solid fa-pencil"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  )
}

export default ProductsHeader
