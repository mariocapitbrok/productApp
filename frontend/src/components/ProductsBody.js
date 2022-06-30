import ProductList from './ProductList'

const ProductsBody = ({ products, checkedState, setCheckedState }) => {
  return (
    <div className="products-body">
      <ProductList
        products={products}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
    </div>
  )
}

export default ProductsBody
