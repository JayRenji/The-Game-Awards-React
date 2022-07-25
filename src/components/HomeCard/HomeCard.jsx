const HomeCard = ({ game }) => {
	return (
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
	);
};
export default HomeCard;
