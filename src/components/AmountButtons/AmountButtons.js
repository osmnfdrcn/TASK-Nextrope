import { FaPlus, FaMinus } from 'react-icons/fa'
import Wrapper from '../../assets/wrappers/AmountButtons'
import { useDispatch } from 'react-redux';
import { updateAmount } from '../../features/cart/CartSlice'


const AmountButtons = ({ increase, decrease, amount }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}



export default AmountButtons