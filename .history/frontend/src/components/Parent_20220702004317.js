import { Outlet, useMatch } from 'react-router-dom'

const Parent = () => {
  const match = useMatch('/products/:id')

  console.log(match)
  const parentHello = 'Hello from Parent!'
  return (
    <div>
      <Outlet context={[parentHello]}>
        <h1>{}</h1>
      </Outlet>
    </div>
  )
}

export default Parent
