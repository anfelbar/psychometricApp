import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

// Importing sagas
import rootSaga from './sagas';

// Importing reducers
import {reducer as studentsReducer} from './reducers/Students';
import {reducer as gamesReducer} from './reducers/Games';
import {reducer as authReducer} from './reducers/Auth';

// Reactotron Stuff
import Reactotron from 'reactotron-react-native';

const rootReducer = combineReducers({
  auth: authReducer,
  games: gamesReducer,
  students: studentsReducer,
});

// a function which can create our store and auto-persist the data
export default () => {
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: Reactotron.createSagaMonitor(),
  });
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(
    rootReducer,
    compose(
      middleware,
      Reactotron.createEnhancer(),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
