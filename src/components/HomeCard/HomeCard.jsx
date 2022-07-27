
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { editGame } from "../../redux/games/games.actions";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import ButtonVote from "../ButtonVote/ButtonVote";


function HomeCard({ game }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const editFunc = () => {
		navigate('/management', { state: { game } });
	};


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
		<div className='card'>
			<img src={game.img} alt={game.title} onError={defaultPic}/>
			<div className='card__content'>
				<h4 className='genre'>{game.genre}</h4>
				<ul className='platform'>
					{game.platform.map((platform) => (
						<li>{platform}</li>
					))}
				</ul>
			</div>
			<div className='card__buttons'>
				<ButtonVote sumVote={sumVote}/>
				<ButtonEdit editFunc={editFunc}/>
			</div>
		</div>
	);
}
export default HomeCard;
