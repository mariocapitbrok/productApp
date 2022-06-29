import axios from 'axios'

const baseUrl = 'http://localhost:3001/products'

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

const removeMany = idArray => {
  const request = idArray.foreach(id => {
    axios.delete(`${baseUrl}/${id}`)
  })
  return request.then(() => true)
}

const productService = {
  getAll,
  getOne,
  create,
  update,
  remove,
  removeMany,
}

export default productService
