import {call, put} from 'redux-saga/effects';
import * as Auth from '../actions/Auth';

// workers Saga
export function* checkUser(action) {
  try {
    // TODO Hacer el check con el action.password y action.userEmail en Firebase
    yield put(Auth.Actions.loginUser(action.userEmail));
  } catch (error) {
    yield put(Auth.Actions.loginFailure('Hubo un error iniciando sesión.'));
  }
}
