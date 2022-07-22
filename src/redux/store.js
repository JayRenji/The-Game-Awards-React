import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


import gamesReducer from './games/games.reducer';


const rootReducer = combineReducers({
    games: gamesReducer,
});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;