import { useParams, useMatch } from 'react-router-dom'

const Child = () => {
  const params = useParams()

  console.log(params)
  return (
    <>
      <h2>Child</h2>
      <div>child elements</div>
    </>
  )
}

export default Child
