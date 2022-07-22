import React from 'react';
import './Home.scss';

function Home() {
	return (
		<div className='home-page'>
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
		</div>
	);
}

export default Home;
