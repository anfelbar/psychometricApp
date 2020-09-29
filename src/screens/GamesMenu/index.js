import {connect} from 'react-redux';
import * as Games from '../../redux/actions/Games';
import * as Students from '../../redux/actions/Students';

import GamesMenuScreen from './GamesMenuScreen';

const mapDispatchToProps = dispatch => {
  return {
    setSelectedGame: setSelectedGameId =>
      dispatch(Games.Actions.setSelectedGame(setSelectedGameId)),
    setSelectedStudent: selectedStudent =>
      dispatch(Students.Actions.setSelectedStudent(selectedStudent)),
  };
};

const mapStateToProps = state => {
  return {
    gamesList: state.games.gamesList,
    selectedGameId: state.games.selectedGameId,
    isGuest: state.auth.isGuest,
    studentsList: state.students.studentsList,
    selectedStudent: state.students.selectedStudent,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesMenuScreen);
