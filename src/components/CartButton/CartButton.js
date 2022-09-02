import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/CartButton'

const CartButton = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const numberOfItems = cartItems.reduce((total, el) => total + el.amount, 0)
  return (
    <Wrapper >
      <Link to='/cart' className='cart-btn' >
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{numberOfItems}</span>
        </span>
      </Link>

    </Wrapper>
  )
}


export default CartButton