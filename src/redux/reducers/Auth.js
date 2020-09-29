import * as Auth from '../actions/Auth';

const INITIAL_STATE = {
  isLoggedIn: false,
  userEmail: null,
  isGuest: null,
  isFetching: false,
  errorMessage: null,
};

// Handlers
const checkUser = (state, action) => ({
  ...INITIAL_STATE,
  isFetching: true,
});

const loginFailure = (state, action) => ({
  ...state,
  isFetching: false,
  errorMessage: action.error,
});

const loginUser = (state, {userEmail}) => {
  return {...state, userEmail, isLoggedIn: true, isFetching: false};
};

const logoutUser = (state, action) => {
  return {...state, user: null, isLoggedIn: false};
};

const startGuestSession = (state, action) => {
  return {...state, userEmail: 'Guest', isLoggedIn: true, isGuest: true};
};

// Binding actions to handlers
const reducerMap = {
  [Auth.Types.CheckUser]: checkUser,
  [Auth.Types.LoginFailure]: loginFailure,
  [Auth.Types.LoginUser]: loginUser,
  [Auth.Types.LogoutUser]: logoutUser,
  [Auth.Types.StartGuestSession]: startGuestSession,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type];
  return typeof handler === 'function' ? handler(state, action) : state;
};
