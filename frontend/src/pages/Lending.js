import React from 'react'
import { connect } from 'react-redux';
import {
  fetchLendingData,
} from '../actions';


class Lending extends React.Component {
  componentWillMount = () => {
    this.props.fetchLendingData();
  }
  render() {
    return (
      <div>
        Lending
      </div>
    );
  }
}

export default connect((state) => ({
  lendingData: state.lending.data,
}), (dispatch) => ({
  fetchLendingData: () => dispatch(fetchLendingData()),
}))(Lending);
