import ProductsHeader from './ProductsHeader'
import ProductsBody from './ProductsBody'
import ProductsFooter from './ProductsFooter'

const Body = () => {
  return (
    <div>
      <ProductsHeader />
      <ProductsBody products={products} />
      <ProductsFooter />
    </div>
  )
}

export default Body
