import {connect} from 'react-redux';

import {UserIndicator} from './UserIndicator';

const mapStateToProps = state => {
  return {
    userEmail: state.auth.userEmail,
  };
};

export default connect(mapStateToProps)(UserIndicator);
