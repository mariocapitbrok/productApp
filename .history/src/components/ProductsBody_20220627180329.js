import ProductList from './ProductList'

const ProductsBody = ({ products }) => {
  return (
    <div className="products-body">
      <ProductList products={products} />
    </div>
  )
}

export default ProductsBody
