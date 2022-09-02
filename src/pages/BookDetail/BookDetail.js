import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBook } from '../../features/book/BookSlice'
import { addToChart, updateAmount } from '../../features/cart/CartSlice'

import { AmountButtons, Spinner } from '../../components';
import { useEffect } from 'react';
import Wrapper from '../../assets/wrappers/BookDetail';

const BookDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { singlebook, isLoading, error } = useSelector((store) => store.book);
	const { amount } = useSelector((store) => store.cart);


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

	const handleButtonsubmit = () => {
		dispatch(addToChart({ ...singlebook, amount }))
		dispatch(updateAmount(1))
		navigate('/')
	}
	if (isLoading) {
		return <Spinner />
	}

	return <Wrapper className='section section-center'>
		<div className='image-container'>
			<img className='img' src={singlebook.cover_url} alt={singlebook.title} />
		</div>
		<div className='book-info'>
			<span className='title'>{'Title  : '}{singlebook.title}</span>
			<span className='author'>{'Author : '} {singlebook.author}</span>
			<span className='pages'>{'Pages : '} :{singlebook.pages}</span>
			<span className='price'>{'Price : '}{singlebook.currency}{' '}{singlebook.price} </span>
		</div>
		<div className='buttons'>
			<AmountButtons amount={amount} increase={() => dispatch(updateAmount(amount + 1))} decrease={() => dispatch(updateAmount(amount - 1))} />
			<button className='btn' onClick={handleButtonsubmit}>ADD TO CART</button>
		</div>
	</Wrapper>
};

export default BookDetail;
