import './App.css'
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/cartPage/CartPage';
import ProductsPage from './pages/productsPage/ProductsPage';

function App() {

  /*
  const addToCart = (book) => {
  const bookIndex = cart.findIndex((b) => b.title === book.title);

  if (bookIndex === -1) {
    // Om boken inte finns i kundvagnen, lägg till en ny med kvantitet 1
    setCart((c) => [...c, { ...book, quantity: 1 }]);
  } else {
    // Om boken redan finns i kundvagnen, öka kvantiteten med 1
    setCart((c) =>
      c.map((b, index) =>
        index === bookIndex ? { ...b, quantity: b.quantity + 1 } : b
      )
    );
  }
};
*/

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
