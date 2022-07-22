import * as actions from './games.actions';

const INITIAL_STATE = {
    games: [],
    info: {},
    isLoading: false,
    error: null,
}


const gamesReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case actions.FETCH_GAMES: {
            return { ...state, isLoading: true};
        }

        case actions.FETCH_GAMES_OK: {
            return {
                ...state,
                info: payload.info,
                isLoading: false,
                games: payload,
            }
        }

        case actions.FETCH_GAMES_ERROR: {
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        }

        default: {
            return state;
        }
    }
}

export default gamesReducer;