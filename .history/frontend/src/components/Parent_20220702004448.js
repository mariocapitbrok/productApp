import { Outlet } from 'react-router-dom'

const Parent = () => {
  const parentHello = 'Hello from Parent!'
  return (
    <div>
      <Outlet context={[parentHello]}>
        <h1>{Parent}</h1>
      </Outlet>
    </div>
  )
}

export default Parent
