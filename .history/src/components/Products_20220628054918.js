import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Products = props => {
  console.log(props)
  return (
    <div className="products">
      <ProductsHeader />
      <ProductsBody />
      <ProductsFooter />
    </div>
  )
}

export default Products
