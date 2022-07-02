import { Routes, Route } from 'react-router-dom'

const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <Routes>
        <Route path="/child" element={<Child />} />
      </Routes>
    </div>
  )
}

export default Parent
