import { connect } from 'react-redux';
import Input from '../components/Input';

import { updateSlicesPerPerson } from '../actions';

const mapStateToProps = ({ slicesPerPerson }) => ({
  label: 'Slices Per Person',
  value: slicesPerPerson,
  min: 0,
  type: 'number',
});

const mapDispatchToProps = dispatch => {
  return {
    onChange(event) {
      const value = parseInt(event.target.value, 10);
      dispatch(updateSlicesPerPerson(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
