import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

function App() {
 
  const name = 'Jesper';

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={ <Home name={ name } />} />
          <Route path="/products" element={ <Products /> } />
          <Route path="/products/:id" element={ <SingleProduct /> } />
        </Routes>
      </div>  
    </Router>
  )
}

export default App
