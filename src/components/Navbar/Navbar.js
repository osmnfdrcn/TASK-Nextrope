import { Link } from 'react-router-dom'
import { CartButton, Logo } from '../'
import Wrapper from '../../assets/wrappers/Navbar'

const Navbar = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<Link to='/'>
					<Logo />
				</Link>
				<CartButton />
			</div>
		</Wrapper>
	)
}

export default Navbar