import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { editGame } from "../../redux/games/games.actions";





function HomeCard  ({ game })  {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/management', {state:{game}});
	}

	const sumVote = (e) => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'You just vote for: '+ game.title,
			showConfirmButton: false,
			timer: 1500
		  })
		game.votes++;
		dispatch(editGame(game));
	}

	const defaultPic = (event) =>{
		event.target.src = 'https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg'
	}

	
	return (
		<div className='card' >
			<img src={game.img} alt={game.title} onError= {defaultPic}/>
			<div className='card__content'>
				<h4 className='genre'>{game.genre}</h4>
				<ul className='platform'>
					{game.platform.map((platform) => (
						<li>{platform}</li>
					))}
				</ul>
			</div>
			<div className='card__buttons'>
				<button className='button-49' onClick={sumVote}>VOTE!</button>
				<button className='button-49' onClick={onClick}>EDIT</button>
			</div>
		</div>
	);
};
export default HomeCard;
