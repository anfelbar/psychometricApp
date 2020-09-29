import {connect} from 'react-redux';
import * as Auth from '../../redux/actions/Auth';

import LoginScreen from './LoginScreen';

const mapDispatchToProps = dispatch => {
  return {
    checkUser: (user, password) =>
      dispatch(Auth.Actions.checkUser(user, password)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
