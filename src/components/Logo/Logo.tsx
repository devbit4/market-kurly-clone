import LogoImg from '@assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<h1>
			<Link to='/'>
				<img src={LogoImg} alt='Kurly' />
			</Link>
		</h1>
	);
};

export default Logo;
