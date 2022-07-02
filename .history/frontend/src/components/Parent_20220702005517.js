import { useMatch } from 'react-router-dom'

const Parent = () => {
  const match = useMatch('/:id')

  console.log(match)
  return (
    <div>
      <h1>Parent</h1>
    </div>
  )
}

export default Parent
