import { connect } from 'react-redux';
import Input from '../components/Input';

import { updateNumberOfPeople } from '../actions';

const mapStateToProps = ({ numberOfPeople }) => ({
  label: 'Number of People',
  value: numberOfPeople,
  type: 'number',
  min: 0,
});

const mapDispatchToProps = dispatch => {
  return {
    onChange(event) {
      const value = parseInt(event.target.value, 10);
      dispatch(updateNumberOfPeople(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
