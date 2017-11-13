import { connect } from 'react-redux';
import Reset from '../components/Reset';

import { reset } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(reset());
    },
  };
};

export default connect(null, mapDispatchToProps)(Reset);
