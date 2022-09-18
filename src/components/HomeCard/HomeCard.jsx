import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { editGame } from '../../redux/games/games.actions';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import ButtonVote from '../ButtonVote/ButtonVote';
import { RequireAuth } from '../../shared/functions/RequireAuth';

function HomeCard({ game }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const editFunc = () => {
		navigate('/management', { state: { game } });
	};

	const sumVote = (e) => {
		if (!localStorage.getItem('token')) {
			Swal.fire({
				position: 'center',
				icon: 'warning',
				title: 'Please, login to vote',
				showConfirmButton: false,
				timer: 1500,
			});
			return;
		}

		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'You just vote for: ' + game.title,
			showConfirmButton: false,

			timer: 1500,
		});

		game.votes++;
		dispatch(editGame(game));
	};

	const defaultPic = (event) => {
		event.target.src = 'https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg';
	};

	return (
		<div className='card'>
			<a href={game.trailer} target='_blank'>
				<img src={game.img} alt={game.title} onError={defaultPic} />
			</a>

			<div className='card__content'>
				<h4 className='genre'>{game.genre}</h4>
				<ul className='platform'>
					{game.platform.map((platform) => (
						<li key={`${JSON.stringify(platform)}`}>{platform}</li>
					))}
				</ul>
			</div>
			<div className='card__buttons'>
				<ButtonVote sumVote={sumVote} />
				<ButtonEdit editFunc={editFunc} />
			</div>
		</div>
	);
}
export default HomeCard;
