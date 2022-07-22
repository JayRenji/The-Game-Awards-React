import React from 'react';
import './Podium.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from '../../redux/games/games.actions';

function Podium() {
  const {games} = useSelector(state => state.games);
  const dispatch = useDispatch();

  const getGames = (url = 'http://localhost:3000/games') => {
    dispatch(getAllGames(url));
  }

  useEffect(() => {
    getGames();
  }, []);


  const print = () => {
    const sortedGames = games.sort(compare).splice(0,3);
    // return sortedGames;
    return (
      <>
        {sortedGames.map((game) => 
          <p>{game.title}</p>
        )}
      </>
    )
  }

  const compare = (a, b) => {
    if(a.votes < b.votes){
      return 1;
    }
    if(a.votes > b.votes){
        return -1;
    }
    return 0;
  }


  return (
    <>{print()}</>
  )
}

export default Podium