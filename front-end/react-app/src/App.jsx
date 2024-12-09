// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import OurProducts from './OurProducts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourProducts" element={<OurProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <header className="App-header">
      <h1>Welcome to Our Shop</h1>
      <p>Discover amazing products with exclusive deals!</p>
      <Link to = "/ourProducts" style={{color: 'white', textDecoration: 'none', border: '2px solid white', padding:'.7rem'}}>
        Browse Products 
      </Link>
    </header>
  );
};

export default App;
