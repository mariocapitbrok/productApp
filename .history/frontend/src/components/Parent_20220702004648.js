import { useMatch } from 'react-router-dom'

const Parent = () => {
  const match = useMatch('/products/:id')

  console.log(match)
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  )
}

export default Parent
