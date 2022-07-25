import React from 'react';
import './Home.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGames } from '../../redux/games/games.actions';
import HomeCard from '../../components/HomeCard/HomeCard';

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
					<HomeCard game={game} key={`${JSON.stringify(game)}`}/>
				))}
			</div>
		</section>
	);
}

export default Home;
