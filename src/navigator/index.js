import Navigator from './Navigator';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Navigator);
