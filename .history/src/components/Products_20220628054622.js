import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = ({ history, match }) => {
  console.log(history, match)
  return (
    <div className="products">
      <ProductsHeader />
      <ProductsBody />
      <ProductsFooter />
    </div>
  )
}

export default Products
