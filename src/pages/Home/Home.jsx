import React from 'react';
import './Home.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGames } from '../../redux/games/games.actions';


function Home() {

  const dispatch = useDispatch()
  const {games, info, error, isLoading} = useSelector(state => state.games);


  const getGames = (url = 'http://localhost:3000/games') => {
    dispatch(getAllGames(url));
  }

  useEffect(() => {
    getGames();
  }, []);


  return (
    <>
       {games.map((game) => 
          <div>{game.title}</div>
       )}
    </>
  )
}

export default Home