
import RequireAuth from '../../shared/functions/RequireAuth';
import './ButtonVote.scss';

function ButtonVote({ sumVote }) {
	return <button className='button-49' onClick={sumVote}>VOTE!</button>;
}
export default ButtonVote;
