import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = ({ numberOfPizzasNeeded }) => {
  return { amount: numberOfPizzasNeeded };
};

export default connect(mapStateToProps, null)(Result);
