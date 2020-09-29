import * as Students from '../actions/Students';

const INITIAL_STATE = {
  studentsList: null,
  selectedStudent: null,
  errorMessage: null,
  isFetching: false,
  studentsLoaded: false,
};

// Handlers
const setSelectedStudent = (state, {selectedStudent}) => {
  return {...state, selectedStudent};
};

const fetchAllOwnStudents = (state, action) => ({
  ...INITIAL_STATE,
  isFetching: true,
});

const createStudent = (state, action) => ({
  ...state,
  isFetching: true,
});

const addOwnStudentResult = (state, action) => ({
  ...state,
  isFetching: true,
});

const addCreatedStudent = (state, {createdStudent}) => {
  return {
    ...state,
    isFetching: false,
    studentsList: [...state.studentsList, createdStudent],
  };
};

const setAllOwnStudents = (state, {studentsList}) => {
  return {...state, isFetching: false, studentsLoaded: true, studentsList};
};

const requestFailure = (state, action) => ({
  ...state,
  isFetching: false,
  errorMessage: action.error,
});

// Binding actions to handlers
const reducerMap = {
  [Students.Types.SetSelectedStudent]: setSelectedStudent,
  [Students.Types.FetchAllOwnStudents]: fetchAllOwnStudents,
  [Students.Types.CreateStudent]: createStudent,
  [Students.Types.SetAllOwnStudents]: setAllOwnStudents,
  [Students.Types.AddOwnStudentResult]: addOwnStudentResult,
  [Students.Types.AddCreatedStudent]: addCreatedStudent,
  [Students.Types.RequestFailure]: requestFailure,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type];
  return typeof handler === 'function' ? handler(state, action) : state;
};
