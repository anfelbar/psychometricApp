import {connect} from 'react-redux';
import * as Auth from '../../redux/actions/Auth';

import LandingScreen from './LandingScreen';

const mapDispatchToProps = dispatch => {
  return {
    startGuestSession: () => dispatch(Auth.Actions.startGuestSession()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LandingScreen);
