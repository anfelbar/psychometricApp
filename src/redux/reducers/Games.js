import * as Games from '../actions/Games';

import gamesData from '../data/games.json';

const INITIAL_STATE = {
  gamesList: gamesData,
  selectedGameId: null,
};

// Handlers
const setSelectedGame = (state, {selectedGameId}) => {
  return {...state, selectedGameId};
};

// Binding actions to handlers
const reducerMap = {
  [Games.Types.SetSelectedGame]: setSelectedGame,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type];
  return typeof handler === 'function' ? handler(state, action) : state;
};
