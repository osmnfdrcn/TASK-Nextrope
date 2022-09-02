import Wrapper from "../../assets/wrappers/CartItems";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart, increaseItemAmountInCart, decreaseItemAmountInCart } from '../../features/cart/CartSlice'
import { Link } from "react-router-dom";
import AmountButtons from "../AmountButtons/AmountButtons";


const CartItems = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const total = cartItems.reduce((total, el) => total + el.amount * el.price, 0)

  if (cartItems.length < 1) {
    return (
      <div className="section section-center">
        <h3 style={{ textTransform: 'none' }}>
          No products in cart.
        </h3>
      </div>
    )
  }
  return <div className='section section-center'>
    <Wrapper>

      {
        cartItems.map((book) => {
          return (
            <div className="book" key={uuidv4()}>
              <div className="image-container">
                <img src={book.cover_url} alt={book.title} />
              </div>
              <div className="book-info">
                <span className="title">{book.title}</span>
                <span className="author">{book.author}</span>
                <span className="price">{book.currency}{' '}{book.price}</span>
                <span className="button" onClick={() => dispatch(removeFromCart(book.id))}>Remove From Cart</span>
                <div className="summary">
                  <AmountButtons
                    amount={book.amount}
                    increase={() => dispatch(increaseItemAmountInCart(book.id))}
                    decrease={() => dispatch(decreaseItemAmountInCart(book.id))}
                  />
                  <span className="total">{book.currency}{' '}{book.price * book.amount}</span>
                </div>
              </div>
            </div>

          )
        })
      }


      <div className="buttons">
        <div className="check-out-total">
          TOTAL : PLN {total}
        </div>
        <button className="btn" onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        <Link to="/order"><button className="btn">Checkout</button></Link>

      </div>


    </Wrapper>
  </div>;
}

export default CartItems