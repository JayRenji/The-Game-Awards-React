import axios from 'axios';
export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_OK = 'FETCH_GAMES_OK';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

const gamesUrl = 'http://localhost:3000/games';


export const getAllGames = (url) => dispatch => {
    dispatch ({ type: FETCH_GAMES });

    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            dispatch({
                type: FETCH_GAMES_OK,
                payload: res
            });
        })
        .catch((error) => {
            console.log('error', error.message);
            dispatch({
                type: FETCH_GAMES_ERROR,
                payload: error.message,
            });
        });
}

export const createGame = (game) => dispatch =>{
    
    axios.post(gamesUrl, game)
    .then(res => {
      if (res.status===201){
        return true
      }else{
        return false
      }
    })
}

export const editGame = (game) => dispatch =>{
    
    axios.put(`${gamesUrl}/${game.id}`, game)
    .then(res => {
      if (res.status===201){
        return true
      }else{
        return false
      }
    })
}

export const deleteGame = (gameID) => dispatch =>{
    console.log('delete');
    axios.delete(`${gamesUrl}/${gameID}`)
    .then(res => {
        console.log(res);

        if (res.status===201){
            return true
        }else{
            return false
        }
    })
}