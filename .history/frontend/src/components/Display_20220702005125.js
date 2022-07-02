import { Outlet } from 'react-router-dom'

const Display = () => {
  return (
    <div>
      <h1>You are on display</h1>
      <Outlet />
    </div>
  )
}

export default Display
