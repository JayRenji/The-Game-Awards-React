import React from 'react';
import './Checkout.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGames } from '../../redux/games/games.actions';

function Checkout() {
	const { games } = useSelector((state) => state.games);
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getGames = (url = 'http://localhost:3000/games') => {
		dispatch(getAllGames(url));
	};

	useEffect(() => {
		getGames();
	}, []);

	return (
		<section className='checkout'>
			<p className='cart'>Your cart</p>
			<div className='summary'></div>
		</section>
	);
}

export default Checkout;
