import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/img/cart.png';
import './Header.scss';

const Header = () => {
	return (
		<header>
			<div className='headercontent'>
				<Link to='/'>
					<h1 className='headercontent__title neonText'>TGA2022</h1>
				</Link>

				<ul className='headercontent__menu'>
					<li>
						{' '}
						<Link to='/' className='neonText'>
							Home
						</Link>
					</li>
					<li>
						{' '}
						<Link to='/podium' className='neonText'>
							Podium
						</Link>
					</li>
					<li>
						{' '}
						<Link to='/management' className='neonText'>
							Management
						</Link>
					</li>
					<li>
						{' '}
						<Link to='/login' className='neonText'>
							Login
						</Link>{' '}
					</li>
					<li>
						{' '}
						<Link to='/checkout' className='neonText'>
							<img className='cart' src={cart} alt='cart' />
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
