import {connect} from 'react-redux';
import RegisterStudentScreen from './RegisterStudentScreen';
import * as Students from '../../redux/actions/Students';

const mapStateToProps = state => {
  return {
    user: state.auth.userEmail,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStudent: (
      names,
      lastNames,
      code,
      date,
      institute,
      country,
      city,
      user,
    ) =>
      dispatch(
        Students.Actions.createStudent(
          names,
          lastNames,
          code,
          date,
          institute,
          country,
          city,
          user,
        ),
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterStudentScreen);
