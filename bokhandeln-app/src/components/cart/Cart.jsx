import './cart.css';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/cart-store';

function Cart() {

  const { cartBalance, clearCartBalance, clearCart } = useCartStore(state => ({
    cartBalance : state.cartBalance,
    clearCartBalance : state.clearCartBalance,
    clearCart : state.clearCart
  }));

  const clear = () => {
    clearCartBalance();
    clearCart();
  }

  return (
    <div className="cart">
      <p className="cart">
        <span className="cart-text">Cart:</span>
        <Link to="/cart"><span className="cart-amount">{ cartBalance }</span></Link>
      </p>
      <p className="clear-cart" onClick={ clear }>Clear cart</p>
    </div>
  )
}

export default Cart;
