import './bookItem.css';
import { useState, useEffect } from 'react';
import useCartStore from '../../store/cart-store';

function BookItem({ book }) {
  const [bookBalance, setBookBalance] = useState(0);

  const { cart, cartBalance, increaseBalance, decreaseBalance, addToCart, removeFromCart } = useCartStore(state => ({
    cart : state.cart,
    cartBalance : state.cartBalance,
    increaseBalance : state.increaseBalance,
    decreaseBalance : state.decreaseBalance,
    addToCart : state.addToCart,
    removeFromCart : state.removeFromCart
  }));

  useEffect(() => {
    cart.map(b => b.title === book.title && setBookBalance(b.quantity));
  }, []);

  const decreaseBookBalance = (book) => {
    if(bookBalance > 0) {
      setBookBalance(b => b - 1);
      decreaseBalance();
      removeFromCart(book)
    }
  }

  const increaseBookBalance = (book) => {
    setBookBalance(b => b + 1);
    increaseBalance();
    addToCart(book);
  }

  useEffect(() => {
    if(cartBalance === 0) setBookBalance(0);
  }, [cartBalance]);

  return (
    <article className="book-item">
      <h3 className="book-title">{ book.title }</h3>
      <p className="book-author">{'Av ' + book.author }</p>
      <p className="book-description">{ book.desc }</p>
      <div className="btn-controller">
        <button 
          className="book-btn"
          onClick={ () => decreaseBookBalance(book) }
        >-</button>
        <p className="book-balance">{ bookBalance }</p>
        <button 
          className="book-btn"
          onClick={ () => increaseBookBalance(book) }
        >+</button>
      </div>
    </article>
  )
}

export default BookItem;
