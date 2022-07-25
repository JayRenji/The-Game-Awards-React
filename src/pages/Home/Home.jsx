import React, { useState } from 'react';
import './Home.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGames } from '../../redux/games/games.actions';
import HomeCard from '../../components/HomeCard/HomeCard';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
	const dispatch = useDispatch();
	const { games, info, error, isLoading } = useSelector((state) => state.games);
  const [ search, setSearch ] = useState("");

	const getGames = (url = 'http://localhost:3000/games') => {
		dispatch(getAllGames(url));
	};

	useEffect(() => {
		getGames();
	}, []);

  const searcher = (e) => {
    setSearch(e.target.value);
  }

  const results = !search ? games : games.filter((game)=> game.title.toLowerCase().includes(search.toLocaleLowerCase()));


	return (
		<section className='home-page'>
			<p className='welcome'>WELCOME TO THE 2022 EDITION OF</p>
			<p className='award'>THE GAME AWARDS!</p>
			
      {/* searchbar component  JAVI MIRAR*/}
      <SearchBar search={search} searcher = {searcher}/>
			

			{
      <div className='cards'>
				{results.map((game) => (
					<HomeCard game={game} />
				))}
			</div>
     
      }
		</section>
	);
}

export default Home;
