import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Wrapper from '../../assets/wrappers/Pagination'
import { updateCurrentPage } from '../../features/book/BookSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { current_page, total_pages } = useSelector((store) => store.book);
  return (
    <Wrapper>
      <button
        disabled={current_page === 1}
        onClick={() => {
          dispatch(updateCurrentPage(current_page - 1))
        }}>
        <AiOutlineArrowLeft />
      </button>
      <span>{current_page} of {total_pages}</span>
      <button
        disabled={current_page === total_pages}
        onClick={() => {
          dispatch(updateCurrentPage(current_page + 1))
        }}>
        <AiOutlineArrowRight />
      </button>
    </Wrapper>
  )
}

export default Pagination