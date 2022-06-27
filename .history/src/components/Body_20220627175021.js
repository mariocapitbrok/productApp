import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Body = ({ products }) => {
  return (
    <div>
      <ProductsHeader />
      <ProductsBody data={products} />
      <ProductsFooter />
    </div>
  )
}

export default Body
