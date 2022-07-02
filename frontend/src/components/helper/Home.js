import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Products app</h1>
      <h3>Welcome to Home</h3>
      <Link to="/products">
        <button>Go to products</button>
      </Link>
    </div>
  )
}

export default Home
