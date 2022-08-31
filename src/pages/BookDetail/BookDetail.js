import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBook } from '../../features/book/BookSlice'
import { Spinner } from '../../components';
import { useEffect } from 'react';

const BookDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { singlebook, isLoading, error } = useSelector((store) => store.book);

	useEffect(() => {
		dispatch(getSingleBook(id));
	}, [])

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				navigate('/');
			});
		}
		// eslint-disable-next-line
	}, [error]);
	if (isLoading) {
		return <Spinner />
	}

	return <div className='section section-center'>
		<div className='image-container'>
			<img className='img' src={singlebook.cover_url} alt={singlebook.title} />
		</div>
		<div className='image-info'>
			<p className='title'>{singlebook.title}</p>
			<p className='author'>{singlebook.author}</p>
			<p className='pages'>{singlebook.pages} pages</p>
			<p className='price'>{singlebook.price} {singlebook.currency}</p>
		</div>

	</div>;
};

export default BookDetail;
