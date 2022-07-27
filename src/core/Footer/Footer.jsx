import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className='footercontent'>
				<div className='footercontent__social'>
					<i className='fa-brands fa-instagram'></i>
					<i className='fa-brands fa-twitter-square'></i>
					<i className='fa-brands fa-facebook-square'></i>
					<a href='https://github.com/sthifer/TheGameAwards-Angular'>
						<i className='fa-brands fa-github-square github'></i>
					</a>
				</div>
				<div className='footercontent__members'>
					<h3>Developers:</h3>
					<p>Javier Martínez</p>
					<p>Javier Esclapes AKA: Jay</p>
					<p>Álvaro Fuentenebro</p>
					<p>Manuela Gutierrez</p>
				</div>
				<div className='footercontent__copyright'>
					<p>© 2022 React Game Awards</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
