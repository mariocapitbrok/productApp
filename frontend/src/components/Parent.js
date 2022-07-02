import { Routes, Route } from 'react-router-dom'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Parent</h1>} />
        <Route path="/child" element={<Child />} />
      </Routes>
    </div>
  )
}

export default Parent
