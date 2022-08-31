import Wrapper from '../../assets/wrappers/SingleBook'
import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SingleBook = ({ id, cover_url, title, author, price, currency }) => {
	return (
		<Link to={`/book/${id}`} className='btn'>
			<Wrapper>
				<div className='book-image'>
					<img className="img" src={cover_url} alt={title} />
				</div>
				<footer>
					<h5>{title}</h5>
					<h6>{author}</h6>
				</footer>
				<div className='price'>
					<h4>{price}{currency}</h4>
				</div>
				<div className='icon'>
					<BsCartPlus />
				</div>
			</Wrapper>
		</Link>
	)
};

export default SingleBook;

