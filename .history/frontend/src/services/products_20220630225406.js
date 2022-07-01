import axios from 'axios'

const baseUrl = 'https://safe-scrubland-81747.herokuapp.com/api/products'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getOne = id => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const create = newProduct => {
  const request = axios.post(baseUrl, newProduct)
  return request.then(response => response.data)
}

const update = (id, newProduct) => {
  const request = axios.put(`${baseUrl}/${id}`, newProduct)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(() => true)
}

const productService = {
  getAll,
  getOne,
  create,
  update,
  remove,
}

export default productService
