import { useParams, useMatch } from 'react-router-dom'

const Child = () => {
  const params = useParams()
  const match = useMatch('/products/:id')

  console.log('params', params, 'match', match)
  return (
    <>
      <h2>Child</h2>
      <div>child elements</div>
    </>
  )
}

export default Child
