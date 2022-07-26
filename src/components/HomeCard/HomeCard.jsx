import { useNavigate } from 'react-router-dom'



function HomeCard  ({ game })  {
	
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/management', {state:{game}});
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
				<button className='button-49'>VOTE!</button>
				<button className='button-49' onClick={onClick}>EDIT</button>
			</div>
		</div>
	);
};
export default HomeCard;
