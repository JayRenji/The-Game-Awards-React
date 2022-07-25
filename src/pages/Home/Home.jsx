import React from 'react';
import './Home.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGames } from '../../redux/games/games.actions';

function Home() {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const { games, info, error, isLoading } = useSelector((state) => state.games);

	const getGames = (url = 'http://localhost:3000/games') => {
		dispatch(getAllGames(url));
	};

	useEffect(() => {
		getGames();
	}, []);

	return (
		<section className='home-page'>
			<p className='welcome'>WELCOME TO THE 2022 EDITION OF</p>
			<p className='award'>THE GAME AWARDS!</p>
			<div className='search'>
				<input className='input' type='text' placeholder='Search Game or Genre' />
			</div>

			<div className='cards'>
				{games.map((game) => (
					<div className='card'>
						<img src={game.img} alt={game.title} />
						<div className='card__content'>
							<h4 className='genre'>{game.genre}</h4>
							<ul className='platform'>
								{game.platform.map((platform) => (
									<li>{platform}</li>
								))}
							</ul>
						</div>
						<div className='card__buttons'>
							<button className='button-49'>VOTE!</button>
							<button className='button-49'>EDIT</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Home;
