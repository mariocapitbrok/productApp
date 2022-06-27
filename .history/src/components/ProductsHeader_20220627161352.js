const ProductsHeader = () => {
  return (
    <div className="product-header">
      <div className="module-title">
        <h5>Products</h5>
      </div>
      <div className="module-menu-a">
        <button>
          <i class="fa-solid fa-plus"></i>
          Add product
        </button>
      </div>
      <div className="module-menu-b">
        <button>
          <i class="fa-solid fa-pencil"></i>
        </button>
        <button>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  )
}

export default ProductsHeader
