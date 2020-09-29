import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import * as Students from '../actions/Students';
import * as Auth from '../actions/Auth';
import {
  fetchAllOwnStudents,
  createStudent,
  addOwnStudentResult,
} from './StudentsSagas';
import {checkUser} from './AuthSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(Students.Types.FetchAllOwnStudents, fetchAllOwnStudents),
    takeLatest(Students.Types.CreateStudent, createStudent),
    takeLatest(Students.Types.AddOwnStudentResult, addOwnStudentResult),
    takeEvery(Auth.Types.CheckUser, checkUser),
  ]);
}
