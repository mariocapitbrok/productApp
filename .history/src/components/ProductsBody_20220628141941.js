import ProductList from './ProductList'

const ProductsBody = ({ products, checkedState, setCheckedState }) => {
  return (
    <div className="products-body">
      <ProductList products={products} setCheckedState={setCheckedState} />
    </div>
  )
}

export default ProductsBody
