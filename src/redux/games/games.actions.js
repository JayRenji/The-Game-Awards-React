export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_OK = 'FETCH_GAMES_OK';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

export const getAllGames = (url) => dispatch => {
    dispatch ({ type: FETCH_GAMES });

    const gamesUrl = 'http://localhost:3000/games';

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