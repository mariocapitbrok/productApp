import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = ({ products, setProducts }) => {
  return (
    <div className="products">
      <ProductsHeader />
      <ProductsBody products={products} />
      <ProductsFooter />
    </div>
  )
}

export default Products
