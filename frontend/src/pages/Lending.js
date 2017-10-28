import React from 'react'
import { connect } from 'react-redux'; import {
  fetchLendingData,
  updateLendingData,
} from '../actions';
import isEmpty from 'lodash/isEmpty';


class Lending extends React.Component {
  componentWillMount = () => {
    this.props.fetchLendingData(this.props.startIndex);
  }

  render() {
    const { data } = this.props;
    if (isEmpty(data)) return null;
    return (
      <div>
        Lending Data
        <table>
          <tr>
            <td>id</td>
            <td>amount</td>
            <td>period</td>
            <td>rate</td>
            <td>action</td>
          </tr>
        {data.map((datum) => (
          <tr key={datum.id}>
            <td>{datum.id}</td>
            <td>{datum.amount}</td>
            <td>{datum.period}</td>
            <td>{datum.rate}</td>
            <td>
              <button>
                Delete
              </button>
              <button
                onClick={() => {
                  this.props.updateLendingData(datum.id, {
                    amount: 999,
                    ratePerDay: 999,
                    period: 999,
                  })
                }}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
        </table>
        <button
          onClick={() => {
            this.props.fetchLendingData(this.props.startIndex);
          }}
        >
          더 보기
        </button>
      </div>
    );
  }
}

export default connect((state) => ({
  data: state.lending.data,
  startIndex: state.lending.startIndex,
}), (dispatch) => ({
  fetchLendingData: (startIndex) => dispatch(fetchLendingData(startIndex)),
  updateLendingData: (id, body) => dispatch(updateLendingData(id, body)),
}))(Lending);
