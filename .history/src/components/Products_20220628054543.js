import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = ({ test }) => {
  console.log(test)
  return (
    <div className="products">
      <ProductsHeader />
      <ProductsBody />
      <ProductsFooter />
    </div>
  )
}

export default Products
