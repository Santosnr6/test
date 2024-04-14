import './cartPage.css';
import useCartStore from '../../store/cart-store';

function CartPage() {
  const { cart } = useCartStore(state => ({
    cart : state.cart
  }));

  console.log('Cart', cart);


  return (
    <div className="cart-page">
        {
          cart.map((book, index) => {
            return  <p
                      key={ index }
                    >
                      { book.title + " : " + book.quantity }
                    </p>
          })
        }
    </div>
  )
}

export default CartPage
