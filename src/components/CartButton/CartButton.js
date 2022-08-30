import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/CartButton'

const CartButton = () => {
  const { numberOfBooksInCart } = useSelector((store) => store.cart);
  return (
    <Wrapper >
      <Link to='/cart' className='cart-btn' >
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{numberOfBooksInCart}</span>
        </span>
      </Link>

    </Wrapper>
  )
}


export default CartButton