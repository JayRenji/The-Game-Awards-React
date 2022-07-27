import React from 'react';
import './Podium.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from '../../redux/games/games.actions';
import crown from '../../assets/img/crown.png';
import PodiumGame from '../../components/PodiumGame/PodiumGame';
import party from 'party-js';



function Podium() {
  const {games} = useSelector(state => state.games);
  const dispatch = useDispatch();

  const getGames = (url = 'http://localhost:3000/games') => {
    dispatch(getAllGames(url));
  }

  useEffect(() => {
    getGames();
    
  }, []);

  const compare = (a, b) => {
    if(a.votes < b.votes){
      return 1;
    }
    if(a.votes > b.votes){
        return -1;
    }
    return 0;
  }

  //sort all games and get only the first 3
  const sortedGames = games.sort(compare).splice(0,3);
  //change positions between first and second game to make the best game to render in the middle
  [sortedGames[0], sortedGames[1]] = [sortedGames[1], sortedGames[0]];

  return (
    <section className='podium'>
    {setTimeout(() => {
      party.confetti(document.querySelector('.podium'));
    }, 600)}
      <h2>Top 3 GOTY:</h2>
      <img className='crown' src={crown}/>
      <div className='podium__gotys'>
        {sortedGames.map((game) =>
          <PodiumGame game={game}/>
        )}
      </div>
    </section>
  )
}

export default Podium