import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks, updateCurrentPage } from '../../features/book/BookSlice'
import { SingleBook, Spinner, Pagination } from '../../components';
import Wrapper from "../../assets/wrappers/Home.js";

const Home = () => {
	const dispatch = useDispatch();
	const { books, isLoading, total_records, total_pages, current_page } = useSelector((store) => store.book);

	useEffect(() => {
		dispatch(getBooks(`?page=${current_page}`));
	}, [current_page])


	if (isLoading) {
		return <Spinner />
	}
	return <div className='section section-center'>
		<Wrapper>
			{
				books.map((book) => {
					return (
						<SingleBook key={uuidv4()} {...book} />
					)
				})
			}

		</Wrapper>
		<Pagination />
	</div>;
};

export default Home;
