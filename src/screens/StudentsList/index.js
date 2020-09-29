import {connect} from 'react-redux';

import StudentsListScreen from './StudentsListScreen';

const mapStateToProps = state => {
  return {
    studentsList: state.students.studentsList,
  };
};

export default connect(mapStateToProps)(StudentsListScreen);
