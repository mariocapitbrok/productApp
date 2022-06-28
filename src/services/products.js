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

const addOne = newProduct => {
  const request = axios.post(baseUrl, newProduct)
  return request.then(response => response.data)
}

const updateOne = (id, newProduct) => {
  const request = axios.put(`${baseUrl}/${id}`, newProduct)
  return request.then(response => response.data)
}

const removeOne = id => {
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
  addOne,
  updateOne,
  removeOne,
  removeMany,
}

export default productService
