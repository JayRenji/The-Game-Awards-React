import React from 'react';
import './PodiumGame.scss';

const PodiumGame = ({game}) => {
  return (
    <div className='podium__gotys--game'>
        <img src= { game.img }/>
        <div className='div__votes'>
            <p className='votes'>{ game.votes } votes</p>
        </div>
    </div>
  )
}

export default PodiumGame