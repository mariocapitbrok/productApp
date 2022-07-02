import { Outlet, useMatch } from 'react-router-dom'

const Display = () => {
  const match = useMatch('/:id')

  return (
    <div>
      <h1>You are on {match.params.id}</h1>
      <Outlet />
    </div>
  )
}

export default Display
