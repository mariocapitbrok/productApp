import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = props => {
  return (
    <div className="products">
      <ProductsHeader />
      <ProductsBody products={products} />
      <ProductsFooter />
    </div>
  )
}

export default Products
