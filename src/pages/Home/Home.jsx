import React from 'react';
import './Home.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGames } from '../../redux/games/games.actions';

function Home() {
	return (
		<section>
			<p class='welcome'>WELCOME TO THE 2022 EDITION OF</p>
			<p class='award'>THE GAME AWARDS!</p>

			<div class='search'>
				<input class='input' type='text' placeholder='Search Game or Genre' />
			</div>
			<div class='cards'>
				<img src='{{ game.img }}' alt='{{ game.title }}' />
				<div class='card__content'>
					<h4 class='genre'> game.genre </h4>
					<ul class='platform'>
						<li> platform </li>
					</ul>
				</div>
				<div class='card__buttons'>
					<button>VOTE!</button>
					<button>EDIT</button>
				</div>
			</div>
		</section>
	);

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
		<>
			{games.map((game) => (
				<div>{game.title}</div>
			))}
		</>
	);
}

export default Home;
