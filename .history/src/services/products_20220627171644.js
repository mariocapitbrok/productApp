import axios from 'axios'

const baseUrl = 'http://localhost:3001/products'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const productService = { getAll }

export default productService