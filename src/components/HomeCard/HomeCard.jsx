import ButtonEdit from '../ButtonEdit/ButtonEdit';
import ButtonVote from '../ButtonVote/ButtonVote';

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
				<ButtonVote />
				<ButtonEdit />
			</div>
		</div>
	);
};
export default HomeCard;
