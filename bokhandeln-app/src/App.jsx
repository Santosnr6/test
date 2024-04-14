import './App.css'
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/cartPage/CartPage';
import ProductsPage from './pages/productsPage/ProductsPage';

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={ <ProductsPage /> }
        />
        <Route path="/cart" element={ <CartPage /> }/>
      </Routes>

      {/* <ProductList 
        decreaseCartBalance={ decreaseCartBalance }
        increaseCartBalance={ increaseCartBalance } 
      /> */}
    </div>
    
  )
}

export default App;
